import {
  Button,
  Form,
  HeadingCard,
  Stepper,
  Text,
  TextInput,
  View,
} from '@components';
import React from 'react';
import { Platform } from 'react-native';
import { UserProps } from '..';

function Otp(props: UserProps<'Otp'>) {
  return (
    <View
      flex
      backgroundColor="white"
      paddingTop={Platform.OS === 'ios' ? 'xl' : 's'}
      gap
      paddingHorizontal
    >
      <HeadingCard
        img="OtpIcon"
        heading="OTP Verification"
        subHeading="Enter the OTP code to proceed"
      />
      <Stepper total={4} currentIndex={3} />
      <Form>
        <View flex gap>
          <View gap marginVertical="xl">
            <TextInput
              id="email"
              type="text"
              next="phone"
              placeholder="Enter Email"
              style={{ borderColor: '#DDDDDD' }}
            />
            <Text
              color="primary"
              textAlign="center"
              font="Regular"
              size="h5"
              text="Or"
            />
            <TextInput
              id="phone"
              type="text"
              style={{ borderColor: '#DDDDDD' }}
              next="lastName"
              placeholder="Enter Mobile No."
            />
          </View>

          <Button
            onPress={() => props.navigation.navigate('VerificationCode')}
            label="Continue"
          />
        </View>
      </Form>
    </View>
  );
}

export default Otp;
