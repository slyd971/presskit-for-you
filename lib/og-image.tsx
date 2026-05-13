type OgImageProps = {
  title: string;
  eyebrow: string;
  description: string;
};

export function OgImage({ title, eyebrow, description }: OgImageProps) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at 12% 18%, rgba(255,145,82,0.28), transparent 24%), radial-gradient(circle at 82% 14%, rgba(255,255,255,0.08), transparent 18%), linear-gradient(180deg, #0a0d13 0%, #090c12 45%, #080a10 100%)",
        color: "#f7f5f0",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.3,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
          maskImage: "radial-gradient(circle at center, black 45%, transparent 95%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          right: -80,
          top: -80,
          height: 280,
          width: 280,
          borderRadius: 9999,
          background: "rgba(255,255,255,0.08)",
          filter: "blur(60px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: -40,
          bottom: -120,
          height: 300,
          width: 300,
          borderRadius: 9999,
          background: "rgba(255,145,82,0.14)",
          filter: "blur(70px)",
        }}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          gap: 36,
          padding: "58px 64px",
        }}
      >
        <div
          style={{
            display: "flex",
            maxWidth: 730,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div
              style={{
                display: "flex",
                width: "auto",
                borderRadius: 9999,
                border: "1px solid rgba(255,255,255,0.16)",
                background: "rgba(255,255,255,0.06)",
                padding: "10px 18px",
                fontSize: 18,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(247,245,240,0.76)",
              }}
            >
              {eyebrow}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <h1
                style={{
                  margin: 0,
                  fontSize: 72,
                  lineHeight: 1.02,
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                  maxWidth: 680,
                }}
              >
                {title}
              </h1>
              <p
                style={{
                  margin: 0,
                  maxWidth: 620,
                  fontSize: 28,
                  lineHeight: 1.45,
                  color: "rgba(247,245,240,0.72)",
                }}
              >
                {description}
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
            }}
          >
            {["Booking", "Presse", "Prospects"].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  borderRadius: 9999,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.04)",
                  padding: "12px 18px",
                  fontSize: 20,
                  color: "rgba(247,245,240,0.72)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            minWidth: 320,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignSelf: "flex-end",
              borderRadius: 40,
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0.025))",
              padding: 24,
              boxShadow: "0 24px 70px rgba(0,0,0,0.24)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                minWidth: 256,
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  borderRadius: 30,
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
                  padding: 20,
                  minHeight: 120,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <span
                    style={{
                      display: "flex",
                      fontSize: 18,
                      textTransform: "uppercase",
                      letterSpacing: "0.2em",
                      color: "rgba(247,245,240,0.5)",
                    }}
                  >
                    PressKit For You
                  </span>
                  <span
                    style={{
                      display: "flex",
                      fontSize: 34,
                      lineHeight: 1.08,
                      fontWeight: 700,
                    }}
                  >
                    Une presence digitale premium
                  </span>
                </div>
              </div>

              {[
                "Presentation claire",
                "Image plus credible",
                "Lien unique a partager",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: 24,
                    background: "rgba(255,255,255,0.04)",
                    padding: "14px 16px",
                    fontSize: 20,
                    color: "rgba(247,245,240,0.76)",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignSelf: "flex-end",
              borderRadius: 9999,
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.06)",
              padding: "12px 20px",
              fontSize: 20,
              color: "rgba(247,245,240,0.8)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            www.presskit.fr
          </div>
        </div>
      </div>
    </div>
  );
}
