// Listings component
import {
  Button,
  FlatList,
  Form,
  Icon,
  Image,
  ListingCard,
  MyBottomSheet,
  MyModal,
  OptionPicker,
  Pressable,
  RangeSilder,
  Strike,
  Text,
  TextInput,
  View,
} from '@components';
import React, { useCallback, useRef, useState } from 'react';
import { UserProps } from '..';
// import BottomSheet from '@gorhom/bottom-sheet';
import { Platform } from 'react-native';

const data = [
  {
    id: 1,
    img: 'Post',
    date: '1 day ago',
    location: 'Miami, Florida',
    price: '$300,000',
    title: 'Modern House',
  },
  {
    id: 2,
    img: 'Post',
    date: '1 day ago',
    location: 'Miami, Florida',
    price: '$300,000',
    title: 'Modern House',
  },
  {
    id: 3,
    img: 'Post',
    date: '1 day ago',
    location: 'Miami, Florida',
    price: '$300,000',
    title: 'Modern House',
  },
];

export default function Listings(props: UserProps<'Tabs'>) {
  const navigation = props.navigation;
  const [isVisible, setVisible] = useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [low2, setLow2] = useState(0);
  const [high2, setHigh2] = useState(50000);
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(10000);
  const handleValueChange = useCallback(
    (newLow: number, newHigh: number) => {
      setLow(newLow);
      setHigh(newHigh);
    },
    [setLow, setHigh],
  );

  const handleValueChange2 = useCallback(
    (newLow: number, newHigh: number) => {
      setLow2(newLow);
      setHigh2(newHigh);
    },
    [setLow2, setHigh2],
  );
  return (
    <View
      paddingTop={Platform.OS === 'ios' ? 'xl' : 's'}
      flex
      gap="b"
      paddingHorizontal
    >
      <View row space="between" align="center">
        <Text size="h1" font="SemiBold">
          Listings
        </Text>
        <Pressable
          align="mid"
          backgroundColor="background"
          width={40}
          height={40}
          borderRadius="s"
          onPress={() => props.navigation.navigate('AddListing')}
        >
          <Icon name="Plus" size="s" />
        </Pressable>
      </View>
      <TextInput
        id="search"
        type="text"
        placeholder="Search"
        left={() => <Icon name="Search" size="s" />}
        leftDull={() => <Icon name="Search" size="s" />}
        right={() => <Icon name="Filter" size="s" />}
        rightDull={() => (
          <Pressable onPress={() => bottomSheetRef.current?.expand()}>
            <Icon name="Filter" size="s" />
          </Pressable>
        )}
      />
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ListingCard {...item} navigation={navigation} />
        )}
      />
      <MyBottomSheet background isSliderActive bottomSheetRef={bottomSheetRef}>
        <View padding flex>
          <Form>
            <View row space="between" marginBottom>
              <Text size="h4" font="Medium" text="Filters" />
              <Pressable onPress={() => bottomSheetRef.current?.close()}>
                <Icon name="Close" size="s" />
              </Pressable>
            </View>
            <View row gap marginBottom>
              <OptionPicker
                id="city"
                next="state"
                style={{ backgroundColor: '#000' }}
                placeholder="City"
                // value={{
                //     id: 1,
                //     title: 'New York',
                // }}
                backgroung
                options={[
                  { title: 'New York', id: 1 },
                  { title: 'Los Angeles', id: 2 },
                  { title: 'Chicago', id: 3 },
                  { title: 'Houston', id: 4 },
                  { title: 'Phoenix', id: 5 },
                ]}
                width={173}
                editable={true}
                right={() => <Icon name="DownArrow" size="s" />}
                rightDull={() => <Icon name="DownArrow" size="s" />}
              />
              <OptionPicker
                id="state"
                next="city"
                backgroung
                placeholder="State"
                // value={{
                //     id: 'California',
                //     title: 'California',
                // }}
                options={[
                  { title: 'Alabama', id: 'Alabama' },
                  { title: 'Alaska', id: 'Alaska' },
                  { title: 'Arizona', id: 'Arizona' },
                  { title: 'Arkansas', id: 'Arkansas' },
                  { title: 'California', id: 'California' },
                  // Add more states here...
                ]}
                width={173}
                editable={true}
                right={() => <Icon name="DownArrow" size="s" />}
                rightDull={() => <Icon name="DownArrow" size="s" />}
              />
            </View>
            <OptionPicker
              id="example"
              backgroung
              placeholder="Property Type"
              options={[
                { id: 1, title: 'Option 1' },
                { id: 2, title: 'Option 2' },
              ]}
              editable={true}
              right={() => <Icon name="DownArrow" size="s" />}
              rightDull={() => <Icon name="DownArrow" size="s" />}
            />
            <View>
              <RangeSilder
                low={low}
                high={high}
                title="Price Range"
                handleValueChange={handleValueChange}
              />
              <RangeSilder
                low={low2}
                high={high2}
                title="Sqft"
                handleValueChange={handleValueChange2}
              />
            </View>
            <View row marginVertical space="between">
              <Button
                onPress={() => {
                  bottomSheetRef.current?.close();
                }}
                width={173}
                type="Dull"
                background
                label={'Reset'}
              />
              <Button
                onPress={() => {
                  bottomSheetRef.current?.close();
                }}
                width={173}
                label={'Apply'}
              />
            </View>
          </Form>
        </View>
      </MyBottomSheet>
    </View>
  );
}
