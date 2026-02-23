import { FlatList, RenewalCard, Text, View } from '@components';
import React from 'react';
import { Platform } from 'react-native';

const data = [
  {
    id: 1,
    avatarText: 'PC',
    title: 'Doc Renewal Alert',
    message:
      'Your QR Code for W2 certificate is going to expire in 3 days, Kindly renew your...',
    time: '36 min ago',
    variant: 'light',
  },
  {
    id: 2,
    avatarText: 'PC',
    title: 'Doc Renewal Alert',
    message:
      'Your QR Code for W2 certificate is going to expire in 5 days, Kindly renew your...',
    time: '2 days ago',
    variant: 'danger',
  },
  {
    id: 3,
    avatarText: 'PC',
    title: 'Doc Renewal Alert',
    message:
      'Your QR Code for W2 certificate is going to expire in 7 days, Kindly renew your...',
    time: '4 days ago',
    variant: 'danger',
  },
];

const RenewalAlerts = () => {
  return (
    <View
      paddingTop={Platform.OS === 'ios' ? 'l' : 's'}
      backgroundColor="onPrimary"
      flex
      gap="b"
      //   paddingHorizontal
      borderRadius="xs"
    >
      <Text
        size="h3"
        font="SemiBold"
        color="primary"
        text="Alerts from XYZ Organization"
        textAlign="center"
      />
      <FlatList
        data={data}
        gap
        keyExtractor={item => item.id.toString()}
        scrollEnabled={true}
        style={{ width: '100%' }}
        renderItem={({ item }) => <RenewalCard item={item} />}
      />
    </View>
  );
};

export default RenewalAlerts;
