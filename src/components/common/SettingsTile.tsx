import { Icon, Pressable, Text, View } from '@components';

export function SettingsTile({
  title,
  onPress,
}: {
  title: string;
  onPress?: () => void;
}) {
  return (
    <Pressable onPress={onPress}>
      <View
        row
        space="between"
        align="center"
        backgroundColor="white"
        padding
        borderRadius
      >
        <Text style={{ fontSize: 15 }} font="Medium" color="primary">
          {title}
        </Text>
        <Icon name="ArrowRight" size="xs" color="primary" />
      </View>
    </Pressable>
  );
}
