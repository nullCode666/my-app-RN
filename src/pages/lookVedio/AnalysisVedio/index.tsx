import { useEffect, useRef, useState } from "react"
import { Button, Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

import { WebView } from 'react-native-webview';
// import WebView from 'react-native-android-fullscreen-webview-video';

//获取设备的宽度和高度
var {
    height: deviceHeight,
    width: deviceWidth
} = Dimensions.get('window');

export default (props: any) => {

    const webRef = useRef<any>(null)
    const [jiexiUrl, setJiexiUrl] = useState("https://jx.jsonplayer.com/player/?url=");

    useEffect(() => {
        if (props.route.params.jiexiUrl) {
            setJiexiUrl(props.route.params.jiexiUrl)
        }
    }, [])

    // const handleNavigationStateChange = (navState: any) => {
    //     console.log(!navState.title.startsWith('video') , navState.url.startsWith('https'));
    //     if (!navState.title.startsWith('video') && navState.url.startsWith('https')) {
    //         webRef.current.injectJavaScript(`
    //         var video = document.querySelector('video');
    //         video.style.width=${deviceWidth};
    //         video.style.height=${deviceHeight};
    //         video.webkitEnterFullScreen();
    //       `);
    //     }
    //   };

    return (
        <View style={styles.container}>
            <WebView bounces={false}
                allowFileAccess={true}
                ref={webRef}
                source={{ uri: jiexiUrl + props.route.params.url }}
                style={styles.webview}
                allowsFullscreenVideo={true}
                // onNavigationStateChange={handleNavigationStateChange}
            >
            </WebView>
        </View>
    )

}

//样式定义
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    webview: {
      flex: 1,
    },
  });