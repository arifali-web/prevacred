import React, { useMemo, useState } from 'react';
import {
  Button,
  Form,
  Icon,
  Image,
  Page,
  Pressable,
  Text,
  TextInput,
  View,
  MediaPicker,
  SignUpheader,
  Checkbox,
  ImageBackground,
  HeadingCard,
  Stepper,
} from '@components';

import { UserProps } from '..';
import { Platform } from 'react-native';

const Signup = (props: UserProps<'Signup'>) => {
  return (
    <ImageBackground
      src="LoginBg"
      paddingTop={Platform.OS === 'ios' ? 'xl' : 's'}
      flex
      gap="b"
      paddingHorizontal
    >
      <Form>
        <Page>
          <View flex gap>
            <HeadingCard
              img="SignUpIcon"
              heading="Register Account"
              subHeading="Enter your email and password to log in"
            />
            <Stepper total={4} currentIndex={0} /> // first active
            {/* <Stepper total={4} currentIndex={1} /> // step 1 completed, step 2
              active
              <Stepper total={4} currentIndex={2} />
              <Stepper total={4} currentIndex={3} /> // last active */}
            {/* <MediaPicker
                id="profile"
                type="image"
                next="name"
                max={1}
                children={({ firstImage, Error, images, openPicker }) => {
                  console.log(firstImage, 'firstImage');
                  return (
                    <View row flex align="center" gap>
                      <Pressable onPress={() => openPicker({ override: true })}>
                        {firstImage?.path ? (
                          <Image
                            source={{ uri: firstImage?.path }}
                            height={64}
                            width={64}
                            borderRadius="s"
                            resizeMode="cover"
                          />
                        ) : (
                          <Image
                            src={'Profile'}
                            height={64}
                            width={64}
                            resizeMode="contain"
                          />
                        )}
                      </Pressable>
                      <View>
                        <Text
                          size="h5"
                          marginBottom="s"
                          font="SemiBold"
                          text="Profile Picture"
                        />
                        <Text
                          size="small"
                          font="SemiBold"
                          text="Click to upload your profile picture"
                        />
                      </View>
                    </View>
                  );
                }}
              /> */}
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
              next="phone"
              type="email"
              placeholder="Email Address"
            />
            {/* <TextInput
                id="phone"
                type="text"
                next="password"
                placeholder="Phone Number"
              /> */}
            <TextInput
              id="password"
              type="password"
              next="confirmPassword"
              placeholder="Password"
            />
            <TextInput
              id="confirmPassword"
              type="password"
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
            <View marginTop="l">
              <Button
                onPress={() => props.navigation.navigate('TakePicture')}
                label="Next"
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
        </Page>
      </Form>
    </ImageBackground>
  );
};

export default Signup;
