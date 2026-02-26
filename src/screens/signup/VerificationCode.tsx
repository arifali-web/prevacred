import {
  Button,
  Form,
  HeadingCard,
  OTPInput,
  Stepper,
  Text,
  TextInput,
  View,
} from '@components';
import React from 'react';
import { Platform } from 'react-native';

function VerificationCode() {
  return (
    <View
      flex
      backgroundColor="white"
      paddingTop={Platform.OS === 'ios' ? 'xl' : 'l'}
      gap
      paddingHorizontal
    >
      <Form>
        <View flex style={{ gap: 150 }}>
          <View>
            <Text
              marginTop
              textAlign="center"
              color="primary"
              font="Bold"
              size="h3"
              text="Verification Code"
            />
            <Text
              color="primary"
              textAlign="center"
              font="Medium"
              size="h5"
              text="We have sent the verification code to your email address"
            />
          </View>

          <OTPInput />
          <Button
            onPress={() => props.navigation.navigate('IdScreen')}
            label="Confirm"
          />
        </View>
      </Form>
    </View>
  );
}

export default VerificationCode;
