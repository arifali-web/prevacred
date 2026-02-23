// import {
//   BackArrow,
//   Button,
//   Form,
//   Icon,
//   Image,
//   MediaPicker,
//   OptionPicker,
//   Pressable,
//   RadioButton,
//   SignUpheader,
//   Text,
//   View,
// } from '@components';
// import React from 'react';
// import {UserProps} from '.';

// export default function Editstep2(props: UserProps<'Editstep2'>) {
//   return (
//     <View
//       paddingTop={Platform.OS === 'ios' ? 'xl' : 's'}
//       flex
//       gap="b"
//       paddingHorizontal>
//       <BackArrow title="Edit Profile" navigation={props.navigation}>
//         <Text size="h5" color="primary" font="Medium">
//           Step 2 of 2
//         </Text>
//       </BackArrow>
//       <Form>
//         <View flex space="between">
//           <View gap>
//             <Text size="h3" font="Medium" text="Professional Info" />
//             <RadioButton
//               id="broker"
//               label="Agent Type"
//               optional
//               options={[
//                 {
//                   value: 'broker',
//                   label: 'Real State Broker',
//                 },
//                 {
//                   value: 'lender',
//                   label: 'Lender/ mtg Broker',
//                 },
//               ]}
//             />
//             <RadioButton
//               id="broker"
//               label="Multi state License"
//               optional
//               options={[
//                 {
//                   value: 'yes',
//                   label: 'Yes',
//                 },
//                 {
//                   value: 'no',
//                   label: 'No',
//                 },
//               ]}
//             />
//             <Text size="h5" marginTop="s" font="Medium" text="Location" />
//             <View row gap>
//               <OptionPicker
//                 id="city"
//                 next="state"
//                 style={{backgroundColor: '#000'}}
//                 placeholder="City"
//                 options={[
//                   {title: 'New York', id: 1},
//                   {title: 'Los Angeles', id: 2},
//                   {title: 'Chicago', id: 3},
//                   {title: 'Houston', id: 4},
//                   {title: 'Phoenix', id: 5},
//                 ]}
//                 width={165}
//                 editable={true}
//                 right={() => <Icon name="DownArrow" size="s" />}
//                 rightDull={() => <Icon name="DownArrow" size="s" />}
//               />
//               <OptionPicker
//                 id="state"
//                 next="city"
//                 placeholder="State"
//                 options={[
//                   {title: 'Alabama', id: 'Alabama'},
//                   {title: 'Alaska', id: 'Alaska'},
//                   {title: 'Arizona', id: 'Arizona'},
//                   {title: 'Arkansas', id: 'Arkansas'},
//                   {title: 'California', id: 'California'},
//                   // Add more states here...
//                 ]}
//                 width={165}
//                 editable={true}
//                 right={() => <Icon name="DownArrow" size="s" />}
//                 rightDull={() => <Icon name="DownArrow" size="s" />}
//               />
//             </View>
//             <Text
//               size="h5"
//               marginTop="s"
//               font="Medium"
//               text="State License Image"
//             />
//             <MediaPicker
//               id="profile"
//               type="image"
//               max={1}
//               children={({firstImage, Error, images, openPicker}) => (
//                 <View>
//                   {firstImage?.path ? (
//                     <Pressable onPress={() => openPicker({override: true})}>
//                       <Image
//                         source={{uri: firstImage?.path}}
//                         height={123}
//                         width={343}
//                         borderRadius="s"
//                       />
//                     </Pressable>
//                   ) : (
//                     <Pressable
//                       onPress={() => openPicker({override: true})}
//                       align="center"
//                       gap
//                       backgroundColor="background"
//                       borderRadius="s"
//                       padding="l">
//                       <Icon name="Upload" size="s" />
//                       <Text size="small" font="Regular" text="Upload Image" />
//                     </Pressable>
//                   )}
//                 </View>
//               )}
//             />
//           </View>
//           <Button
//             label="Update"
//             onPress={() => props.navigation.navigate('PrfileDetails')}
//           />
//         </View>
//       </Form>
//     </View>
//   );
// }
