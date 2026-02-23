import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import { Camera, useCameraDevice } from 'react-native-vision-camera';
import ImagePicker from 'react-native-image-crop-picker';

const { width, height } = Dimensions.get('window');
const SCAN_W = width * 0.82;
const SCAN_H = SCAN_W * 1.35;

export default function ScanDocumentCameraScreen() {
  const cameraRef = useRef(null);
  const device = useCameraDevice('back');

  const [hasPermission, setHasPermission] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    (async () => {
      const cam = await Camera.requestCameraPermission();
      const lib = await Camera.requestMicrophonePermission(); // safe even if not used
      setHasPermission(cam === 'granted');
    })();
  }, []);

  const canRender = useMemo(
    () => device && hasPermission,
    [device, hasPermission],
  );

  const takePhotoAndCrop = async () => {
    if (!cameraRef.current || busy) return;
    try {
      setBusy(true);

      // 1) Take photo (VisionCamera)
      const photo = await cameraRef.current.takePhoto({
        flash: 'off',
        enableShutterSound: true,
      });

      // VisionCamera returns path without file:// on Android sometimes
      const path = photo.path?.startsWith('file://')
        ? photo.path
        : `file://${photo.path}`;

      // 2) Crop using image-crop-picker (custom crop UI)
      const cropped = await ImagePicker.openCropper({
        path,
        width: 900,
        height: 1200,
        cropping: true,
        compressImageQuality: 0.85,
        mediaType: 'photo',
      });

      console.log('CROPPED:', cropped);
      // TODO: navigate back / store result / upload etc.
    } catch (e) {
      console.log('Capture/Crop error:', e);
    } finally {
      setBusy(false);
    }
  };

  if (!device) {
    return (
      <View style={styles.center}>
        <Text style={{ color: '#fff' }}>Loading camera...</Text>
      </View>
    );
  }

  if (!hasPermission) {
    return (
      <View style={styles.center}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>
          Camera permission required.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {/* Live Camera Preview */}
      {canRender && (
        <Camera
          ref={cameraRef}
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
          photo={true}
        />
      )}

      {/* Dark overlay + UI */}
      <View style={styles.overlay}>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.title}>Scan the Document</Text>
          <Text style={styles.subTitle}>
            Place your card inside the rectangle.
          </Text>
        </View>

        {/* Scan frame */}
        <View style={styles.scanWrap}>
          <View style={styles.scanBox} />

          {/* corners */}
          <View style={[styles.corner, styles.tl]} />
          <View style={[styles.corner, styles.tr]} />
          <View style={[styles.corner, styles.bl]} />
          <View style={[styles.corner, styles.br]} />
        </View>

        {/* Bottom button */}
        <TouchableOpacity
          onPress={takePhotoAndCrop}
          activeOpacity={0.85}
          disabled={busy}
          style={[styles.btn, busy && { opacity: 0.7 }]}
        >
          <Text style={styles.btnText}>
            {busy ? 'Processing...' : 'Add image'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 34,
    justifyContent: 'space-between',
  },

  title: { color: '#fff', fontSize: 20, fontWeight: '600' },
  subTitle: { color: '#d0d0d0', fontSize: 13, marginTop: 6 },

  scanWrap: {
    width: SCAN_W,
    height: SCAN_H,
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
  tl: { top: -2, left: -2, borderTopWidth: 4, borderLeftWidth: 4 },
  tr: { top: -2, right: -2, borderTopWidth: 4, borderRightWidth: 4 },
  bl: { bottom: -2, left: -2, borderBottomWidth: 4, borderLeftWidth: 4 },
  br: { bottom: -2, right: -2, borderBottomWidth: 4, borderRightWidth: 4 },

  btn: {
    width: width * 0.9,
    height: 58,
    backgroundColor: '#b22222',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: { color: '#fff', fontSize: 16, fontWeight: '600' },

  center: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
