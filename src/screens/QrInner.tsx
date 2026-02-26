import {
  Image,
  LinearGradientButton,
  RevealImageCard,
  Text,
  View,
} from '@components';
import React from 'react';
import { Platform } from 'react-native';

function QrInner() {
  return (
    <View
      paddingTop={Platform.OS === 'ios' ? 'l' : 's'}
      backgroundColor="onPrimary"
      flex
      gap="l"
      align="center"
      paddingHorizontal
    >
      <View
        borderWidth={1}
        borderColor="lightgrey"
        width={'100%'}
        padding="l"
        align="center"
        gap="s"
        borderRadius="s"
      >
        <Image src="User" width={68} height={68} resizeMode="contain" />
        <Text font="Bold" size="body">
          Joyce Oxford
        </Text>
        <View row gap="s" align="center">
          <Text
            style={{ fontSize: 12 }}
            font="Regular"
            color="text3"
            text="Background Check"
          />
          <View
            // backgroundColor={
            //   item?.status === 'pending'
            //     ? 'pending'
            //     : item?.status === 'falied'
            //     ? 'error'
            //     : 'success'
            // }
            backgroundColor="success"
            height={22}
            borderRadius="xl"
            align="mid"
            paddingHorizontal
          >
            <Text font="Regular" size="small" color="white" text={'Passed'} />
          </View>
        </View>
        <View row gap="s" align="center">
          <Text
            style={{ fontSize: 12 }}
            font="Regular"
            color="text3"
            text="Entry Allowed"
          />
          <View
            // backgroundColor={
            //   item?.status === 'pending'
            //     ? 'pending'
            //     : item?.status === 'falied'
            //     ? 'error'
            //     : 'success'
            // }
            backgroundColor="success"
            height={22}
            borderRadius="xl"
            align="mid"
            paddingHorizontal
          >
            <Text font="Regular" size="small" color="white" text={'Yes'} />
          </View>
        </View>
      </View>

      <RevealImageCard />
      <LinearGradientButton title="Generate QR Code" onPress={() => {}} />
    </View>
  );
}

export default QrInner;
