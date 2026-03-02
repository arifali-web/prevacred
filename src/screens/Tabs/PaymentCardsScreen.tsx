import React, { useMemo, useState } from 'react';
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
} from '@components';
import { FlatList, Platform, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // ✅ if Expo: import { LinearGradient } from 'expo-linear-gradient';

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
      //   paddingTop={Platform.OS === 'ios' ? 'l' : 'b'}
    >
      <Form>
        <View flex paddingHorizontal marginTop>
          <Text size="h4" font="SemiBold" color="Text2">
            Your payment cards
          </Text>

          <FlatList
            data={cards}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: 14, paddingBottom: 140 }}
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

          {/* Bottom fixed button like screenshot */}
          <View style={styles.bottomBar}>
            <Button
              label="Add Payment"
              onPress={() => props.navigation.navigate('AddPayment')}
            />
          </View>
        </View>
      </Form>
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

  bottomBar: {
    position: 'absolute',
    left: 18,
    right: 18,
    bottom: Platform.OS === 'ios' ? 26 : 16,
  },
});
