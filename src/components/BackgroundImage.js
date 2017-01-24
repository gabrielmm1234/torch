import React, { Component } from 'react';
import {
  Image,
} from 'react-native';
import styles from './styles';

class BackgroundImage extends Component {
  render(){
    <Image source={require('../assets/basketball.jpg')} style={styles.backgroundImage} />
  }
}

export default BackgroundImage;
