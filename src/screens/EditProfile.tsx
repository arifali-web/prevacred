import React from 'react';
import {
  View,
  Text,
  BackArrow,
  Form,
  TextInput,
  Button,
  MediaPicker,
  Image,
  Pressable,
  Page,
  SettingsTile,
} from '@components';
import { Platform } from 'react-native';
import { UserProps } from '.';
import LinearGradient from 'react-native-linear-gradient';

export default function EditProfile(props: UserProps<'EditProfile'>) {
  return (
    <View flex>
      <Page>
        {/* ===== Top Header (Red) ===== */}
        <LinearGradient
          colors={['#A85155', '#A20C13']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View
            paddingTop={Platform.OS === 'ios' ? 'xl' : 's'}
            paddingHorizontal
            paddingBottom="l"
            style={{ paddingBottom: 100 }}
          >
            <BackArrow title="Back" navigation={props.navigation} />

            <View align="center" marginTop="l" gap="xs">
              <Text size="h2" color="white" font="Bold">
                Profile Setup
              </Text>
              <Text size="h6" color="white" opacity={0.85}>
                Customize your account information
              </Text>
            </View>
          </View>
        </LinearGradient>

        {/* ===== Avatar floating over header ===== */}
        <View
          style={{
            //   position: 'absolute',
            //   top: 170,
            //   left: 0,
            //   right: 0,
            //   paddingBottom: 100,
            marginTop: -80,
          }}
        >
          <MediaPicker
            id="profile"
            type="image"
            max={1}
            children={({ firstImage, openPicker, Error }) => (
              <View style={{ alignItems: 'center', marginVertical: 16 }}>
                {firstImage?.path ? (
                  <Image
                    source={{ uri: firstImage.path }}
                    style={{
                      height: 140,
                      width: 140,
                      borderRadius: 131,
                      borderWidth: 5,
                      borderColor: '#B9B9B9',
                    }}
                    resizeMode="cover"
                  />
                ) : (
                  <Image
                    src={'ProfileIcon'}
                    style={{ height: 140, width: 140 }}
                    resizeMode="contain"
                  />
                )}

                <Pressable
                  onPress={
                    () => openPicker({ override: true })
                    // props.navigation.navigate('TakePicture')
                  }
                >
                  <Image
                    src={'Upload'}
                    style={{
                      position: 'absolute',
                      bottom: 10,
                      right: -75,
                      height: 48,
                      width: 48,
                    }}
                  />
                </Pressable>

                {/* ✅ show validation error */}
                {!!Error?.length && (
                  <Text style={{ marginTop: 12, color: 'red' }}>
                    {Error[0]}
                  </Text>
                )}
              </View>
            )}
          />
        </View>

        {/* ===== Form Area ===== */}
        <Form>
          <View flex paddingHorizontal gap>
            {/* Labeled inputs like screenshot */}

            <TextInput
              id="name"
              label="Full Name"
              placeholder="Enter your full name"
              next="email"
            />

            <TextInput
              id="email"
              label="Email Address"
              placeholder="Enter your email"
              next="phone"
            />

            <TextInput
              id="phone"
              label="Phone Number"
              placeholder="Enter your phone number"
              next="bio"
              keyboardType="phone-pad"
            />

            <TextInput
              label="Bio"
              id="bio"
              placeholder="Tell us about yourself..."
              multiline
              numberOfLines={4}
            />

            {/* Button */}
            <View marginTop="s">
              <Button
                label="Edit Profile"
                onPress={() => {
                  // submit / save
                }}
              />
            </View>

            {/* ===== Account Settings Section ===== */}
            <View marginTop="l" gap paddingBottom="xl">
              <Text size="h5" color="primary" font="SemiBold">
                Account Settings
              </Text>

              <SettingsTile
                title="Change Password"
                onPress={() => props.navigation.navigate('ChangePassword')}
              />
              <SettingsTile
                title="Privacy Settings"
                onPress={() => props.navigation.navigate('PrivacySettings')}
              />
              <SettingsTile
                title="Notification Preferences"
                onPress={() =>
                  props.navigation.navigate('NotificationPreferences')
                }
              />
            </View>
          </View>
        </Form>
      </Page>
    </View>
  );
}
