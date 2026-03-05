import React from 'react';
import { Image, Text, View } from '../layout';
import { ImagesSourceType } from '@assets';

export function HeadingCard({
  img,
  heading,
  subHeading,
}: {
  img: ImagesSourceType;
  heading: string;
  subHeading: string;
}) {
  return (
    <View align="center" marginTop="s">
      <Image
        src={img}
        alignSelf="center"
        width={94}
        aspectRatio={1}
        resizeMode="contain"
      />
      <Text
        marginVertical="s"
        color="primary"
        style={{ fontSize: 24.13 }}
        font="SemiBold"
        text={heading}
      />
      <Text color="primary" font="Regular" size="h6" text={subHeading} />
    </View>
  );
}
