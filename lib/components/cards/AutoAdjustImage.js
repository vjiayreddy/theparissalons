import Image from "next/image";
import { useState } from "react";

const AutoAdjustImage = ({ src, alt, className }) => {
  const [aspectRatio, setAspectRatio] = useState(16 / 9); // default aspect ratio

  const handleImageLoad = (event) => {
    const img = event.target;
    if (img) {
      setAspectRatio(img.naturalWidth / img.naturalHeight);
    }
  };

  return (
    <div
      className={`tw-relative tw-w-full ${className}`}
      style={{
        paddingBottom: `${(1 / aspectRatio) * 100}%`,
      }}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="contain"
        onLoadingComplete={handleImageLoad}
        className="tw-rounded-lg tw-transition-all tw-duration-300"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};
export default AutoAdjustImage;
