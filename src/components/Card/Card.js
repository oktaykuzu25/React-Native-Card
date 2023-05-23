import React from "react";
import { Alert, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styles from './Cardstyle';


const Card =( props) => {

 return (
    
        <View style={styles.container}>
        <View style={styles.body}> 
        <Text style={styles.tittle}>{ props.title } </Text>
        <Text style={styles.text}> {props.text} </Text>
       </View>
       <TouchableOpacity style={styles.button_container} onPress={() => Alert.alert('Hoşgeldiniz. '+ props.title)}> 
         <Text style={styles.button_tittle}> I LİKED </Text>
       </TouchableOpacity>
       </View>
   
 );




};

export default Card;
