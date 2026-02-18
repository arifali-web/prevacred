import { Button, Pressable, Text, View } from '@components';
import React from 'react';
// import Modal from 'react-native-modal';

export function MyModal({
  isVisible,
  setModalVisible,
  children,
  height,
  justifyContent,
}: any) {
  return (
    <Modal
      isVisible={isVisible}
      propagateSwipe={true}
      onBackdropPress={() => setModalVisible(false)}
      onBackButtonPress={() => setModalVisible(false)}
      style={{
        margin: 0,
        justifyContent: justifyContent ? 'center' : 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
      backdropOpacity={0.3}
      animationIn="pulse"
      animationOut="fadeOut"
      scrollHorizontal
    >
      <View
        padding
        width={justifyContent ? '90%' : '100%'}
        alignSelf="center"
        style={{
          borderRadius: justifyContent ? 20 : 0,
          borderTopLeftRadius: justifyContent ? 20 : 20,
          borderTopRightRadius: justifyContent ? 20 : 20,
        }}
        align={justifyContent ? 'center' : 'left'}
        backgroundColor="surface"
        height={height}
        shadow
        gap
      >
        {children}
      </View>
    </Modal>
  );
}
