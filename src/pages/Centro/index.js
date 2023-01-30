import React from 'react';
import 'react-native-gesture-handler';
import { ImageBackground, View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, useEffect, useState  } from 'react-native';

import { useNavigation } from '@react-navigation/native'

const imgbg10= '../../assets/fundocentro90.png'
export default function  Centro() {
const navigation = useNavigation ();




    return (

    

        <SafeAreaView style={styles.barra}>
        <ScrollView style={styles.scrollView}>
       
<View style={styles.container}>
<Image 
      source={require('../../assets/centro2.png')}
      style={styles.buttonImagem}
      resizeMode="cover" />
<Text style={styles.text}>A região Centro-Oeste tem pratos tradicionais que, além de deliciosos, ajudam a contar a história, os costumes e a cultura local.</Text>


<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Frango')}>
    <Text style={styles.buttonText}> Frango com quiabo </Text>
</TouchableOpacity>
   
<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Empadao')}>
    <Text style={styles.buttonText}> Empadão</Text>
</TouchableOpacity>
   
<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Strudel')}>
    <Text style={styles.buttonText}> Strudel </Text>
</TouchableOpacity>
   
<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Maria')}>
    <Text style={styles.buttonText}> Arroz Maria Isabel</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Mane')}>
    <Text style={styles.buttonText}> Mané pelado </Text>
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