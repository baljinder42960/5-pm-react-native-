// import { StyleSheet, Text, TextInput, View } from 'react-native'
// import React from 'react'

// const Login = () => {
//   return (
//     <View>

//       <Text>Login</Text>

//       <TextInput
//         placeholder="Email"
//       />
//       <TextInput
//         placeholder="Password"
//         secureTextEntry
//       />
//     </View>
//   )
// }

// export default Login

// const styles = StyleSheet.create({})



import React from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet,} from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Welcome Back</Text>

      <Text style={styles.subtitle}>
        Login to your account
      </Text>

     
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        keyboardType="email-address"
      />

      
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        secureTextEntry={true}
      />

      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.registerText}>
        Don't have an account? Register
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F9FF",
    justifyContent: "center",
    padding: 25,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2878D4",
  },

  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginTop: 8,
    marginBottom: 30,
  },

  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#2878D4",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },

  registerText: {
    textAlign: "center",
    marginTop: 20,
    color: "#555",
  },
});