import { Icon, View } from "@components";
import LinearGradient from "react-native-linear-gradient";

export function TabIcon({
  focused,
  activeName,
}: {
  focused: boolean;
  activeName: string;
}) {
  if (focused) {
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

  return <Icon name={activeName} tintColor="#9AA0A6" size="s" />;
}
