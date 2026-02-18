import {
  Pressable,
  Text,
  View,
  FlatList,
  ListingCard,
  Card,
  ProfileCard,
  Page,
} from '@components';
import React from 'react';
import { UserProps } from '.';
// import LinearGradient from 'react-native-linear-gradient';
import { Platform } from 'react-native';

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

const data2 = [
  {
    id: 1,
    img: 'Post',
    date: '1 day ago',
    location: 'Miami, Florida',
    price: '$300,000',
    title: 'Modern House',
  },
  {
    id: 2,
    img: 'Post',
    date: '1 day ago',
    location: 'Miami, Florida',
    price: '$300,000',
    title: 'Modern House',
  },
  {
    id: 3,
    img: 'Post',
    date: '1 day ago',
    location: 'Miami, Florida',
    price: '$300,000',
    title: 'Modern House',
  },
];

export default function PrfileDetails(props: UserProps<'PrfileDetails'>) {
  const [activeTab, setActiveTab] = React.useState('post');

  return (
    <>
      <ProfileCard props={props} type={'show'} />
      <View flex gap="b" paddingTop="b" paddingHorizontal>
        <View
          gap="s"
          row
          padding="xs"
          align="mid"
          backgroundColor="background"
          borderRadius="s"
        >
          {['post', 'listing'].map((item, index) => (
            <Pressable
              onPress={() => setActiveTab(item)}
              width={Platform.OS === 'ios' ? 172 : 150}
              row
              gap="s"
              backgroundColor={activeTab === item ? 'primary' : 'background'}
              padding
              borderRadius="s"
              align="mid"
            >
              <Text
                size="h4"
                font="Medium"
                style={{ opacity: activeTab === item ? 1 : 0.6 }}
                color={activeTab === item ? 'white' : 'subHeading'}
                text={item === 'post' ? 'Posts' : 'Listings'}
              />
            </Pressable>
          ))}
        </View>
        {activeTab === 'post' ? (
          <FlatList
            data={data}
            marginTop="s"
            renderItem={({ item }) => (
              <View
                marginVertical="s"
                backgroundColor="background"
                borderRadius="b"
              >
                <Card {...item} edit={true} navigation={props.navigation} />
              </View>
            )}
          />
        ) : (
          <FlatList
            data={data2}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <ListingCard
                {...item}
                edit={true}
                navigation={props.navigation}
              />
            )}
          />
        )}
      </View>
    </>
  );
}
