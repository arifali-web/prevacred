import { Pressable, Text } from '@components';
import React from 'react';
import { LinearGradient } from 'react-native-linear-gradient';

export function LinearGradientButton({ title, onPress }: any) {
  return (
    <LinearGradient
      style={{
        borderRadius: 40,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 8 },
        elevation: 10,
        width: '100%',
        marginTop: 16,
      }}
      colors={['#A85155', '#A20C13']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Pressable
        onPress={onPress}
        align="mid"
        width={'100%'}
        height={67}
        borderRadius="l"
      >
        <Text color="white" style={{ fontSize: 15 }} font="SemiBold">
          {title}
        </Text>
      </Pressable>
    </LinearGradient>
  );
}
