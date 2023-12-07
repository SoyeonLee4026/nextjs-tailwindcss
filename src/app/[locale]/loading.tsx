'use client';

import Lottie from 'lottie-react';
import loadingData from '../../../public/animation/loading.lottie.json';

/**
 * Loading page
 *
 */
export default function LoadingPage() {
  return (
    <div className="base-page">
      <Lottie
        animationData={loadingData}
        width={100}
        height={100}
        loop={true}
        autoplay={true}
      />
    </div>
  );
}
