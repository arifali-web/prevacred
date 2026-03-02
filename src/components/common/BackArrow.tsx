import { Icon, Pressable, Text, View } from '@components';
import React from 'react';

export function BackArrow({ title, ...props }: any) {
  return (
    <View row gap space="between" align="center" marginBottom="s">
      <View row gap align="center">
        <Pressable
          align="mid"
          row
          gap
          // width={40}
          // height={40}
          onPress={() => props.navigation.goBack()}
        >
          <Icon
            name="ArrowRight2"
            size="xs"
            color="white"
            style={{ transform: [{ rotate: '180deg' }] }}
          />
          <Text size="h4" font="Medium" color="white">
            {title}
          </Text>
        </Pressable>
      </View>
      {props.children}
    </View>
  );
}
