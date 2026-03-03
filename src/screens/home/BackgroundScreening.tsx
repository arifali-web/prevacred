import { Image, LinearGradientButton, MyModal, Text, View } from '@components';
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
      <MyModal
        justifyContent
        isVisible={modalVisible}
        setModalVisible={setModalVisible}
      >
        <View align="center" padding gap width={'100%'}>
          {/* <Pressable
            alignSelf="flex-end"
            onPress={() => setModalVisible(false)}
          >
            <Icon name="Close" size="s" />
          </Pressable> */}
          <Text size="h4" font="SemiBold" text="Checkout Details" />
          <Text
            textAlign="center"
            size="h5"
            font="SemiBold"
            color="primary"
            text="Are you sure you want to proceed
               to background check?"
          />
          <View
            row
            space="between"
            align="center"
            width={'100%'}
            borderColor="lightgrey"
            borderWidth={1}
            padding
            borderRadius
          >
            <Text size="h2" font="SemiBold" text="1x" />,
            <View>
              <Text size="body" font="Regular" color="Text" text="Passport" />
              <Text size="h6" font="SemiBold" text="Background Check" />
            </View>
            <Text size="h2" font="SemiBold" text="$50" />
          </View>

          <LinearGradientButton title="Proceed" onPress={() => {}} />
        </View>
      </MyModal>
    </View>
  );
}

export default BackgroundScreening;
