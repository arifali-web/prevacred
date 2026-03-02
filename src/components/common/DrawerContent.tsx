import React from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Pressable, View, Text, Icon, Image } from '@components';
import { Platform } from 'react-native';

const items = [
  { label: 'Home', route: 'HomeDrawer', icon: 'Home' },
  { label: 'QR Code', route: 'QR Code', icon: 'Qr' }, // apne icon names yahan set karo
  { label: 'Customer Support', route: 'CustomerSupport', icon: 'Support' },
  { label: 'Renewal Alerts', route: 'Renewal Alerts', icon: 'Bell' },
  {
    label: 'Terms and Conditions',
    route: 'Terms and Conditions',
    icon: 'File',
  },
];

export const DrawerContent = (props: any) => {
  const state = props.navigation.getState();
  const activeRoute = state.routes[state.index]?.name;

  console.log(activeRoute, 'route');

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        paddingTop: 0,
        backgroundColor: '#fff',
        flex: 1,
      }}
    >
      {/* Header profile block */}
      <View
        style={{
          paddingTop: Platform.OS === 'ios' ? 60 : 40,
          paddingHorizontal: 24,
          paddingBottom: 18,
        }}
      >
        <View style={{ alignItems: 'flex-start' }}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/200?img=47' }}
            width={105}
            height={105}
            style={{
              borderRadius: 82,
              backgroundColor: '#eee',
              marginBottom: 14,
            }}
          />
          <Text
            style={{ fontSize: 16 }}
            font="SemiBold"
            color="onBackground"
            text="Joyce Oxford"
          />
          <Text
            style={{ fontSize: 16 }}
            font="Regular"
            color="Text"
            text="Member"
          />
        </View>
      </View>

      {/* Divider */}
      <View
        style={{ height: 1, backgroundColor: '#E6E6E6', marginBottom: 14 }}
      />

      {/* Menu */}
      <View style={{ paddingHorizontal: 18 }}>
        {items.map(item => {
          const isActive = activeRoute === item.route;

          return (
            <Pressable
              key={item.route}
              onPress={() => props.navigation.navigate(item.route)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 16,
                // paddingHorizontal: 10,
                borderRadius: 12,
                // backgroundColor: isActive ? '#F3F4F6' : 'transparent',
              }}
            >
              <Icon
                // @ts-ignore
                name={item.icon}
                size="s"
                tintColor={'#6C7072'}
                // tintColor={isActive ? '#111827' : '#6C7072'}
              />

              <Text
                style={{ marginLeft: 14, fontSize: 16 }}
                // font={isActive ? 'SemiBold' : 'Regular'}
                font="Medium"
                text={item.label}
              />
            </Pressable>
          );
        })}

        {/* Logout */}
        <Pressable
          onPress={() => {
            // logout logic
            props.navigation.navigate('Login');
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 16,
            // paddingHorizontal: 10,
            borderRadius: 12,
            // marginTop: 8,
          }}
        >
          <Icon name="Logout" size="s" tintColor="#6C7072" />
          <Text
            style={{ marginLeft: 14, fontSize: 16 }}
            font="Medium"
            text="Logout"
          />
        </Pressable>
      </View>
    </DrawerContentScrollView>
  );
};
