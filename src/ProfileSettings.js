import React, { Component } from 'react';
import { 
	View, 
	Text,
	Image,
	TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

class ProfileSettings extends Component {

	onTorchIDPress() {
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

				<View style={styles.profileSettings}>
					<Icon name="backward" size={18} color="white" style={styles.backIconStyle} />
					<Icon name="user-circle" size={25} color="white" />
					<Text style={styles.profileSettingsTextStyle}> 
						PROFILE SETTINGS
					</Text>
				</View>

			</Image>
		);
	}
}

export default ProfileSettings;