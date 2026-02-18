import {BackArrow, FlatList, SettingCard, View} from '@components';
import React from 'react';
import {UserProps} from '.';
import {Platform} from 'react-native';

const data = [
  {
    icon: 'File',
    title: 'Terms & Conditions',
    path: 'TermsConditions',
  },
  {
    icon: 'Shield',
    title: 'Privacy Policy',
    path: 'PrivacyPolicy',
  },
  {
    icon: 'Help',
    title: 'FAQ',
    path: 'Faq',
  },
];

export default function About(props: UserProps<'About'>) {
  return (
    <View
      paddingTop={Platform.OS === 'ios' ? 'xl' : 's'}
      flex
      gap="b"
      paddingHorizontal>
      <BackArrow title="About" navigation={props.navigation} />
      <FlatList
        gap
        data={data}
        renderItem={({item}) => (
          <SettingCard item={item} navigation={props.navigation} />
        )}
      />
    </View>
  );
}
