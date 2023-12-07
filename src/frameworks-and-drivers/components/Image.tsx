import NextImage from "next/image";
import { cn } from "../utils/classname";

/** 이미지 속성 */
export type ImageEntity = {
  /** 이미지의 소스 경로 */
  src: string;
  /** 이미지 설명 */
  alt: string;
  /** 클릭 이벤트 핸들러 */
  onClick?: () => void;
  /** 이미지 width 사이즈 default, sm, md, lg */
  width: { default: string; sm?: string; md?: string; lg?: string };
  /** 이미지 height 사이즈 default, sm, md, lg */
  height: { default: string; sm?: string; md?: string; lg?: string };
};

/**
 * 이미지 컴포넌트
 * @param src - 이미지의 소스 경로
 * @param alt - 이미지 설명
 * @param width - 미디어쿼리에 따른 width값 정의
 * @param height - 미디어쿼리에 따른 height값 정의
 * @param onClick - (선택) 클릭 이벤트 핸들러
 */
export default function Image({ src, alt, width, height, ...props }: ImageEntity) {
  const dynamicClasses = cn({
    [`sm:w-[${width?.sm}]`]: width?.sm,
    [`md:w-[${width?.md}]`]: width?.md,
    [`lg:w-[${width?.lg}]`]: width?.lg,
    [`w-[${width?.default}]`]: width?.default,
    [`sm:h-[${height?.sm}]`]: height?.sm,
    [`md:h-[${height?.md}]`]: height?.md,
    [`lg:h-[${height?.lg}]`]: height?.lg,
    [`h-[${height?.default}]`]: height?.default,
  });

  return (
    <>
      {/* light mode */}
      <div className={cn("relative block dark:hidden", dynamicClasses)}>
        <NextImage alt={alt} src={src} className="object-cover" fill={true} priority={true} {...props} />
      </div>
      {/* dark mode */}
      <div className={cn("relative hidden dark:block", dynamicClasses)}>
        <NextImage alt={alt} src={src.replace("light", "dark")} className="object-cover" fill={true} priority={true} {...props} />
      </div>
    </>
  );
}
