import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import Home from './Home';
import { Header, Icon, SecHeader, TabIcon, View } from '@components';
import QrCode from './QrCode';
import RenewalAlerts from './RenewalAlerts';
import Notification from './Notification';

const Tab = createBottomTabNavigator();

const UserTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        header(props: any) {
          return <SecHeader {...props} />;
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          // left: 18,
          // right: 18,
          // bottom: 18,
          // height: 78,
          // borderRadius: 28,
          backgroundColor: '#1D2326', // dark
          borderTopWidth: 0, // remove default line
          // shadow
          shadowColor: '#000',
          shadowOpacity: 0.18,
          shadowRadius: 20,
          shadowOffset: { width: 0, height: 10 },
          elevation: 12,
          paddingBottom: Platform.OS === 'ios' ? 10 : 12,
          paddingTop: 0,
        },

        tabBarItemStyle: {
          // icons center
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          header(props: any) {
            return <Header {...props} />;
          },
          tabBarIcon: ({ focused }: any) => (
            <TabIcon
              focused={focused}
              activeName="Home" // or "HomeDull"
            />
          ),
        }}
      />

      {/* Example 2 */}

      <Tab.Screen
        name="QR Codes"
        component={QrCode}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} activeName="Qr" />
          ),
        }}
      />

      <Tab.Screen
        name="Renewal Alerts"
        component={RenewalAlerts}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} activeName="Docs" />
          ),
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={Notification}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} activeName="Bell" />
          ),
        }}
      />

      {/* <Tab.Screen
        name="Add Document"
        component={AddDocument}

        // options={{
        //   tabBarIcon: ({ focused }) => (
        //     <TabIcon focused={focused} activeName="Bell" />
        //   ),
        // }}
      /> */}
    </Tab.Navigator>
  );
};

export default UserTabs;
