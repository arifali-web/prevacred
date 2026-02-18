import { Icon, Pressable, Text, View } from '../../../layout';
import { useRef } from 'react';
// import { BottomSheetModal } from "@gorhom/bottom-sheet"
import { useForm } from '../../wrapper';

type OptionsType = {
  id: string | number;
  errorText?: string;
  label?: string;
  optional?: boolean;
  options?: { value: string; label: string }[];
};

export const RadioButton = (props: OptionsType) => {
  const bottomSheetModal = useRef<BottomSheetModal>(null);
  const { form, Error, Value, setValue } = useForm({
    id: props.id,
    initialValue: props.options[0].value,
    validate(v, form) {
      if (!props.optional && !v) return [props.errorText];
      return [];
    },
  });

  return (
    <View>
      <Text text={props.label} size="h5" font="Medium" />
      <View marginTop="b" row gap="b" style={{ alignItems: 'center' }}>
        {props.options.map((option, index) => (
          <View key={index} row gap="s" style={{ alignItems: 'center' }}>
            <Pressable onPress={() => setValue(option.value)}>
              <Icon
                name={
                  Value === option.value
                    ? 'RadioButtonSelected'
                    : 'RadioButtonUnSelected'
                }
              />
            </Pressable>
            <Text text={option.label} size="body" />
          </View>
        ))}
      </View>
      {!!Error.length && (
        <Text paddingLeft text={props.errorText} size="small" color="error" />
      )}
    </View>
  );
};
