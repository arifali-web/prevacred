import {Icon, Image, Pressable, Text, View} from '@components';
import React from 'react';

export function SignUpheader({step, ...props}: any) {
  return (
    <View space="between" row align="center">
      <Pressable
        align="mid"
        backgroundColor="background"
        width={40}
        height={40}
        borderRadius="s"
        onPress={() => props.navigation.goBack()}>
        <Icon name="ArrowLeft" size="s" />
      </Pressable>
      <Image src="Logo" width={60} aspectRatio={1} resizeMode="contain" />
      <Text
        size="body"
        color="primary"
        font="SemiBold"
        text={`Step ${step} of 2`}
      />
    </View>
  );
}
