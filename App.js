/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
*/ 

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  } from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props)
    this.state = {altura:0, massa:0, resultado:0, resultadoText:""}
    this.calcular = this.calcular.bind(this)
  }
  
  calcular(){

    let imc = this.state.massa / (this.state.altura * this.state.altura)
    let s = this.state
    s.resultado = imc

    if(s.resultado < 16){
      s.resultadoText = "Magreza grave";
    }
    else if (s.resultado < 17) {
      s.resultadoText = "Magreza moderada";
    }
    else if (s.resultado < 18.5) {
      s.resultadoText = "Magreza leve";
    }
    else if (s.resultado < 25) {
      s.resultadoText = "Saudável";
    }
    else if (s.resultado < 30) {
      s.resultadoText = "Sobrepeso";
    }
    else if (s.resultado < 35) {
      s.resultadoText = "Obesidade Gau 2";
    }
    else if (s.resultado < 40) {
      s.resultadoText = "Obesidade Gau 2";
    }
    else {
      s.resultadoText = "Obesidade Gau 3";
    }

    this.setState(s)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.entradas}>
          <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura)=>{this.setState({altura})}}/>
          <TextInput placeholder="Massa" keyboardType="numeric" style={styles.input} onChangeText={(massa) => { this.setState({massa}) }}/>
        </View>
        <TouchableOpacity onPress={this.calcular} style={styles.button}><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={styles.nivel}>{this.state.resultadoText}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  entradas: {
    flexDirection: 'row',
  },
  input:{
    height:80,
    textAlign: "center",
    width: "50%",
    fontSize:50,
    marginTop:24,
  },
  button:{
    backgroundColor: '#89ffa5',
  },
  buttonText:{
    alignSelf: 'center',
    padding: 30,
    fontSize: 25,
    color: '#FFFFFF',
  },
  resultado:{
    marginTop: 50,
    textAlign: "center",
    fontSize: 50,
  },
  nivel: {
    textAlign: "center",
    fontSize: 25,
  }
});