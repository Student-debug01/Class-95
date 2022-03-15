import React, { Component } from 'react';
import { Text, View, StyleSheet,  ImageBackground, Button } from 'react-native';

  export default class App extends Component {

     constructor(){

    super();

    this.state={

   // This is our Default number value
   NumberHolder : 1

   }
   }

   GenerateRandomNumber=()=>
   {

   var RandomNumber = Math.floor(Math.random() * 6) + 1 ;

   this.setState({

    NumberHolder : RandomNumber

    })
     }

    render() {
    return (

   <View style={styles.MainContainer} >
 <ImageBackground source={require('../assets/')} style={styles.backgroundImage}>
   <Text style={{marginBottom: 10, fontSize: 20}}> 
   {this.state.NumberHolder}</Text>

   <Button title="Roll again" onPress={this.GenerateRandomNumber} />
  </ImageBackground>
   </View>

   );
   }
   }

  const styles = StyleSheet.create(
  {
  MainContainer: {
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
 }

 backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    }

 });