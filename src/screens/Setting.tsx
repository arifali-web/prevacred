import {BackArrow, FlatList, SettingCard, View} from '@components';
import React from 'react';
import {UserProps} from '.';

const data = [
  {
    icon: 'Lock',
    title: 'Change Password',
    path: 'ChangePassword',
  },
  {
    icon: 'Block',
    title: 'Deactivate Account',
    bgColor: true,
    heading: 'Deactivation Alert!',
    description: 'Are you sure you want to deactivate your account?',
    buttonText: 'Deactivate',
    source: '/Users/arifhussain/Documents/work/sphere/src/assets/Lottie/3.json',
  },
  {
    icon: 'Delete',
    title: 'Delete Account',
    bgColor: true,
    heading: 'Delete Alert!',
    description: 'Are you sure you want to delete your account?',
    buttonText: 'Delete',
    source: '/Users/arifhussain/Documents/work/sphere/src/assets/Lottie/2.json',
  },
];

export default function Setting(props: UserProps<'Setting'>) {
  return (
    <View
      paddingTop={Platform.OS === 'ios' ? 'xl' : 's'}
      flex
      gap="b"
      paddingHorizontal>
      <BackArrow title="Setting" navigation={props.navigation} />
      <FlatList
        gap
        scrollEnabled={false}
        data={data}
        renderItem={({item}) => (
          <SettingCard item={item} navigation={props.navigation} />
        )}
      />
    </View>
  );
}
