import { ImageResponse } from "next/og";

export const alt = "Nhat Tran - Marketing Operations Expert";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#f7f7f8",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "3px",
              backgroundColor: "#627d98",
              borderRadius: "2px",
            }}
          />
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#18181b",
              letterSpacing: "-0.025em",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Nhat Tran
          </h1>
          <p
            style={{
              fontSize: "28px",
              color: "#627d98",
              margin: 0,
              fontWeight: 500,
            }}
          >
            Marketing Operations & Technology Professional
          </p>
          <p
            style={{
              fontSize: "18px",
              color: "#71717a",
              margin: "8px 0 0 0",
              maxWidth: "700px",
              lineHeight: 1.5,
            }}
          >
            Building efficient marketing systems that drive measurable results
            through automation, integration, and process optimization.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "40px",
          }}
        >
          {["Marketo", "Salesforce", "Data Governance", "AI Automation"].map(
            (tag) => (
              <span
                key={tag}
                style={{
                  padding: "6px 14px",
                  backgroundColor: "rgba(98, 125, 152, 0.1)",
                  color: "#627d98",
                  fontSize: "14px",
                  fontWeight: 600,
                  borderRadius: "4px",
                }}
              >
                {tag}
              </span>
            )
          )}
        </div>
        <p
          style={{
            position: "absolute",
            bottom: "40px",
            right: "80px",
            fontSize: "16px",
            color: "#a1a1aa",
            margin: 0,
          }}
        >
          nhattran.me
        </p>
      </div>
    ),
    { ...size }
  );
}
