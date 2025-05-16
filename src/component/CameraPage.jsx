import React, { useEffect, useRef } from "react";

export default function CameraPage() {
  const videoRef = useRef(null);

  useEffect(() => {
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Camera access denied or failed", error);
      }
    }
    startCamera();
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      
      <div className="absolute bottom-0 w-full bg-white bg-opacity-40 rounded-t-2xlshadow-lg py-4 flex justify-between items-center px-6">
        <button className="flex flex-col items-center text-sm text-[#0c172b]">
          <p>files</p>
        </button>
        <button className= "text-white p-4 rounded-full bg-[#0c172b] shadow-lg">
          <p>Call</p>
        </button>
        <button className="flex flex-col items-center text-sm text-[#0c172b]">
          <p>swap</p>
        </button>
      </div>
    </div>
  );
}
