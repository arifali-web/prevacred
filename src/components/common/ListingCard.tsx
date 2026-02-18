import {
  Icon,
  Image,
  MyModal,
  Pressable,
  ReportDelete,
  Text,
  View,
} from '@components';
import React from 'react';

export function ListingCard({...props}: any) {
  const [like, setLike] = React.useState(false);
  const [isVisible, setVisible] = React.useState(false);

  return (
    <View
      marginVertical="s"
      backgroundColor="background"
      padding
      borderRadius="b">
      <Pressable
        gap="s"
        onPress={() =>
          props.navigation.navigate('ListingCardDetails', {item: props})
        }
        row
        align="center"
        space="between">
        <Image
          src={props.img}
          width={110}
          height={140}
          resizeMode="cover"
          borderRadius="s"
        />
        <View>
          <Text size="body" font="Regular">
            {props.date}
          </Text>
          <View row gap="s" marginVertical="xs" align="center">
            <Icon name="Location" size="xs" />
            <Text
              font="Medium"
              size="h5"
              style={{opacity: 0.8}}
              color="subHeading">
              {props.location}
            </Text>
          </View>
          <Text size="h5" font="Medium" color="primary">
            {props.price}
          </Text>
          <Text size="h5" marginVertical="xs" font="Medium" color="subHeading">
            {props.title}
          </Text>
          <View row gap="s" space="around">
            <View row gap="s" align="center">
              <Icon name="Bed" size="s" />
              <Text size="h6" font="Regular" color="subHeading">
                3
              </Text>
            </View>
            <View row gap="s" align="center">
              <Icon name="Shower" size="s" />
              <Text size="h6" font="Regular" color="subHeading">
                3
              </Text>
            </View>
            <View row gap="s" align="center">
              <Icon name="Length" size="s" />
              <Text size="h6" font="Regular" color="subHeading">
                189 sq ft
              </Text>
            </View>
          </View>
        </View>
        <Pressable
          alignSelf="flex-start"
          onPress={() => {
            props.edit ? setVisible(true) : setLike(!like);
          }}>
          {props.edit ? (
            <Icon name="Dots" size="s" />
          ) : (
            <Icon name={like ? 'HeartFill' : 'Heart'} size="s" />
          )}
        </Pressable>
        <MyModal
          isVisible={isVisible}
          height={120}
          setModalVisible={setVisible}>
          <ReportDelete
            edit={props.edit}
            onEdit={() => setVisible(false)}
            onDelete={() => setVisible(false)}
          />
        </MyModal>
      </Pressable>
    </View>
  );
}
