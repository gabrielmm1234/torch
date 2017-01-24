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
					<ProfileItemContainer>
						<ProfileLabel>NAME</ProfileLabel>
						<Text style={[styles.textStyle, {fontSize: 40}]}>Gabriel Mesquita</Text>
					</ProfileItemContainer>

					<ProfileItemContainer>
						<ProfileLabel>NICKNAME</ProfileLabel>
						<Text style={[styles.profileItemStyle, {color: 'grey', fontSize: 15}]}>Add A Nickname</Text>
					</ProfileItemContainer>

					<ProfileItemContainer>
						<ProfileLabel>LOCATION</ProfileLabel>
						<Text style={[styles.profileItemStyle, {fontSize: 20}]}>Portland, OR USA</Text>
					</ProfileItemContainer>

					<ProfileItemContainer>
						<ProfileLabel>TORCH ID</ProfileLabel>
						<Text style={[styles.profileItemStyle, {fontSize: 20}]}>@ripcityrebels</Text>
					</ProfileItemContainer>

					<ProfileItemContainer>
						<ProfileLabel>MOBILE</ProfileLabel>
						<Text style={[styles.profileItemStyle, {fontSize: 20}]}>1 555 666 7777</Text>
					</ProfileItemContainer>

					<ProfileItemContainer>
						<ProfileLabel>EMAIL</ProfileLabel>
						<Text style={[styles.profileItemStyle, {fontSize: 20}]}>gabrieljustware@gmail.com</Text>
					</ProfileItemContainer>

					<ProfileItemContainer>
						<ProfileLabel>BIRTHDAY</ProfileLabel>
						<Text style={[styles.profileItemStyle, {fontSize: 20}]}>04 january, 1996</Text>
					</ProfileItemContainer>

					<ProfileItemContainer>
						<ProfileLabel>Gender</ProfileLabel>
						<Text style={[styles.profileItemStyle, {color: 'grey', fontSize: 15}]}>Select</Text>
					</ProfileItemContainer>

					<ProfileItemContainer>
						<ProfileLabel>Height</ProfileLabel>
						<Text style={[styles.profileItemStyle, {fontSize: 20}]}>6'2"</Text>
					</ProfileItemContainer>

					<ProfileItemContainer>
						<ProfileLabel>Weight</ProfileLabel>
						<Text style={[styles.profileItemStyle, {fontSize: 20}]}>210 lbs</Text>
					</ProfileItemContainer>
				</View>

			</Image>
		);
	}
}

export default ProfileSettings;
