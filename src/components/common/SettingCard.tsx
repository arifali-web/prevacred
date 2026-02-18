import {FlatList, Icon, Pressable, Text, View} from '@components';
import React from 'react';
import {RemoveModal} from './REmoveModal';

export function SettingCard({item, ...props}: any) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const handleClick = () => {
    if (item.path) {
      console.log(item.path);

      props.navigation.navigate(item.path);
    } else {
      setModalVisible(true);
    }
  };
  return (
    <>
      <Pressable
        onPress={handleClick}
        row
        space="between"
        align="center"
        backgroundColor="background"
        padding="s"
        borderRadius="s">
        <View row gap="s" align="center">
          <View
            style={{backgroundColor: item.bgColor ? '#ECDEE0' : '#E3E4E8'}}
            padding="s"
            borderRadius="s">
            <Icon name={item.icon as any} size="s" />
          </View>
          <Text
            font="Medium"
            color={item.bgColor ? 'error' : 'subHeading'}
            size="h5">
            {item.title}
          </Text>
        </View>
        <Icon name="ArrowRight" size="s" />
      </Pressable>
      <RemoveModal
        isVisible={modalVisible}
        setModalVisible={setModalVisible}
        heading={item.heading}
        description={item.description}
        buttonText={item.buttonText}
        cancelBtn={item.cancelBtn}
        source={item.source}
      />
    </>
  );
}
