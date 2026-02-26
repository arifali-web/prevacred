import { Card, FlatList, Icon, Image, Text, View } from '@components';
import React from 'react';
import { Platform } from 'react-native';
import { UserProps } from '..';

const data = [
  {
    id: 1,
    title: 'Union Card',
    date: 'Expires on 15th October 2026',
    status: 'passed',
  },
  {
    id: 1,
    title: 'W2 Form',
    date: null,
    status: 'pending',
  },
  {
    id: 3,
    title: 'Diploma Cert',
    date: 'Expires on 15th October 2026',
    status: 'falied',
  },
];

const QrCode = (props: UserProps<'Tabs'>) => {
  return (
    <View
      flex
      backgroundColor="white"
      paddingTop={Platform.OS === 'ios' ? 'l' : 's'}
    >
      <View paddingHorizontal paddingBottom>
        <View
          borderWidth={1}
          borderColor="lightgrey"
          width={'100%'}
          height={140}
          padding
          align="center"
          gap="xs"
          borderRadius="s"
        >
          <Image src="User" width={68} height={68} resizeMode="contain" />
          <Text font="Bold" size="h3">
            Joyce Oxford
          </Text>
        </View>
      </View>
      <FlatList
        data={data}
        marginTop="s"
        keyExtractor={item => item.id.toString()}
        scrollEnabled={false}
        width={'100%'}
        gap
        renderItem={({ item }) => (
          <Card
            item={item}
            onPress={() => props.navigation.navigate('QrInner')}
          />
        )}
      />
    </View>
  );
};

export default QrCode;
