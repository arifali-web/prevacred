import {
  FlatList,
  Icon,
  Image,
  Pressable,
  SettingCard,
  Text,
  View,
} from '@components';
import React from 'react';
import {UserProps} from '.';
import {Platform} from 'react-native';

const data = [
  {
    icon: 'Heart',
    title: 'Favourite Properties',
    path: 'FavouriteProperties',
  },
  {
    icon: 'Dollar',
    title: 'Subscription',
    path: 'Subscription',
  },
  {
    icon: 'Setting',
    title: 'Settings',
    path: 'Setting',
  },
  {
    icon: 'Info',
    title: 'About',
    path: 'About',
  },
  {
    icon: 'Logout',
    title: 'Signout',
    modal: true,
    bgColor: true,
    heading: 'Signout Alert!',
    description: 'Are you sure you want to signout?',
    buttonText: 'Yes',
    cancelBtn: 'No',
    source: '/Users/arifhussain/Documents/work/sphere/src/assets/Lottie/3.json',
  },
];

export default function Profile(props: UserProps<'Profile'>) {
  return (
    <View
      paddingTop={Platform.OS === 'ios' ? 'xl' : 's'}
      flex
      gap="b"
      paddingHorizontal>
      <Pressable
        align="mid"
        backgroundColor="background"
        width={40}
        height={40}
        borderRadius="s"
        onPress={() => props.navigation.goBack()}>
        <Icon name="Cancel" size="s" />
      </Pressable>
      <Pressable
        onPress={() => props.navigation.navigate('PrfileDetails')}
        row
        gap="s"
        align="center"
        marginBottom>
        <Image src={'User1'} width={54} aspectRatio={1} resizeMode="contain" />
        <View>
          <Text size="h3" font="Medium" text={'Roy Evans'} />
          <Text
            style={{opacity: 0.6}}
            color="primary"
            size="body"
            font="Medium"
            text={'View Profile'}
          />
        </View>
      </Pressable>
      <FlatList
        data={data}
        gap="b"
        scrollEnabled={false}
        renderItem={({item}) => (
          <SettingCard item={item} navigation={props.navigation} />
        )}
        keyExtractor={item => item.title}
      />
    </View>
  );
}
