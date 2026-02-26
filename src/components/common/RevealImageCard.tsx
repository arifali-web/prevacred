import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Pressable, StyleSheet, Animated } from 'react-native';
import { Icon, Image } from '../layout';

export function RevealImageCard({
  imageSource,
  height = 170,
  borderRadius = 12,
}: any) {
  const [revealed, setRevealed] = useState(false);
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fade, {
      toValue: revealed ? 1 : 0,
      duration: 220,
      useNativeDriver: true,
    }).start();
  }, [revealed, fade]);

  return (
    <View style={[styles.card, { height, borderRadius }]}>
      {/* Image layer (always mounted, just fades) */}
      <Animated.View style={[StyleSheet.absoluteFill, { opacity: fade }]}>
        <Image
          src="BtnBg"
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover"
        />
      </Animated.View>

      {/* Overlay button (toggle) */}
      <Pressable style={styles.center} onPress={() => setRevealed(p => !p)}>
        <View style={styles.row}>
          <Icon name={revealed ? 'Eye' : 'EyeOpen'} size="s" color="white" />
          <Text style={styles.revealText}>
            {revealed ? 'Unreveal' : 'Reveal'}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#333',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: 'rgba(0,0,0,0.35)', // optional nice overlay
  },
  revealText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
