import { RefObject, useRef } from 'react';
import { useGsapProfileImg } from '../../hooks/useGsap';

const ProfileImg = () => {
  const profileImgRef: RefObject<SVGSVGElement> = useRef<SVGSVGElement>(null);

  useGsapProfileImg(profileImgRef);

  return (
    <svg
      ref={profileImgRef}
      width="100%"
      height="100%"
      viewBox="0 0 720 660"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin meet"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <clipPath id="clip">
          <path d="M390.919 0.711056C503.229 -5.20307 629.074 25.2651 692.929 111.277C752.379 191.357 697.791 295.724 681.238 391.771C668.635 464.896 666.176 542.688 609.585 594.858C553.155 646.879 470.305 663.494 390.919 659.409C316.03 655.555 255.454 615.034 195.214 573.533C118.759 520.861 17.3648 479.087 2.43426 391.771C-13.5801 298.117 52.082 211.073 121.318 141.378C193.981 68.2334 283.935 6.3447 390.919 0.711056Z" />
        </clipPath>
      </defs>

      <rect width="100%" height="100%" fill="#3c5467" clipPath="url(#clip)" />

      <image x="-8%" y="4%" width="120%" height="110%" xlinkHref="/image/profile_img.webp" clipPath="url(#clip)" />
    </svg>
  );
};

export default ProfileImg;
