import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import CustomButton from './CustomButton';

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container_vertical}>
        <View style={styles.output}> 
		<Text style={styles.result}>0</Text>
		</View>
        <View style={styles.container_horizontal}>
		  <CustomButton
            buttonColor={'green'}
            title={'7'}
			titleColor={'white'}
            onPress={() => alert('7')}/>
          <CustomButton />

		   <CustomButton
            buttonColor={'green'}
            title={'8'}
			titleColor={'white'}
            onPress={() => alert('8')}/>
          <CustomButton />

		   <CustomButton
            buttonColor={'green'}
            title={'9'}
			titleColor={'white'}
            onPress={() => alert('9')}/>
          <CustomButton />

		   <CustomButton
            buttonColor={'green'}
            title={'+'}
			titleColor={'white'}
            onPress={() => alert('+')}/>
          <CustomButton />
        </View>
		
		<View style={styles.gap}/>

		   <View style={styles.container_horizontal}>
		  <CustomButton
            buttonColor={'green'}
            title={'4'}
			titleColor={'white'}
            onPress={() => alert('1')}/>
          <CustomButton />

		   <CustomButton
            buttonColor={'green'}
            title={'5'}
			titleColor={'white'}
            onPress={() => alert('1')}/>
          <CustomButton />

		   <CustomButton
            buttonColor={'green'}
            title={'6'}
			titleColor={'white'}
            onPress={() => alert('1')}/>
          <CustomButton />

		   <CustomButton
            buttonColor={'green'}
            title={'-'}
			titleColor={'white'}
            onPress={() => alert('1')}/>
          <CustomButton />
        </View> 

			<View style={styles.gap}/>


		   <View style={styles.container_horizontal}>
		  <CustomButton
            buttonColor={'green'}
            title={'1'}
			titleColor={'white'}
            onPress={() => alert('1')}/>
          <CustomButton />

		   <CustomButton
            buttonColor={'green'}
            title={'2'}
			titleColor={'white'}
            onPress={() => alert('1')}/>
          <CustomButton />

		   <CustomButton
            buttonColor={'green'}
            title={'3'}
			titleColor={'white'}
            onPress={() => alert('1')}/>
          <CustomButton />

		   <CustomButton
            buttonColor={'green'}
            title={'x'}
			titleColor={'white'}
            onPress={() => alert('1')}/>
          <CustomButton />
        </View> 

			<View style={styles.gap}/>

		   <View style={styles.container_horizontal}>
		  <CustomButton
            buttonColor={'green'}
            title={'C'}
			titleColor={'white'}
            onPress={() => alert('1')}/>
          <CustomButton />

		   <CustomButton
            buttonColor={'green'}
            title={'0'}
			titleColor={'white'}
            onPress={() => alert('1')}/>
          <CustomButton />

		   <CustomButton
            buttonColor={'green'}
            title={'='}
			titleColor={'white'}
            onPress={() => alert('1')}/>
          <CustomButton />

		   <CustomButton
            buttonColor={'green'}
            title={'/'}
			titleColor={'white'}
            onPress={() => alert('1')}/>
          <CustomButton />
        </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container_vertical: {
    flex: 1,
    backgroundColor: 'gray',
	padding: 50,
  },
  output: {
	flex: 1,
    width:'100%',
    backgroundColor: 'white',
	alignItems: 'flex-end',
	justifyContent: 'flex-end',
  },
  container_horizontal: {
    width:'100%',
    height:100,
    backgroundColor: 'white',
	flexDirection: 'row',
	justifyContent: 'space-around',
  },

  gap: {
    width:'100%',
    height:1,
    backgroundColor: 'white',
	flexDirection: 'row',
	justifyContent: 'space-around',
  },

  result: {
    fontSize: 25,
  },
});