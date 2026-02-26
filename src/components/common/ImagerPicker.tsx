import React from 'react';
import ImageCropPicker, { ImageOrVideo } from 'react-native-image-crop-picker';
import { useForm } from '../form';

type Props = {
  id?: string;
  next?: string;

  // validation limits
  max?: number; // e.g. 1
  min?: number; // e.g. 1 (required)
  required?: boolean; // shortcut for min=1

  type?: 'image' | 'video';

  // extra custom validation (optional)
  validate?: (arg: ImageOrVideo[]) => string[];

  // optional callback when media changes
  onChange?: (images: ImageOrVideo[]) => void;

  children: (arg: {
    firstImage?: ImageOrVideo;
    Error: string[];
    images: ImageOrVideo[];
    openCamera: (arg?: { override?: boolean }) => Promise<void>;
    clear: () => void;
  }) => React.ReactElement;
};

export const ImagePicker = (props: Props) => {
  const min = props.required ? 1 : props.min ?? 0;
  const max = props.max ?? 999;

  const baseValidate = (arr: ImageOrVideo[]) => {
    const errors: string[] = [];

    if (min > 0 && (!arr || arr.length < min)) {
      errors.push(`At least ${min} image required`);
    }
    if (max && arr.length > max) {
      errors.push(`Maximum ${max} images allowed`);
    }

    // custom validation provided by you
    if (props.validate) {
      errors.push(...props.validate(arr));
    }

    return errors;
  };

  const { Error, Value, setValue } = useForm<ImageOrVideo[]>({
    id: props.id,
    initialValue: [],
    validate: baseValidate,
  });

  const setAndNotify = (updater: (prev: ImageOrVideo[]) => ImageOrVideo[]) => {
    setValue(prev => {
      const next = updater(prev);
      props.onChange?.(next);
      return next;
    });
  };

  const openCamera = async ({ override }: { override?: boolean } = {}) => {
    // max=1 ho to override true rakhna best
    const forceOverride = max === 1 ? true : !!override;

    try {
      const media = await ImageCropPicker.openCamera({
        width: 900,
        height: 1200,
        mediaType: props.type === 'video' ? 'video' : 'photo',
        cropping: false, // aap true karna chaho to kar sakte ho
        compressImageQuality: 0.8,
        includeBase64: false,
      });

      setAndNotify(prev => (forceOverride ? [media] : prev.concat([media])));
    } catch (e: any) {
      // user cancel -> error message na do
      if (e?.code === 'E_PICKER_CANCELLED') return;
      // otherwise
      console.warn('Camera error:', e);
    }
  };

  const clear = () => setAndNotify(() => []);

  return props.children({
    firstImage: Value?.[0],
    Error,
    images: Value,
    openCamera,
    clear,
  });
};
