import React, { useState, useEffect } from 'react';
import { View, Text, Modal, Animated, TouchableOpacity, StyleSheet } from 'react-native';
import * as Haptic from 'expo-haptics';
import { Button } from './Button';
import { Pressable } from 'react-native';

interface BottomSheetProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  bottomPadding?: number;
}

export const BottomSheet = ({ visible, onClose, children, title, bottomPadding = 20 }: BottomSheetProps) => {
  const [overlayOpacity] = useState(new Animated.Value(0));
  const [bottomSheetPosition] = useState(new Animated.Value(300));

  useEffect(() => {
    if (visible) {
      Animated.timing(overlayOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      Animated.timing(bottomSheetPosition, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();

      Haptic.impactAsync(Haptic.ImpactFeedbackStyle.Light);
    } else {
      Animated.timing(overlayOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();

      Animated.timing(bottomSheetPosition, {
        toValue: 300,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, overlayOpacity, bottomSheetPosition]);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={[styles.modalBackground, { opacity: overlayOpacity }]}
        onPress={onClose}
        activeOpacity={1}
      >
        <Animated.View
          style={[
            styles.bottomSheet,
            { paddingBottom: bottomPadding, transform: [{ translateY: bottomSheetPosition }] },
          ]}
        >
          {title && <Text style={styles.title}>{title}</Text>}
          {children}
          <View style={styles.closeButtonContainer}>
          {/* <Button title="Close" onPress={onClose} /> */}
          <Pressable onPress={onClose} style={({ pressed }) => [
  {
    backgroundColor: '#EDF5EF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    transform: pressed ? [{ scale: 0.98 }] : [],
  }
]}>
  <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>
    Close
  </Text>
</Pressable>


          </View>
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  bottomSheet: {
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: -2 },
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: '600', // Correct fontWeight
    marginBottom: 16,
    color: 'black',
    textAlign: 'center',
  },
  closeButtonContainer: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
});
