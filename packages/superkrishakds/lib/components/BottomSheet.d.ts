import React from 'react';
interface BottomSheetProps {
    visible: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    bottomPadding?: number;
}
export declare const BottomSheet: ({ visible, onClose, children, title, bottomPadding }: BottomSheetProps) => React.JSX.Element;
export {};
