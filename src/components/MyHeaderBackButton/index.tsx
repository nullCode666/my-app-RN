import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

export default () => {
    const navigation = useNavigation();

    return (<TouchableOpacity
        style={styles.button}
        onPress={() => navigation.dispatch(StackActions.pop())}>
        <Icon name="arrow-back-outline" size={25} color="#fff" />
    </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 5,
    },
});
