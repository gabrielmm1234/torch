import React, { Component } from 'react';
import {
	View,
	Text,
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
			<BackgroundImage>

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
						<ProfileItem>Portland, OR USA</ProfileItem>
					</ProfileItemContainer>

					<ProfileItemContainer>
						<ProfileLabel>TORCH ID</ProfileLabel>
						<ProfileItem>@ripcityrebels</ProfileItem>
					</ProfileItemContainer>

					<ProfileItemContainer>
						<ProfileLabel>MOBILE</ProfileLabel>
						<ProfileItem>1 555 666 7777</ProfileItem>
					</ProfileItemContainer>

					<ProfileItemContainer>
						<ProfileLabel>EMAIL</ProfileLabel>
						<ProfileItem>gabrieljustware@gmail.com</ProfileItem>
					</ProfileItemContainer>

					<ProfileItemContainer>
						<ProfileLabel>BIRTHDAY</ProfileLabel>
						<ProfileItem>04 january, 1996</ProfileItem>
					</ProfileItemContainer>

					<ProfileItemContainer>
						<ProfileLabel>Gender</ProfileLabel>
						<Text style={[styles.profileItemStyle, {color: 'grey', fontSize: 15}]}>Select</Text>
					</ProfileItemContainer>

					<ProfileItemContainer>
						<ProfileLabel>Height</ProfileLabel>
						<ProfileItem>6'2"</ProfileItem>
					</ProfileItemContainer>

					<ProfileItemContainer>
						<ProfileLabel>Weight</ProfileLabel>
						<ProfileItem>210 lbs</ProfileItem>
					</ProfileItemContainer>
				</View>

			</BackgroundImage>
		);
	}
}

export default ProfileSettings;
