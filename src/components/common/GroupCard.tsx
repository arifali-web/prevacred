import {Icon, Image, Pressable, Strike, Text, View} from '@components';
import React from 'react';

export function GroupCard({...props}: any) {
  const [like, setLike] = React.useState(false);
  return (
    <Pressable
      onPress={() =>
        props.navigation.navigate('GroupInner', {item: props.item})
      }
      marginVertical="xs"
      backgroundColor="background"
      padding
      borderRadius="b">
      <View row space="between" align="center">
        <View row gap="b" align="center">
          <Image
            src={props.img}
            width={50}
            aspectRatio={1}
            resizeMode="contain"
          />
          <View>
            <Text marginBottom="xs" size="h6" font="Medium" text={props.name} />
            <Text
              style={{opacity: 0.6}}
              color="subHeading"
              size="small"
              font="Regular"
              text={props.day}
            />
          </View>
        </View>
        <Pressable>
          <Icon name="Dots" size="s" />
        </Pressable>
      </View>
      <Text marginVertical="s" size="h6" font="Medium" text={props.title} />
      <Text
        color="subHeading"
        style={{opacity: 0.8, lineHeight: 20}}
        size="body"
        font="Regular"
        text={props.description}
      />
      <View row space="between" marginVertical>
        <Text
          color="subHeading"
          style={{opacity: 0.6}}
          size="body"
          font="Medium"
          text="256 Likes"
        />
        <View row gap="s">
          <Text
            color="subHeading"
            style={{opacity: 0.6}}
            size="body"
            font="Medium"
            text="20 Comments"
          />
          <Text
            color="subHeading"
            style={{opacity: 0.6}}
            size="body"
            font="Medium"
            text="10 Share"
          />
        </View>
      </View>
      <Strike />
      <View row space="around" paddingTop>
        <Pressable row gap="xs" align="center" onPress={() => setLike(!like)}>
          <Icon name={like ? 'Liked' : 'Like'} size="s" />
          <Text
            color={like ? 'primary' : 'subHeading'}
            style={{fontSize: 12}}
            font="Medium"
            text="Like"
          />
        </Pressable>
        <Pressable row gap="xs" align="center">
          <Icon name="Message" size="s" />
          <Text style={{fontSize: 12}} font="Medium" text="Comment" />
        </Pressable>
      </View>
    </Pressable>
  );
}
