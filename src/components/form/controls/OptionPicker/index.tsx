// import { BaseInput, BaseTextInputProps } from '../BaseTextInput';
// import { Pressable, Text, View } from '../../../layout';
// import { useMemo, useRef } from 'react';
// import {
//   BottomSheetBackdrop,
//   BottomSheetFlatList,
//   BottomSheetModal,
// } from '@gorhom/bottom-sheet';
// import { IconSourceType, colors, sizes } from '@assets';
// import { FullWindowOverlay } from 'react-native-screens';
// import { useForm } from '../../wrapper';

// type OptionsType = {
//   // icon?: IconSourceType;
//   title: string;
//   id: string | number;
// };

// type OptionPickerProps = Omit<BaseTextInputProps, 'value'> & {
//   options: OptionsType[];
//   value?: OptionsType;
//   optional?: boolean;
//   width?: number;
// };

// export const OptionPicker = ({
//   value,
//   optional,
//   ...props
// }: OptionPickerProps) => {
//   const bottomSheetModal = useRef<BottomSheetModal>(null);
//   const snapPoints = useMemo(() => ['50%'], []);
//   const { form, Error, Value, setValue } = useForm({
//     id: props.id,
//     // initialValue: props.options.find(s => s.id == value),
//     initialValue: props.options.find(s => s.id === value?.id),
//     validate(v, form) {
//       if (!optional && !v) return [props.label + ' is required'];
//       return [];
//     },
//   });
//   return (
//     <>
//       <Pressable
//         disabled={!props.editable}
//         onPress={() => bottomSheetModal.current?.present()}
//       >
//         <View style={{ width: props.width }} pointerEvents="none">
//           <BaseInput
//             {...props}
//             focusDisable
//             error={Error}
//             value={Value?.title || ''}
//           />
//         </View>
//       </Pressable>
//       <BottomSheetModal
//         ref={bottomSheetModal}
//         index={0}
//         snapPoints={snapPoints} // fixed half
//         enableDynamicSizing={false}
//         enablePanDownToClose
//         backdropComponent={backdropProps => (
//           <BottomSheetBackdrop
//             {...backdropProps}
//             pressBehavior="close"
//             appearsOnIndex={0}
//             disappearsOnIndex={-1}
//           />
//         )}
//         containerComponent={props => (
//           <Pressable
//             onPress={() => bottomSheetModal.current?.close()}
//             absolute
//             height={'100%'}
//             width={'100%'}
//             backgroundColor="backdrop"
//           >
//             {props.children}
//           </Pressable>
//         )}
//         // snapPoints={['40%', '60%']}
//       >
//         <BottomSheetFlatList
//           style={{ flex: 1 }}
//           data={props.options}
//           keyExtractor={i => i.id + i.title}
//           renderItem={({ item }) => (
//             <Pressable
//               paddingHorizontal
//               onPressIn={() => {
//                 setValue(item);
//                 // setTimeout(() => {
//                 //   bottomSheetModal.current?.close();
//                 // }, 100);
//                 bottomSheetModal.current?.dismiss();
//               }}
//               // onPress={() => {
//               //   // ✅ onPress (not onPressIn)
//               //   setValue(item); // ✅ set first
//               //   bottomSheetModal.current?.close(); // ✅ close immediately
//               // }}
//               row
//               align="mid"
//             >
//               <Text size="h6" flex>
//                 {item.title}
//               </Text>
//             </Pressable>
//           )}
//           contentContainerStyle={{
//             padding: sizes.layout.s,
//             gap: sizes.layout.b,
//           }}
//         />
//       </BottomSheetModal>
//     </>
//   );
// };

import { BaseInput, BaseTextInputProps } from '../BaseTextInput';
import { Pressable, Text, View } from '../../../layout';
import { useMemo, useRef } from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetModal,
} from '@gorhom/bottom-sheet';
import { sizes } from '@assets';
import { useForm } from '../../wrapper';

type OptionsType = {
  title: string;
  id: string | number;
};

type OptionPickerProps = Omit<BaseTextInputProps, 'value'> & {
  options: OptionsType[];
  value?: OptionsType;
  optional?: boolean;
  width?: number;
  title: string;
};

export const OptionPicker = ({
  value,
  optional,
  title,
  ...props
}: OptionPickerProps) => {
  const bottomSheetModal = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['50%'], []);

  const { form, Error, Value, setValue } = useForm({
    id: props.id,
    initialValue: props.options.find(s => s.id === value?.id),
    validate(v) {
      if (!optional && !v) return [title + ' is required'];
      return [];
    },
  });

  return (
    <>
      <Pressable
        disabled={!props.editable}
        onPress={() => bottomSheetModal.current?.present()}
      >
        <View style={{ width: props.width }} pointerEvents="none">
          <BaseInput
            {...props}
            focusDisable
            error={Error}
            value={Value?.title || ''}
          />
        </View>
      </Pressable>

      <BottomSheetModal
        ref={bottomSheetModal}
        index={0}
        snapPoints={snapPoints}
        enableDynamicSizing={false}
        enablePanDownToClose
        backdropComponent={backdropProps => (
          <BottomSheetBackdrop
            {...backdropProps}
            pressBehavior="close"
            appearsOnIndex={0}
            disappearsOnIndex={-1}
          />
        )}
      >
        <BottomSheetFlatList
          data={props.options}
          keyExtractor={(i: { id: string }) => String(i.id)}
          renderItem={({ item }: { item: OptionsType }) => (
            <Pressable
              paddingHorizontal
              onPress={() => {
                setValue(item);
                bottomSheetModal.current?.dismiss(); // dismiss is more reliable than close
              }}
              row
              align="mid"
            >
              <Text size="h6" flex>
                {item.title}
              </Text>
            </Pressable>
          )}
          contentContainerStyle={{
            padding: sizes.layout.s,
            gap: sizes.layout.b,
          }}
        />
      </BottomSheetModal>
    </>
  );
};
