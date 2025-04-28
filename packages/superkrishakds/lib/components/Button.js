import React from 'react';
import { Text, Pressable, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export var Button = function (_a) {
    var title = _a.title, onPress = _a.onPress, _b = _a.variant, variant = _b === void 0 ? 'default' : _b;
    return (React.createElement(Pressable, { onPress: onPress, style: function (_a) {
            var pressed = _a.pressed;
            return [
                styles.pressable,
                pressed && styles.pressed,
            ];
        } }, function (_a) {
        var pressed = _a.pressed;
        return (variant === 'primary' ? (React.createElement(LinearGradient, { colors: ['#3a3a3a', '#1f1f1f'], start: { x: 0.5, y: 0 }, end: { x: 0.5, y: 1 }, style: styles.gradient },
            React.createElement(View, { style: [styles.topHighlight, pressed && styles.topHighlightPressed] }),
            !pressed && React.createElement(View, { style: styles.bottomShadow }),
            React.createElement(View, { style: [styles.inner, pressed && styles.innerPressed] },
                React.createElement(Text, { style: [styles.text, pressed && styles.textPressed] }, title)))) : (React.createElement(View, { style: [styles.defaultButton, pressed && styles.defaultButtonPressed] },
            React.createElement(View, { style: [styles.inner, pressed && styles.innerPressed] },
                React.createElement(Text, { style: [styles.defaultText, pressed && styles.textPressed] }, title)))));
    }));
};
var styles = StyleSheet.create({
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
