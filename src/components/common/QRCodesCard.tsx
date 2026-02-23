import React from 'react';
import { Icon, Pressable, Text, View } from '../layout';
import { StyleSheet } from 'react-native';

type Item = {
  id: number;
  title: string;
  subtitle: string;
  icon: 'Qr' | 'Bell' | 'Docs';
};

type Props = {
  item: Item;
  onPress?: () => void;
};

export default function QRCodesCard({ item, onPress }: Props) {
  console.log(item, 'items');

  return (
    <Pressable onPress={onPress} style={styles.wrapper}>
      <View width={131.75555419921875} height={121} shadow style={styles.card}>
        <Icon name={item?.icon} color="primary2" />
        {/* Title */}
        <View marginTop>
          <Text
            font="SemiBold"
            color="primary"
            style={{
              fontSize: 13.44,
            }}
          >
            {item?.title}
          </Text>
          <View row space="between" align="center">
            <Text
              font="SemiBold"
              color="primary"
              style={{
                fontSize: 13.44,
              }}
            >
              {item?.subtitle}
            </Text>

            <Icon name="ArrowRight2" color="primary" size="xs" />
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  card: {
    backgroundColor: '#FBFBFB',
    borderRadius: 20.17,
    padding: 20,
    justifyContent: 'flex-start',

    // iOS shadow
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 8 },

    // Android shadow
    elevation: 12,
  },
});
