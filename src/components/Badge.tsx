import * as React from "react";

interface BadgeProps {
  text: string;
  variant: 'Light' | 'Dark',
  image?:{
    src: string;
    alt: string
  },
  showImage: boolean
}

export const Badge = ({ text, image, showImage=false, variant }: BadgeProps) => (
  <span
    style={{
      backgroundColor: variant === 'Light' ? '#eee' : '#000',
      borderRadius: '1em',
      color: variant === 'Light' ? '#000' : '#fff',
      display: 'inline-block',
      fontSize: '14px',
      lineHeight: 2,
      padding: '0 1em',
    }}
  >
    {showImage && <img src={image?.src} alt={image?.alt}/>}
    {text}
  </span>
);
