// import { IconSourceType } from '@assets';
// import { Icon, View } from '@components';
// import LinearGradient from 'react-native-linear-gradient';

// export function TabIcon({
//   focused,
//   activeName,
// }: {
//   focused: boolean;
//   activeName: IconSourceType;
// }) {
//   if (focused) {
//     return (
//       <LinearGradient
//         style={{ width: 66, height: 66, borderRadius: 33, marginTop: -40 }}
//         colors={['#A85155', '#FA002D']}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 0 }}
//       >
//         <View
//           style={{
//             width: 66,
//             height: 66,
//             alignItems: 'center',
//             justifyContent: 'center',
//             shadowColor: '#000',
//             shadowOpacity: 0.25,
//             shadowRadius: 12,
//             shadowOffset: { width: 0, height: 8 },
//             elevation: 10,
//           }}
//         >
//           <Icon name={activeName} tintColor="#FFFFFF" size="s" />
//         </View>
//       </LinearGradient>
//     );
//   }

//   return <Icon name={activeName} tintColor="#9AA0A6" size="s" />;
// }

import React, { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Icon, View } from '@components';
import { IconSourceType } from '@assets';

export function TabIcon({
  focused,
  activeName,
}: {
  focused: boolean;
  activeName: IconSourceType;
}) {
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  useEffect(() => {
    const showSub = Keyboard.addListener('keyboardDidShow', () =>
      setKeyboardOpen(true),
    );
    const hideSub = Keyboard.addListener('keyboardDidHide', () =>
      setKeyboardOpen(false),
    );
    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  // ✅ If keyboard open, don't float the focused icon
  const floatUp = focused && !keyboardOpen;

  if (floatUp) {
    return (
      <LinearGradient
        style={{ width: 66, height: 66, borderRadius: 33, marginTop: -40 }}
        colors={['#A85155', '#FA002D']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View
          style={{
            width: 66,
            height: 66,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOpacity: 0.25,
            shadowRadius: 12,
            shadowOffset: { width: 0, height: 8 },
            elevation: 10,
          }}
        >
          <Icon name={activeName} tintColor="#FFFFFF" size="s" />
        </View>
      </LinearGradient>
    );
  }

  // ✅ keyboard open OR not focused => normal icon (no negative margin)
  return (
    <Icon
      name={activeName}
      tintColor={focused ? '#FFFFFF' : '#9AA0A6'}
      size="s"
    />
  );
}
