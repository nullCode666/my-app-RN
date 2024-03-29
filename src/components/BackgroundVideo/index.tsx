import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';

//获取设备的宽度和高度
var {
    height: deviceHeight,
    width: deviceWidth
} = Dimensions.get('window');

export default () => {

    return (
        <Image source={{ uri: "https://images2017.cnblogs.com/blog/804440/201712/804440-20171201150548758-773795005.png" }} style={styles.backgroundImage} />
    )
}


const styles = StyleSheet.create({
    backgroundImage: {
        position: "absolute",
        alignItems: 'center',
        justifyContent: 'center',
        width: deviceWidth,
        height: deviceHeight,
    }
});