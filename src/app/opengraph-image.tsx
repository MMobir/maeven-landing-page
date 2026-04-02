import { ImageResponse } from "next/og";

export const alt = "Maeven — The Digital Concierge for Your Household";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #3d4d3f 0%, #506052 40%, #68796a 100%)",
          color: "white",
          gap: 28,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255,255,255,0.12)",
            borderRadius: "22%",
            width: 96,
            height: 96,
          }}
        >
          <svg
            viewBox="0 0 512 512"
            width="72"
            height="72"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M140 368V152L256 284L372 152V368"
              stroke="white"
              stroke-width="42"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
            />
          </svg>
        </div>

        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          Maeven
        </div>

        <div
          style={{
            fontSize: 28,
            opacity: 0.7,
            letterSpacing: "-0.01em",
            marginTop: 4,
          }}
        >
          The Digital Concierge for Your Household
        </div>
      </div>
    ),
    { ...size },
  );
}
