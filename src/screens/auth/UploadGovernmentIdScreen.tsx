import {
  Button,
  Form,
  HeadingCard,
  Image,
  ImagePicker,
  MediaPicker,
  Pressable,
  Stepper,
  Text,
  View,
} from '@components';
import React from 'react';
import { Platform } from 'react-native';
import { UserProps } from '..';

export default function UploadGovernmentIdScreen(props: UserProps<'IdScreen'>) {
  return (
    <View
      flex
      backgroundColor="white"
      paddingTop={Platform.OS === 'ios' ? 'xl' : 's'}
      gap
      paddingHorizontal
    >
      <HeadingCard
        img="IdIcon"
        heading="Upload Government ID"
        subHeading="Upload your Government ID for Verification"
      />
      <Stepper total={4} currentIndex={2} />
      <Form>
        <View flex gap="xl" marginTop="l">
          <MediaPicker
            id="profile"
            type="image"
            next="name"
            max={1}
            children={({ firstImage, Error, images, openPicker }) => {
              console.log(firstImage, 'firstImage');
              return (
                <View align="mid" marginVertical>
                  {firstImage?.path ? (
                    <Image
                      source={{ uri: firstImage?.path }}
                      height={225}
                      width={'90%'}
                      borderRadius="s"
                      // style={{ overflow: 'hidden' }}
                      resizeMode="cover"
                    />
                  ) : (
                    <Image
                      src={'IdCard'}
                      height={225}
                      width={'90%'}
                      resizeMode="contain"
                    />
                  )}
                  <Pressable
                    onPress={() => {
                      openPicker({ override: true });
                    }}
                  >
                    <Image
                      src="Upload"
                      absolute
                      bottom={-20}
                      right={-30}
                      height={48}
                      width={48}
                    />
                  </Pressable>
                </View>
              );
            }}
          />
          <Button
            onPress={() => props.navigation.navigate('Otp')}
            label="Continue"
          />
        </View>
      </Form>
    </View>
  );
}
