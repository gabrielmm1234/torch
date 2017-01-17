import React, { Component } from 'react';
import { 
	View, 
	Text,
	Image,
	TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconSettings from 'react-native-vector-icons/EvilIcons';
import { Actions } from 'react-native-router-flux';


class PersonalSettings extends Component {

	onTorchIDPress() {
  		console.log('Torch id pressed');
  		Actions.HomePage();
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

				<View style={styles.optionsContainer}>
					<View style={styles.celContainer}>
						<Icon name="user-circle" size={40} color="white" />
						<Text style={styles.optionTextStyle}> 
							Profile
						</Text>
					</View>
					<View style={styles.celContainer}>
						<Icon name="files-o" size={40} color="white" />
						<Text style={styles.optionTextStyle}>
							Cards
						</Text>
					</View>
					<View style={styles.celContainer}>
						<Icon name="snowflake-o" size={40} color="white" />
						<Text style={styles.optionTextStyle}>
							Colors
						</Text>
					</View>
					<View style={styles.celContainer}>
						<Icon name="hand-stop-o" size={40} color="white" />
						<Text style={styles.optionTextStyle}>
							Privacy
						</Text>
					</View>
				</View>
			</Image>
		);
	}
}

const styles = {
	celContainer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center'
	},
	optionTextStyle: {
		fontFamily: 'Tungsten-Medium',
		color: 'white',
		fontSize: 20,
		paddingTop: 10
	},
	optionsContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	headerContainer: {
		paddingTop: 20,
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'space-between'
	},
	rightText:{
		fontSize: 15,
		paddingRight: 20
	},
	leftText: {
		fontSize: 25,
		paddingLeft: 20
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
    	backgroundColor:'rgba(52,52,52,0.5)'
  	},
  	image: {
    	height: 64,
    	width: 64,
    	borderRadius: 64
  	}
}

export default PersonalSettings;