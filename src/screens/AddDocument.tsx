import { Image, Text, View, Pressable } from '@components';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { UserProps } from '.';

export default function AddDocument(props: UserProps<'AddDocument'>) {
  return (
    <View
      paddingTop={Platform.OS === 'ios' ? 'l' : 's'}
      backgroundColor="onPrimary"
      flex
      gap="b"
      paddingHorizontal
      align="center"
    >
      <Image src="Doc" width={100} height={100} resizeMode="contain" />

      <Text style={{ fontSize: 23 }} color="primary" font="SemiBold">
        Upload Documents
      </Text>

      <Text
        style={{ fontSize: 13.92 }}
        width={'80%'}
        color="primary"
        font="Medium"
        textAlign="center"
      >
        Upload any document with information you wish to have placed on your QR
        Code. which include: Diploma Certificate, W2 form, Pay check stubs,
        Union Cards, vaccination records, Car registration
      </Text>

      {/* Button 1 */}
      <LinearGradient
        style={{
          borderRadius: 40,
          overflow: 'hidden',
          shadowColor: '#000',
          shadowOpacity: 0.25,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 8 },
          elevation: 10,
          width: '100%',
          marginTop: 16,
        }}
        colors={['#707070', '#1E1E1E']}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Pressable
          onPress={() => props.navigation.navigate('ScanDocumentCameraScreen')}
          align="mid"
          width={'100%'}
          height={63}
          borderRadius="l"
        >
          <Text color="white" style={{ fontSize: 15 }} font="SemiBold">
            Scan Me
          </Text>
        </Pressable>
      </LinearGradient>

      {/* Button 2 */}
      <LinearGradient
        style={{
          borderRadius: 40,
          overflow: 'hidden',
          shadowColor: '#000',
          shadowOpacity: 0.25,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 8 },
          elevation: 10,
          width: '100%',
          marginTop: 16,
        }}
        colors={['#A80F19', '#A85155']}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Pressable align="mid" width={'100%'} height={63} borderRadius="l">
          <Text color="white" style={{ fontSize: 15 }} font="SemiBold">
            Upload Document
          </Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
}
