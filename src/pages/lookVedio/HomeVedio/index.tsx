import { useEffect, useRef, useState } from "react"
import { Button, Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

import { WebView } from 'react-native-webview';

//获取设备的宽度和高度
var {
    height: deviceHeight,
    width: deviceWidth
} = Dimensions.get('window');

export default (props: any) => {

    const webRef = useRef(null)

    const [nowUrl,setNowUrl]=useState(null);

    useEffect(() => {
        console.log(props.route);

    }, [])

    const goAnalysisVedio=()=>{
        console.log(webRef.current);
        
        props.navigation.navigate('analysisVedio', { url: nowUrl,jiexiUrl:props.route.params?.jiexiUrl})
    }

    return (
        <View style={styles.container}>
            <Button
                title="解析"
                onPress={() => goAnalysisVedio()}></Button>
            <WebView bounces={false}
                ref={webRef}
                source={{ uri: props.route.params.url }}
                style={{ width: deviceWidth, height: deviceHeight }}
                onNavigationStateChange={(res)=>{console.log(res.url,111);
                    setNowUrl(res?.url)
                }}
                >
            </WebView>
        </View>
    )

}

//样式定义
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    }
});