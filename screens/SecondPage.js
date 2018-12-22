import  React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  Component,
  StyleSheet,
  Text,
  AppRegistry,
  Button,
   TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class SecondPage extends React.Component{

render(){
    return (
        <View style = {style.myStyleFirst}>
        <Text style={styles.myStyle}> Hello User... Is This You??? </Text>
        
        
        </View>

    );
}


}

const styles = StyleSheet.create({
    myStyleFirst: {
      flex: 1,
      backgroundColor: '#ff0000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    myStyle: {
        fontSize: 20,
        color: '#4B0082',
        

    }
  });