import {
  FlatList,
  Icon,
  LinearGradientButton,
  MyModal,
  Pressable,
  RenewalCard,
  Text,
  View,
} from '@components';
import React from 'react';
import { Platform } from 'react-native';

const data = [
  {
    id: 1,
    avatarText: 'PC',
    title: 'Doc Renewal Alert',
    message:
      'Your QR Code for W2 certificate is going to expire in 3 days, Kindly renew your...',
    time: '36 min ago',
    variant: 'light',
  },
  {
    id: 2,
    avatarText: 'PC',
    title: 'Doc Renewal Alert',
    message:
      'Your QR Code for W2 certificate is going to expire in 5 days, Kindly renew your...',
    time: '2 days ago',
    variant: 'danger',
  },
  {
    id: 3,
    avatarText: 'PC',
    title: 'Doc Renewal Alert',
    message:
      'Your QR Code for W2 certificate is going to expire in 7 days, Kindly renew your...',
    time: '4 days ago',
    variant: 'danger',
  },
];

const RenewalAlerts = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <View
      paddingTop={Platform.OS === 'ios' ? 'l' : 's'}
      backgroundColor="onPrimary"
      flex
      gap="b"
      //   paddingHorizontal
      borderRadius="xs"
    >
      <Text
        size="h3"
        font="SemiBold"
        color="primary"
        text="Alerts from XYZ Organization"
        textAlign="center"
      />
      <FlatList
        data={data}
        gap
        keyExtractor={item => item.id.toString()}
        scrollEnabled={true}
        style={{ width: '100%' }}
        renderItem={({ item }) => (
          <RenewalCard item={item} onPress={() => setModalVisible(true)} />
        )}
      />
      <MyModal
        justifyContent
        isVisible={modalVisible}
        setModalVisible={setModalVisible}
      >
        <View align="center" padding gap="s" width={'100%'}>
          <Pressable
            alignSelf="flex-end"
            onPress={() => setModalVisible(false)}
          >
            <Icon name="Close" size="s" />
          </Pressable>
          <View
            align="mid"
            style={{
              width: 45.91,
              height: 45.91,
              borderRadius: 21,
              backgroundColor: '#EDEDED',
              marginRight: 12,
            }}
          >
            <Text
              font="SemiBold"
              style={{
                fontSize: 14,
                color: '#1D1D1D',
              }}
            >
              {'PC'}
            </Text>
          </View>
          <Text size="body" font="Medium" color="primary" text="36 mins ago" />
          <Text
            textAlign="center"
            font="SemiBold"
            style={{
              color: '#A80F19',
              fontSize: 21,
            }}
            text="Document Renewal Alert"
          />
          <Text
            textAlign="center"
            font="Medium"
            style={{
              color: '#474747',
              fontSize: 12,
            }}
            text="Hi, Your QR Code for W2 certificate is going to expire in 7 days, Kindly renew your document."
          />

          <View
            width={'100%'}
            borderColor="lightgrey"
            borderWidth={1}
            padding="s"
            borderRadius="s"
            style={{
              backgroundColor: '#A85155',
            }}
          >
            <Text
              size="h6"
              textAlign="center"
              font="SemiBold"
              color="white"
              text="Expires on 25 may 2025"
            />
          </View>

          <LinearGradientButton
            title="I Acknowledge"
            onPress={() => {}}
            color1="#404040"
            color2="#000000"
          />
        </View>
      </MyModal>
    </View>
  );
};

export default RenewalAlerts;
