import { Icon, Image, Text, View } from '@components';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Platform, Pressable } from 'react-native';
type DrawerNavProp = DrawerNavigationProp<any>;
export function Header() {
  const navigation = useNavigation<DrawerNavProp>();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View
      paddingHorizontal
      paddingBottom="s"
      paddingTop={Platform.OS === 'ios' ? 'xl' : 's'}
      row
      backgroundColor="white"
      space="between"
      align="center"
    >
      <View row gap align="center">
        <Pressable onPress={() => navigation.navigate('EditProfile')}>
          <Image src="User" width={60} height={60} resizeMode="contain" />
        </Pressable>
        <View>
          <Text
            size="h3"
            font="Bold"
            color="primary"
            text="Welcome Back"
            style={{ lineHeight: Platform.OS === 'ios' ? 0 : 24 }}
          />
          <Text size="h6" font="Medium" color="primary" text="Joyce Oxford" />
        </View>
      </View>
      <Pressable onPress={openDrawer} style={{ padding: 0, margin: 0 }}>
        <Icon name="Menu" size="s" />
      </Pressable>
    </View>
  );
}
