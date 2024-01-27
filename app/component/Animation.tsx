'use client'
import Lottie from "lottie-react";
import animationData from '../../public/loading.json'; // Corrected the typo here

export default function Animation() {
  return (
    <>
      <div className="w-60 transition ease-in-out animate-pulse">
        <Lottie animationData={animationData} /> 
      </div>
    </>
  );
}
