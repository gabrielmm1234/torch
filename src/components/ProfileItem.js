import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import styles from './styles';

class ProfileItem extends Component {
  render(){
    <Text style={[styles.profileItemStyle, {fontSize: 20}]} />
  }
}

export default ProfileItem;
