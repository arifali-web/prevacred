import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
  useBottomSheetSpringConfigs,
} from '@gorhom/bottom-sheet';
import React, { useCallback, useRef } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

export function MyBottomSheet({ children, bottomSheetRef, background }: any) {
  const animationConfigs = useBottomSheetSpringConfigs({
    damping: 80,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    stiffness: 500,
  });

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={['60%']}
      keyboardBehavior="interactive"
      keyboardBlurBehavior="restore"
      // style={{ zIndex: -1 }}
      index={-1}
      // enableContentPanningGesture={false}
      enablePanDownToClose={true}
      // enableOverDrag={false}
      android_keyboardInputMode="adjustResize"
      onChange={handleSheetChanges}
      backgroundStyle={{
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: '#F9F9F9',
        ...(Platform.OS === 'ios'
          ? {
              shadowColor: '#000',
              shadowOffset: { width: 0, height: -6 },
              shadowOpacity: 0.12,
              shadowRadius: 12,
            }
          : {
              elevation: 12,
            }),
      }}
      handleIndicatorStyle={{
        width: 44,
        height: 5,
        borderRadius: 999,
        opacity: 0.35,
      }}
      // enablePanDownToClose
      animationConfigs={animationConfigs}
    >
      {/* <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
      > */}
      <BottomSheetScrollView
        keyboardShouldPersistTaps="handled"
        // contentContainerStyle={{ paddingBottom: 10 }}
      >
        {children}
      </BottomSheetScrollView>
      {/* </KeyboardAvoidingView> */}
    </BottomSheet>
  );
}
