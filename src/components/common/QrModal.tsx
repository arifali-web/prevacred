import { MyModal, Text, View } from '@components';
import React from 'react';
import QRCodeStyled from 'react-native-qrcode-styled';
import { Image as RNImage } from 'react-native';

export function QrModal({
  modalVisible,
  setModalVisible,
}: {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}) {
  return (
    <MyModal
      justifyContent
      isVisible={modalVisible}
      setModalVisible={setModalVisible}
    >
      <View align="center" padding>
        {/* <Pressable
            alignSelf="flex-end"
            onPress={() => setModalVisible(false)}
          >
            <Icon name="Close" size="s" />
          </Pressable> */}
        <Text
          size="h4"
          font="SemiBold"
          color="primary"
          text="Here’s your QR Code"
        />
        <QRCodeStyled
          data={'https://www.google.com/'}
          padding={18}
          // @ts-ignore
          pieceSize={10}
          // pieceBorderRadius={2}
          color={'#2B2B2B'} // dots color
          backgroundColor={'#FFFFFF'}
          outerEyesOptions={{
            color: '#B77A7C',
            borderRadius: 10,
          }}
          innerEyesOptions={{
            color: '#B77A7C',
            borderRadius: 6,
          }}
          logo={{
            href: RNImage.resolveAssetSource(
              require('@assets/images/qrthumb.png'),
            ).uri,
          }}
          // logoOptions={{
          //   width: 64,
          //   height: 64,
          //   margin: 6,
          //   borderRadius: 32,
          // }}
        />
      </View>
    </MyModal>
  );
}
