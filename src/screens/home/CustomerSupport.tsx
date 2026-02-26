import { LinearGradientButton, Text, View } from '@components';
import React from 'react';
import { Platform } from 'react-native';
import { UserProps } from '..';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const CustomerSupport = () => {
  const navigation = useNavigation<StackNavigationProp<any, any>>();
  return (
    <View
      paddingTop={Platform.OS === 'ios' ? 'l' : 's'}
      backgroundColor="onPrimary"
      flex
      gap="b"
      paddingHorizontal
    >
      <Text
        font="SemiBold"
        textAlign="center"
        color="Text"
        style={{ fontSize: 28 }}
      >
        Welcome to our Superb Customer Service
      </Text>
      <Text
        font="Medium"
        textAlign="center"
        color="Text"
        style={{ fontSize: 13.92 }}
      >
        We respond within 4 business hours, you are not left wondering if
        someone will return you call or email inquiry.
      </Text>

      <LinearGradientButton
        title="Contact Customer Support"
        onPress={() => navigation.navigate('Home', { screen: 'Contact' })}
      />
    </View>
  );
};

export default CustomerSupport;
