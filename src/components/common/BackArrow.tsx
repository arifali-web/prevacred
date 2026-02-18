import {Icon, Pressable, Text, View} from '@components';
import React from 'react';

export function BackArrow({title, ...props}: any) {
  return (
    <View row gap space="between" align="center" marginBottom>
      <View row gap align="center">
        <Pressable
          align="mid"
          backgroundColor={props.backgroundColor ? 'onBtn' : 'background'}
          width={40}
          height={40}
          borderRadius="s"
          onPress={() => props.navigation.goBack()}>
          <Icon name="ArrowLeft" size="s" />
        </Pressable>
        <Text size="h4" font="Medium">
          {title}
        </Text>
      </View>
      {props.children}
    </View>
  );
}
