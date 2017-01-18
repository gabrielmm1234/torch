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


class PersonalSettings extends Component {

	onTorchIDPress() {
  		Actions.HomePage();
  	}

  	onProfileButtonPress() {
  		Actions.ProfileSettings();
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
					<TouchableOpacity onPress={this.onProfileButtonPress.bind(this)}>
						<View style={styles.celContainer}>
							<Icon name="user-circle" size={40} color="white" />
							<Text style={styles.optionTextStyle}> 
								Profile
							</Text>
						</View>
					</TouchableOpacity>
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

				<View style={styles.bottomOptionsContainer}>
					<Text style={styles.bottomOptionsText}>Favorites</Text>
					<Text style={styles.bottomOptionsText}>Sounds</Text>
					<Text style={styles.bottomOptionsText}>Notifications</Text>
				</View>
			</Image>
		);
	}
}

export default PersonalSettings;