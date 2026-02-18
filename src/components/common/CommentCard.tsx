import {Icon, Image, Pressable, Text, View} from '@components';
import React from 'react';

export function CommentCard({...props}: any) {
  const [commentlike, setCommentLike] = React.useState(false);
  return (
    <View>
      <View
        row
        gap="s"
        align="center"
        style={{backgroundColor: '#F7F7F7', width: 'auto'}}
        padding="s"
        borderRadius="s">
        <Image
          src={props.img}
          width={36}
          aspectRatio={1}
          resizeMode="contain"
        />
        <View>
          <Text marginBottom="xs" size="h6" font="Medium" text={props.name} />
          <Text
            style={{opacity: 0.6, marginTop: -5}}
            color="subHeading"
            size="body"
            font="Regular"
            text={props.comment}
          />
        </View>
      </View>
      {/* comments */}
      <View row gap="s" align="center" style={{marginLeft: 52}} paddingTop="xs">
        <Pressable row gap="s" align="center">
          <Text
            style={{fontSize: 11, opacity: 0.6}}
            color="subHeading"
            font="Regular"
            text="Reply"
          />
        </Pressable>
        <Pressable
          onPress={() => setCommentLike(!commentlike)}
          row
          gap="s"
          align="center">
          <Text
            style={{fontSize: 11, opacity: commentlike ? 1 : 0.6}}
            color={commentlike ? 'primary' : 'subHeading'}
            font="Regular"
            text="Like"
          />
        </Pressable>
        {commentlike && (
          <View row gap="xs" align="center">
            <Text
              style={{fontSize: 11, opacity: 0.6}}
              color="subHeading"
              font="Regular"
              text="3"
            />
            <Icon name="Liked" size="xs" />
          </View>
        )}
      </View>
    </View>
  );
}
