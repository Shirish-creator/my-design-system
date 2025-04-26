import React from 'react';
import { Text, Pressable, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export var Button = function (_a) {
    var title = _a.title, onPress = _a.onPress;
    return (React.createElement(Pressable, { onPress: onPress, style: function (_a) {
            var pressed = _a.pressed;
            return [
                styles.pressable,
                pressed && styles.pressed,
            ];
        } },
        React.createElement(LinearGradient, { colors: ['#3a3a3a', '#1f1f1f'], start: { x: 0.5, y: 0 }, end: { x: 0.5, y: 1 }, style: styles.gradient },
            React.createElement(View, { style: styles.topHighlight }),
            React.createElement(View, { style: styles.bottomShadow }),
            React.createElement(View, { style: styles.inner },
                React.createElement(Text, { style: styles.text }, title)))));
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
    inner: {
        zIndex: 2,
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    topHighlight: {
        position: 'absolute',
        top: 1,
        left: -10,
        right: 8,
        height: 2,
        width: 400,
        backgroundColor: 'rgba(255,255,255,0.15)',
        // borderTopLeftRadius: 14,
        // borderTopRightRadius: 14,
        zIndex: 1,
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
