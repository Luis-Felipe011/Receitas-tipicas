import React from 'react';
import 'react-native-gesture-handler';
import { ImageBackground, View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, useEffect, useState  } from 'react-native';

import { useNavigation } from '@react-navigation/native'

const imgbg2= '../../assets/fundonorte2.png'

export default function  Norte() {
const navigation = useNavigation ();



    return (

        

        <SafeAreaView style={styles.barra}>
        <ScrollView style={styles.scrollView}>
       
<View style={styles.container}>
<StatusBar backgroundColor="#000" barStyle="light-content" />
<Image 
      source={require('../../assets/norte33.png')}
      style={styles.buttonImagem}
      resizeMode="cover" />
 


 <Text style={styles.text}>A riqueza da culinária da Região Norte do país está na herança dos costumes de seus moradores nativos, os povos indígenas.</Text>


<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Pirarucu')}>
    <Text style={styles.buttonText}> Pirarucu à casaca </Text>
</TouchableOpacity>
   
<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Mijuca')}>
    <Text style={styles.buttonText}> Mijuca de peixe </Text>
</TouchableOpacity>
   
<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Pudim')}>
    <Text style={styles.buttonText}> Pudim de tapioca </Text>
</TouchableOpacity>
   
<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Cuscuz')}>
    <Text style={styles.buttonText}> Cuscuz de feijão-caupi </Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.button}
onPress={ () => navigation.navigate('Monicoba')}>
    <Text style={styles.buttonText}> Moniçoba </Text>
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
paddingVertical: 0,
    },

    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        alignSelf: 'center',
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