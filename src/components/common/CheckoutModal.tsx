import { LinearGradientButton, MyModal, Text, View } from '@components';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

export function CheckoutModal({
  modalVisible,
  setModalVisible,
}: {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}) {
  const navigation = useNavigation();
  return (
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

        <LinearGradientButton
          title="Proceed"
          onPress={() => {
            setModalVisible(false);
            navigation.navigate('HomeMain', {
              screen: 'home',
            });
          }}
        />
      </View>
    </MyModal>
  );
}
