import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Items from './Components/Items';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.teskwrapper}>
        <Text style={styles.projecttitle}>Sub-Goyal-Job-Task</Text>
      <View style={styles.items}>
          <Items text={'item-1'} />
          <Items text={'item-2'} />
          <Items text={'item-3'} />
       </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  teskwrapper:{
    paddingTop:60,
    paddingHorizontal:20
  },
  projecttitle:{
    fontSize:20,
    fontWeight:'bold',
},
  items:{
     marginTop:30
  }

});
