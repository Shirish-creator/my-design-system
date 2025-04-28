import React from 'react';
import { Text, Pressable, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'default';
};

export const Button = ({ title, onPress, variant = 'default' }: ButtonProps) => (
  <Pressable
    onPress={onPress}
    style={({ pressed }) => [
      styles.pressable,
      pressed && styles.pressed,
    ]}
  >
    {({ pressed }) => (
      variant === 'primary' ? (
        <LinearGradient
          colors={['#3a3a3a', '#1f1f1f']}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.gradient}
        >
          <View style={[styles.topHighlight, pressed && styles.topHighlightPressed]} />
          {!pressed && <View style={styles.bottomShadow} />}
          <View style={[styles.inner, pressed && styles.innerPressed]}>
            <Text style={[styles.text, pressed && styles.textPressed]}>{title}</Text>
          </View>
        </LinearGradient>
      ) : (
        <View style={[styles.defaultButton, pressed && styles.defaultButtonPressed]}>
          <View style={[styles.inner, pressed && styles.innerPressed]}>
            <Text style={[styles.defaultText, pressed && styles.textPressed]}>{title}</Text>
          </View>
        </View>
      )
    )}
  </Pressable>
);

const styles = StyleSheet.create({
  pressable: {
    borderRadius: 14,
    overflow: 'hidden',
  },
  pressed: {
    opacity: 0.9,
  },
  gradient: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  defaultButton: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 14,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultButtonPressed: {
    backgroundColor: '#f0f0f0',
  },
  inner: {
    zIndex: 2,
  },
  innerPressed: {
    transform: [{ translateY: 1 }],
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  defaultText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textPressed: {
    transform: [{ translateY: 0.5 }],
  },
  topHighlight: {
    position: 'absolute',
    top: 1,
    left: -10,
    right: 8,
    height: 2,
    width: 400,
    backgroundColor: 'rgba(255,255,255,0.15)',
    zIndex: 1,
  },
  topHighlightPressed: {
    height: 3,
    backgroundColor: 'rgba(30, 29, 29, 0.63)',
  },
  bottomShadow: {
    position: 'absolute',
    bottom: 1,
    left: -10,
    right: 8,
    height: 4,
    width: '200%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    zIndex: 1,
  },
});
