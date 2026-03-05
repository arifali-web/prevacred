import { Button, Image, Text, View } from '@components';
import React from 'react';
import { Platform } from 'react-native';
import { UserProps } from '..';

function Success(props: UserProps<'Success'>) {
  return (
    <View
      flex
      backgroundColor="white"
      paddingTop={Platform.OS === 'ios' ? 'xl' : 's'}
      gap="xl"
      paddingHorizontal
      align="middle"
    >
      <View align="center" gap>
        <Image src="SuccessIcon" width={92.95} height={92.95} />
        <Text font="Bold" size="h3" text="Success!" />
        <Text
          font="Medium"
          textAlign="center"
          width={'80%'}
          style={{
            color: '#B6B6B6',
          }}
          size="h5"
          text="Congratulations! You have been successfully authenticated"
        />
      </View>

      <Button
        onPress={() => props.navigation.navigate('EditProfile')}
        label="Continue"
        // submitOnPress
      />
    </View>
  );
}

export default Success;
