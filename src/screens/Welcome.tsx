import React from 'react';
import {
  Button,
  FlatList,
  Icon,
  Image,
  ImageBackground,
  Page,
  Text,
  View,
} from '@components';
import { UserProps } from '.';

const checkItem = [
  'Instant access to verified credentitials.',
  'Trusted Identity Verification, Secured by Technology.',
  'Reduce Operational Costs for Your Organization.',
];

const AlfredWelcome = (props: UserProps<'Welcome'>) => {
  return (
    // <Page flex backgroundColor="white">
      <ImageBackground src="WelcomeBg" height={'100%'}>
        <View padding margin flex align="middle">
          <View flex align="middle" style={{ marginTop: 50 }}>
            <Text
              style={{
                fontSize: 38,
              }}
              size="h1"
              textAlign="center"
              font="Bold"
              color="primary"
            >
              Welcome to
            </Text>
            <Image
              src="Logo"
              height={120}
              width={164}
              style={{
                marginTop: -50,
                marginBottom: -20,
              }}
              alignSelf="center"
              resizeMode="contain"
            />
            <Text
              size="h5"
              textAlign="center"
              font="Bold"
              color="primary"
            >
              Revolutionizing Credential Verification and Screening
            </Text>
            <FlatList
              align="middle"
              marginTop="l"
              gap="l"
              scrollEnabled={false}
              data={checkItem}
              renderItem={({ item }) => (
                <View row align="center" gap="s">
                  <Icon name="Checked" size="m" />
                  <Text
                    style={{
                      fontSize: 14,
                    }}
                    font="Medium"
                    color="Text"
                  >
                    {item}
                  </Text>
                </View>
              )}
            />
          </View>
          <View flex align="bottom" gap='b'>
            <Image
              src="Thumb"
              height={275}
              width={274}
              alignSelf="center"
              resizeMode="contain"
            />
            <View>
              <Button
                height={66}
                type="Solid"
                background
                label="continue"
                onPress={() => props.navigation.navigate('Login')}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    // </Page>
  );
};

export default AlfredWelcome;
