import { Image, Text, View } from '@components';
import React from 'react';
import { Platform } from 'react-native';

const Notification = () => {
  return (
    <View
      paddingTop={Platform.OS === 'ios' ? 'l' : 's'}
      backgroundColor="onPrimary"
      flex
      // gap="b"
      paddingHorizontal
      align="mid"
    >
      <View align="mid" style={{ marginTop: -150 }}>
        <Image src="NotificationGif" width={219} height={219} />
        <Text font="Medium" size="h4" color="primary" text="No Notifications" />
      </View>
    </View>
  );
};

export default Notification;
