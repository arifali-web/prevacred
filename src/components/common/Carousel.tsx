import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { Image } from '@components';

export function MyCarousel({ post }: any) {
  return (
    <Carousel
      loop
      width={370}
      height={167}
      autoPlay={true}
      data={post}
      style={{ gap: 10 }}
      autoPlayInterval={4000}
      scrollAnimationDuration={1000}
      onSnapToItem={index => console.log('current index:', index)}
      renderItem={({ item, index }) => (
        <Image
          src='Img2'
          borderRadius='b'
          width={'99%'}
          resizeMode='stretch'
          height={167}
          alignSelf="center"
        //   aspectRatio={445 / 337}
        ></Image>
      )}
    />
  );
}
