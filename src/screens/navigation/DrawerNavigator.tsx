import { DrawerContent } from '@components';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import UserTabs from './TabNavigator';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeDrawer"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: 280, // screenshot jaisa
          backgroundColor: '#fff',
        },
        drawerType: 'front',
      }}
      drawerContent={(props: any) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="HomeDrawer"
        component={UserTabs}
        options={{ title: 'Home' }}
      />
      {/* <Drawer.Screen name="QR Code" component={QrCode} /> */}
      {/* <Drawer.Screen name="Customer Support" component={CustomerSupport} /> */}
      {/* <Drawer.Screen name="Renewal Alerts" component={RenewalAlerts} /> */}
      {/* <Drawer.Screen name="Terms and Conditions" component={Terms} /> */}
      {/* Logout screen optional */}
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
