// import {
//   View,
//   Text,
//   BackArrow,
//   Form,
//   TextInput,
//   Icon,
//   Button,
//   MediaPicker,
//   Image,
//   Pressable,
// } from '@components';
// import React from 'react';
// import {UserProps} from '.';
// import {Platform} from 'react-native';

// export default function EditProfile(props: UserProps<'EditProfile'>) {
//   return (
//     <View
//       paddingTop={Platform.OS === 'ios' ? 'xl' : 's'}
//       flex
//       gap="b"
//       paddingHorizontal>
//       <BackArrow title="Edit Profile" navigation={props.navigation}>
//         <Text size="h5" color="primary" font="Medium">
//           Step 1 of 2
//         </Text>
//       </BackArrow>
//       <Form>
//         <View flex space="between">
//           <View gap>
//             <MediaPicker
//               id="profile"
//               type="image"
//               max={1}
//               children={({firstImage, Error, images, openPicker}) => (
//                 <Pressable onPress={() => openPicker({override: true})}>
//                   {firstImage?.path ? (
//                     <Image
//                       //   src={firstImage.path}
//                       source={{uri: firstImage.path}}
//                       height={88}
//                       width={88}
//                       resizeMode="contain"
//                       style={{objectFit: 'cover'}}
//                       alignSelf="center"
//                       borderRadius="s"
//                     />
//                   ) : (
//                     <Image
//                       alignSelf="center"
//                       src="Profile"
//                       height={88}
//                       width={88}
//                       resizeMode="contain"
//                     />
//                   )}
//                 </Pressable>
//               )}
//             />
//             <TextInput
//               id="name"
//               placeholder="Name"
//               next="email"
//               left={() => <Icon name="User" size="s" />}
//               leftDull={() => <Icon name="UserDull" size="s" />}
//             />
//             <TextInput
//               id="email"
//               next="phone"
//               placeholder="Email Address"
//               left={() => <Icon name="Email" size="s" />}
//               leftDull={() => <Icon name="EmailDull" size="s" />}
//             />
//             <TextInput
//               id="phone"
//               placeholder="Phone Number"
//               left={() => <Icon name="Phone" size="s" />}
//               leftDull={() => <Icon name="PhoneDull" size="s" />}
//             />
//           </View>
//           <Button
//             onPress={() => props.navigation.navigate('Editstep2')}
//             label="Next"
//           />
//         </View>
//       </Form>
//     </View>
//   );
// }
