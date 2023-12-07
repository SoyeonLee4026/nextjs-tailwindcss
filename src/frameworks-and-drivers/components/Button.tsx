import { cn } from "../utils/classname";
import "./button.style.css";

/** 버튼의 속성 type */
export type ButtonType = {
  size: "L" | "M" | "S";
  mbsize?: "L" | "M" | "S";
  color: "primary" | "mono";
  variant: "contained" | "outline";
  fullwidth?: boolean;
};

export const BUTTON_COLORS = {
  primary: {
    contained: "primary_contained",
    outline: "primary_outline",
  },
  mono: {
    contained: "mono_contained",
    outline: "",
  },
};

export const BUTTON_SIZES = {
  L: "size_L",
  M: "size_M",
  S: "size_S",
};

export const BUTTON_MB_SIZES = {
  L: "size_mb_l",
  M: "sizee_mb_m",
  S: "sizee_mb_s",
};

export default function Button({
  size,
  color,
  variant,
  fullwidth,
  mbsize,
  ...props
}: ButtonType & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "flex justify-center items-center rounded",
        BUTTON_COLORS[color][variant],
        BUTTON_SIZES[size],
        { fullwidth: fullwidth },
        mbsize && BUTTON_MB_SIZES[mbsize]
      )}
      {...props}
    />
  );
}
