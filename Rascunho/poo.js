import { StatusBar } from 'expo-status-bar'; //importaçaõ de status bar do expo (ambiente de desenvolvimento)
import React from 'react'; // importaçaõ de bibliotecas do react
import { StyleSheet, Text, Button, View, ScrollView, Image, Linking } from 'react-native'; //importação de algumas bibliotecas do react

/*Função principal chamas-se 'App'*/
/*retorna tudo que estiver dentro de 'return();'*/
export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <StatusBar style="auto" /> */}

        <Image
          source={require('./assets/img/logo.png')}
          style={styles.cabecalho}
        />

        <Text style={styles.tituloPrincipal}>
          Tec. Informatica para Internet
        </Text>

        <View style={styles.bloco}>
          
        </View>

        <View style={styles.bloco}>
          <Text style={styles.titulo}>
            Prefeitura Municipal de Buritis-MG
        </Text>
          <Text style={styles.descricao}>
            Departamentos: RH, Gabinete, Licitações
        </Text>
          <Text style={styles.endereco}>
            Endereço: Av. Bandeirantes, 723 {"\n"}
            Bairro: Centro
        </Text>
          <Text onPress={() => { Linking.openURL('tel:(38) 3662-3250'); }} style={styles.ligar}>
            LIGAR
        </Text>
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
          {/* NAO MECHER (TEXRO)*/}
          <Text onPress={() => { Linking.openURL('tel:(38) 99994-0983'); }} style={styles.ligar}>
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
        </View>

        <View style={styles.bloco}>

          {/* IMAGENS (ICON) */}
          <View style={styles.contIcon}>
            <Image
              source={require('./assets/icons-flexbox/telefone.png')}
              style={styles.imgIco}
            />
            <Image
              style={styles.imgIco}
              source={require('./assets/icons-flexbox/whatsapp.png')}
            />
          </View>

          <View style={styles.contIcon}>
            <Image
              source={require('./assets/icons-flexbox/email.png')}
              style={styles.imgIco}
            />
            <Image
              source={require('./assets/icons-flexbox/github.png')}
              style={styles.imgIco}
            />
          </View>
        </View>



        <Image
          source={require('./assets/img/logo2.png')}
          style={styles.rodape}
        />


      </View>

    </ScrollView >
  );
}
/*contante 'styles' onte tem os estilos do tipo 'StyleSheet'*/
const styles = StyleSheet.create({

  /*Atributos de 'container'*/
  container: {
    flex: 1,
    backgroundColor: '#001900',
    alignItems: 'center',
    justifyContent: 'center',

  },

  contIcon: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,

  },
  imgIco: {
    // width: 100,
    // height: 100,
    // backgroundColor: 'red',
    
    //    outros
    
    // backgroundColor: '#008000',
    // padding: 10,
    // borderRadius: 60,
    // marginTop: 10,
    // width: 250,


  },

  /*Atributos de 'cabecalho' (img)*/
  cabecalho: {
    marginTop: 20,
    height: 114,
    width: 183,

  },
  /*Atributos de 'rodape' (img)*/
  rodape: {
    marginBottom: 20,
    width: 288,
    height: 43,

  },
  /*Atributos de 'TituloPrinciplal'*/
  tituloPrincipal: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',

  },
  /*Atributos dos 'bloco'*/
  bloco: {
    backgroundColor: '#fff',
    width: 300,
    padding: 20,
    borderRadius: 25,
    margin: 10,e

  },
  /*Atributos de 'titulo'*/
  titulo: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',

  },
  /*Atributos de 'descricao'*/
  descricao: {
    color: '#808080',
    textAlign: "left",

  },
  /*Atributos de 'endereco'*/
  endereco: {
    textAlign: "left",

  },
  /*Atributos de 'ligar'*/
  ligar: {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#008000',
    padding: 10,
    borderRadius: 60,
    marginTop: 10,
    fontWeight: '500',
    fontSize: 15,

  },


});
