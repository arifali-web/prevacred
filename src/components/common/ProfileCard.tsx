// import { Icon, Image, Pressable, Text, View } from '@components';
// import React from 'react';
// import { Platform } from 'react-native';
// // import LinearGradient from 'react-native-linear-gradient';

// export function ProfileCard({ props, type }: any) {
//   return (
//     // <LinearGradient
//     //   style={{
//     //     height:
//     //       Platform.OS === 'ios'
//     //         ? type === 'show'
//     //           ? 350
//     //           : 390
//     //         : type === 'show'
//     //         ? 290
//     //         : 340,
//     //   }}
//     //   colors={['#30c3df', '#2679df']}
//     //   start={{ x: 0, y: 0 }}
//     //   end={{ x: 1, y: 0 }}
//     // >
//     <View
//       paddingTop={Platform.OS === 'ios' ? 'xl' : 's'}
//       flex
//       gap="b"
//       paddingHorizontal
//     >
//       <View row space="between" marginBottom>
//         <View row gap align="center">
//           <Pressable
//             style={{ backgroundColor: '#6CC7E8' }}
//             align="mid"
//             width={40}
//             height={40}
//             borderRadius="s"
//             // onPress={() => props.navigation.goBack()}
//           >
//             {/* <Icon name="WhiteArrow" size="s" /> */}
//           </Pressable>
//           <Text size="h4" color="white" font="Medium">
//             Profile Details
//           </Text>
//         </View>
//         {type === 'show' && (
//           <Pressable
//             style={{ backgroundColor: '#6CC7E8' }}
//             align="mid"
//             width={40}
//             height={40}
//             borderRadius="s"
//             onPress={() => props.navigation.navigate('EditProfile')}
//           >
//             <Icon tintColor={'white'} name="ArrowLeft" size="s" />
//           </Pressable>
//         )}
//       </View>
//       <View align="center" gap="xs">
//         <Image src="User1" width={100} aspectRatio={1} resizeMode="contain" />
//         <Text size="h2" font="Medium" color="white" text={'Roy Evans'} />
//         <Text
//           size="h5"
//           color="white"
//           font="Medium"
//           text={'Real Estate Broker'}
//         />
//         <Text size="h5" color="white" font="Medium" text={'Miami'} />
//       </View>
//       {type === 'hide' && (
//         <View row gap="s" align="mid">
//           <Pressable
//             style={{ backgroundColor: '#72A8EB' }}
//             borderRadius="s"
//             padding="s"
//           >
//             <Icon name="WhiteMail" size="xxs" />
//           </Pressable>
//           <Pressable
//             style={{ backgroundColor: '#72A8EB' }}
//             borderRadius="s"
//             padding="s"
//           >
//             <Icon name="WhitePhone" size="xxs" />
//           </Pressable>
//           <Pressable
//             onPress={() => props.navigation.navigate('Chat')}
//             style={{ backgroundColor: '#72A8EB' }}
//             borderRadius="s"
//             padding="s"
//           >
//             <Icon name="WhiteMessage" size="xxs" />
//           </Pressable>
//         </View>
//       )}
//     </View>
//     // </LinearGradient>
//   );
// }
