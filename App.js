import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Items from './Components/Items';

export default function App() {
  const [item, setItem] = useState();
  const [groceryItem, setGroceryItem] = useState([]);
  const [search, setSearch] = useState([])
  const handleAddItem = () => {
    console.log(item);
    setGroceryItem([...groceryItem, item]);
    setItem(null);
  }

  return (      
    <View style={styles.container}>
      <View style={styles.teskwrapper}>
        <Text style={styles.projecttitle}>SUB-GOYAL-ASSIGNMENT</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios'? "padding": "height"}
       >
          <TextInput style={styles.searchInput} placeholder="search grocery item" value={search} onChangeText={(text) => setSearch(text)}/>
       </KeyboardAvoidingView> 
      <View style={styles.items}>
        {
          groceryItem.filter((item) => {
            if(search == ""){
               return item
            }else if(item.toLowerCase().includes(search.toLowerCase())){
               return item
            }
          }).map((item)=> {
           return <Items
           key={item}
            text={item} />
          })
        }
       </View>
      </View>
      <KeyboardAvoidingView
          behavior={Platform.OS == 'ios'? "padding": "height"}
          style={styles.writeItemWrapper}
       >
          <TextInput style={styles.input} placeholder="add a grocery item" value={item} onChangeText={text => setItem(text) }/>
          <TouchableOpacity onPress={()=> handleAddItem()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
       </KeyboardAvoidingView> 
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
    position:'absolute',
    bottom:30,
    marginHorizontal:20,
    width:'100%',
    flexDirection:'row',
    alignItems:'center'
  },
  searchInput:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:"#fff",
    borderRadius:10,
    borderColor:"#C0C0C0",
    borderWidth:1,
    width:"100%",
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






//// you tube /////////////////////////////////////////////////////////////


// import React, {useState} from 'react';
// import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
// import Items from './Components/Items';

// export default function App() {
//   const [task, setTask] = useState();
//   const [taskItems, setTaskItems] = useState([]);

//   const handleAddTask = () => {
//     Keyboard.dismiss();
//     setTaskItems([...taskItems, task])
//     setTask(null);
//   }

//   const completeTask = (index) => {
//     let itemsCopy = [...taskItems];
//     itemsCopy.splice(index, 1);
//     setTaskItems(itemsCopy)
//   }

//   return (
//     <View style={styles.container}>
//       {/* Added this scroll view to enable scrolling when list gets longer than the page */}
//       <ScrollView
//         contentContainerStyle={{
//           flexGrow: 1
//         }}
//         keyboardShouldPersistTaps='handled'
//       >

//       {/* Today's Tasks */}
//       <View style={styles.tasksWrapper}>
//         <Text style={styles.sectionTitle}>Today's tasks</Text>
//         <View style={styles.items}>
//           {/* This is where the tasks will go! */}
//           {
//             taskItems.map((item, index) => {
//               return (
//                 <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
//                   <Items text={item} /> 
//                 </TouchableOpacity>
//               )
//             })
//           }
//         </View>
//       </View>
        
//       </ScrollView>

//       {/* Write a task */}
//       {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
//       <KeyboardAvoidingView 
//         behavior={Platform.OS === "ios" ? "padding" : "height"}
//         style={styles.writeTaskWrapper}
//       >
//         <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
//         <TouchableOpacity onPress={() => handleAddTask()}>
//           <View style={styles.addWrapper}>
//             <Text style={styles.addText}>+</Text>
//           </View>
//         </TouchableOpacity>
//       </KeyboardAvoidingView>
      
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#E8EAED',
//   },
//   tasksWrapper: {
//     paddingTop: 80,
//     paddingHorizontal: 20,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: 'bold'
//   },
//   items: {
//     marginTop: 30,
//   },
//   writeTaskWrapper: {
//     position: 'absolute',
//     bottom: 60,
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center'
//   },
//   input: {
//     paddingVertical: 15,
//     paddingHorizontal: 15,
//     backgroundColor: '#FFF',
//     borderRadius: 60,
//     borderColor: '#C0C0C0',
//     borderWidth: 1,
//     width: 250,
//   },
//   addWrapper: {
//     width: 60,
//     height: 60,
//     backgroundColor: '#FFF',
//     borderRadius: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderColor: '#C0C0C0',
//     borderWidth: 1,
//   },
//   addText: {},
// });