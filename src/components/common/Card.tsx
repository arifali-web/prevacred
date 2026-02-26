import { Icon, Image, Pressable, Text, View } from '@components';
import React from 'react';

export const Card = ({
  item,
  onPress,
}: {
  item: any;
  onPress?: () => void;
}) => {
  return (
    <Pressable onPress={onPress}>
      <View
        row
        align="center"
        backgroundColor="white"
        shadow
        padding
        marginHorizontal="b"
        space="between"
        borderRadius="s"
      >
        <Image src="Union" width={72} height={70} resizeMode="cover" />
        <View gap="xs">
          <Text
            color="primary"
            font="SemiBold"
            style={{
              fontSize: 20,
            }}
          >
            {item?.title}
          </Text>
          {item?.date && (
            <Text
              style={{ fontSize: 13 }}
              color="text3"
              font="Regular"
              text={item?.date}
            />
          )}
          <View row gap="s" align="center">
            <Text
              style={{ fontSize: 13 }}
              font="Regular"
              color="text3"
              text="Status"
            />
            <View
              backgroundColor={
                item?.status === 'pending'
                  ? 'pending'
                  : item?.status === 'falied'
                  ? 'error'
                  : 'success'
              }
              height={22}
              borderRadius="xl"
              align="mid"
              paddingHorizontal
            >
              <Text
                font="Regular"
                size="small"
                color="white"
                text={item?.status}
              />
            </View>
          </View>
        </View>
        <Icon name="ArrowRight2" size="xs" />
      </View>
    </Pressable>
  );
};
