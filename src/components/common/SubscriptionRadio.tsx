import { Icon, Pressable, Text, useForm, View } from '@components';
// import {BottomSheetModal} from '@gorhom/bottom-sheet';
import React, { useRef } from 'react';

type OptionsType = {
  id: string | number;
  errorText?: string;
  label?: string;
  optional?: boolean;
  options?: { value: string; label: string }[];
};

export function SubscriptionRadio(props: OptionsType) {
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
      <View marginTop="b" gap="b">
        {props.options.map((option, index) => (
          <Pressable
            onPress={() => setValue(option.value)}
            key={index}
            row
            gap="s"
            style={{ alignItems: 'center' }}
            height={70}
            backgroundColor="background"
            padding
            borderRadius="b"
          >
            <Pressable>
              <Icon
                name={Value === option.value ? 'SubRadioSelected' : 'SubRadio'}
              />
            </Pressable>
            <View row flex space="between" align="center">
              <View>
                <Text text={option.label} size="h6" />
                <Text
                  text={`${option.preMonth} for a month`}
                  style={{ opacity: 0.6 }}
                  size="small"
                  color="subHeading"
                />
              </View>
              <Text text={`${option.price}`} size="h4" />
            </View>
          </Pressable>
        ))}
      </View>
      {!!Error.length && (
        <Text paddingLeft text={props.errorText} size="small" color="error" />
      )}
    </View>
  );
}
