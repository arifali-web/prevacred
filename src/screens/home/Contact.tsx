import {
  Image,
  ImageBackground,
  LinearGradientButton,
  Text,
  View,
} from '@components';
import React from 'react';
import { Platform } from 'react-native';

const Contact = () => {
  return (
    <View
      paddingTop={Platform.OS === 'ios' ? 'l' : 's'}
      backgroundColor="onPrimary"
      flex
      gap="l"
      align="center"
    >
      <View gap="xl" paddingTop="xl">
        <ImageBackground
          src="CustomerSupBG" // if BtnBg is an imported image
          style={{
            height: 196,
            width: 301,
            borderRadius: 12,
            //   overflow: 'hidden',
            boxShadow: '0px 4px 4px 0px #00000040',
          }}
          // imageStyle={{ borderRadius: 12 }}
          resizeMode="stretch"
          align="mid"
        >
          <Image
            src="Phone"
            width={84}
            height={84}
            style={{ marginTop: -100, marginBottom: 20 }}
          />
          <Text
            font="Medium"
            textAlign="center"
            color="white"
            style={{ fontSize: 13.92 }}
          >
            Contact via Phone No
          </Text>
          <Text
            font="SemiBold"
            textAlign="center"
            color="white"
            style={{ fontSize: 26.92 }}
          >
            816.600.6200
          </Text>
        </ImageBackground>
        <ImageBackground
          src="CustomerSupBG" // if BtnBg is an imported image
          style={{
            height: 196,
            width: 301,
            borderRadius: 12,
            //   overflow: 'hidden',
            boxShadow: '0px 4px 4px 0px #00000040',
          }}
          // imageStyle={{ borderRadius: 12 }}
          resizeMode="stretch"
          align="mid"
        >
          <Image
            src="Mail"
            width={84}
            height={84}
            style={{ marginTop: -100, marginBottom: 20 }}
          />
          <Text
            font="Medium"
            textAlign="center"
            color="white"
            style={{ fontSize: 13.92 }}
          >
            Contact via Email
          </Text>
          <Text
            font="SemiBold"
            textAlign="center"
            color="white"
            style={{ fontSize: 20.92 }}
          >
            info@DiscreetCheck.com
          </Text>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Contact;
