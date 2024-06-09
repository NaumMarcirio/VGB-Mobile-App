import React, { useState, useEffect } from 'react';
import QRcodeScanner from 'react-native-qrcode-scanner';
import { RNcamera } from 'react-native-camera';

const QrCodeReader = () => {
    return (
            <QRcodeScanner
                onRead={() => {}}
                flashMode={RNcamera.Constants.FlashMode.off}
            />
    );
};

export default QrCodeReader;