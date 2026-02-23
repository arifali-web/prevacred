import { Text, View } from '@components';
import React from 'react';
import { Platform } from 'react-native';

const CustomerSupport = () => {
  return (
    <View
      paddingTop={Platform.OS === 'ios' ? 'l' : 's'}
      backgroundColor="onPrimary"
      flex
      gap="b"
      paddingHorizontal
    >
      <Text>CustomerSupport</Text>
    </View>
  );
};

export default CustomerSupport;
