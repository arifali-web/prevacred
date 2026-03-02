import { LinearGradientButton, Page, Text, View } from '@components';
import React from 'react';
import { Platform } from 'react-native';
import { UserProps } from '..';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

function DocTermsAndCondition() {
  const navigation = useNavigation<StackNavigationProp<any, any>>();
  return (
    <Page backgroundColor="white">
      <View
        paddingTop={Platform.OS === 'ios' ? 'l' : 's'}
        backgroundColor="onPrimary"
        flex
        gap="b"
        paddingHorizontal
        align="center"
        style={{ paddingBottom: 100 }}
      >
        <Text
          size="h4"
          font="SemiBold"
          color="primary"
          text="Terms and Condition"
        />
        <Text size="h5" font="Regular" textAlign="center" color="primary">
          By using the Prevacred platform to submit your employment application
          and related documents, you agree to the following Terms and
          Conditions, which govern your interaction with the system and any
          hiring corporation utilizing the platform. Applicants may be asked to
          upload specific documents requested by the corporation to which they
          are applying. These may include, but are not limited to, union
          membership cards, diplomas, educational transcripts, insurance cards,
          or other forms of identification. By clicking the agree button and
          uploading these documents, you confirm that you are doing so
          voluntarily and without coercion. This step is mandatory; applicants
          who do not check the box will be unable to proceed with the submission
          of their application. You affirm that all documents you upload through
          the Prevacred application are accurate, unaltered, and represent
          original copies. You also certify that you are either the rightful
          owner of the documents or have full legal authority to submit them on
          behalf of the owner. Submitting fraudulent or modified documents may
          result in disqualification from the application process, legal action,
          or both. By uploading these documents, you release both the hiring
          corporation and Prevacred from any liability related to your voluntary
          submission. The hiring corporation is not responsible for the
          authenticity of documents submitted, and Prevacred functions solely as
          a platform facilitating this exchange. You agree that the corporation
          cannot be held liable for how your documents are used in the hiring
          process, provided the documents are handled in accordance with
          applicable laws and privacy standards. Prevacred is committed to
          maintaining the privacy and security of all data submitted through the
          platform. Your documents will be stored securely and shared only with
          the specific corporation to which you are applying. Prevacred will not
          distribute your information to third parties without your explicit
          consent, except where required by law. These Terms and Conditions may
          be updated from time to time to reflect changes in legal, operational,
          or platform requirements. Continued use of the Prevacred platform
          after such updates constitutes acceptance of the revised terms. If you
          do not agree with these Terms, please do not proceed with the
          application or document submission process.
        </Text>
        <LinearGradientButton
          title="I Agree"
          onPress={() =>
            navigation.navigate('Home', { screen: 'Background Screening' })
          }
        />
      </View>
    </Page>
  );
}

export default DocTermsAndCondition;
