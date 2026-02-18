// import LottieView from 'lottie-react-native';
import React from 'react';
import {Text, View} from '@components';
import {MyModal} from './Modal';

export function ThankyouModal({
  modalVisible,
  setModalVisible,
  description,
}: any) {
  return (
    <MyModal
      justifyContent
      isVisible={modalVisible}
      setModalVisible={setModalVisible}>
      <View align="center">
        {/* <LottieView
          autoPlay
          loop
          source={require('../../assets/Lottie/1.json')}
          style={{width: 120, height: 120}}
        /> */}
        <Text size="h3" text={'Thank you'} color="onBackground" font="Medium" />
        <Text
          size="body"
          width={240}
          font="Regular"
          color="onBackground"
          style={{opacity: 0.5}}
          textAlign="center"
          text={description}
        />
      </View>
    </MyModal>
  );
}
