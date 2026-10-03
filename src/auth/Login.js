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



import React, { useState } from 'react';
import View,Text,TextInput,TouchableOpacity,StyleSheet

export default function App() {

 

  const register = () => {
   

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Registration Form</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter phone number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={register}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white'
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25
  },

  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8
  },

  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 8
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18
  }

});