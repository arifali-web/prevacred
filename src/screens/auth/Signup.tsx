import React, { useMemo, useState } from 'react';
import {
  Button,
  Form,
  Icon,
  Page,
  TextInput,
  View,
  ImageBackground,
  HeadingCard,
  Stepper,
  OptionPicker,
} from '@components';

import { UserProps } from '..';
import { Platform } from 'react-native';
import { usStates } from '@config';

const Signup = (props: UserProps<'Signup'>) => {
  return (
    <ImageBackground
      src="LoginBg"
      paddingTop={Platform.OS === 'ios' ? 'xl' : 's'}
      flex
      gap="b"
      paddingHorizontal
    >
      <Page>
        <Form>
          <View flex gap>
            <HeadingCard
              img="SignUpIcon"
              heading="Register Account"
              subHeading="Enter your email and password to log in"
            />
            <Stepper total={4} currentIndex={0} /> // first active
            <TextInput
              id="organization"
              type="text"
              next="state"
              placeholder="Organization"
            />
            <OptionPicker
              id="state"
              next="firstName"
              placeholder="Select State"
              title="State"
              // value={{
              //     id: 1,
              //     title: 'New York',
              // }}
              options={usStates}
              right={() => (
                <Icon
                  name="ArrowRight"
                  size="xs"
                  tintColor={'#AAAAAA'}
                  style={{ transform: [{ rotate: '90deg' }] }}
                />
              )}
              editable={true}
            />
            <TextInput
              id="firstName"
              type="text"
              next="lastName"
              placeholder="First Name"
            />
            <TextInput
              id="lastName"
              type="text"
              next="email"
              placeholder="Last Name"
            />
            <TextInput
              id="email"
              next="password"
              type="email"
              placeholder="Email Address"
            />
            <TextInput
              id="password"
              type="password"
              next="confirmPassword"
              placeholder="Password"
            />
            <TextInput
              id="confirmPassword"
              type="password"
              matchFrom="password"
              placeholder="Confirm Password"
            />
            {/* <View row marginVertical="s">
                <Checkbox label="i agree to" id="terms" />
                <Pressable>
                  <Text
                    color="primary"
                    size="h6"
                    font="Regular"
                    text=" Terms & Conditions"
                  />
                </Pressable>
              </View> */}
            <View marginVertical="l">
              <Button
                onPress={() => props.navigation.navigate('TakePicture')}
                label="Next"
                // submitOnPress
              />
            </View>
            {/* <Pressable
                onPress={() => props.navigation.navigate('Login')}
                row
                gap="xs"
                flex
                align="mid"
              >
                <Text
                  size="h6"
                  font="Regular"
                  text="Already have an account? "
                />
                <Text color="primary" size="h6" font="Regular" text="Sign in" />
              </Pressable> */}
          </View>
        </Form>
      </Page>
    </ImageBackground>
  );
};

export default Signup;
