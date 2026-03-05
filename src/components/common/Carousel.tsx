import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { useWindowDimensions } from 'react-native';
import { Image } from '@components';
import { ImagesSourceType } from '@assets';

const cards = ['Img1', 'Img2', 'Img3', 'Img4', 'Img5'];

export function MyCarousel() {
  const { width } = useWindowDimensions();
  const carouselWidth = width - 32;

  return (
    <Carousel
      loop
      width={carouselWidth} // ✅ 100% screen width
      height={167}
      autoPlay
      data={cards}
      autoPlayInterval={3000}
      scrollAnimationDuration={800}
      renderItem={({ item, index }) => (
        <Image
          src={item as ImagesSourceType}
          borderRadius="b"
          width="100%" // ✅ image bhi full width
          resizeMode="cover"
          height={167}
          alignSelf="center"
        />
      )}
    />
  );
}
