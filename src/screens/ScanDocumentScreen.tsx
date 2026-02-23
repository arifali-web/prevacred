import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const { width } = Dimensions.get('window');

const SCAN_WIDTH = width * 0.8;
const SCAN_HEIGHT = SCAN_WIDTH * 1.35;

export default function ScanDocumentScreen() {
  const openCamera = async () => {
    try {
      const image = await ImagePicker.openCamera({
        width: 800,
        height: 1000,
        cropping: true,
        compressImageQuality: 0.8,
        mediaType: 'photo',
      });

      console.log('Captured Image:', image);
    } catch (error) {
      console.log('User cancelled or error:', error);
    }
  };

  const openGallery = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 800,
        height: 1000,
        cropping: true,
        compressImageQuality: 0.8,
      });

      console.log('Selected Image:', image);
    } catch (error) {
      console.log('Cancelled:', error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <View style={styles.overlay}>
        {/* <View>
          <Text style={styles.title}>Scan the Document</Text>
          <Text style={styles.subtitle}>
            Place your card inside the rectangle.
          </Text>
        </View> */}

        <View style={styles.scanWrapper}>
          <View style={styles.scanBox} />

          <View style={[styles.corner, styles.topLeft]} />
          <View style={[styles.corner, styles.topRight]} />
          <View style={[styles.corner, styles.bottomLeft]} />
          <View style={[styles.corner, styles.bottomRight]} />
        </View>

        <View style={{ width: '100%', alignItems: 'center' }}>
          <TouchableOpacity style={styles.button} onPress={openCamera}>
            <Text style={styles.buttonText}>Add image</Text>
          </TouchableOpacity>

          {/* Optional gallery button */}
          {/* <TouchableOpacity onPress={openGallery} style={{ marginTop: 15 }}>
            <Text style={{ color: '#fff' }}>Pick from Gallery</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.65)',
    alignItems: 'center',
    paddingTop: 70,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },

  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },

  subtitle: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
  },

  scanWrapper: {
    width: SCAN_WIDTH,
    height: SCAN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },

  scanBox: {
    width: '100%',
    height: '100%',
    borderWidth: 2,
    borderColor: '#fff',
    borderStyle: 'dashed',
    borderRadius: 18,
  },

  corner: {
    position: 'absolute',
    width: 28,
    height: 28,
    borderColor: '#fff',
  },

  topLeft: {
    top: -2,
    left: -2,
    borderTopWidth: 4,
    borderLeftWidth: 4,
  },

  topRight: {
    top: -2,
    right: -2,
    borderTopWidth: 4,
    borderRightWidth: 4,
  },

  bottomLeft: {
    bottom: -2,
    left: -2,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
  },

  bottomRight: {
    bottom: -2,
    right: -2,
    borderBottomWidth: 4,
    borderRightWidth: 4,
  },

  button: {
    backgroundColor: '#b22222',
    paddingVertical: 16,
    width: width * 0.9,
    borderRadius: 14,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
