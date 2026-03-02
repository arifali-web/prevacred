import { Image, ImageBackground, Pressable, Text, View } from '@components';
import { Platform, StyleSheet } from 'react-native';

type CardBrand = 'mastercard' | 'visa';
type PaymentCardModel = {
  id: number;
  brand: CardBrand;
  last4: string;
  holderName?: string;
  expiry?: string;
  isDefault?: boolean;
};

export function PaymentCard({
  item,
  selected,
  onPress,
}: {
  item: PaymentCardModel;
  selected: boolean;
  onPress: () => void;
}) {
  const isMaster = item.brand === 'mastercard';
  //   const masked = `**** **** **** ${item.last4}`;

  return (
    <Pressable onPress={onPress}>
      <ImageBackground
        src="PaymentCardBg" // if BtnBg is an imported image
        style={{
          height: 216,
          width: '100%',
          borderRadius: 12,
          overflow: 'hidden',
          boxShadow: '0px 4px 4px 0px #00000040',
        }}
        // padding
        width={'100%'}
        // imageStyle={{ borderRadius: 12 }}
        resizeMode="cover"
      >
        {/* <LinearGradient
          colors={
            isMaster
              ? ['#0F0F10', '#2B2C2E'] // black gradient
              : ['#A7A7A7', '#8D8D8D'] // grey gradient
          }
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[
            styles.card,
            selected ? styles.cardSelected : styles.cardUnselected,
          ]}
        > */}
        {/* top row: chip + optional subtle pattern */}
        <View padding="l" gap>
          <Image src="Chip" width={32} height={24} />

          {/* number */}
          <View style={{ marginTop: 6 }}>
            <Text style={styles.cardNumber} font="Regular">
              {`**** **** **** ${item.last4}`}
            </Text>
          </View>

          {/* bottom row info */}
          <View style={styles.cardBottomRow}>
            <View style={{ flex: 1 }}>
              {item.holderName ? (
                <>
                  <Text size="small" color="white" font="Medium">
                    Card Holder Name
                  </Text>
                  <Text size="h6" color="white" font="SemiBold">
                    {item.holderName}
                  </Text>
                </>
              ) : null}
            </View>

            <View style={{ width: 84 }}>
              {item.expiry ? (
                <>
                  <Text size="small" color="white" font="Medium">
                    Expiry Date
                  </Text>
                  <Text size="h6" color="white" font="SemiBold">
                    {item.expiry}
                  </Text>
                </>
              ) : null}
            </View>

            <View style={styles.brandWrap}>
              {isMaster ? (
                <View style={styles.masterBadge}>
                  <View style={styles.mcCircle1} />
                  <View style={styles.mcCircle2} />
                </View>
              ) : (
                <Text style={styles.visaText}>VISA</Text>
              )}
            </View>
          </View>
        </View>

        {/* </LinearGradient> */}
      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 14,
    padding: 16,
    width: '100%',
    overflow: 'hidden',
    minHeight: 216,
  },
  cardSelected: {
    // subtle highlight
    shadowOpacity: 0.22,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  cardUnselected: {
    shadowOpacity: 0.14,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },

  cardTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chip: {
    width: 34,
    height: 26,
    borderRadius: 6,
    backgroundColor: '#E2B458',
    opacity: 0.95,
  },
  cornerGlow: {
    width: 80,
    height: 80,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.06)',
    position: 'absolute',
    right: -20,
    top: -28,
  },

  cardNumber: {
    color: '#ffff',
    fontSize: 24,
    letterSpacing: 1.2,
  },
  cardBottomRow: {
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 10,
  },
  //   metaLabel: {
  //     color: ,
  //     fontSize: 10,
  //     marginBottom: 2,
  //   },
  metaValue: {
    color: '#FFFFFF',
    fontSize: 12,
  },

  brandWrap: {
    minWidth: 64,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  visaText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 1,
  },
  masterBadge: {
    width: 40,
    height: 20,
    position: 'relative',
  },
  mcCircle1: {
    width: 18,
    height: 18,
    borderRadius: 999,
    backgroundColor: '#EB001B',
    position: 'absolute',
    left: 8,
    top: 1,
    opacity: 0.95,
  },
  mcCircle2: {
    width: 18,
    height: 18,
    borderRadius: 999,
    backgroundColor: '#F79E1B',
    position: 'absolute',
    left: 16,
    top: 1,
    opacity: 0.95,
  },

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
});
