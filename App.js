import React from 'react';
import { View, Button, NativeModules, Text } from 'react-native';

const { BleNativeModule } = NativeModules;

const App = () => {
  const handleCallNativeMethod = () => {
    console.log(NativeModules)
    console.log('Calling native method...');
    console.info(BleNativeModule)
    const result = BleNativeModule.doSomething();
    console.log('Result from native method:', result);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Call doSomething" onPress={handleCallNativeMethod} />
      {/* 你可以根据需要在界面上显示结果 */}
    </View>
  );
};

export default App;