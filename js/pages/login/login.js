import React, {
  AppRegistry,
  Component,
  BackAndroid,
  Navigator,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
} from 'react-native';


<<<<<<< HEAD
//import axios from 'axios'
//import Crypto from 'react-native-crypto';
=======
import axios from 'axios'
import * as dummy from './dummy.js';
>>>>>>> 0583a9d38de5a9c8ad81dea0800d7e58759f577c


const API_URL = 'http://localhost:1337/parse/';
const HEADERS = {
  'X-Parse-Application-Id': 'StudentWGPlanner',
  'X-Parse-Master-Key': 'asdf'};

const OPTIONS = { headers: HEADERS };

export default class Login extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      username: '',
      password: '',
      errormessage: ''
    };

    this.onPressLogin = this.onPressLogin.bind(this);
    this.onPressRegister = this.onPressRegister.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
    //this.testfunction = this.testfunction.bind(this);
  }

  setUsername(name){
    this.setState ( { username: name })
  }

<<<<<<< HEAD
  setPassword(pw){
    this.setState ( { password: pw })
  }
/*
  testfunction() {
    var sha512 = Crypto.createHash('sha512');
    var h = sha512.update('abc', 'utf8').digest('hex');
    console.log(h);

    var instance = axios.create({
  baseURL: 'http://10.0.2.2:1337/parse/classes/Users/',
  headers: {'X-Parse-Application-Id': 'StudentWGPlanner',
            'X-Parse-Master-Key': 'asdf'}
});
      instance.get('', {
        params: {
          "where": {"username" : this.state.username,
                    "password" : this.state.password}
        }
      })
                .then(function (response) {
                  let myresult = JSON.parse(response.request.response);
                  console.log(myresult.results[0].teststr);
                })
                .catch(function (response) {
                  console.log(response);
                });

    console.log("got result");
    }

  /*testfunction2() {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://10.0.2.2:1337/parse/classes/Test/');
    request.setRequestHeader('X-Parse-Application-Id', 'StudentWGPlanner');
    request.setRequestHeader('X-Parse-Master-Key', 'asdf');
    request.onreadystatechange = (e) => {
    if (request.readyState !== 4) {
        return;
    }

    if (request.status === 200) {
        console.log('success', request.responseText);
    } else {
        console.log("received error. " + request.status + request.responseText)
        console.warn('error');
    }
    };
    request.send();
}*/
=======
>>>>>>> 0583a9d38de5a9c8ad81dea0800d7e58759f577c

  onPressLogin()
  {
    console.log("YOUMADEIT");

    this.state.errormessage = ' ';

    if(this.state.username === '' || this.state.password === '')
      {
        console.log("error.");
        this.state.errormessage = 'Please enter username and password'
      }
      else {
        console.log("will now connect to server");
<<<<<<< HEAD
        this.testfunction();
        console.log("ready.");
=======

        dummy.startImport();

           axios.post("http://localhost:1337/parse/login/", {
            username: this.state.username,
            password: this.state.passsword,
          }, { headers: { 'X-Parse-Application-Id': 'StudentWGPlanner', 'X-Parse-Master-Key': 'asdf' }})
          .then(function (response) {
            console.log("aa");
            console.log(response);
          })
          .catch(function (response) {
            console.log("aa");

            console.log(response);
          });


          console.log("got result");

          this.props.navigator.push({
             name:"Home"});

>>>>>>> 0583a9d38de5a9c8ad81dea0800d7e58759f577c
      }
      this.setState( { username: this.state.username,
                       password: this.state.password,
                       errormessage: this.state.errormessage
                      })
      console.log(this.state);

  }

  onPressRegister()
  {
     console.log("going to register view...");

     this.props.navigator.push({
        name:"Register"    });
  }


  render()
  {

      console.log("render.");
      console.log(this.state);

<<<<<<< HEAD
=======

>>>>>>> 0583a9d38de5a9c8ad81dea0800d7e58759f577c
    return (
      <View>
        <Text style={styles.inputlabel}>
          Username:
        </Text>
        <TextInput
          ref="username"
          onChangeText={(text) => this.setUsername(text)}
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        />
        <Text style={styles.inputlabel}>
          Password:
        </Text>
        <TextInput
          ref="password"
          onChangeText={(text) => this.setPassword(text)}
          secureTextEntry={true}
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        />
        <Text ref='ref' style={styles.errormessage}>{this.state.errormessage}</Text>

        <TouchableHighlight onPress={this.onPressLogin}>
          <Text>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onPressRegister}>
          <Text >Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  inputlabel: {
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
  },
  errormessage: {
    textAlign: 'center',
    color: '#B0171F'
  }

});
