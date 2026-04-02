import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#506052",
          borderRadius: "22%",
        }}
      >
        <svg
          viewBox="0 0 512 512"
          width="140"
          height="140"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M140 368V152L256 284L372 152V368"
            stroke="white"
            stroke-width="40"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
