import React from 'react';
import { Button } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

// import myPackage from "react-native-package"
const App = () => {




  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, React Native!</Text>
      <Button title="Click Me" onPress={() => {
        // console.log(myPackage.showToast);
        // myPackage.showToast('Hello from Kotlin!');
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default App;