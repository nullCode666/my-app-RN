import { useEffect } from "react";
import { Text,View,Button } from "react-native";


export default (props: any)=>{
  useEffect(() => {
      console.log(111);
  }, [])

  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>欢迎进入</Text>
          <Button
              onPress={() => { props.navigation.navigate({name:'Vedio',options: { headerShown: false }}) }}
              title="去看电视"/>
      </View>
  );
}