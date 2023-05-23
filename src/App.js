import React from 'react';
import { Text,SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';
import Card from './components/Card/Card';



function app () {


    return (
      <SafeAreaView style={styles.container}>
      
        <Card title="Oktay kuzu" text='Bilgisayar Mühendisliği öğrencisi' />
       <Card title='Edd Stark' text='winter is coming...' />
       <Card title='Arif ışık ' text='Uzaylılar tarafından kaçırıldım evet uzaylılar tarafından' />
       <Card title='Serbest ' text='İlhami abi sen söyle başka bir  ildemiyim ? ' />
   </SafeAreaView>


    );
 
};




const styles=StyleSheet.create ({

 container : {
    flex : 1,
    backgroundColor : "#e0e0e0",

 },

 

});

export default app;