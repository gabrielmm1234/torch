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
import { Col, Row, Grid } from "react-native-easy-grid";

class ProfileSettings extends Component {

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

					<Text style={[styles.headerTextStyle, styles.rightText]}>
						@gabrieljustware   <Icon name="user-circle" size={20} color="white" />
					</Text>

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

				<Grid>
					<Col style={{ width: 130 }}>
						<Row size={10}>
							<Text style={styles.profileLabelStyle}>NAME</Text>
						</Row>
						<Row size={10}>
							<Text style={styles.profileLabelStyle}>NICKNAME</Text>
						</Row>
						<Row size={10}>
							<Text style={styles.profileLabelStyle}>LOCATION</Text>
						</Row>
						<Row size={10}>
							<Text style={styles.profileLabelStyle}>TORCH ID</Text>
						</Row>
						<Row size={10}>
							<Text style={styles.profileLabelStyle}>MOBILE</Text>
						</Row>
						<Row size={10}>
							<Text style={styles.profileLabelStyle}>EMAIL</Text>
						</Row>
						<Row size={10}>
							<Text style={styles.profileLabelStyle}>BIRTHDAY</Text>
						</Row>
						<Row size={10}>
							<Text style={styles.profileLabelStyle}>Gender</Text>
						</Row>
						<Row size={10}>
							<Text style={styles.profileLabelStyle}>HEIGHT</Text>
						</Row>
						<Row size={10}>
							<Text style={styles.profileLabelStyle}>WEIGHT</Text>
						</Row>
					</Col>
    				<Col style={{ width: 160 }}>
    					<Row size={10}>
    						<Text style={[styles.textStyle, {fontSize: 35, paddingBottom: 10}]}>Gabriel Mesquita</Text>
    					</Row>
    					<Row size={10}>
    						<Text style={[styles.profileItemStyle, {color: 'grey', fontSize: 20, paddingBottom: 10}]}>Add A Nickname</Text>
    					</Row>
    					<Row size={10}>
    						<Text style={[styles.textStyle, {fontSize: 20, paddingBottom: 10}]}>Portland, OR USA</Text>
    					</Row>
    					<Row size={10}>
    						<Text style={[styles.profileItemStyle, {color: 'grey', fontSize: 15, paddingBottom: 10}]}>@gabrieljustware</Text>
    					</Row>
    					<Row size={10}>
    						<Text style={[styles.textStyle, {fontSize: 20, paddingBottom: 10}]}>1 555 666 7777</Text>
    					</Row>
    					<Row size={10}>
    						<Text style={[styles.textStyle, {fontSize: 20, paddingBottom: 10}]}>gabrieljustware@gmail.com</Text>
    					</Row>
    					<Row size={10}>
    						<Text style={[styles.textStyle, {fontSize: 20, paddingBottom: 10}]}>04 January, 1996</Text>
    					</Row>
    					<Row size={10}>
    						<Text style={[styles.profileItemStyle, {color: 'grey', fontSize: 15, paddingBottom: 10}]}>Select</Text>
    					</Row>
    					<Row size={10}>
    						<Text style={[styles.profileItemStyle, {fontSize: 20, paddingBottom: 10}]}>6'22"</Text>
    					</Row>
    					<Row size={10}>
    						<Text style={[styles.profileItemStyle, {fontSize: 20, paddingBottom: 10}]}>210 lbs</Text>
    					</Row>
    				</Col>

    				<Col style={{ width: 60 }}>
    					<Row size={10}>
    						<Text style={[styles.profileItemStyle, {color: 'grey', fontSize: 20, paddingBottom: 10}]}></Text>
    					</Row>
    					<Row size={10}>
    						<Text style={[styles.profileItemStyle, {color: 'grey', fontSize: 20, paddingBottom: 10}]}></Text>
    					</Row>
    					<Row size={10}>
    						<Text style={[styles.profileItemStyle, {color: 'grey', fontSize: 20}]}>Public</Text>
    					</Row>
    					<Row size={10}>
    						<Text style={[styles.profileItemStyle, {color: 'grey', fontSize: 20}]}>Public</Text>
    					</Row>
    					<Row size={10}>
    						<Text style={[styles.profileItemStyle, {color: 'grey', fontSize: 20}]}>Always</Text>
    					</Row>
    					<Row size={10}>
    						<Text style={[styles.profileItemStyle, {color: 'grey', fontSize: 20}]}>Private</Text>
    					</Row>
    					<Row size={10}>
    						<Text style={[styles.profileItemStyle, {color: 'grey', fontSize: 20}]}>Private</Text>
    					</Row>
    					<Row size={10}>
    						<Text style={[styles.profileItemStyle, {color: 'grey', fontSize: 20}]}>Public</Text>
    					</Row>
    					<Row size={10}>
    						<Text style={[styles.profileItemStyle, {color: 'grey', fontSize: 20}]}>Public</Text>
    					</Row>
    					<Row size={10}>
    						<Text style={[styles.profileItemStyle, {color: 'grey', fontSize: 20}]}>Public</Text>
    					</Row>
    				</Col>
				</Grid>

			</Image>
		);
	}
}

export default ProfileSettings;