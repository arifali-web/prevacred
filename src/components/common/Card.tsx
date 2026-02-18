import {
  Button,
  Icon,
  Image,
  MyModal,
  Pressable,
  ReportDelete,
  ReportModal,
  Strike,
  Text,
  TextInput,
  View,
} from '@components';
import React from 'react';
import {RemoveModal} from './REmoveModal';

export function Card({...props}: any) {
  const [like, setLike] = React.useState(false);
  const [isVisible, setVisible] = React.useState(false);
  const [isReport, setReport] = React.useState(false);
  const handleClick = () => {
    setReport(true);
    // setVisible(false);
  };
  return (
    <Pressable
      onPress={() => props.navigation.navigate('PostInner', {item: props})}
      padding
      backgroundColor="background"
      borderRadius="b">
      <View row space="between" align="center">
        <View row gap="b" align="center">
          <Image
            src={props.user}
            width={50}
            aspectRatio={1}
            resizeMode="contain"
          />
          <View>
            <Text marginBottom="xs" size="h6" font="Medium" text={props.name} />
            <Text
              style={{opacity: 0.6}}
              color="subHeading"
              size="small"
              font="Regular"
              text={props.state}
            />
          </View>
        </View>
        <Pressable onPress={() => setVisible(true)}>
          <Icon name="Dots" size="s" />
        </Pressable>
      </View>
      <Image
        marginVertical
        src={props.post}
        width={'100%'}
        height={210}
        resizeMode="contain"
      />
      <Text
        color="subHeading"
        style={{opacity: 0.8, lineHeight: 20}}
        size="h6"
        font="Regular"
        text={props.description}
      />
      <View row space="between" marginVertical>
        <Text
          color="subHeading"
          style={{opacity: 0.6}}
          size="body"
          font="Regular"
          text="256 Likes"
        />
        <View row gap="s">
          <Text
            color="subHeading"
            style={{opacity: 0.6}}
            size="body"
            font="Regular"
            text="20 Comments"
          />
          <Text
            color="subHeading"
            style={{opacity: 0.6}}
            size="body"
            font="Regular"
            text="10 Share"
          />
        </View>
      </View>
      <Strike />
      <View row space="around" paddingTop>
        <Pressable row gap="xs" align="center" onPress={() => setLike(!like)}>
          <Icon name={like ? 'Liked' : 'Like'} size="s" />
          <Text
            color={like ? 'primary' : 'subHeading'}
            style={{fontSize: 12}}
            font="Medium"
            text="Like"
          />
        </Pressable>
        <Pressable row gap="xs" align="center">
          <Icon name="Message" size="s" />
          <Text style={{fontSize: 12}} font="Medium" text="Comment" />
        </Pressable>
        <Pressable row gap="xs" align="center">
          <Icon name="Share" size="s" />
          <Text style={{fontSize: 12}} font="Medium" text="Share" />
        </Pressable>
      </View>
      <MyModal isVisible={isVisible} height={120} setModalVisible={setVisible}>
        <ReportDelete
          edit={props.edit}
          onEdit={() => {}}
          onDelete={() => handleClick()}
        />
      </MyModal>
      {props.edit ? (
        <RemoveModal
          isVisible={isReport}
          setModalVisible={setReport}
          heading={'Delete Alert!'}
          description={'Are you sure you want to delete this post?'}
          buttonText={'Delete'}
          source={
            '/Users/arifhussain/Documents/work/sphere/src/assets/Lottie/2.json'
          }
        />
      ) : (
        <ReportModal isReport={isReport} setReport={setReport} />
      )}
    </Pressable>
  );
}
