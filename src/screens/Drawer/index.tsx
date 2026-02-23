import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from '@components';
import QrCode from '../Tabs/QrCode';
import RenewalAlerts from '../Tabs/RenewalAlerts';
import Home from '../Tabs/Home';
import UserTabs from '../Tabs';

const Drawer = createDrawerNavigator();

export const DrawerTab = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Tabs"
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
      {/* <Drawer.Screen name="Tabs" component={UserTabs} /> */}
      <Drawer.Screen name="QR Code" component={QrCode} />
      {/* <Drawer.Screen name="Customer Support" component={CustomerSupport} /> */}
      <Drawer.Screen name="Renewal Alerts" component={RenewalAlerts} />
      {/* <Drawer.Screen name="Terms and Conditions" component={Terms} /> */}
      {/* Logout screen optional */}
    </Drawer.Navigator>
  );
};
