
import React, { PropTypes } from 'react';

import {
  Image,
  Alert,
  StyleSheet,
} from 'react-native';

import WideButton from './wideButton';

import { OFF_WHITE, OFF_BLACK, TURQUOISE } from '../../styles';

const styles = StyleSheet.create({
  onStyle: {
    borderColor: OFF_BLACK,
  },
  offStyle: {
    backgroundColor: TURQUOISE,
    borderWidth: 0,
    marginBottom: 0,
  },
  offTextStyle: {
    color: OFF_WHITE,
  },
});

const BluetoothButton = (props) => {
  let bluetoothButton;

  if (props.bluetoothOn) {
    bluetoothButton = (<WideButton
      style={styles.onStyle}
      text={"Bluetooth is on"}
      disabled={true}
      accessoryView={
        <Image
          source={require('../../assets/checkmark.png')}
        />
      }
    />);
  } else {
    bluetoothButton = (<WideButton
      style={styles.offStyle}
      textStyle={styles.offTextStyle}
      text={'Turn Bluetooth on'}
      onPress={() => {
        Alert.alert(
          'Bluetooth',
          'Go to settings to turn bluetooth on.',
        );
      }}
    />);
  }

  return bluetoothButton;
};

BluetoothButton.propTypes = {
  bluetoothOn: PropTypes.bool.isRequired,
};

export default BluetoothButton;