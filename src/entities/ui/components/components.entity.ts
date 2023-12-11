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

/** 버튼의 속성 */
export type ButtonEntity = {
  /** 버튼 기본(데스크탑) 사이즈 */
  size: "L" | "M" | "S";
  /** 버튼 모바일 사이즈 */
  mbsize?: "L" | "M" | "S";
  /** 버튼의 기본 컬러 */
  color: "primary" | "mono";
  /** 버튼의 형태 */
  variant: "contained" | "outline";
  /** 버튼 width full 사이즈 여부 */
  fullwidth?: boolean;
  /** 버튼 추가 스타일 */
  className?: object;
};

/**  화면 레이아웃 속성 */
export type LayoutEntity = "fullscreen-center" | "center" | "column" | "row" | "space-between";
