import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import CustomButton from './CustomButton';
//
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state={result:0, mod:0, temp:0, temp2:0};
  }

  _onClick(num){
	if(num < 0)//연산이 눌렸다면
	{
		this.setState({mod:num});

		if(this.state.temp === 0){//계산의 첫과정에서 눌린거면
			if(!(num === -5)){
				this.setState({temp:this.state.result});
			}

			if(num === -6){
				this.setState({result:0});
				this.setState({mod:0});
				this.setState({temp:0});
				this.setState({temp2:0});
			}
		}else{
			if(num === -1){//더하기 일 때
				this.setState({temp:this.state.temp + this.state.result});
				//this.setState({result:'+'});
			}else if(num === -2){//빼기 일 때
				this.setState({temp:this.state.temp - this.state.result});
				//this.setState({result:'-'});
			}else if(num === -3){//곱하기 일 때
				this.setState({temp:this.state.temp * this.state.result});
				//this.setState({result:'*'});
			}else if(num === -4){//나누기 일 때
				this.setState({temp:this.state.temp / this.state.result});
				//this.setState({result:'/'});
			}else if(num === -5){// = 일 때
				if(this.state.temp2 === -1){//전에 +였다면
					this.setState({result:this.state.result + this.state.temp});
				}else if(this.state.temp2 === -2){//전에 -였다면
					this.setState({result:this.state.temp - this.state.result});
				}else if(this.state.temp2 === -3){//전에 *였다면
					this.setState({result:this.state.result * this.state.temp});
				}else if(this.state.temp2 === -4){//전에 /였다면
					this.setState({result:this.state.temp / this.state.result});
				}
				this.setState({temp:0});
				this.setState({temp2:0});
			}else if(num === -6){//초기화
				this.setState({result:0});
				this.setState({mod:0});
				this.setState({temp:0});
				this.setState({temp2:0});
			}
		}

		if(num === -1){//더하기 일 때
				this.setState({result:'+'});
			}else if(num === -2){//빼기 일 때
				this.setState({result:'-'});
			}else if(num === -3){//곱하기 일 때
				this.setState({result:'*'});
			}else if(num === -4){//나누기 일 때
				this.setState({result:'/'});
			}
	}
	else//숫자가 눌렸다면
	{
		if(this.state.temp === 0) this.setState({result:0});

		if(this.state.mod < 0){//연산이 눌려있는 상태일때
			this.setState({result:num});
			this.setState({temp2:this.state.mod});
			this.setState({mod:0});
		}
		else{
			this.setState({result:this.state.result*10 + num});
		}
	}
  }

  render() {
    return (
      <View style={styles.container_vertical}>
        <View style={styles.output}> 
		<Text style={styles.result}>{this.state.result.toString()}</Text>
		</View>

		
	
        <View style={styles.container_horizontal}>
		  <CustomButton
            buttonColor={'green'}
            title={'7'}
			titleColor={'white'}
            onPress={this._onClick.bind(this, 7)}/>
          <CustomButton />

		   <CustomButton
            buttonColor={'green'}
            title={'8'}
			titleColor={'white'}
			onPress={this._onClick.bind(this, 8)}/>	
          <CustomButton />

		   <CustomButton
            buttonColor={'green'}
            title={'9'}
			titleColor={'white'}
            onPress={this._onClick.bind(this, 9)}/>
          <CustomButton />

		   <CustomButton
            buttonColor={'green'}
            title={'+'}
			titleColor={'white'}
            onPress={this._onClick.bind(this, -1)}/>
          <CustomButton />
        </View>
		
		<View style={styles.gap}/>

		   <View style={styles.container_horizontal}>
		  <CustomButton
            buttonColor={'green'}
            title={'4'}
			titleColor={'white'}
            onPress={this._onClick.bind(this, 4)}/>
          <CustomButton />

		   <CustomButton
            buttonColor={'green'}
            title={'5'}
			titleColor={'white'}
            onPress={this._onClick.bind(this, 5)}/>
          <CustomButton />

		   <CustomButton
            buttonColor={'green'}
            title={'6'}
			titleColor={'white'}
            onPress={this._onClick.bind(this, 6)}/>
          <CustomButton />

		   <CustomButton
            buttonColor={'green'}
            title={'-'}
			titleColor={'white'}
            onPress={this._onClick.bind(this, -2)}/>
          <CustomButton />
        </View> 

			<View style={styles.gap}/>


		   <View style={styles.container_horizontal}>
		  <CustomButton
            buttonColor={'green'}
            title={'1'}
			titleColor={'white'}
            onPress={this._onClick.bind(this, 1)}/>
          <CustomButton />

		   <CustomButton
            buttonColor={'green'}
            title={'2'}
			titleColor={'white'}
            onPress={this._onClick.bind(this, 2)}/>
          <CustomButton />

		   <CustomButton
            buttonColor={'green'}
            title={'3'}
			titleColor={'white'}
            onPress={this._onClick.bind(this, 3)}/>
          <CustomButton />

		   <CustomButton
            buttonColor={'green'}
            title={'x'}
			titleColor={'white'}
            onPress={this._onClick.bind(this, -3)}/>
          <CustomButton />
        </View> 

			<View style={styles.gap}/>

		   <View style={styles.container_horizontal}>
		  <CustomButton
            buttonColor={'green'}
            title={'C'}
			titleColor={'white'}
            onPress={this._onClick.bind(this, -6)}/>
          <CustomButton />

		   <CustomButton
            buttonColor={'green'}
            title={'0'}
			titleColor={'white'}
            onPress={this._onClick.bind(this, 0)}/>
          <CustomButton />

		   <CustomButton
            buttonColor={'green'}
            title={'='}
			titleColor={'white'}
            onPress={this._onClick.bind(this, -5)}/>
          <CustomButton />

		   <CustomButton
            buttonColor={'green'}
            title={'/'}
			titleColor={'white'}
            onPress={this._onClick.bind(this, -4)}/>
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