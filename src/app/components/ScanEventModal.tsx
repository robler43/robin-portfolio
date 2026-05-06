import { X, QrCode, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ScanEventModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ScanEventModal({ isOpen, onClose }: ScanEventModalProps) {
  const [isScanning, setIsScanning] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [uplinkCode, setUplinkCode] = useState('');
  const [isManualSuccess, setIsManualSuccess] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      setIsScanning(false);
      setIsSuccess(false);
      setUplinkCode('');
      setIsManualSuccess(false);
    }
  }, [isOpen]);
  
  const handleScan = () => {
    setIsScanning(true);
    
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false);
      setIsSuccess(true);
    }, 2000);
  };
  
  // Validate uplink code format (e.g., X7-B2-9A)
  const isValidCodeFormat = (code: string) => {
    const pattern = /^[0-9]{6}$/;
    return pattern.test(code);
  };
  
  const handleManualExecute = () => {
    if (isValidCodeFormat(uplinkCode)) {
      setIsManualSuccess(true);
      setTimeout(() => {
        setIsSuccess(true);
      }, 500);
    }
  };
  
  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); // Only allow numbers
    setUplinkCode(value);
  };
  
  if (!isOpen) return null;
  
  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-black border-2 border-[rgb(37,208,171)] rounded-xl w-full max-w-2xl shadow-[0_0_50px_rgba(37,208,171,0.3)]">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-zinc-900 border border-[rgb(37,208,171)] rounded-lg flex items-center justify-center">
                <QrCode className="w-5 h-5 text-[rgb(37,208,171)]" />
              </div>
              <div>
                <h2 className="text-white">GEO-FENCED SOLANA ACTION</h2>
                <p className="text-zinc-500 text-sm">Proof of Attendance Protocol</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {/* Content */}
          <div className="p-6">
            {/* Terminal-style container */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="text-zinc-500 text-sm ml-2">~/solana-poap-scanner</span>
              </div>
              
              <div className="space-y-3 text-sm">
                {/* Command prompt */}
                <div className="flex items-start gap-2">
                  <span className="text-[rgb(37,208,171)]">$</span>
                  <span className="text-zinc-400">solana scan --geo-fence --event="ETHGlobal SF 2024"</span>
                </div>
                
                {/* Location info */}
                <div className="ml-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-zinc-500">→</span>
                    <div className="flex-1">
                      <div className="text-zinc-400 mb-1">Detected Location:</div>
                      <div className="text-[rgb(37,208,171)] ml-4">
                        <div>LAT: 37.7749° N</div>
                        <div>LONG: 122.4194° W</div>
                        <div className="text-zinc-500 text-xs mt-1">Moscone Center, San Francisco</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-zinc-500">→</span>
                    <div className="flex-1">
                      <div className="text-zinc-400 mb-1">Event Geofence:</div>
                      <div className="text-[rgb(37,208,171)] ml-4">
                        <div>CENTER: 37.7749° N, 122.4194° W</div>
                        <div>RADIUS: 100m</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Validation check */}
                  <div className="flex items-center gap-2 pt-2">
                    <CheckCircle2 className="w-4 h-4 text-[rgb(37,208,171)]" />
                    <span className="text-[rgb(37,208,171)]">GPS Coordinates match the venue radius.</span>
                  </div>
                </div>
                
                {/* Scanning animation or success */}
                {isScanning && (
                  <div className="ml-4 pt-3 border-t border-zinc-800">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-[rgb(37,208,171)] rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
                        <div className="w-1.5 h-1.5 bg-[rgb(37,208,171)] rounded-full animate-pulse" style={{ animationDelay: '200ms' }} />
                        <div className="w-1.5 h-1.5 bg-[rgb(37,208,171)] rounded-full animate-pulse" style={{ animationDelay: '400ms' }} />
                      </div>
                      <span className="text-zinc-400">Minting proof of attendance...</span>
                    </div>
                  </div>
                )}
                
                {isSuccess && (
                  <div className="ml-4 pt-3 border-t border-zinc-800 space-y-2">
                    <div className="text-[rgb(37,208,171)]">
                      &gt;&gt; PROOF OF ATTENDANCE MINTED TO WALLET.
                    </div>
                    <div className="text-zinc-500 text-xs">
                      Latency: 24ms
                    </div>
                    <div className="text-zinc-500 text-xs mt-2">
                      TX: 5Kn8v...Hf9m2
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Action button */}
            {!isSuccess && (
              <button
                onClick={handleScan}
                disabled={isScanning}
                className="w-full bg-[rgb(37,208,171)] text-black py-4 rounded-lg hover:bg-[rgb(45,220,183)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isScanning ? 'Scanning...' : 'Execute Geo-Scan'}
              </button>
            )}
            
            {/* Glitchy Divider */}
            {!isSuccess && (
              <div className="relative my-6 h-px">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30 animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-20" style={{ animationDelay: '150ms' }} />
                <div className="absolute inset-0 bg-zinc-800" />
              </div>
            )}
            
            {/* Manual Override Protocol */}
            {!isSuccess && (
              <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-white text-xs tracking-wider">// MANUAL EVENT CODE</span>
                </div>
                
                <div className="bg-black border border-zinc-700 rounded p-3">
                  <div className="flex items-center gap-2">
                    {/* Terminal prompt */}
                    <span className="text-green-400 text-lg" style={{ textShadow: '0 0 10px rgba(74, 222, 128, 0.5)' }}>
                      &gt;_
                    </span>
                    
                    {/* Input field styled as terminal */}
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        value={uplinkCode}
                        onChange={handleCodeChange}
                        maxLength={6}
                        placeholder="ENTER EVENT CODE"
                        className="w-full bg-transparent border-none outline-none text-green-400 placeholder:text-zinc-700 caret-green-400 tracking-widest"
                        style={{ 
                          fontFamily: 'Space Mono, monospace'
                        }}
                      />
                    </div>
                    
                    {/* Execute button */}
                    <button
                      onClick={handleManualExecute}
                      disabled={!isValidCodeFormat(uplinkCode)}
                      className={`
                        px-4 py-1 border-2 transition-all text-xs tracking-wider
                        ${isValidCodeFormat(uplinkCode)
                          ? 'border-green-400 text-green-400 hover:bg-green-400 hover:text-black shadow-[0_0_15px_rgba(74,222,128,0.3)]' 
                          : 'border-zinc-800 text-zinc-700 cursor-not-allowed'
                        }
                      `}
                    >
                      EXECUTE
                    </button>
                  </div>
                </div>
                
                <p className="text-zinc-600 text-xs mt-3">
                  Format: 6-digit code (e.g., 123456)
                </p>
              </div>
            )}
            
            {isSuccess && (
              <button
                onClick={onClose}
                className="w-full bg-zinc-900 text-white border border-zinc-700 py-4 rounded-lg hover:bg-zinc-800 transition-colors"
              >
                Close
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}