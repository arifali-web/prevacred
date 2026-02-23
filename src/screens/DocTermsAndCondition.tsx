import { LinearGradientButton, Text, View } from '@components';
import React from 'react';
import { Platform } from 'react-native';
import { UserProps } from '.';

function DocTermsAndCondition(props: UserProps<'TermsandConditions'>) {
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
        size="h4"
        font="SemiBold"
        color="primary"
        text="Terms and Condition"
      />
      <Text size="h5" font="Regular" textAlign="center" color="primary">
        By using the Prevacred platform to submit your employment application
        and related documents, you agree to the following Terms and Conditions,
        which govern your interaction with the system and any hiring corporation
        utilizing the platform. Applicants may be asked to upload specific
        documents requested by the corporation to which they are applying. These
        may include, but are not limited to, union membership cards, diplomas,
        educational transcripts, insurance cards, or other forms of
        identification. By clicking the agree button and uploading these
        documents, you confirm that you are doing so voluntarily and without
        coercion. This step is mandatory; applicants who do not check the box
        will be unable to
      </Text>
      <LinearGradientButton
        title="I Agree"
        onPress={() => props.navigation.navigate('BackgroundScreening')}
      />
    </View>
  );
}

export default DocTermsAndCondition;
