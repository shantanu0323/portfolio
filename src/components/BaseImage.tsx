// components/BaseImage.tsx
"use client";

import Image, { ImageProps } from "next/image";
import { useRouter } from "next/router";

const BaseImage = ({ src: imageSrc, alt, ...rest }: ImageProps) => {
    const { basePath } = useRouter();

    const src =
        typeof imageSrc === "string" && imageSrc.startsWith("/")
            ? `${basePath}${imageSrc}`
            : imageSrc;

    return <Image {...rest} src={src} alt={alt} />;
};

export default BaseImage;
