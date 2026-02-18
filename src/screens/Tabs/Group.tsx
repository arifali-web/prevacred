import {
  FlatList,
  GroupCard,
  Icon,
  Image,
  Pressable,
  Strike,
  Text,
  TextInput,
  View,
} from '@components';
import React from 'react';
import {UserProps} from '..';
import {Platform} from 'react-native';

const data = [
  {
    id: 1,
    img: 'User1',
    name: 'Florida',
    day: 'Today',
    title: 'Contract Q',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    img: 'User2',
    name: 'Texas',
    day: 'Today',
    title: 'Contract Q',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    img: 'User3',
    name: 'New York',
    day: 'Today',
    title: 'Contract Q',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export default function Group(props: UserProps<'Tabs'>) {
  const [like, setLike] = React.useState(false);
  return (
    <View
      paddingTop={Platform.OS === 'ios' ? 'xl' : 's'}
      flex
      gap="b"
      paddingHorizontal>
      <Text size="h1" font="SemiBold">
        Contract Q
      </Text>
      {/* <View gap='s'> */}
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
      {/* </View> */}
      <FlatList
        data={data}
        renderItem={({item}) => (
          <GroupCard {...item} navigation={props.navigation} />
        )}
      />
    </View>
  );
}
