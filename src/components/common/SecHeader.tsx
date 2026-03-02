import { Icon, Pressable, Text, View } from '@components';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Platform } from 'react-native';

export function SecHeader({ text, hide, route, options, ...props }: any) {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const currentRouteName =
    props.navigation.getState().routes[props.navigation.getState().index].name;
  const title = options?.title ?? route?.name;

  return (
    <View
      paddingTop={Platform.OS === 'ios' ? 'xl' : 's'}
      paddingHorizontal
      paddingBottom="s"
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
        text={text || title}
      />
      {hide || currentRouteName === 'Rules' ? (
        <View width={55} />
      ) : (
        <Pressable onPress={openDrawer}>
          <Icon name="Menu" size="s" />
        </Pressable>
      )}
    </View>
  );
}
