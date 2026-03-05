import React from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Pressable, View, Text, Icon, Image } from '@components';
import { Platform } from 'react-native';

// const items = [
//   { label: 'Home', tab: 'HomeDrawer', route: 'HomeMain', icon: 'Home' },
//   { label: 'QR Code', route: 'QRCode', tab: 'HomeDrawer', icon: 'Qr' },
//   {
//     label: 'Customer Support',
//     route: 'CustomerSupport',
//     tab: 'HomeDrawer',
//     icon: 'Support',
//   },
//   {
//     label: 'Renewal Alerts',
//     tab: 'HomeDrawer',
//     route: 'RenewalAlert',
//     icon: 'Bell',
//   },
//   {
//     label: 'Terms and Conditions',
//     route: 'Terms and Conditions',
//     icon: 'File',
//   },
// ];

const items = [
  {
    label: 'Home',
    tab: 'HomeDrawer',
    tabScreen: 'Home',
    stackScreen: 'HomeMain',
    icon: 'Home',
  },
  { label: 'QR Code', tab: 'HomeDrawer', screen: 'QRCode', icon: 'Qr' },
  {
    label: 'Renewal Alerts',
    tab: 'HomeDrawer',
    screen: 'RenewalAlert',
    icon: 'Bell',
  },
  {
    label: 'Customer Support',
    tab: 'HomeDrawer',
    screen: 'Home',
    icon: 'Support',
    stack: 'CustomerSupport',
  },
  {
    label: 'Terms and Conditions',
    route: 'Terms and Conditions',
    icon: 'File',
  },
];

export const DrawerContent = (props: any) => {
  const state = props.navigation.getState();
  const activeRoute = state.routes[state.index]?.name;

  const go = (item: any) => {
    props.navigation.closeDrawer?.();

    // 1) Drawer -> Tabs -> Stack (HomeMain etc)
    if (item.tab && item.tabScreen && item.stackScreen) {
      props.navigation.navigate(item.tab, {
        screen: item.tabScreen,
        params: { screen: item.stackScreen },
      });
      return;
    }

    // 2) Drawer -> Tabs (QRCode, RenewalAlert etc)
    if (item.tab && item.screen && !item.stack) {
      props.navigation.navigate(item.tab, { screen: item.screen });
      return;
    }

    // 3) Drawer -> Tabs -> Stack (CustomerSupport etc)
    if (item.tab && item.screen && item.stack) {
      props.navigation.navigate(item.tab, {
        screen: item.screen,
        params: { screen: item.stack },
      });
      return;
    }

    // 4) Direct route
    if (item.route) {
      props.navigation.navigate(item.route);
    }
  };

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
              onPress={() => go(item)}
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
