import { SVGProps } from "react";

export default function SVGPatternCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="217"
      height="217"
      viewBox="0 0 217 217"
      {...props}
    >
      <g stroke="#fff" opacity=".1">
        <circle cx="108.5" cy="108.5" r="54" />
        <circle cx="108.5" cy="108.5" r="108" />
      </g>
    </svg>
  );
}
