import React,{Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';
import { useState,useEffect } from 'react';
import TodoList from './TodoList';
import { Firestore, addDoc,updateDoc, collection, doc, getDocs, docs,query,where } from 'firebase/firestore'
import { db } from './firebaseConfig'
import Sub from './Sub'

export default function App() {
  const [todoList,setTodoList] = useState([]);
  const [check,setCheck]= useState(false)
  var array= [];
  const [inputList,setinputList]= useState('')
  const [textValue, setTextValue] = useState('');
  const [showModal,setShowModal] = useState(false)
  const [visible, setVisible] = useState(false);
  const [timer, setTimer] = useState("00:00:00");
  //시간확인
  const currentTimer = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    setTimer(`${hours}:${minutes}:${seconds}`)
  }
  const startTimer = () => {
    setInterval(currentTimer, 1000)
  }

  startTimer()
  //모달 관련
  const openModal= () =>{
    setShowModal((prev) =>!prev)
    console.log(1)
}
  const add_List =(list)=>{
    const newList = list;
    setTodoList([...todoList,newList])
  }
  const test_List =(list)=>{
    array.push(list)
    console.log(list)
  }
  //리스트 지우기
  const del_List = (position) =>{
    const newArray = todoList.filter((list,index)=>{
      return position !=index;
    })
    setTodoList(newArray)
  }
  //텍스트 입력받기
  const onChange = e => {
    setinputList(e);
  };



  return (
    
    <View style={styles.container}>
     
      <ScrollView keyboardShouldPersistTaps='always'
                  style={styles.content}>
        <View style={styles.header}>
        <Text style={styles.timeText}>현재시간 : {timer}</Text>
          <Text style={styles.headerText}>
            todoList
          </Text>
          <View style={styles.input_Container}>
          <TextInput
            style={styles.input_text}
            
            placeholder="Add an item!"
            placeholderTextColor={'#999'}
            autoCorrect={false}
            onChangeText = {onChange}
       />
      </View>

      {/*ADD 하면서 배열에 추가함과 동시에 디비에 데이터를 저장한다. */}
      <TouchableOpacity onPress={()=>{add_List(inputList)}} style={styles.button}>
      <Text>ADD</Text>
      </TouchableOpacity>
    {/*켈린더 버튼을 누르면 모달안에 있는 캘린더가 출력된다. */}
      <TouchableOpacity 
            visible={visible}
            style={styles.button}
            onPress={()=> {openModal()}}>
      <Text>Calendar</Text>
      <Sub showModal={showModal} setShowModal={setShowModal}/>
      </TouchableOpacity>
      
      </View>
      <Text></Text>
      {/*TouchableOpacity 감싸 배열에 있는 값들을 map을 사용해서 데이터를 하나씩 가져와서 출력한다.
       클릭시del_List를 실행해 누른 데이터는 삭제되게 한다. */}
    <View style={styles.input_Container}>
     {todoList.map((item,idx) =>(
    <TouchableOpacity
    key = {idx}
    onPress={()=>del_List(idx)}
    >
        
        <Text style={styles.todoBox}>{item}</Text>
    </TouchableOpacity>
    ))}
    </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  container: {
    flex: 1,
    paddingTop : 60
  },
  content :{
    flex :1,
    paddingTop : 60
  },
  header:{
    marginTop : 80
  },
  headerText:{
    textAlign:'center',
    fontSize : 72,
    color: 'rgba(175,47,47,0.25',
    fontWeight: '100'
  },
  timeText:{
    textAlign:'center',
    fontSize : 20,
    color: 'rgba(175,47,47,0.25',
    fontWeight: '20'
  },
  bt_st:{
      borderWidth : 0,
      borderColor : 'rgba(0,0,0,0,2)',
      alignItems : 'center',
      justifyContent : 'center',
      width : 88,
      height : 39,
      backgroundColor : '#DDDDFF',
      borderRadius : 15
    },
    input_text : {
      height : 60,
      backgroundColor : '#ffffff',
      paddingLeft : 10,
      paddingRight : 10

  },
  input_Container:{
    marginLeft :20,
    marginRight :20,
    shadowOpacity : 0.5,
    shadowRadius :3,
    shadowColor : '#000000',
    shadowOffset :{width:2,height:2}
  },
  button :{
    height : 50,
    paddingLeft : 20,
    paddingRight : 20,
    backgroundColor : '#ffffff',
    width : 120,
    marginLeft : 235,
    marginTop: 15,
    borderWidth:1,
    borderColor : 'rgba(0,0,0,.1)',
    justifyContent: 'center',
    alignItems : 'center'
  },
  button2 :{
    height : 50,
    paddingLeft : 30,
    paddingRight : 20,
    backgroundColor : '#ffffff',
    width : 120,
    marginLeft : 235,
    marginTop: 15,
    borderWidth:1,
    borderColor : 'rgba(0,0,0,.1)',
    justifyContent: 'center',
    alignItems : 'center'
  },
  todoBox:{
    marginLeft :20,
    marginRight:20,
    backgroundColor: '#ffffff',
    borderTopWidth:1,
    borderRightWidth: 1,
    borderLeftWidth:1,
    borderColor: '#ededed',
    paddingLeft :14,
    paddingLeft:14,
    paddingTop:7,
    paddingBottom:7,
    shadowOffset:0.2,
    shadowRadius:3,
    shadowColor: '#000000',
    shadowOffset:{width:2,height:2},
    alignItems:'center',
    fontSize:17
  }
});
