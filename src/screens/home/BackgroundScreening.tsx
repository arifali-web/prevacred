import {
  CheckoutModal,
  Image,
  LinearGradientButton,
  MyModal,
  Text,
  View,
} from '@components';
import React from 'react';
import { Platform } from 'react-native';

function BackgroundScreening() {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <View
      paddingTop={Platform.OS === 'ios' ? 'l' : 's'}
      backgroundColor="onPrimary"
      flex
      gap="b"
      paddingHorizontal
      align="center"
    >
      <Text
        style={{ fontSize: 28 }}
        font="SemiBold"
        color="primary"
        text="PrevaCred"
      />
      <Text
        style={{ fontSize: 13.92 }}
        font="Medium"
        textAlign="center"
        color="primary"
      >
        The only patent pending personal identity that identifies individuals
        entering buildings, events, construction sites, personal homes & is a
        security measure that keeps your work & personal environments safe
      </Text>

      <Image
        src="ThumbScan"
        width={'100%'}
        height={160}
        resizeMode="contain"
        marginVertical="xl"
      />

      <LinearGradientButton
        title="Proceed"
        onPress={() => setModalVisible(true)}
      />
      <CheckoutModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}

export default BackgroundScreening;
