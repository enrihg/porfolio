import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"

const Arrow = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    aria-labelledby="arrow icon"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill={props.fill}
        d="M5.99 19.218 16.304 8.904v7.485h2v-10.9h-10.9v2h7.485L4.575 17.803l1.415 1.415Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default Arrow
