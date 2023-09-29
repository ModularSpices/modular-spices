export default function LogoAnimated({ className }) {
  let fillColor = "#6F195E"; // Default color
  if (className === "text-white") {
    fillColor = "#6A8B30";
  }

  return (
    <div>
      <svg
        className={`h-full w-full ${className}`}
        viewBox="0 0 280 134"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="frame1">
          <path
            d="M262.15 34.39V17.61H238.06V26H173.53V17.61H151.51V0.840027H49.7304V34.39H124.96V52.86H0.150391V103.18H9.16039V95.01H65.0404V103.18H90.8704V133.16H164.79V99.61H151.51V84.7H262.15V67.93H279.85V34.39H262.15Z"
            fill={fillColor}
          />
        </g>

        <g id="frame2">
          <svg
            width="280"
            height="129"
            viewBox="0 0 280 129"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M230.71 0.52002V41.3H197.34V29.7H115.43V14.82H0.150391V32.59H9.75039V72.22H0.150391V104.3H20.6304V98.45H58.0704V104.3H115.43V86.56H123.92V128.31H224.03V84.9H230.71V109.27H279.85V0.52002H230.71Z"
              fill={fillColor}
            />
          </svg>
        </g>

        <g id="frame3">
          <svg
            width="280"
            height="135"
            viewBox="0 0 280 135"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M264.94 25.06V0.459961H110.67H83.2104V43.24H64.5604V31.06H0.150391V90.7H23.5404V134.5H79.4804V88.96H83.2104V114.53H110.67V46.19H117.52V38.6H199.6V46.19H209.33V84.71H279.85V25.06H264.94Z"
              fill={fillColor}
            />
          </svg>
        </g>

        <g id="frame4">
          <svg
            width="280"
            height="135"
            viewBox="0 0 280 135"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.9404 54.45V96.2H12.1904V134.5H213.36V120.83H265.81V134.5H279.85V84.22H271.08V11.6H279.85V0.459961H219.61V37.8H156.08V79.51H82.6604V37.8H74.7504V0.459961H0.150391V54.45H23.9404Z"
              fill={fillColor}
            />
          </svg>
        </g>
      </svg>
    </div>
  );
}
