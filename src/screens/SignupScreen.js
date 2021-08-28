import React, {useState, useEffect} from  "react";
import { View,StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../Components/Spacer";
import auth from '@react-native-firebase/auth';





const SignupScreen = (props) =>{


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const createUser = () =>{
    auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    console.log('User account created & signed in!');
    props.navigation.navigate('IndexScreen')
  })
    
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
};

function LoginApp() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
  );
}

    return (
      
        <View style={styles.container}>
          <LoginApp />
       <Text h3>Sign Up Here</Text>
       <Spacer/>
       <Input label="Email" value={email} onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}/>
       <Spacer/>
       <Input 
       secureTextEntry={true}
       label="Password" value={password} onChangeText={setPassword}
       secureTextEntry
       autoCapitalize="none"
       autoCorrect={false}/>
       <Spacer/>
       <Button title="SignUp" onPress={createUser}
       />
       <Text>Welcome: {email}</Text>
       </View>
      );

};





const styles = StyleSheet.create({
 container: {
     borderColor: "red",
     flex: 1,
     justifyContent: "center",
     marginBottom: 200,
     margin: 20
 }
 

});

export default SignupScreen;