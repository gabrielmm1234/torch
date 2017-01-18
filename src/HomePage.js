import React, { Component } from 'react';
import { 
	View, 
	Text, 
	Dimensions, 
	TouchableHighlight, 
	TouchableOpacity, 
	Image 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

var { width, height } = Dimensions.get('window');

class HomePage extends Component {

	onTorchIDPress() {
  		console.log('Torch id pressed');
  		Actions.PersonalSettings();
  	}

  	onTorchButtonPress() {
  		console.log('Torch button pressed');
  	}

  	render() {
  		return (
  			<Image source={require('../assets/basketball.jpg')} style={styles.backgroundImage}>

				<View style={styles.headerContainer}>
					<Text style={[styles.headerTextStyle, styles.leftText]}>
						<Icon name="flag" size={25} color="white" />   123 FANS
					</Text>
					<TouchableOpacity onPress={this.onTorchIDPress.bind(this)}>
						<Text style={[styles.headerTextStyle, styles.rightText]}>
							@gabrieljustware   <Icon name="user-circle" size={20} color="white" />
						</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.textContainer}>
					<Text style={styles.textStyle}>Gabriel</Text>
					<Text style={styles.textStyle}>Mesquita</Text>
				</View>

				<View style={styles.torchButton}>
			    	<TouchableHighlight onPress={this.onTorchButtonPress.bind(this)} style={ styles.imageContainer }>
	            		<Image style={ styles.image } source={require('../assets/torchButton.jpg')} />
	       			</TouchableHighlight>
       			</View>

       		</Image>
  		);
  	}
}

export default HomePage;