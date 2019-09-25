// CustomButton.js
import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

export default class CustomButton extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <TouchableOpacity style={[
        styles.button,
        {backgroundColor: this.props.buttonColor}
      ]}
      onPress={this.props.onPress}>
        <Text style={[
          styles.title,
          {color: this.props.titleColor}
        ]}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
	width:'24%',
	height: 100,
	marginRight:'-11%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
	marginBottom: 10,
  },
  title: {
    fontSize: 15,
  },
});