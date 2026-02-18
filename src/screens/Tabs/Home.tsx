import {
  Card,
  FlatList,
  Icon,
  Image,
  Page,
  Pressable,
  TextInput,
  View,
} from '@components';
import React from 'react';
import {UserProps} from '..';
import {Platform} from 'react-native';

const data = [
  {
    id: 1,
    user: 'User1',
    post: 'Post',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    state: 'Florida',
    name: 'Matthew Vargas',
  },
  {
    id: 2,
    user: 'User1',
    post: 'Post',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    state: 'Florida',
    name: 'Matthew Vargas',
  },
  {
    id: 3,
    user: 'User1',
    post: 'Post',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    state: 'Florida',
    name: 'Matthew Vargas',
  },
];

export default function Home(props: UserProps<'Tabs'>) {
  return (
    <View
      paddingTop={Platform.OS === 'ios' ? 'xl' : 's'}
      backgroundColor="onPrimary"
      flex
      gap="b"
      paddingHorizontal
      borderRadius="xs">
      <View row space="between">
        <Pressable onPress={() => props.navigation.navigate('Profile')}>
          <Image src="Sphere" width={140} height={41} resizeMode="contain" />
        </Pressable>
        <View row gap>
          <Pressable
            onPress={() => props.navigation.navigate('Message')}
            align="mid"
            backgroundColor="background"
            width={40}
            height={40}
            borderRadius="s">
            <Icon name="Message" size="s" />
          </Pressable>
          <Pressable
            onPress={() => props.navigation.navigate('Notification')}
            align="mid"
            backgroundColor="background"
            width={40}
            height={40}
            borderRadius="s">
            <Icon name="Notification" size="s" />
          </Pressable>
        </View>
      </View>
      <Page>
        <View gap="s">
          <TextInput
            id="search"
            type="text"
            placeholder="Search"
            left={() => <Icon name="Search" size="s" />}
            leftDull={() => <Icon name="Search" size="s" />}
            right={() => <Icon name="Filter" size="s" />}
            rightDull={() => <Icon name="Filter" size="s" />}
          />
          <TextInput
            id="post"
            type="text"
            placeholder="Whats on your mind?"
            right={() => <Icon name="Gallery" size="s" />}
            rightDull={() => <Icon name="Gallery" size="s" />}
            onPress={() => props.navigation.navigate('CreatePost')}
          />
        </View>
        <FlatList
          data={data}
          marginTop="s"
          scrollEnabled={false}
          renderItem={({item}) => (
            <View
              marginVertical="s"
              backgroundColor="background"
              borderRadius="b">
              <Card {...item} navigation={props.navigation} />
            </View>
          )}
        />
      </Page>
    </View>
  );
}
