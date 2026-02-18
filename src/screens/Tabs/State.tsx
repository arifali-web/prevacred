import {FlatList, Icon, Image, Pressable, Text, View} from '@components';
import React from 'react';
import {UserProps} from '..';
import {Platform} from 'react-native';

const data = [
  {
    id: 1,
    img: 'Flag2',
    name: 'Florida',
  },
  {
    id: 2,
    img: 'Flag3',
    name: 'Texas',
  },
  {
    id: 3,
    img: 'Flag4',
    name: 'New York',
  },
  {
    id: 1,
    img: 'Flag2',
    name: 'Florida',
  },
  {
    id: 2,
    img: 'Flag3',
    name: 'Texas',
  },
  {
    id: 3,
    img: 'Flag4',
    name: 'New York',
  },
];

export default function State(props: UserProps<'Tabs'>) {
  return (
    <View
      paddingTop={Platform.OS === 'ios' ? 'xl' : 's'}
      flex
      gap="b"
      paddingHorizontal>
      <Text size="h1" font="SemiBold">
        States
      </Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Pressable
            onPress={() => props.navigation.navigate('Cities')}
            marginVertical="xs"
            row
            space="between"
            align="center"
            backgroundColor="background"
            padding="s"
            borderRadius="s">
            <View row gap="s" align="center">
              <Image
                src={item.img}
                width={40}
                aspectRatio={1}
                resizeMode="contain"
              />
              <Text font="Medium" size="h5">
                {item.name}
              </Text>
            </View>
            <Icon name="ArrowRight" size="s" />
          </Pressable>
        )}
      />
    </View>
  );
}
