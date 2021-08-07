import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
  StyleSheet, Text, TextInput, View, ImageBackground, Image,
  TouchableOpacity, Button, ScrollView, Linking, SafeAreaView
} from 'react-native';
import { DataTable } from 'react-native-paper';
// import { Col, Row, Grid } from 'react-native-easy-grid';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      qtdH: 0, qtdM: 0,
      // cB: 0,
      // cS: 0,
      // cF: 0,
      result: 0, r1: 0, r2: 0, r3: 0
    }
    this.calcular = this.calcular.bind(this)
  }

  calcular() {
    let r_Mu = this.state.qtdM * 0.5
    let s = this.state
    s.result = r_Mu
    this.setState(s)



    let cB = 60 * (r_Mu / 100)
    let a = this.state
    a.r1 = cB
    this.setState(a)

    let cS = 25 * (r_Mu / 100)
    let b = this.state
    b.r2 = cS
    this.setState(b)

    let cF = 15 * (r_Mu / 100)
    let c = this.state
    c.r3 = cF
    this.setState(c)


    /*
    s.result<10    
    s.resultTexto="ygfsgufgsidufgu"
    */
  }


  render() {
    return (
      <ScrollView>
        <StatusBar style="auto" />
        <View style={styles.container}>
          <Image
            source={require('./assets/img/grill.png')}
            style={styles.logo}
          />
          <Text style={styles.tituloPrincipal}>
            Calcule seu Churrasco!!
          </Text>
          <View style={styles.blocoCalc}>
            <TextInput style={styles.form} placeholder='Nome' textContentType='name' />
            <TextInput style={styles.form} placeholder='Qtd. Homens' keyboardType='numeric' onChangeText={(qtdH) => { this.setState({ qtdH }) }} />
            <TextInput style={styles.form} placeholder='Qtd. Mulheres' keyboardType='numeric' onChangeText={(qtdM) => { this.setState({ qtdM }) }} />
            {/* <TextInput style={styles.form} placeholder='kg em carne bovina' keyboardType='numbers-and-punctuation' onChangeText={(cB) => (this.setState({ cB }))} />
            <TextInput style={styles.form} placeholder='kg em carne suina' keyboardType='numbers-and-punctuation' onChangeText={(cS) => (this.setState({ cS }))} />
            <TextInput style={styles.form} placeholder='kg em carne de frango' keyboardType='numbers-and-punctuation' onChangeText={(cF) => (this.setState({ cF }))} /> */}
            <TouchableOpacity style={styles.bt} onPress={this.calcular}>
              <Text style={styles.titulobt}>
                Calcular
              </Text>
            </TouchableOpacity>

            <View style={styles.blocTESTE}>
              <Text style={styles.resultText}>{this.state.result.toFixed(1)}
                {' '}Kg Totais
              </Text>
              <Text style={styles.resultText}>{this.state.r1.toFixed(3)}
                {' '}G. Carne Bovina
              </Text>
              <Text style={styles.resultText}>{this.state.r2.toFixed(3)}
                {' '}G. Carne Suina
              </Text>
              <Text style={styles.resultText}>{this.state.r3.toFixed(3)}
                {' '}G. Carne Frango
              </Text>
            </View>


          </View>



          <View style={styles.bloco}>
            <Text style={styles.titulo}>
              Rhyan Inacio Alves Santana
            </Text>
            <Text style={styles.descricao}>
              quem fez isso carai
            </Text>
            <Text style={styles.endereco}>
              Endereço: Av. das Acacias, 589 {"\n"}
              Bairro: Canaa
            </Text>
            {/* NAO MECHER (TEXRO) */}
            {/* <Text onPress={() => { Linking.openURL('tel:(38) 99994-0983'); }} style={styles.ligar}>
            Ligar
          </Text>
          <Text onPress={() => { Linking.openURL('whatsapp://send?text=Olá, Como Está?&phone=+5538999940983'); }} style={styles.ligar}>
            Whatsapp
          </Text>
          <Text onPress={() => { Linking.openURL('mailto:rhyanalves68@gmail.com?subject=Relatório&body=Descrição'); }} style={styles.ligar}>
            Email
          </Text>
          <Text onPress={() => { Linking.openURL('https://github.com/SananFoisi'); }} style={styles.ligar}>
            GitHub
          </Text>
 */}



            <View style={styles.container3}>
              <DataTable>
                <DataTable.Row >
                  <DataTable.Cell onPress={() => { Linking.openURL('tel:(38) 99994-0983'); }} style={styles.ligar}>
                    Ligar
                  </DataTable.Cell>
                  <DataTable.Cell onPress={() => { Linking.openURL('whatsapp://send?text=Olá, Como Está?&phone=+5538999940983'); }} style={styles.ligar}>
                    Whatsapp
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell onPress={() => { Linking.openURL('mailto:rhyanalves68@gmail.com?subject=Relatório&body=Descrição'); }} style={styles.ligar}>
                    Email
                  </DataTable.Cell>
                  <DataTable.Cell onPress={() => { Linking.openURL('https://github.com/SananFoisi'); }} style={styles.ligar}>
                    GitHub
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable>
            </View>


          </View>
        </View>
      </ScrollView >
    );
  }
}


//edits style 
const styles = StyleSheet.create({

  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },


  blocTESTE: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(69, 69, 69, 0.5)',
    borderRadius: 15,
    padding: 15,
    margin: 15,



  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginTop: 20,
    width: 200,
    height: 195,
  },
  tituloPrincipal: {
    color: '#000000',
    fontSize: 32,
    fontWeight: 'bold',
    //fontFamily: 'Monotype Corsiva',
  },
  blocoCalc: {
    width: '85%',
    height: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(69, 69, 69, 0.5)',
    padding: 20,
    borderRadius: 15,
    margin: 10,
  },
  form: {
    textAlign: 'center',
    margin: 10,
    width: 300,
    height: 50,
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
      width: 20,
      height: 20,
    },
  },
  bt: {
    width: 200,
    padding: 10,
    backgroundColor: 'rgba(254, 169, 0, 255)',
    borderRadius: 60,
    margin: 10,
  },
  titulobt: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  bloco: {
    // backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    margin: 10,
    backgroundColor: 'rgba(69, 69, 69, 0.5)',
    width: '85%',
  },
  titulo: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 'bold',
    //fontFamily: 'Monotype Corsiva',
  },
  descricao: {
    color: '#808080',
  },
  endereco: {
  },
  ligar: {
    // textAlign: 'center',
    // color: '#fff',
    backgroundColor: '#008000',
    padding: 8,
    borderRadius: 60,
    // marginTop: 10,
    // fontWeight: '500',
    // fontSize: 15,
    margin: 10,
    justifyContent: 'center',

  },
  container3: {

  },


});