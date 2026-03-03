import {
  Icon,
  Image,
  LinearGradientButton,
  MyModal,
  Pressable,
  RevealImageCard,
  Text,
  View,
} from '@components';
import React from 'react';
import { Platform } from 'react-native';
import QRCodeStyled from 'react-native-qrcode-styled';
import { Image as RNImage } from 'react-native';
function QrInner() {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <View
      paddingTop={Platform.OS === 'ios' ? 'l' : 's'}
      backgroundColor="onPrimary"
      flex
      gap="l"
      align="center"
      paddingHorizontal
    >
      <View
        borderWidth={1}
        borderColor="lightgrey"
        width={'100%'}
        padding="l"
        align="center"
        gap="s"
        borderRadius="s"
      >
        <Image src="User" width={68} height={68} resizeMode="contain" />
        <Text font="Bold" size="body">
          Joyce Oxford
        </Text>
        <View row gap="s" align="center">
          <Text
            style={{ fontSize: 12 }}
            font="Regular"
            color="text3"
            text="Background Check"
          />
          <View
            // backgroundColor={
            //   item?.status === 'pending'
            //     ? 'pending'
            //     : item?.status === 'falied'
            //     ? 'error'
            //     : 'success'
            // }
            backgroundColor="success"
            height={22}
            borderRadius="xl"
            align="mid"
            paddingHorizontal
          >
            <Text font="Regular" size="small" color="white" text={'Passed'} />
          </View>
        </View>
        <View row gap="s" align="center">
          <Text
            style={{ fontSize: 12 }}
            font="Regular"
            color="text3"
            text="Entry Allowed"
          />
          <View
            // backgroundColor={
            //   item?.status === 'pending'
            //     ? 'pending'
            //     : item?.status === 'falied'
            //     ? 'error'
            //     : 'success'
            // }
            backgroundColor="success"
            height={22}
            borderRadius="xl"
            align="mid"
            paddingHorizontal
          >
            <Text font="Regular" size="small" color="white" text={'Yes'} />
          </View>
        </View>
      </View>

      <RevealImageCard />
      <LinearGradientButton
        title="Generate QR Code"
        onPress={() => setModalVisible(true)}
      />
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
                require('../assets/images/qrthumb.png'),
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
    </View>
  );
}

export default QrInner;
