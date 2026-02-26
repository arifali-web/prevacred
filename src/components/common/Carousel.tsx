import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { useWindowDimensions } from 'react-native';
import { Image } from '@components';

export function MyCarousel({ post }: any) {
  const { width } = useWindowDimensions();
  const carouselWidth = width - 32;

  return (
    <Carousel
      loop
      width={carouselWidth} // ✅ 100% screen width
      height={167}
      autoPlay
      data={post}
      autoPlayInterval={4000}
      scrollAnimationDuration={1000}
      renderItem={({ item, index }) => (
        <Image
          src="Img2"
          borderRadius="b"
          width="100%" // ✅ image bhi full width
          resizeMode="stretch"
          height={167}
          alignSelf="center"
        />
      )}
    />
  );
}
