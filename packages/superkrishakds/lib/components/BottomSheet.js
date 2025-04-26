import React, { useState, useEffect } from 'react';
import { View, Text, Modal, Animated, TouchableOpacity, StyleSheet } from 'react-native';
import * as Haptic from 'expo-haptics';
import { Pressable } from 'react-native';
export var BottomSheet = function (_a) {
    var visible = _a.visible, onClose = _a.onClose, children = _a.children, title = _a.title, _b = _a.bottomPadding, bottomPadding = _b === void 0 ? 20 : _b;
    var overlayOpacity = useState(new Animated.Value(0))[0];
    var bottomSheetPosition = useState(new Animated.Value(300))[0];
    useEffect(function () {
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
        }
        else {
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
    return (React.createElement(Modal, { visible: visible, transparent: true, animationType: "fade", onRequestClose: onClose },
        React.createElement(TouchableOpacity, { style: [styles.modalBackground, { opacity: overlayOpacity }], onPress: onClose, activeOpacity: 1 },
            React.createElement(Animated.View, { style: [
                    styles.bottomSheet,
                    { paddingBottom: bottomPadding, transform: [{ translateY: bottomSheetPosition }] },
                ] },
                title && React.createElement(Text, { style: styles.title }, title),
                children,
                React.createElement(View, { style: styles.closeButtonContainer },
                    React.createElement(Pressable, { onPress: onClose, style: function (_a) {
                            var pressed = _a.pressed;
                            return [
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
                            ];
                        } },
                        React.createElement(Text, { style: { color: 'black', fontWeight: 'bold', fontSize: 16 } }, "Close")))))));
};
var styles = StyleSheet.create({
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
