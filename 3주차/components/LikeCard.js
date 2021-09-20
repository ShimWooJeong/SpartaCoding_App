import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native'

export default function LikeCard({content,navigation}){
    return(
        
        <View style={styles.card}>
            <Image style={styles.image} source={{uri:content.image}}/>
            <View style={styles.text}>
                <Text style={styles.title} numberOfLines={1}>{content.title}</Text>
                <Text style={styles.desc} numberOfLines={3}>{content.desc}</Text>
                <Text style={styles.date}>{content.date}</Text>
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    
    card:{
      flex:1,
      flexDirection:"row",
      borderBottomWidth:0.5,
      borderBottomColor:"#eee",
      margin:10,
      paddingBottom:10
    },
    image: {
      flex:1,
      borderRadius:10,
      width:100,
      height:100
    },
    text: {
      flex:2,
      marginLeft:10,
      flexDirection:"column"
    },
    title: {
      fontSize:20,
      fontWeight:"700"
    },
    desc: {
      fontSize:15
    },
    date: {
      fontSize:10,
      color:"#A6A6A6",
    }
});