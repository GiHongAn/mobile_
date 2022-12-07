import React,{Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View,Pressable, TextInput,Modal,TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Calendar } from "react-native-calendars";

const Sub = (props) =>{
    console.log(props.showModal)
    //props로 받아온 showmodal과 setmadal을 사용해서 sub.js의 모달을 실행시킨다.
    return(
        <>
    {props.showModal?(
    <View>
    <View  style={styles.centeredView}>
      <Modal
      animationType="slide"
      transparent={true} 
      visible={props.showModal}>
        
       <View style={styles.centeredView}> 
            <View style={styles.modalView}>
      <Text style={styles.modal_subText}></Text>
            <Text></Text>
            {/*캘린더 출력 */}
            <Calendar style={styles.calendar}/>
            <Text style={styles.scl}></Text>
            <Pressable
               style={[styles.button, styles.buttonClose]}
                onPress={() => props.setShowModal(!props.showModal)}
              >
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
            
            </View>
            
        </Modal>
        </View>
    </View>
    ):null}
    
    </>
    )
}
const styles = StyleSheet.create({
    calendar: {
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
      },
      modalText: {
        borderRadiu: 20,
        fontSize: 20,
        marginTop: 0,
        textAlign: "center"
      },
      modal_subText: {
        borderRadiu: 20,
        fontSize: 15,
        marginTop: 0,
        textAlign: "center"
      },
    
      scl :{
        paddingTop:10
      },
      centeredView: {
        flex:0.9,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
      },
          button: {
            
            borderRadius: 20,
            padding: 10,
            elevation: 2
          },
          buttonOpen: {
            backgroundColor: "#F194FF",
          },
           
          modalView: {
            margin: 10,
            backgroundColor: '#B0E8F1',
            borderRadius: 30,
            padding: 40,
            paddingBottom : 40,
    
            alignItems: "center",
            shadowColor: "#000",
            shadowOpacity: 0.5,
            shadowOffset: {
              width: 0,
              height: 2
            }
        },
        
        input: {
            width: '50%',
            height: '10%',
            backgroundColor: "#cecece",
            marginTop:20,
            fontSize: 10,
            padding:10,
            marginBottom: 10,
            
        
          },
        view1 : {
    
            backgroundColor : 'yellow',
            flexDirection : 'column',
            flex : 0.5,
            marginTop : 50,
            alignItems : 'center',
            justifyContent : 'center',
            width : '100%'
    
        },
    
        view2 : {
    
            backgroundColor : 'white',
            marginTop : 50,
            width : '70%'
    
        },
    
        view3 : {
    
            backgroundColor : 'green',
            marginBottom : 10
    
        },
    
        view4 : {
    
            backgroundColor : 'white',
            flex : 2,
            marginTop : 0,
            alignItems : 'center'
    
        },
    
        view5 : {
    
            Witdth: '100%',
            marginTop : 50
    
        },
    
        text : {
    
            fontSize : 40,
            fontWeight : 'bold',
            color : "black",
            marginTop : -90
            
        },
    
        text2 : {
    
            fontSize : 30,
            fontWeight : 'bold',
            color : "black",
            marginTop : 0
        },
        button: {
          borderRadius: 20,
          padding: 10,
          elevation: 2
        },
        buttonOpen: {
          backgroundColor: "#F194FF",
        },
        buttonClose: {
          backgroundColor: "#2196F3",
        },
        textStyle: {
          color: "white",
          fontWeight: "bold",
          textAlign: "center"
        }
})

export default Sub;