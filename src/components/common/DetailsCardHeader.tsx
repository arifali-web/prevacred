import {Icon, Image, Pressable, Text, View} from '@components';
import React from 'react';
import {Platform} from 'react-native';

export function DetailsCardHeader({
  like,
  setLike,
  Item,
  setVisible,
  props,
}: any) {
  return (
    <View
      style={{zIndex: 1, position: 'relative'}}
      top={Platform.OS === 'ios' ? 80 : 30}
      flex
      gap="b"
      paddingHorizontal>
      <View row gap align="center" space="between">
        <Pressable
          align="mid"
          style={{backgroundColor: '#94ACC3'}}
          width={40}
          height={40}
          borderRadius="s"
          onPress={() => props.navigation.goBack()}>
          <Icon name="WhiteArrow" size="s" />
        </Pressable>
        <Pressable
          align="mid"
          style={{
            backgroundColor: Item.edit
              ? '#7CA7C3'
              : like
              ? '#E64F4F'
              : '#7CA7C3',
          }}
          width={40}
          height={40}
          borderRadius="s"
          onPress={() => (Item.edit ? setVisible(true) : setLike(!like))}>
          {Item.edit ? (
            <Icon name={'WhiteDots'} size="s" />
          ) : (
            <Icon
              name={like ? 'Whiteheart' : 'Whiteheart'}
              style={{opacity: like ? 1 : 0.6}}
              size="s"
            />
          )}
        </Pressable>
      </View>
    </View>
  );
}
