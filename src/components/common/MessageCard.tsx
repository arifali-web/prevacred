import {Icon, Image, Pressable, Text, View} from '@components';
import React from 'react';

export function MessageCard({...props}: any) {
  return (
    <Pressable
      onPress={() => props.navigation.navigate('Chat')}
      row
      space="between"
      backgroundColor="background"
      padding="s"
      borderRadius="b">
      <View row gap="b" align="center">
        <Image
          src={props.img}
          width={50}
          aspectRatio={1}
          resizeMode="contain"
          borderRadius="s"
        />
        <View>
          <Text marginBottom="xs" size="h6" font="Medium" text={props.name} />
          <Text
            style={{opacity: 0.6}}
            color="subHeading"
            size="body"
            font="Regular"
            text={props.message}
          />
        </View>
      </View>
      <View align="center" marginRight="s">
        <Text color="subHeading" size="body" font="Regular" text={props.time} />
      </View>
    </Pressable>
  );
}
