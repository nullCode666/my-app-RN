import React from 'react';
import { View, Button, NativeModules, Text } from 'react-native';
import { Buffer } from 'buffer';

const { BleNativeModule } = NativeModules;

const App = () => {
  const handleCallNativeMethod = () => {
    console.log(NativeModules)
    console.log('Calling native method...');
    console.info(BleNativeModule)
    const result = BleNativeModule.doSomething();
    console.log('Result from native method:', result);
  };

 const decodeIFrame = (byte) => {
    // // 提取压力值（1bit）
    // let pressure = byte & 1;

    // // 提取挡位值（2bit）
    // let gear = (byte >>> 1) & 0b11;

    // // 提取位置值（5bit）
    // let position = byte >>> 3 & 0b11111;

    // 提取位置值（5bit）
    let position = byte & 0b11111;

    // 提取挡位值（2bit）
    let gear = (byte >>> 5) & 0b11;

    // 提取压力值（1bit）
    let pressure = (byte >>> 7) & 1;

    return {pressure, gear, position};
};

  const decodeIFrameArray = (bytes) => {
    const frameArray = [];
    for (const byte of bytes) {
        let frame = decodeIFrame(byte);
        frameArray.push(frame);
    }
    return frameArray;
};

const unpackageCleanLog = (bytes) => {
  let DATA = bytes.slice(1, bytes.length - 1);
  const SIID = DATA[0];
  const PIID = DATA[1];
  const TYPE = DATA[2];
  const PACKAGE_ID = DATA[3];
  if (PACKAGE_ID == 0) return {PACKAGE_ID};
  if (TYPE == 128 && SIID == 6 && PIID == 1) {
      if (PACKAGE_ID == 1) {
          /**
           * |   4BYTES    |   4BYTES  |   4BYTES   |           52BYTE           |
           * |  TimeStamp  |  WORKTIME |  OVPTIMES  |          EXTRADATA         |
           */
          const rawData = DATA.slice(4);
          // 记录时间
          const timestamp = rawData.slice(0, 4).readUInt32LE();
          // 刷牙时长
          const workTime = rawData.slice(4, 6).readUInt16LE();
          // 用户设定的刷牙时长
          const workTimeSetting = rawData.slice(6, 8).readUInt16LE();
          // 过压时长
          const ovpTimes = rawData.slice(8, 12).readUInt32LE();
          const extendsData = rawData.slice(12);
          // const totalTime = rawData.slice(12,13).readUint8();
          // const extendsData = rawData.slice(13);

          return {
              PACKAGE_ID,
              timestamp,
              workTime,
              ovpTimes,
              workTimeSetting,
              extendsData,
              rawData,
          };
      } else {
          /**
           * |           64BYTE           |
           * |          EXTRADATA         |
           */
          const rawData = DATA.slice(4);
          return {
              PACKAGE_ID,
              rawData,
          };
      }
  }
};

  const analysis=()=>{

    const hex="c006018001e379ea663c003c0000000000212121212121212121212121212121222222222222222222222222222222232323232323232323232323232323242424242424242424242424242424c0"
    // 将hex转成Buffer
    const byteData = Buffer.from(hex, 'hex');

    console.log(byteData)

    const result=unpackageCleanLog(byteData)

    console.log(result)

  }

  return (
    <View style={{ flex: 1, justifyContent: "space-around", alignItems: 'center' }}>
      <Button title="Call doSomething" onPress={handleCallNativeMethod} />
      <Button title="解析" onPress={analysis} />
    </View>
  );
};

export default App;