import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Agents from './Agents';
import State from './State';
import Listings from './Listings';
import Group from './Group';
import {Icon} from '@components';

const Tab = createBottomTabNavigator();

const UserTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarShowLabel: false,
        tabBarStyle: {
          zIndex: -1111111111,
          elevation: -3,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return <Icon name={focused ? 'Home' : 'HomeDull'} size="s" />;
          },
        }}
      />
      <Tab.Screen
        name="Agents"
        component={Agents}
        options={{
          tabBarIcon: ({focused}) => {
            return <Icon name={focused ? 'Group' : 'GroupDull'} size="s" />;
          },
        }}
      />
      <Tab.Screen
        name="Listing"
        component={Listings}
        options={{
          tabBarIcon: ({focused}) => {
            return <Icon name={focused ? 'State' : 'StateDull'} size="s" />;
          },
        }}
      />
      <Tab.Screen
        name="States"
        component={State}
        options={{
          tabBarIcon: ({focused}) => {
            return <Icon name={focused ? 'Map' : 'MapDull'} size="s" />;
          },
        }}
      />

      <Tab.Screen
        name="Group"
        component={Group}
        options={{
          tabBarIcon: ({focused}) => {
            return <Icon name={focused ? 'Comment' : 'CommentDull'} size="s" />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default UserTabs;
