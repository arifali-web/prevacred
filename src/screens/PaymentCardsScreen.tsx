import React, { useMemo, useRef, useState } from 'react';
import {
  View,
  Text,
  BackArrow,
  Button,
  Icon,
  Pressable,
  Image,
  Form,
  ImageBackground,
  PaymentCard,
  MyBottomSheet,
  TextInput,
  LinearGradientButton,
} from '@components';
import { FlatList, Platform, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // ✅ if Expo: import { LinearGradient } from 'expo-linear-gradient';
import BottomSheet, { BottomSheetTextInput } from '@gorhom/bottom-sheet';

type CardBrand = 'mastercard' | 'visa';

type PaymentCardModel = {
  id: number;
  brand: CardBrand;
  last4: string;
  holderName?: string;
  expiry?: string;
  isDefault?: boolean;
};

export default function PaymentCardsScreen(props: any) {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [cards, setCards] = useState<PaymentCardModel[]>([
    {
      id: 1,
      brand: 'mastercard',
      last4: '3947',
      holderName: 'Jennyfer Doe',
      expiry: '05/23',
      isDefault: true,
    },
    {
      id: 2,
      brand: 'visa',
      last4: '4546',
      holderName: 'Jennyfer Doe',
      expiry: '05/23',
      isDefault: false,
    },
  ]);

  const defaultCardId = useMemo(
    () => cards.find(c => c.isDefault)?.id,
    [cards],
  );

  const setDefault = (id: number) => {
    setCards(prev => prev.map(c => ({ ...c, isDefault: c.id === id })));
  };

  return (
    <View
      flex
      backgroundColor="white"
      paddingHorizontal
      //   paddingTop={Platform.OS === 'ios' ? 'l' : 'b'}
    >
      <Form>
        <View>
          <Text size="h4" font="SemiBold" color="Text2" paddingTop>
            Your payment cards
          </Text>

          <FlatList
            data={cards}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: 14, paddingBottom: 40 }}
            ItemSeparatorComponent={() => <View style={{ height: 14 }} />}
            renderItem={({ item }) => (
              <View>
                <PaymentCard
                  item={item}
                  selected={item.id === defaultCardId}
                  onPress={() => setDefault(item.id)}
                />

                {/* Default checkbox row (only show for selected like screenshot feel) */}
                {item.id === defaultCardId ? (
                  <Pressable
                    onPress={() => setDefault(item.id)}
                    style={styles.defaultRow}
                  >
                    <View style={styles.checkboxOuter}>
                      <View style={styles.checkboxInner} />
                    </View>
                    <Text size="body" font="Regular">
                      Use as default payment method
                    </Text>
                  </Pressable>
                ) : (
                  <Pressable
                    onPress={() => setDefault(item.id)}
                    style={styles.defaultRow}
                  >
                    <View style={styles.checkboxOuter} />
                    <Text size="body" font="Regular">
                      Use as default payment method
                    </Text>
                  </Pressable>
                )}
              </View>
            )}
          />

          {/* <View flex paddingBottom="xl"> */}
          <LinearGradientButton
            title="Add Payment"
            onPress={() => bottomSheetRef.current?.expand()}
          />
          {/* </View> */}
        </View>
      </Form>
      <MyBottomSheet bottomSheetRef={bottomSheetRef}>
        <View padding flex>
          <Form>
            <Text
              size="h4"
              textAlign="center"
              font="Medium"
              text="Add New Card"
            />

            <View gap paddingVertical marginBottom>
              <TextInput
                id="name"
                type="text"
                next="card_no"
                style={styles.shadow}
                placeholder="Name on card"
              />
              <TextInput
                id="card_no"
                type="text"
                next="expiry"
                keyboardType="numeric"
                style={styles.shadow}
                placeholder="Card number"
              />

              <TextInput
                id="expiry"
                type="text"
                next="cvv"
                maxLength={5}
                style={styles.shadow}
                placeholder="MM/YY"
              />
              <TextInput
                id="cvv"
                type="text"
                next="phone"
                maxLength={3}
                keyboardType="numeric"
                style={styles.shadow}
                placeholder="CVV"
              />
            </View>

            {/* <View row gap marginBottom>
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
            </View> */}

            <Button
              onPress={() => {
                bottomSheetRef.current?.close();
              }}
              label={'ADD CARD'}
            />
          </Form>
        </View>
      </MyBottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  defaultRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
  },
  checkboxOuter: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1.4,
    borderColor: '#C8C8C8',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  checkboxInner: {
    width: 10,
    height: 10,
    borderRadius: 2,
    backgroundColor: '#B21E26', // match your primary/red
  },

  // bottomBar: {
  //   position: 'absolute',
  //   left: 18,
  //   right: 18,
  //   bottom: Platform.OS === 'ios' ? 26 : 16,
  // },

  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
});
