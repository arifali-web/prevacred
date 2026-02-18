import React from 'react';
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
import {UserProps} from '.';
import {Platform} from 'react-native';
const Login = (props: UserProps<'Login'>) => {
  return (
    <Page paddingVertical="s" backgroundColor="onPrimary">
      <Form>
        <View
          paddingTop={Platform.OS === 'ios' ? 'xl' : 's'}
          flex
          gap="b"
          padding
          borderRadius="xs">
          <Image
            src="Logo"
            alignSelf="center"
            width={94}
            aspectRatio={1}
            resizeMode="contain"
          />
          <View marginVertical="l">
            <Text marginBottom="s" size="h1" font="SemiBold" text="Welcome" />
            <Text
              color="subHeading"
              font="Regular"
              style={{opacity: 0.6}}
              size="h6"
              text="Login to continue using your account"
            />
          </View>
          <TextInput
            id="email"
            type="email"
            next="password"
            textAlignVertical="center"
            // label='Email Address'
            placeholder="Email Address"
            left={() => <Icon name="Email" size="s" />}
            leftDull={() => <Icon name="EmailDull" size="s" />}
          />
          <TextInput
            id="password"
            type="password"
            // label='Password'
            placeholder="Password"
            left={() => <Icon name="Lock" size="s" />}
            leftDull={() => <Icon name="LockDull" size="s" />}
            rightDull={() => <Icon name="EyeDull" size="s" />}
            right={() => <Icon name="Eye" size="s" />}
          />
          <View row space="between" marginVertical="s">
            <Checkbox label="Remember me" id="remember" />
            <Pressable
              onPress={() => props.navigation.navigate('ForgotPassword')}>
              <Text
                size="h6"
                font="Regular"
                color="primary"
                text="Forgot Password"
              />
            </Pressable>
          </View>

          <Button
            onPress={() => props.navigation.navigate('Tabs')}
            label="Sign In"
          />
          <Text
            textAlign="center"
            marginVertical="s"
            size="body"
            color="title"
            text="OR"
          />
          <View row align="mid" gap>
            <Pressable>
              <Image src="Google" width={60} aspectRatio={1} />
            </Pressable>
            <Pressable>
              <Image src="Apple" width={60} aspectRatio={1} />
            </Pressable>
          </View>
          <Pressable
            marginTop="xl"
            onPress={() => props.navigation.navigate('Signup')}
            row
            gap="s"
            flex
            align="mid">
            <Text
              color="Text2"
              size="h6"
              font="Regular"
              text="Don’t have an account? "
            />
            <Text color="primary" size="h6" font="Regular" text="Register" />
          </Pressable>
        </View>
      </Form>
    </Page>
  );
};

export default Login;
