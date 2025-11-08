import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ImageUploader } from './components/ImageUploader';
import { Results } from './components/Results';
import { InfoSection } from './components/InfoSection';
import { Footer } from './components/Footer';
import { type ConvertedImage } from './types';
import { convertFileToBase64 } from './utils/imageConverter';

type AppStatus = 'idle' | 'processing' | 'completed';

function App() {
  const [convertedImages, setConvertedImages] = useState<ConvertedImage[]>([]);
  const [status, setStatus] = useState<AppStatus>('idle');

  const handleFiles = useCallback(async (files: FileList) => {
    if (files.length === 0) return;
    setStatus('processing');
    const imagePromises = Array.from(files).map(convertFileToBase64);
    const newImages = await Promise.all(imagePromises);
    setConvertedImages(prev => [...newImages.filter(img => img !== null) as ConvertedImage[], ...prev]);
    setStatus('completed');
  }, []);

  const handleReset = () => {
    setStatus('idle');
  };

  return (
    <div className="min-h-screen text-gray-200 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <Hero />
        <div className="mt-12">
          <ImageUploader onFilesSelected={handleFiles} status={status} onReset={handleReset} fileCount={convertedImages.length} />
        </div>
        {convertedImages.length > 0 && (
          <div className="mt-12">
            <Results images={convertedImages} />
          </div>
        )}
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;