// PassportScanScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';

// Optional (real pick): npm i react-native-image-picker
// import { launchCamera, launchImageLibrary } from "react-native-image-picker";

export default function PassportScanScreen({ navigation }) {
  const [uri, setUri] = useState(null);

  const onAddImage = async () => {
    // --- SIMPLE MOCK ---
    // setUri("https://...") // (don't use remote in prod)

    // --- REAL PICK (uncomment when installed) ---
    // const res = await launchImageLibrary({ mediaType: "photo", quality: 0.8 });
    // if (!res.didCancel && res.assets?.[0]?.uri) setUri(res.assets[0].uri);

    navigation?.navigate?.('UploadGovernmentId'); // demo flow
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.screen}>
        {/* top bar */}
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => navigation?.goBack?.()}>
            <Text style={styles.back}>‹</Text>
          </TouchableOpacity>
          <Text style={styles.topTitle}>Scan the card</Text>
          <View style={{ width: 26 }} />
        </View>

        <Text style={styles.hint}>Place your card inside the rectangle:</Text>

        {/* camera preview mock */}
        <View style={styles.preview}>
          {uri ? (
            <Image source={{ uri }} style={styles.previewImg} />
          ) : (
            <View style={styles.previewMock}>
              <Text style={{ color: '#ddd' }}>Camera Preview</Text>
            </View>
          )}

          {/* dashed frame */}
          <View style={styles.dashedFrame}>
            <View style={styles.dashCornerTL} />
            <View style={styles.dashCornerTR} />
            <View style={styles.dashCornerBL} />
            <View style={styles.dashCornerBR} />
          </View>
        </View>

        <TouchableOpacity style={styles.cta} onPress={onAddImage}>
          <Text style={styles.ctaText}>Add image</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const BG = '#6E2A2A';
const MAROON = '#7B2C2C';

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: BG, padding: 18 },
  screen: {
    flex: 1,
    borderRadius: 32,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0.35)',
    padding: 16,
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  back: { fontSize: 30, color: '#fff', paddingHorizontal: 6 },
  topTitle: {
    flex: 1,
    textAlign: 'center',
    color: '#fff',
    fontSize: 22,
    fontWeight: '800',
  },
  hint: { marginTop: 10, color: '#EDEDED', fontSize: 13 },

  preview: {
    marginTop: 16,
    flex: 1,
    borderRadius: 22,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0.25)',
    justifyContent: 'center',
  },
  previewMock: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  previewImg: { width: '100%', height: '100%', resizeMode: 'cover' },

  dashedFrame: {
    position: 'absolute',
    left: 16,
    right: 16,
    top: 18,
    bottom: 18,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.85)',
    borderStyle: 'dashed',
    borderRadius: 16,
  },

  // corners (thoda premium look)
  dashCornerTL: {
    position: 'absolute',
    left: -2,
    top: -2,
    width: 18,
    height: 18,
    borderLeftWidth: 4,
    borderTopWidth: 4,
    borderColor: '#fff',
    borderTopLeftRadius: 8,
  },
  dashCornerTR: {
    position: 'absolute',
    right: -2,
    top: -2,
    width: 18,
    height: 18,
    borderRightWidth: 4,
    borderTopWidth: 4,
    borderColor: '#fff',
    borderTopRightRadius: 8,
  },
  dashCornerBL: {
    position: 'absolute',
    left: -2,
    bottom: -2,
    width: 18,
    height: 18,
    borderLeftWidth: 4,
    borderBottomWidth: 4,
    borderColor: '#fff',
    borderBottomLeftRadius: 8,
  },
  dashCornerBR: {
    position: 'absolute',
    right: -2,
    bottom: -2,
    width: 18,
    height: 18,
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderColor: '#fff',
    borderBottomRightRadius: 8,
  },

  cta: {
    marginTop: 14,
    backgroundColor: MAROON,
    borderRadius: 28,
    paddingVertical: 16,
    alignItems: 'center',
  },
  ctaText: { color: '#fff', fontWeight: '800', fontSize: 16 },
});
