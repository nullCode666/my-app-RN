import BackgroundVideo from "@/components/BackgroundVideo";
import { useEffect } from "react";
import { Text,View,Button } from "react-native";


export default (props: any)=>{
  useEffect(() => {
      console.log(111);
  }, [])

  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: "space-around" }}>
        <BackgroundVideo/>
          <Button onPress={() => { props.navigation.navigate('homeVedio',{url:"https://m.v.qq.com/",title:"腾讯视频"}) }} title="腾讯视频"/>
          <Button onPress={() => { props.navigation.navigate('homeVedio',{url:"https://www.iqiyi.com/",title:"爱奇艺"}) }} title="爱奇艺"/>
          <Button onPress={() => { props.navigation.navigate('homeVedio',{url:"https://www.youku.com/",title:"优酷",jiexiUrl:"https://jx.m3u8.tv/jiexi/?url="}) }} title="优酷"/>
      </View>
  );
}