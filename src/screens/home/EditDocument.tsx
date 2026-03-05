import {
  Icon,
  Image,
  LinearGradientButton,
  Page,
  Pressable,
  Text,
  TextInput,
  View,
} from '@components';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Keyboard, KeyboardAvoidingView, Platform } from 'react-native';

function EditDocument() {
  const navigation = useNavigation<StackNavigationProp<any, any>>();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      // keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 1000}
    >
      <View
        paddingTop={Platform.OS === 'ios' ? 'l' : 's'}
        backgroundColor="white"
        flex
        paddingHorizontal
      >
        <Page keyboardShouldPersistTaps="handled" backgroundColor="white">
          <View flex gap="b" paddingHorizontal align="center">
            <Image src="DocImg" width={230} height={352} />
            <Pressable
              width={222}
              backgroundColor="Text"
              height={50}
              align="mid"
              borderRadius="l"
              row
              gap="s"
              // padding="s"
            >
              <Text
                color="white"
                font="SemiBold"
                style={{
                  fontSize: 15,
                }}
              >
                Edit
              </Text>
              <Icon name="Edit" size="xs" />
            </Pressable>
            <Text
              size="body"
              color="primary"
              font="Medium"
              text={'Give a suitable title for the document'}
            />

            <TextInput
              id="name"
              style={{
                borderWidth: 1,
                borderRadius: 5.46,
                borderColor: '#C9C9C9',
                width: '100%',
              }}
              placeholder="Type Name"
            />

            <LinearGradientButton
              title="Continue"
              onPress={() =>
                navigation.navigate('Home', {
                  screen: 'DocTermsAndCondition',
                })
              }
            />
          </View>
        </Page>
      </View>
    </KeyboardAvoidingView>
  );
}

export default EditDocument;
