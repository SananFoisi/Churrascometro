import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
  StyleSheet, Text, TextInput, View, ImageBackground, Image,
  TouchableOpacity, Button, ScrollView, Linking, SafeAreaView,
  Alert
} from 'react-native';
import { DataTable } from 'react-native-paper';
import { Constants } from 'expo';
// import { Col, Row, Grid } from 'react-native-easy-grid';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      qtdH: 0, qtdM: 0,
      // cB: 0, cS: 0, cF: 0,
      // result_h: 0, resH1: 0, resH2: 0, resH3: 0,
      // result_m: 0, resM1: 0, resM2: 0, resM3: 0,
      resTotal: 0, resCB: 0, resCS: 0, resCF: 0,
      nome: "",
      resTextoT: "",
      resTextoB: "",
      resTextoS: "",
      resTextoF: "",
    }
    this.calcular = this.calcular.bind(this)

  }

  calcular() {
    //homen
    let r_Homen = this.state.qtdH * 0.600
    // let result_homen = this.state
    // result_homen.result_h = r_Homen
    // this.setState(result_homen)

    let cB_h = 60 * (r_Homen / 100)
    // let _cB1 = this.state
    // _cB1.resH1 = cB_h
    // this.setState(_cB1)

    let cS_h = 25 * (r_Homen / 100)
    // let _cS1 = this.state
    // _cS1.resH2 = cS_h
    // this.setState(_cS1)

    let cF_h = 15 * (r_Homen / 100)
    // let _cF1 = this.state
    // _cF1.resH3 = cF_h
    // this.setState(_cF1)

    //mulher
    let r_Mulher = this.state.qtdM * 0.500
    // let result_mulher = this.state
    // result_mulher.result_m = r_Mulher
    // this.setState(result_mulher)

    let cB_m = 60 * (r_Mulher / 100)
    // let _cB2 = this.state
    // _cB2.resM1 = cB_m
    // this.setState(_cB2)

    let cS_m = 25 * (r_Mulher / 100)
    // let _cS2 = this.state
    // _cS2.resM2 = cS_m
    // this.setState(_cS2)

    let cF_m = 15 * (r_Mulher / 100)
    // let _cF2 = this.state
    // _cF2.resM3 = cF_m
    // this.setState(_cF2)


    //total
    let r_total = r_Homen + r_Mulher
    let _r_total = this.state
    _r_total.resTotal = r_total
    this.setState(_r_total)

    let cB_total = cB_h + cB_m
    let _cBtotal = this.state
    _cBtotal.resCB = cB_total
    this.setState(_cBtotal)

    let cS_total = cS_h + cS_m
    let _cStotal = this.state
    _cStotal.resCS = cS_total
    this.setState(_cStotal)

    let cF_total = cF_h + cF_m
    let _cFtotal = this.state
    _cFtotal.resCF = cF_total
    this.setState(_cFtotal)


    if (_r_total.resTotal < 1.000) {
      _r_total.resTextoT = "g's"
    } else {
      _r_total.resTextoT = "kg's"
    }


    if (_cBtotal.resCB < 1) {
      _cBtotal.resTextoB = "g's"
    } else {
      _cBtotal.resTextoB = "kg's"
    }


    if (_cStotal.resCS < 1) {
      _cStotal.resTextoS = "g's"
    } else {
      _cStotal.resTextoS = "kg's"
    }


    if (_cFtotal.resCF < 1) {
      _cFtotal.resTextoF = "g's"
    } else {
      _cFtotal.resTextoF = "kg's"
    }

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
            <TextInput style={styles.form} placeholder='Nome' textContentType='name' onChangeText={(nome) => { this.setState({ nome }) }} />
            <TextInput style={styles.form} placeholder='Qtd. Homens' keyboardType='numeric' onChangeText={(qtdH) => { this.setState({ qtdH }) }} />
            <TextInput style={styles.form} placeholder='Qtd. Mulheres' keyboardType='numeric' onChangeText={(qtdM) => { this.setState({ qtdM }) }} />
            {/* <TextInput style={styles.form} placeholder='kg em carne bovina' keyboardType='numbers-and-punctuation' onChangeText={(cB) => (this.setState({ cB }))} />
            <TextInput style={styles.form} placeholder='kg em carne suina' keyboardType='numbers-and-punctuation' onChangeText={(cS) => (this.setState({ cS }))} />
            <TextInput style={styles.form} placeholder='kg em carne de frango' keyboardType='numbers-and-punctuation' onChangeText={(cF) => (this.setState({ cF }))} /> */}
            <TouchableOpacity style={styles.bt} onPress={this.calcular} >
              <Text style={styles.titulobt}>
                Calcular
              </Text>
            </TouchableOpacity>

            {/* <View style={styles.blocTESTE}>
              <Text style={styles.resultText}>{this.state.result_m.toFixed(1)}
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
            </View> */}

            <View style={styles.blocTESTE}>
              <Text style={styles.resultNOME}>{this.state.nome} </Text>
              {/* <Text style={styles.result2}>{this.state.resTexto} </Text> */}

              <Text style={styles.resultText}>{this.state.resTotal.toFixed(2)}
                {' '}{this.state.resTextoT} Totais
              </Text>
              <Text style={styles.resultText}>{this.state.resCB.toFixed(2)}
                {' '}{this.state.resTextoB} de Carne Bovina
              </Text>
              <Text style={styles.resultText}>{this.state.resCS.toFixed(2)}
                {' '}{this.state.resTextoS} de Carne Suina
              </Text>
              <Text style={styles.resultText}>{this.state.resCF.toFixed(2)}
                {' '}{this.state.resTextoF} de Carne Frango
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


            <View style={styles.container4}>

              <TouchableOpacity
                style={styles.button4}
                onPress={this._showAlert}>
                <Text style={{ fontSize: 32, color: 'white' }}>Show Alert!</Text>
              </TouchableOpacity>

            </View>



          </View>
        </View>
      </ScrollView >
    );
  }

  _showAlert = () => {
    Alert.alert(
      this.state.nome,
      "Seu Churarsco ira precisar de:",

      // this.state.resTotal.toFixed(2), " " , this.state.resTextoT, "Totais",
      // this.state.resCB.toFixed(2), " " , this.state.resTextoB, "de Carne Bovina",
      // this.state.resCS.toFixed(2), " " , this.state.resTextoS, "de Carne Suina",
      // this.state.resCF.toFixed(2), " " , this.state.resTextoF, "de Carne Frango",

     

      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK", onPress: () => console.log("OK Pressed")
        }
      ]
    );
  }
}


//edits style 
const styles = StyleSheet.create({

  container4: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  button4: {
    margin: 24,
    padding: 40,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "transparent",
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
    backgroundColor: '#ff6666'
  },

  resultNOME: {

  },

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