import {Text, View} from '@components';
import React from 'react';
import {StyleSheet} from 'react-native';

export const Notch = () => {
  return <View style={styles.notch} />;
};

export const Label = ({text}: {text: string}) => {
  return (
    <View backgroundColor="onBtn" padding align="center">
      <Text font="Regular" color="subHeading">
        {text}
      </Text>
    </View>
  );
};

export const RailSelected = () => {
  return <View style={styles.railSelected} />;
};

export const Rail = () => {
  return <View style={styles.rail} />;
};

export const Thumb = () => {
  return <View style={styles.thumb} />;
};

const styles = StyleSheet.create({
  label: {
    padding: 4,
    borderRadius: 4,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  labelText: {
    fontSize: 12,
    color: '#007AFF',
  },
  notch: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#007AFF',
  },
  railSelected: {
    height: 4,
    borderRadius: 2,
    backgroundColor: '#007AFF',
  },
  rail: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#ccc',
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#007AFF',
  },
});
