import { Icon, Pressable, Text, View } from '@components';
import React from 'react';
import { Platform } from 'react-native';

export function SecHeader({ text, hide, ...props }: any) {
  const currentRouteName =
    props.navigation.getState().routes[props.navigation.getState().index].name;

  console.log(currentRouteName);

  return (
    <View
      paddingTop={Platform.OS === 'ios' ? 'xl' : 's'}
      paddingHorizontal
      row
      backgroundColor="white"
      space="between"
      align="center"
    >
      <Pressable onPress={() => props.navigation.goBack()}>
        <Icon
          name="ArrowRight"
          size="s"
          color="Text"
          //   tintColor={'#737373'}
          style={{ transform: [{ rotate: '180deg' }] }}
        />
      </Pressable>
      <Text
        font="SemiBold"
        style={{ fontSize: 18, color: '#232323' }}
        text={text || currentRouteName}
      />
      {hide || currentRouteName === 'Rules' ? (
        <View width={55} />
      ) : (
        <Pressable onPress={() => props.navigation.navigate('Info')}>
          <Icon name="Menu" size="s" />
        </Pressable>
      )}
    </View>
  );
}
