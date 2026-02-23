import React from 'react';
import { Icon, Text, View } from '@components';
import LinearGradient from 'react-native-linear-gradient';

export const RenewalCard = ({ item }: any) => {
  const isRed =
    item?.variant === 'danger' || item?.type === 'danger' || item?.isAlert;

  return (
    <LinearGradient
      colors={isRed ? ['#A85155', '#A80F19'] : ['#fff', '#ffff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{
        borderRadius: 14,
        overflow: 'hidden',
        borderWidth: 0.5,
        borderColor: isRed ? '#A85155' : '#D1D1D1',
        marginHorizontal: 12,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 8 },
        elevation: 10,
      }}
    >
      <View
        row
        align="center"
        space="between"
        padding
        borderRadius="b"
        shadow
        // marginHorizontal="b"
        style={
          {
            // alignSelf: 'stretch',
            //   backgroundColor: isRed ? '#B52C2C' : '#FFFFFF',
            // marginBottom: 14,
          }
        }
      >
        {/* LEFT AVATAR */}
        <View
          align="mid"
          style={{
            width: 42,
            height: 42,
            borderRadius: 21,
            backgroundColor: isRed ? 'rgba(255,255,255,0.2)' : '#EDEDED',
            marginRight: 12,
          }}
        >
          <Text
            font="SemiBold"
            style={{
              fontSize: 14,
              color: isRed ? '#fff' : '#1D1D1D',
            }}
          >
            {item?.avatarText || 'PC'}
          </Text>
        </View>

        {/* MIDDLE CONTENT */}
        <View style={{ flex: 1 }}>
          <Text
            font="SemiBold"
            style={{
              fontSize: 16,
              color: isRed ? '#fff' : '#222',
              marginBottom: 4,
            }}
            numberOfLines={1}
          >
            {item?.title || 'Doc Renewal Alert'}
          </Text>

          <Text
            font="Medium"
            style={{
              fontSize: 12,
              color: isRed ? 'rgba(255,255,255,0.85)' : '#666',
            }}
            numberOfLines={2}
          >
            {item?.message ||
              'Your QR Code for W2 certificate is going to expire in 3 days, Kindly renew your...'}
          </Text>
        </View>

        {/* RIGHT TIME */}
        <View style={{ marginLeft: 10, alignSelf: 'flex-start' }}>
          <Text
            font="SemiBold"
            style={{
              fontSize: 12,
              color: isRed ? 'rgba(255,255,255,0.85)' : '#A85155',
            }}
          >
            {item?.time || '36 min ago'}
          </Text>

          {/* Optional arrow icon */}
          {/* <Icon name="ArrowRight2" size="xs" /> */}
        </View>
      </View>
    </LinearGradient>
  );
};
