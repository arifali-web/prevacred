import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  Form,
  Icon,
  Image,
  ImageBackground,
  OTPInput,
  Page,
  PhoneInput,
  Pressable,
  Scroll,
  Text,
  TextInput,
  View,
} from '@components';
import { UserProps } from '.';
import { Platform, Switch } from 'react-native';
const Login = (props: UserProps<'Login'>) => {
  const [checked, setChecked] = useState(false);
  return (
    <ImageBackground src="LoginBg" flex>
      {/* <Page paddingVertical="s"> */}
      <Form>
        <View
          paddingTop={Platform.OS === 'ios' ? 'xl' : 's'}
          flex
          gap="b"
          padding
          borderRadius="xs"
          align="middle"
        >
          <View marginBottom="xl" align="center">
            <Image
              src="LoginIcon"
              alignSelf="center"
              width={94}
              aspectRatio={1}
              resizeMode="contain"
            />
            <Text
              marginBottom="s"
              color="primary"
              style={{ fontSize: 24.13 }}
              font="SemiBold"
              text="Sign in to your Account"
            />
            <Text
              color="primary"
              font="Regular"
              size="h6"
              text="Enter your email and password to log in "
            />
          </View>
          <TextInput
            id="email"
            type="email"
            next="password"
            textAlignVertical="center"
            placeholder="Username"
            right={() => <Icon name="User" size="s" />}
            rightDull={() => <Icon name="User" size="s" />}
          />
          <TextInput
            id="password"
            type="password"
            placeholder="Password"
            right={() => <Icon name="Lock" size="s" />}
            rightDull={() => <Icon name="Lock" size="s" />}
          />
          <View row space="between" marginVertical="s" align="center">
            {/* <Checkbox label="Remember me" id="remember" /> */}
            <Text color="primary" font="Medium" size="h6" text="Remember me" />
            <Switch
              id="remember"
              onChange={() => setChecked(!checked)}
              value={checked}
              style={{ transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }] }}
            />
            {/* <Pressable
              onPress={() => props.navigation.navigate('ForgotPassword')}>
              <Text
                size="h6"
                font="Regular"
                color="primary"
                text="Forgot Password"
              />
            </Pressable> */}
          </View>

          <Button
            onPress={() => props.navigation.navigate('Tabs')}
            label="Login"
            background
            height={63}
          />
          <Pressable
            onPress={() => props.navigation.navigate('Signup')}
            row
            gap="xs"
            align="mid"
          >
            <Text
              color="Text2"
              // size="h6"
              style={{ fontSize: 14.92 }}
              font="Medium"
              text="Don’t have an account? "
            />
            <Text
              color="text3"
              style={{ fontSize: 14.92 }}
              font="SemiBold"
              text="Sign Up"
            />
          </Pressable>

          <Image
            src="Logo"
            alignSelf="center"
            width={164}
            aspectRatio={1}
            resizeMode="contain"
          />
        </View>
      </Form>
      {/* </Page> */}
    </ImageBackground>
  );
};

export default Login;
