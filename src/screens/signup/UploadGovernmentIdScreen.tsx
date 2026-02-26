// UploadGovernmentIdScreen.js
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
        <View flex gap="l">
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
                      height={222}
                      width={'90%'}
                      // style={{ overflow: 'hidden' }}
                      resizeMode="cover"
                    />
                  ) : (
                    <Image
                      src={'IdCard'}
                      height={262}
                      width={'90%'}
                      resizeMode="cover"
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
                      bottom={0}
                      right={-30}
                      height={48}
                      width={48}
                    />
                  </Pressable>
                </View>
              );
            }}
          />
          {/* <ImagePicker
            id="profile"
            type="image"
            max={1}
            required
            onChange={imgs => {
              // yahan latest image mil jaayegi
              const path = imgs?.[0]?.path;
              if (path) setImage(path); // ✅ correct
            }}
          >
            {({ firstImage, Error, openCamera, clear }) => {
              return (
                <View style={{ alignItems: 'center', marginVertical: 16 }}>
                  {firstImage?.path ? (
                    <Image
                      source={{ uri: firstImage.path }}
                      style={{
                        height: 262,
                        width: 264,
                        borderRadius: 131,
                        borderWidth: 12,
                        borderColor: '#B9B9B9',
                      }}
                      resizeMode="cover"
                    />
                  ) : (
                    <Image
                      src={'ProfileIcon'}
                      style={{ height: 262, width: 264 }}
                      resizeMode="contain"
                    />
                  )}

                  <Pressable
                    onPress={
                      firstImage?.path
                        ? () => {
                            clear();
                          }
                        : () => {
                            // ✅ direct camera open
                            openCamera({ override: true });
                          }
                    }
                  >
                    <Image
                      src={firstImage?.path ? 'Delete' : 'Upload'}
                      style={{
                        position: 'absolute',
                        bottom: 15,
                        right: -100,
                        height: 48,
                        width: 48,
                      }}
                    />
                  </Pressable>

                  {!!Error?.length && (
                    <Text style={{ marginTop: 12, color: 'red' }}>
                      {Error[0]}
                    </Text>
                  )}
                </View>
              );
            }}
          </ImagePicker> */}
          <Button
            onPress={() => props.navigation.navigate('Otp')}
            label="Continue"
          />
        </View>
      </Form>
    </View>
  );
}
