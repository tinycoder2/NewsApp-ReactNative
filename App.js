import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Context from './API/Context';
import InshortTabs from './components/InshortTabs';
import Search3 from './components/Search3';

function App() {
  return (
    <View style={{ ...styles.container, backgroundColor: "#2d8659" }}>
      <InshortTabs />
      {/* <Search3 /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default () => {
  return (<Context>
    <App />
  </Context>)
};