import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import firebase  from './src/config';
import { useState, useEffect } from 'react';
import Firebase from './src/config';
import { QuerySnapshot } from 'firebase/firestore';

export default function App() {

  const [ dados, setDados ] = useState([])

  useEffect(() => {
    Firebase.firestore.collection("teste")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setDados([doc.doata()]);
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
