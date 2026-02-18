import {
  Button,
  Icon,
  MyModal,
  Pressable,
  Text,
  TextInput,
  View,
} from '@components';
import React from 'react';
import {ThankyouModal} from './ThankyouModal';

export function ReportModal({isReport, setReport}: any) {
  const [isVisible, setVisible] = React.useState(false);

  const handleReport = () => {
    setVisible(true);
    setReport(false);

    setTimeout(() => {
      setVisible(false);
    }, 6000);
  };
  return (
    <MyModal justifyContent isVisible={isReport} setModalVisible={setReport}>
      <View align="center">
        <Pressable alignSelf="flex-end" onPress={() => setReport(false)}>
          <Icon name="Close" size="s" />
        </Pressable>
        <Text size="h4" font="Medium" text="Report Post" />
        <Text
          marginVertical="s"
          style={{opacity: 0.6, width: 260}}
          color="subHeading"
          textAlign="center"
          size="body"
          font="Regular"
          text="Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque aenean."
        />
        <View marginVertical>
          <TextInput
            backgroung
            multiline
            numberOfLines={4}
            with={290}
            placeholder="Write here..."
            left={() => null}
            leftDull={() => null}
          />
        </View>
        <Button
          width={150}
          background
          onPress={handleReport}
          type="Error"
          label="Submit"
        />
      </View>
      <ThankyouModal modalVisible={isVisible} setModalVisible={setVisible} />
    </MyModal>
  );
}
