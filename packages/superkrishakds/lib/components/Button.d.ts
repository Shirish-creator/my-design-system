import React from 'react';
type ButtonProps = {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'default';
};
export declare const Button: ({ title, onPress, variant }: ButtonProps) => React.JSX.Element;
export {};
