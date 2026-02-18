import { Button, Pressable, Text, View } from '@components';
import React from 'react';
// import Modal from 'react-native-modal';

export const RemoveModal = ({
  isVisible,
  setModalVisible,
  description,
  heading,
  cancelBtn,
  buttonText,
  source,
}: any) => {
  return (
    <Modal
      isVisible={isVisible}
      propagateSwipe={true}
      onBackdropPress={() => setModalVisible(false)}
      onBackButtonPress={() => setModalVisible(false)}
      style={{
        margin: 0,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
      backdropOpacity={0.3}
      animationIn="pulse"
      animationOut="fadeOut"
      scrollHorizontal
    >
      <View
        padding
        backgroundColor="surface"
        shadow
        alignSelf="center"
        borderRadius
        align="center"
        gap
      >
        {/* <LottieView
          source={{uri: source}}
          autoPlay
          loop
          style={{width: 150, height: 150}}
        /> */}
        <Text size="h3" text={heading} color="onBackground" font="Medium" />
        <Text
          size="body"
          width={240}
          font="Regular"
          color="onBackground"
          style={{ opacity: 0.5 }}
          textAlign="center"
          text={description}
        />
        <View row gap>
          <Pressable
            onPress={() => setModalVisible(false)}
            width={146}
            height={54}
            borderRadius
            align="mid"
            backgroundColor="error"
          >
            <Text color="white" size="h5" font="Medium" text={buttonText} />
          </Pressable>
          <Pressable
            onPress={() => setModalVisible(false)}
            backgroundColor="btn"
            width={146}
            height={54}
            borderRadius
            align="mid"
          >
            <Text
              color="subHeading"
              size="h5"
              font="Medium"
              text={cancelBtn || 'Cancel'}
            />
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
