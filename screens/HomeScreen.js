import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  
   TextInput,
  View,
} from 'react-native';

export default class HomeScreen extends React.Component {
 
  static navigationOptions = {
    title: 'Survey Tache',
  };
  
  // constructor(props) {
  //   super(props);
  //   this.state = {text: ''};
  // }
  
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/login_logo1.png')
                  : require('../assets/images/login_logo1.png')
              }
              style={styles.welcomeImage}
            />
          </View>

            <Text style={styles.getMyStyle}> Enter Your Mobile Number </Text>
            <View style={{paddingLeft: 10}}>
        <TextInput
          style={{height: 20, fontSize: 16}}
          placeholder="Mobile Number"
          value={this.state.number}
          textContentType="number"
          onChangeText={(text) => this.setState({text})}
        />
      </View>

      <Text style={styles.getMyStyle}> Enter Your Password </Text>
      <View style={{paddingLeft: 10}}>
        <TextInput
          style={{height: 20, fontSize: 16}}
          placeholder="Password"
          value={this.state.password}
          secureTextEntry={true}
          textContentType="password"
          textContentType= 'password'
          onChangeText={(text) => this.setState({text})}
        />
      </View>
     
       
        <View style={[{ marginTop: 20, marginLeft: 50, marginRight: 50, flex: 1}]}>
              <Button 
              title="Click here Login" 
              color="#F44336"
              onPress={() =>
            navigate('Second') 
            } 
             />
            </View>  
           
           
           
      
        </ScrollView>



      </View>
    );
  }
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  myStyleOpay:{
    height: 50,
    borderRadius: 20,
    backgroundColor: '#1abc9c',
    paddingVertical: 10,
    justifyContent: "center"

  },
  buttonText:{
    color:'#34495e',
    textAlign: "center",
    fontSize: 20

  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  getMyStyle: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 16,
    color:'#4B0082',
    
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
