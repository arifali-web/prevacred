import {
  FlatList,
  HorizontalCardList,
  Icon,
  Image,
  ImageBackground,
  Page,
  Pressable,
  Text,
  TextInput,
  View,
} from '@components';
import React from 'react';
import { UserProps } from '..';
import { Platform } from 'react-native';
import QRCodesCard from '../../components/common/QRCodesCard';
import { MyCarousel } from '../../components/common/Carousel';

const data = [
  {
    id: 1,
    title: 'QR',
    subtitle: 'Codes',
    icon: 'Qr',
  },
  {
    id: 2,
    title: 'Customer',
    subtitle: 'Support',
    icon: 'Support',
  },
  {
    id: 3,
    title: 'Renewal',
    subtitle: 'Alerts',
    icon: 'Docs',
  },
];

const cards = ['img1', 'img2'];

export default function Home(props: UserProps<'Tabs'>) {
  console.log(props, 'props');

  return (
    <View
      paddingTop={Platform.OS === 'ios' ? 'l' : 's'}
      backgroundColor="onPrimary"
      flex
      gap="b"
      paddingHorizontal
      borderRadius="xs"
    >
      <MyCarousel post={cards} />

      <ImageBackground
        src="BtnBg" // if BtnBg is an imported image
        style={{
          height: 81,
          width: '100%',
          borderRadius: 12,
          overflow: 'hidden',
          boxShadow: '0px 4px 4px 0px #00000040',
        }}
        // imageStyle={{ borderRadius: 12 }}
        resizeMode="stretch"
      >
        <Pressable
          onPress={() => {
            console.log(props.navigation.navigate('AddDocument'));
            props.navigation.navigate('AddDocument');
          }}
          row
          align="center"
          space="between"
          padding
        >
          <Icon name="Folder" size="l" />{' '}
          <Text
            size="h3"
            font="SemiBold"
            color="white"
            text="Upload Document"
          />{' '}
          <Icon name="ArrowRight" size="xs" />
        </Pressable>
      </ImageBackground>
      <ImageBackground
        src="BtnBg"
        style={{
          height: 81,
          width: '100%',
          borderRadius: 12,
          overflow: 'hidden',
          boxShadow: '0px 4px 4px 0px #00000040',
        }}
        // imageStyle={{ borderRadius: 12 }}
        resizeMode="stretch"
      >
        <Pressable
          onPress={() => props.navigation.navigate('EditDocument')}
          row
          align="center"
          space="between"
          padding
        >
          <Icon name="Shield" size="l" />{' '}
          <Text size="h3" font="SemiBold" color="white" text="Renewal Alerts" />{' '}
          <Icon name="ArrowRight" size="xs" />
        </Pressable>
      </ImageBackground>

      <View paddingVertical>
        <Text size="h3" font="Medium" color="primary" text="Quick Actions" />
        <FlatList
          data={data}
          marginTop="s"
          scrollEnabled
          keyExtractor={item => item.id.toString()}
          horizontal
          paddingVertical
          row
          gap="b"
          marginLeft="xs"
          width={131.75555419921875}
          renderItem={({ item }) => (
            <QRCodesCard
              item={item}
              // onPress={() => props.navigation.navigate('')}
            />
          )}
        />
      </View>
    </View>
  );
}
