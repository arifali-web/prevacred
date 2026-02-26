// StepperDots.js (recommended)
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { View } from '../layout';

export function Stepper({ total = 4, currentIndex = 0, color = '#A85155' }) {
  return (
    <View align="mid">
      <View style={styles.wrap}>
        <View style={[styles.line, { backgroundColor: '#DAB8BA' }]} />
        <View style={styles.row}>
          {Array.from({ length: total }).map((_, i) => {
            const isCompleted = i < currentIndex;
            const isActive = i === currentIndex;

            if (isCompleted) {
              return (
                <View
                  key={i}
                  style={[styles.bigDot, { backgroundColor: color }]}
                >
                  <Text style={styles.check}>✓</Text>
                </View>
              );
            }

            if (isActive) {
              return (
                <View
                  key={i}
                  style={[styles.bigDot, { backgroundColor: color }]}
                >
                  <View style={styles.innerWhiteDot} />
                </View>
              );
            }

            return (
              <View
                key={i}
                style={[styles.smallDot, { backgroundColor: color }]}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: '80%',
    height: 34,
    justifyContent: 'center',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  line: {
    position: 'absolute',
    left: 20,
    right: 20,
    height: 2,
    opacity: 0.9,
    top: '50%',
    marginTop: -1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bigDot: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerWhiteDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  check: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '900',
    marginTop: -1,
  },
  smallDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});
