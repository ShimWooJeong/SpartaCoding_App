import React , {useEffect} from 'react'
import {View,Text,Image,StyleSheet, Touchable, TouchableOpacity} from 'react-native'
import { StatusBar } from 'expo-status-bar';

export default function AboutPage({navigation, route}){
    
    useEffect(() =>{
        navigation.setOptions({
            title: "소개 페이지",
            headerStyle: {
                backgroundColor: "#1F266A",
                shadowColor: "#1F266A",
            },
            headerTintColor: "#fff"
        })
    },[])


  return (
    <View style={styles.container}>
        <StatusBar style="white"/>
        <Text style={styles.title}>HI! 스파르타코딩 앱개발 반에 오신 것을 환영합니다</Text>

        <View style={styles.boxContainer}>
            <Image style={styles.Image} source={{uri:"https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4"}}
            resizeMode={"cover"}/>
            <Text style={styles.boxText01}>많은 내용을 간결하게 담아내려 노력했습니다!</Text>
            <Text style={styles.boxText02}>꼭 완주 하셔서 꼭 여러분 것으로 만들어가시길 바랍니다</Text>
            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>여러분의 인스타 계정</Text>
        </TouchableOpacity>
        </View>
        
    </View>


  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f266a',
        alignItems: "center"
    },
    title: {
        fontSize: 30,
        color: "#fff",
        fontWeight: "700",
        paddingLeft:30,
        paddingRight: 30,
        paddingTop: 100
    },
    boxContainer: {
        backgroundColor: "#fff",
        width: 300,
        height: 500,
        borderRadius: 30,
        marginTop: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    Image: {
        width: 200,
        height: 200,
        borderRadius: 50
    },
    boxText01: {
        fontSize: 20,
        fontWeight: "700",
        paddingLeft: 20,
        paddingRight: 20,
        textAlign: "center"
    },
    boxText02: {
        fontSize: 15,
        fontWeight: "700",
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 17,
        textAlign: "center"
    },
    button: {
        backgroundColor: "orange",
        borderRadius: 15,
        padding: 20,
        marginTop: 20
    },
    buttonText:{
        fontSize:15,
        fontWeight: "700",
        color: "#fff"
    }
  });
