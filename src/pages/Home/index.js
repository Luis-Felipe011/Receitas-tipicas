import React from 'react';
import 'react-native-gesture-handler';
import { ImageBackground, View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, useEffect, useState  } from 'react-native';

import { useNavigation } from '@react-navigation/native'


export default function  Home() {
const navigation = useNavigation ();



    return (


        <SafeAreaView style={styles.barra}>
        <ScrollView style={styles.scrollView}>
       
<View style={styles.container}>


  

<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Norte')}>
    <Text style={styles.buttonText}>Norte </Text>
    

</TouchableOpacity>
   
<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Nordeste')}>
    <Text style={styles.buttonText}>Nordeste</Text>
 
</TouchableOpacity>

<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Sudeste')}>
    <Text style={styles.buttonText}>Sudeste</Text>

</TouchableOpacity>

<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Centro')}>
    <Text style={styles.buttonText}>centro-oeste</Text>

</TouchableOpacity>

<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Sul')}>
    <Text style={styles.buttonText}>Sul</Text>
 
</TouchableOpacity>

</View>

</ScrollView>
    </SafeAreaView>

    

 ); 
}


const styles = StyleSheet.create ({
    container:{

backgroundColor: '#fcbf49',
paddingVertical:100 ,
    },
      
       
    
        text: {
            color: '#000',
            fontSize: 14,
            textAlign:'justify',
            fontWeight: 'bold',
        },
 

 button: {
   
    backgroundColor: 'white',
    borderRadius: 45,
    margin: 4,
    width: '90%',
    padding:1,
    height: '20%',
    paddingVertical: 45,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
 },

buttonText: {
     fontSize: 22,
     fontWeight: 'bold',
     color: '#000',
     marginTop: 1,
      
    
 },


})