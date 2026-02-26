import { LinearGradientButton, Text, View } from '@components';
import React from 'react';
import { Platform } from 'react-native';

function BackgroundScreening() {
  return (
    <View
      paddingTop={Platform.OS === 'ios' ? 'l' : 's'}
      backgroundColor="onPrimary"
      flex
      gap="b"
      paddingHorizontal
      align="center"
    >
      <Text
        style={{ fontSize: 28 }}
        font="SemiBold"
        color="primary2"
        text="PrevaCred"
      />
      <Text
        style={{ fontSize: 13.92 }}
        font="Medium"
        textAlign="center"
        color="primary"
      >
        The only patent pending personal identity that identifies individuals
        entering buildings, events, construction sites, personal homes & is a
        security measure that keeps your work & personal environments safe
      </Text>
      <LinearGradientButton title="Proceed" onPress={() => {}} />
    </View>
  );
}

export default BackgroundScreening;
