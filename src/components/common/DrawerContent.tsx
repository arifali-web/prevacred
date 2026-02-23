import React from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Pressable, View, Text, Icon, Image } from '@components';

const items = [
  { label: 'Home', route: 'Home', icon: 'Home' },
  { label: 'QR Code', route: 'QR Code', icon: 'Qr' }, // apne icon names yahan set karo
  { label: 'Customer Support', route: 'Customer Support', icon: 'Support' },
  { label: 'Renewal Alerts', route: 'Renewal Alerts', icon: 'Bell' },
  { label: 'Terms and Conditions', route: 'Terms and Conditions', icon: 'Doc' },
];

export const DrawerContent = (props: any) => {
  const state = props.navigation.getState();
  const activeRoute = state.routes[state.index]?.name;

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
        style={{ paddingTop: 44, paddingHorizontal: 24, paddingBottom: 18 }}
      >
        <View style={{ alignItems: 'flex-start' }}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/200?img=47' }}
            style={{
              width: 84,
              height: 84,
              borderRadius: 42,
              backgroundColor: '#eee',
              marginBottom: 14,
            }}
          />
          <Text
            style={{ fontSize: 22, lineHeight: 26 }}
            font="SemiBold"
            color="onBackground"
            text="Joyce Oxford"
          />
          <Text
            style={{ fontSize: 16, marginTop: 4 }}
            font="Regular"
            // agar tumhare theme me grey key ho to use karo, warna inline:
            // color="Text"
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
                paddingHorizontal: 10,
                borderRadius: 12,
                backgroundColor: isActive ? '#F3F4F6' : 'transparent',
              }}
            >
              <Icon
                name={item.icon}
                size="m"
                tintColor={isActive ? '#111827' : '#6B7280'}
              />

              <Text
                style={{ marginLeft: 14, fontSize: 18 }}
                font={isActive ? 'SemiBold' : 'Regular'}
                text={item.label}
              />
            </Pressable>
          );
        })}

        {/* Logout */}
        <Pressable
          onPress={() => {
            // logout logic
            // props.navigation.closeDrawer();
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 16,
            paddingHorizontal: 10,
            borderRadius: 12,
            marginTop: 8,
          }}
        >
          <Icon name="Logout" size="m" tintColor="#6B7280" />
          <Text
            style={{ marginLeft: 14, fontSize: 18 }}
            font="Regular"
            text="Logout"
          />
        </Pressable>
      </View>
    </DrawerContentScrollView>
  );
};
