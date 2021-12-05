import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Items from './Components/Items';

export default function App() {
  const [item, setItem] = useState();
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    console.log(item);
    setItems([...items, item]);
    setItem(null);
  }

  return (
    <View style={styles.container}>
      <View style={styles.teskwrapper}>
        <Text style={styles.projecttitle}>SUB-GOYAL-ASSIGNMENT</Text>
       <KeyboardAvoidingView
          behavior={Platform.OS == 'ios'? "padding": "height"}
          style={styles.writeItemWrapper}
       >
          <TextInput style={styles.input} placeholder="write a item" value={item} onChangeText={text => setItem(text) }/>
          <TouchableOpacity onPress={()=> handleAddItem()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
       </KeyboardAvoidingView> 
      <View style={styles.items}>
        {
          items.map((item)=> {
           return <Items
            text={item} />
          })
        }
          
      
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
    marginTop:20,
    marginBottom:20,
    textAlign:'center'
},
  items:{
     marginTop:30
  },
  writeItemWrapper:{
    // position:'absolute',
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:"#fff",
    borderRadius:10,
    borderColor:"#C0C0C0",
    borderWidth:1,
    width:290,
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:1,
    borderRadius:10
  },
  addText:{
    fontSize:30,
    
  }
});
