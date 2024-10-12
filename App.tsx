import 'nativewind/tailwind.css';
import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { ref, set, onValue } from "firebase/database";
import { database, auth } from './Firebase';

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in!");
    } catch (error) {
      console.error(error);
    }
  };

  const writeData = (userId, data) => {
    set(ref(database, 'users/' + userId), data)
      .then(() => {
        console.log("Data saved successfully!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const readData = (userId) => {
    const userRef = ref(database, 'users/' + userId);
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
  };

  return (
    <View className="flex-1 items-center justify-center p-4">
      <TextInput
        className="border border-gray-300 p-2 mb-4 w-full"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        className="border border-gray-300 p-2 mb-4 w-full"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={signUp} />
      <Button title="Sign In" onPress={signIn} className="mt-4" />
    </View>
  );
}
