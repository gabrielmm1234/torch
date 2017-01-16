import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableHighlight, Image } from 'react-native';


var { width, height } = Dimensions.get('window');

class App extends Component {

	state = { visible: false };

	onCancel() {
    	this.setState({visible:false});
  	}
  	onOpen() {
    	this.setState({visible:true});
  	}

  	onButtonPress() {
  		console.log('pressed');
  	}

	render() {
		return (
			<Image source={require('../assets/basketball.jpg')} style={styles.backgroundImage}>

				<View style={styles.headerContainer}>
					<Text style={[styles.headerTextStyle, styles.leftText]}>123 FANS</Text>
					<Text style={[styles.headerTextStyle, styles.rightText]}>@gabrieljustware</Text>
				</View>

				<View style={styles.textContainer}>
					<Text style={styles.textStyle}>Gabriel</Text>
					<Text style={styles.textStyle}>Mesquita</Text>
				</View>

				<View style={styles.torchButton}>
			    	<TouchableHighlight onPress={this.onButtonPress.bind(this)} style={ styles.imageContainer }>
	            		<Image style={ styles.image } source={require('../assets/torchButton.jpg')} />
	       			</TouchableHighlight>
       			</View>

       		</Image>
		);
	}

}

const styles = {
	headerContainer: {
		paddingTop: 50,
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'space-between',
	},
	rightText:{
		fontSize: 15,
		paddingRight: 10
	},
	leftText: {
		fontSize: 25,
		paddingLeft: 10
	},
	headerTextStyle: {
		fontFamily: 'Tungsten-Medium',
		color: 'white'
	},
	textContainer: {
		flex: 1,
		justifyContent: 'center',
	    alignItems: 'center'
	},
	textStyle: {
		fontFamily: 'Tungsten-Medium',
		color: 'white',
		fontSize: 70
	},
	torchButton: {
		flex: 1,
	    justifyContent: 'flex-end',
	    alignItems: 'center',
	    paddingBottom: 30
	},
	imageContainer: {
    	height:64,
    	width: 64,
    	borderRadius: 64
  	},
  	backgroundImage: {
    	flex: 1,
    	alignSelf: 'stretch',
    	width: null,
    	backgroundColor: 'transparent'
  	},
  	image: {
    	height: 64,
    	width: 64,
    	borderRadius: 64
  	}
}

export default App;
