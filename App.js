import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListUsers from "./src/components/ListUsers";
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigation/navigator';

export default function App() {
  return (
      <>
        <NavigationContainer>
          <Navigator/>
        </NavigationContainer>
        {/*<View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <ListUsers/>
          <StatusBar style="auto" />
        </View>*/}
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
