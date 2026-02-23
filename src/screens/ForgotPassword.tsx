// import React from 'react';
// import {
//   Button,
//   Form,
//   Icon,
//   Image,
//   Page,
//   Pressable,
//   Text,
//   TextInput,
//   View,
// } from '@components';
// import {UserProps} from '.';
// import {Platform} from 'react-native';

// export default function ForgotPassword(props: UserProps<'ForgotPassword'>) {
//   return (
//     <Form>
//       <View
//         backgroundColor="onPrimary"
//         paddingTop={Platform.OS === 'ios' ? 'xl' : 's'}
//         flex
//         padding
//         borderRadius="xs">
//         <View row align="center">
//           <Pressable
//             align="mid"
//             backgroundColor="background"
//             width={40}
//             height={40}
//             borderRadius="s"
//             onPress={() => props.navigation.goBack()}>
//             <Icon name="ArrowLeft" size="s" />
//           </Pressable>
//           <View flex align="center">
//             <Image
//               src="Logo"
//               marginRight="l"
//               width={60}
//               aspectRatio={1}
//               resizeMode="contain"
//             />
//           </View>
//         </View>
//         <Page
//           automaticallyAdjustKeyboardInsets={true}
//           paddingVertical="s"
//           backgroundColor="onPrimary"
//           gap
//           flex>
//           <Image
//             src="Lock"
//             flex
//             alignSelf="center"
//             width={'100%'}
//             height={210}
//             resizeMode="contain"
//           />
//           <View marginVertical="l">
//             <Text
//               marginBottom="s"
//               size="h1"
//               font="SemiBold"
//               text="Forgot Password"
//             />
//             <Text
//               color="subHeading"
//               font="Regular"
//               size="h6"
//               text="Enter the email address associated with your account."
//             />
//           </View>
//           <TextInput
//             id="email"
//             type="email"
//             placeholder="Email Address"
//             left={() => <Icon name="Email" size="s" />}
//             leftDull={() => <Icon name="EmailDull" size="s" />}
//           />
//           <Button
//             onPress={() => props.navigation.navigate('Tabs')}
//             label="Submit"
//           />
//           <Text
//             textAlign="center"
//             marginVertical="s"
//             style={{opacity: 0.9}}
//             size="h5"
//             color="subHeading"
//             text="We will email you a link to reset your 
// password."
//           />
//         </Page>
//       </View>
//     </Form>
//   );
// }
