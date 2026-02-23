import {
  Icon,
  Image,
  LinearGradientButton,
  Pressable,
  Text,
  TextInput,
  View,
} from '@components';
import React from 'react';
import { Platform, TextInputBase } from 'react-native';
import { UserProps } from '.';

function EditDocument(props: UserProps<'EditDocument'>) {
  return (
    <View
      paddingTop={Platform.OS === 'ios' ? 'l' : 's'}
      backgroundColor="onPrimary"
      flex
      gap="b"
      paddingHorizontal
      align="center"
    >
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
        with={'100%'}
        style={{
          borderWidth: 1,
          borderRadius: 5.46,
          borderColor: '#C9C9C9',
        }}
        placeholder="Type Name"
        next="email"
      />

      <LinearGradientButton
        title="Continue"
        onPress={() => props.navigation.navigate('TermsandConditions')}
      />
    </View>
  );
}

export default EditDocument;
