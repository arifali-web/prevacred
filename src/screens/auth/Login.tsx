import React, { useState } from 'react';
import {
  Button,
  Form,
  HeadingCard,
  Icon,
  Image,
  ImageBackground,
  Page,
  Pressable,
  Text,
  TextInput,
  View,
} from '@components';
import { KeyboardAvoidingView, Platform, Switch } from 'react-native';
import { UserProps } from '..';
const Login = (props: UserProps<'Login'>) => {
  const [checked, setChecked] = useState(false);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const onFinish = (val: any) => {
    console.log(val, 'val');
  };

  return (
    // <KeyboardAvoidingView
    //   style={{ flex: 1 }}
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //   keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
    // >
    <ImageBackground
      src="LoginBg"
      resizeMode="cover"
      flex
      paddingTop={Platform.OS === 'ios' ? 'xl' : 's'}
      padding
    >
      <Page gap="xl">
        <HeadingCard
          img="LoginIcon"
          heading="Sign in to your Account"
          subHeading="Enter your email and password to log in "
        />
        <Form>
          <View flex gap="b" align="middle">
            <TextInput
              id="email"
              type="email"
              next="password"
              textAlignVertical="center"
              placeholder="Email"
              right={() => <Icon name="User" size="s" />}
            />
            <TextInput
              id="password"
              type="password"
              placeholder="Password"
              right={() => <Icon name="Lock" size="s" />}
            />
            <View row space="between" marginVertical="s" align="center">
              {/* <Checkbox label="Remember me" id="remember" /> */}
              <Text
                color="primary"
                font="Medium"
                size="h6"
                text="Remember me"
              />
              <Switch
                id="remember"
                onChange={() => setChecked(!checked)}
                value={checked}
                style={{
                  transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
                  marginRight: Platform.OS === 'ios' ? 8 : 0,
                }}
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
              onPress={() => props.navigation.navigate('Drawer')}
              label="Login"
              background
              // submitOnPress
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
      </Page>
    </ImageBackground>
    // </KeyboardAvoidingView>
  );
};

export default Login;
