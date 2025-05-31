
import React, { useState } from 'react';
import { QrCode, ArrowRight } from 'lucide-react';

interface QRCodeScannerProps {
  onScanComplete: () => void;
}

const QRCodeScanner: React.FC<QRCodeScannerProps> = ({ onScanComplete }) => {
  const [isScanning, setIsScanning] = useState(false);
  
  const handleScanClick = () => {
    setIsScanning(true);
    
    // Simulate scanning for demo purposes
    setTimeout(() => {
      setIsScanning(false);
      onScanComplete();
    }, 2000);
  };
  
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white border border-gray-100 rounded-2xl shadow-smooth p-8 text-center">
        <div className="mb-6">
          <div className="w-24 h-24 mx-auto bg-primary/5 rounded-xl flex items-center justify-center">
            <QrCode className="h-12 w-12 text-primary" />
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">مسح رمز QR</h3>
        <p className="text-muted-foreground mb-6">
          قم بمسح رمز QR الخاص بحسابنا على بريدي موب للدفع
        </p>
        
        
          <div className="relative w-full h-64 bg-gray-100 rounded-xl overflow-hidden mb-6">
            <div className="absolute inset-0 flex items-center justify-center">
            <img 
           src="src/assets/qr.jpg"
              
              
            />
            </div>
          </div>
        
        
        <button
          onClick={handleScanClick}
          disabled={isScanning}
          className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-white ${
            isScanning
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-primary hover:bg-primary/90 transition-colors'
          }`}
        >
          {isScanning ? 'جاري المسح...' : 'مسح الرمز'}
          {!isScanning && <ArrowRight className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
};

export default QRCodeScanner;
