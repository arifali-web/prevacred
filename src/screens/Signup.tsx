import React from 'react';
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
} from '@components';

import {UserProps} from '.';
import {Platform} from 'react-native';

const Signup = (props: UserProps<'Signup'>) => {
  return (
    <View
      paddingTop={Platform.OS === 'ios' ? 'xl' : 's'}
      flex
      gap="b"
      paddingHorizontal
      backgroundColor="onPrimary">
      <Form>
        <SignUpheader step={1} {...props} />
        <Page>
          <View flex gap borderRadius="xs">
            <View marginTop="l">
              <Text size="h3" font="SemiBold" text="Create Account" />
              <Text
                color="subHeading"
                font="Regular"
                size="h6"
                text="Register yourself here to continue.."
              />
            </View>
            <MediaPicker
              id="profile"
              type="image"
              next="name"
              max={1}
              children={({firstImage, Error, images, openPicker}) => {
                console.log(firstImage, 'firstImage');
                return (
                  <View row flex align="center" gap>
                    <Pressable onPress={() => openPicker({override: true})}>
                      {firstImage?.path ? (
                        <Image
                          source={{uri: firstImage?.path}}
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
            />
            <TextInput
              id="name"
              type="text"
              next="email"
              placeholder="Full Name"
              left={() => <Icon name="User" size="s" />}
              leftDull={() => <Icon name="UserDull" size="s" />}
            />
            <TextInput
              id="email"
              next="phone"
              type="email"
              placeholder="Email Address"
              left={() => <Icon name="Email" size="s" />}
              leftDull={() => <Icon name="EmailDull" size="s" />}
            />
            <TextInput
              id="phone"
              type="text"
              next="password"
              placeholder="Phone Number"
              left={() => <Icon name="Phone" size="s" />}
              leftDull={() => <Icon name="PhoneDull" size="s" />}
            />
            <TextInput
              id="password"
              type="password"
              next="confirmPassword"
              placeholder="Password"
              right={() => <Icon name="Eye" size="s" />}
              rightDull={() => <Icon name="EyeDull" size="s" />}
              leftDull={() => <Icon name="LockDull" size="s" />}
              left={() => <Icon name="Lock" size="s" />}
            />
            <TextInput
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              right={() => <Icon name="Eye" size="xs" />}
              rightDull={() => <Icon name="EyeDull" size="xs" />}
              leftDull={() => <Icon name="LockDull" size="s" />}
              left={() => <Icon name="Lock" size="s" />}
            />
            <View row marginVertical="s">
              <Checkbox label="i agree to" id="terms" />
              <Pressable>
                <Text
                  color="primary"
                  size="h6"
                  font="Regular"
                  text=" Terms & Conditions"
                />
              </Pressable>
            </View>
            <Button
              onPress={() => props.navigation.navigate('ProfessionalInfo')}
              label="Next"
            />
            <Pressable
              onPress={() => props.navigation.navigate('Login')}
              row
              gap="xs"
              flex
              align="mid">
              <Text size="h6" font="Regular" text="Already have an account? " />
              <Text color="primary" size="h6" font="Regular" text="Sign in" />
            </Pressable>
          </View>
        </Page>
      </Form>
    </View>
  );
};

export default Signup;
