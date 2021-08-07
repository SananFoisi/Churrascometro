import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  // extender os componente do Props, biblioteca que auxilia na declaração de variaveis

  export default function App() {
    return (
      <ImageBackground source={require('./assets/img/fundo3.png')} style={styles.ImageBackground}>
        <View style={styles.container}>
          <View style={styles.bloco1}>
            <Image source={require('./assets/img/logo.png')} style={styles.logo} />
            <Text style={styles.title}>
              Calculadora de IMC
            </Text>
          </View>
          <View style={styles.bloco2}>
            <TextInput style={styles.form} placeholder='Nome' textContentType='name' />

            <TextInput style={styles.form} placeholder='Peso' keyboardType='numeric' />

            <TextInput style={styles.form} placeholder='Altura' keyboardType='numeric' />

            <TouchableOpacity style={styles.bt}>
              <Text>
                Calcular
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  bloco1: {
    flexDirection: 'row',
    width: '80%',
  },

  logo: {
    width: 70,
    height: 70,
    marginRight: 20,
  },

  title: {
    fontSize: 25,
    color: '#fff',
    fontWeight: '700',
    marginBottom: 15,

  },

  bloco2: {
    width: '70%',
    height: '40%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    // marginBottom: 150,

  },
  form: {
    margin: 10,
    width: 250,
    height: 100,
    padding: 10,
    fontSize: 15,
    color: 'red',
    backgroundColor: 'rgb(250, 250, 250)',
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 40,
    shadowColor: '#333',
    shadowOpacity: 0.25,
    shadowRadius: 2,
    shadowOffset: {
      width: 5,
      height: 5,
    },

  },

  bt: {
    width: 320,
    padding: 20,
    fontSize: 25,
    color: 'red',
    backgroundColor: 'rgb(250,250,250)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },


});
