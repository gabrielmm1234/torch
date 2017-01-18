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

  	onBackPress() {
  		Actions.Settings();
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

					<TouchableOpacity onPress={this.onBackPress.bind(this)}>
						<Icon name="backward" size={18} color="white" style={styles.backIconStyle} />
					</TouchableOpacity>

					<Icon name="user-circle" size={25} color="white" />
					<Text style={styles.profileSettingsTextStyle}> 
						PROFILE SETTINGS
					</Text>
				</View>

				<View style={styles.profileContainer}>
					<View style={styles.profileItemContainer}>
						<Text style={styles.profileLabelStyle}>NAME</Text>
						<Text style={[styles.textStyle, {fontSize: 40}]}>Gabriel Mesquita</Text>
					</View>

					<View style={styles.profileItemContainer}>
						<Text style={styles.profileLabelStyle}>NICKNAME</Text>
						<Text style={[styles.profileItemStyle, {color: 'grey', fontSize: 15}]}>Add A Nickname</Text>
					</View>

					<View style={styles.profileItemContainer}>
						<Text style={styles.profileLabelStyle}>LOCATION</Text>
						<Text style={[styles.profileItemStyle, {fontSize: 20}]}>Portland, OR USA</Text>
					</View>

					<View style={styles.profileItemContainer}>
						<Text style={styles.profileLabelStyle}>TORCH ID</Text>
						<Text style={[styles.profileItemStyle, {fontSize: 20}]}>@ripcityrebels</Text>
					</View>

					<View style={styles.profileItemContainer}>
						<Text style={styles.profileLabelStyle}>MOBILE</Text>
						<Text style={[styles.profileItemStyle, {fontSize: 20}]}>1 555 666 7777</Text>
					</View>

					<View style={styles.profileItemContainer}>
						<Text style={styles.profileLabelStyle}>EMAIL</Text>
						<Text style={[styles.profileItemStyle, {fontSize: 20}]}>gabrieljustware@gmail.com</Text>
					</View>

					<View style={styles.profileItemContainer}>
						<Text style={styles.profileLabelStyle}>BIRTHDAY</Text>
						<Text style={[styles.profileItemStyle, {fontSize: 20}]}>04 january, 1996</Text>
					</View>

					<View style={styles.profileItemContainer}>
						<Text style={styles.profileLabelStyle}>Gender</Text>
						<Text style={[styles.profileItemStyle, {color: 'grey', fontSize: 15}]}>Select</Text>
					</View>

					<View style={styles.profileItemContainer}>
						<Text style={styles.profileLabelStyle}>Height</Text>
						<Text style={[styles.profileItemStyle, {fontSize: 20}]}>6'2"</Text>
					</View>

					<View style={styles.profileItemContainer}>
						<Text style={styles.profileLabelStyle}>Weight</Text>
						<Text style={[styles.profileItemStyle, {fontSize: 20}]}>210 lbs</Text>
					</View>
				</View>

			</Image>
		);
	}
}

export default ProfileSettings;