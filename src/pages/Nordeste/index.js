import React from 'react';
import 'react-native-gesture-handler';
import { ImageBackground, View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, useEffect, useState  } from 'react-native';

import { useNavigation } from '@react-navigation/native'

const imgbg3= '../../assets/fundonordeste10.png'

export default function  Nordeste() {
const navigation = useNavigation ();




    return (

    

        <SafeAreaView style={styles.barra}>
        <ScrollView style={styles.scrollView}>
       
<View style={styles.container}>

<Image 
      source={require('../../assets/nordeste10.png')}
      style={styles.buttonImagem}
      resizeMode="cover" />

<Text style={styles.text}>Os pratos da culinária da região Nordeste caracterizam-se pela presença marcante de temperos fortes e apimentados.</Text>

<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Moqueca')}>
    <Text style={styles.buttonText}> Moqueca de peixe </Text>
</TouchableOpacity>
   
<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Creme')}>
    <Text style={styles.buttonText}> Creme de galinha</Text>
</TouchableOpacity>
   
<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Baiao')}>
    <Text style={styles.buttonText}> Baião de Dois </Text>
</TouchableOpacity>
   
<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Canjica')}>
    <Text style={styles.buttonText}> Canjica</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Arrumadinho')}>
    <Text style={styles.buttonText}> Arrumadinho </Text>
</TouchableOpacity>


</View>

</ScrollView>
    </SafeAreaView>

    

 ); 
}


const styles = StyleSheet.create ({
    container:{
flex: 1,
backgroundColor: '#fcbf49',
paddingVertical: 80,
    },

    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        width: '100%',
        height: '100%',

      },

 button: {
    flex: 1,
    backgroundColor: '#ed9121',
    borderRadius: 50,
    margin: 20,
    width: '90%',
    height:'20%',
    paddingVertical: 40,
    alignSelf: 'center',
    alignItems:'center',
    justifyContent: 'center',
    borderWidth: 0,
 },

buttonText: {
     fontSize: 24,
     
     fontWeight: 'bold',
     color: 'white',
     marginTop: 1,
     marginBottom: 1,  
    
 },

 buttonImagem: {
   
    borderRadius: 10,
    margin: 3,
    width: '40%',
    height: '15%',
    paddingVertical: 45,
    alignSelf: 'center',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginHorizontal: "10%",
    marginBottom: 6,
      
 },
 text: {
    color: '#000',
    fontSize: 18,
    textAlign:'justify',
    fontWeight: 'bold',
},
})