import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AppForm({ navigation }) {

  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');

  function handleDescriptionChange(description){
    setDescription(description);
  }
  function handleQuantityChange(quantity){
    setQuantity(quantity);
  }
  async function handleButtonPress(){
    const listItem = {id: new Date().getTime(), description, quantity: parseInt(quantity)};
    let savedItems = [];
    const response = await AsyncStorage.getItem('items');

    if(response) savedItems = JSON.parse(response);
    savedItems.push(listItem);

    await AsyncStorage.setItem('items', JSON.stringify(savedItems));
    navigation.navigate("AppList", listItem);
    }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Item para comprar</Text>
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                onChangeText={handleDescriptionChange}
                placeholder="O que está faltando em casa?"
                clearButtonMode='always'
            />
            <TextInput
                style={styles.input}
                onChangeText={handleQuantityChange}
                placeholder="Digite a Quantidade"
                keyboardType={'numeric'}
                clearButtonMode='always'
            />
            <TouchableOpacity
                onPress={handleButtonPress}
                style={styles.button}
                activeOpacity={0.8}
            >
                <Text style={styles.buttonText}>SALVAR</Text>
            </TouchableOpacity>
        </View>
      <Text>Form</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AABBCC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FDFDFD',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
  },
inputContainer: {
    flex: 1,
    marginTop: 30,
    width: '90%',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#FDFDFD',
},
input: {
    marginTop: 10,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#444444',
    height: 60,
    backgroundColor: '#FDFDFD',
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'stretch'
},
button: {
    marginTop: 10,
    height: 60,
    backgroundColor: 'navy',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center'
},
buttonText: {
    color: '#FDFDFD',
    fontWeight: 'bold'
}

})