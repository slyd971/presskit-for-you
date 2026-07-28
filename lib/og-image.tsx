type OgImageProps = {
  title: string;
  description: string;
};

export function OgImage({ title, description }: OgImageProps) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at 18% 0%, rgba(184,193,205,0.08), transparent 26%), radial-gradient(circle at 78% 20%, rgba(255,255,255,0.06), transparent 20%), linear-gradient(180deg, #0d1118 0%, #171d28 48%, #111620 100%)",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.22,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "92px 92px",
          maskImage: "radial-gradient(circle at center, black 45%, transparent 95%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: 92,
          borderBottom: "1px solid rgba(255,255,255,0.12)",
          background: "rgba(11,14,20,0.92)",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 64,
          top: 28,
          display: "flex",
          alignItems: "center",
          gap: 18,
          fontSize: 26,
          fontWeight: 800,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 42,
            width: 42,
            border: "1px solid rgba(255,255,255,0.26)",
            fontSize: 18,
            letterSpacing: "-0.08em",
          }}
        >
          PK
        </div>
        <span>PressKit For You</span>
      </div>

      <div
        style={{
          position: "absolute",
          left: 64,
          right: 64,
          bottom: 54,
          height: 1,
          background: "linear-gradient(90deg, rgba(255,255,255,0.36), transparent)",
        }}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          gap: 48,
          padding: "138px 64px 58px",
        }}
      >
        <div
          style={{
            display: "flex",
            maxWidth: 760,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              <h1
                style={{
                  margin: 0,
                  fontSize: 78,
                  lineHeight: 0.98,
                  fontWeight: 700,
                  letterSpacing: "-0.045em",
                  maxWidth: 730,
                }}
              >
                {title}
              </h1>
              <p
                style={{
                  margin: 0,
                  maxWidth: 670,
                  fontSize: 28,
                  lineHeight: 1.45,
                  color: "rgba(255,255,255,0.72)",
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
              gap: 0,
              borderTop: "1px solid rgba(255,255,255,0.14)",
              borderBottom: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            {["+ de 10 exemples", "Livraison sous 7 jours", "1 lien a partager"].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  borderRight: "1px solid rgba(255,255,255,0.12)",
                  padding: "16px 24px",
                  fontSize: 20,
                  color: "rgba(255,255,255,0.72)",
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
            minWidth: 330,
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              display: "flex",
              position: "relative",
              height: 360,
              width: 330,
              border: "1px solid rgba(255,255,255,0.16)",
              background: "#080b11",
              padding: 10,
              boxShadow: "0 28px 90px rgba(0,0,0,0.42)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
                background: "linear-gradient(180deg,#f6f7f8 0%,#ffffff 100%)",
                color: "#10141d",
                padding: 26,
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                <span style={{ display: "flex", height: 8, width: 96, background: "#10141d" }} />
                <span style={{ display: "flex", height: 8, width: 172, background: "rgba(16,20,29,0.22)" }} />
                <span style={{ display: "flex", height: 8, width: 138, background: "rgba(16,20,29,0.16)" }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[220, 180, 245, 150].map((width) => (
                  <span key={width} style={{ display: "flex", height: 18, width, background: "rgba(16,20,29,0.1)" }} />
                ))}
              </div>

              <div style={{ display: "flex", height: 58, width: "100%", background: "#10141d" }} />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              border: "1px solid rgba(255,255,255,0.16)",
              padding: "14px 22px",
              fontSize: 20,
              color: "rgba(255,255,255,0.78)",
            }}
          >
            www.presskit.fr
          </div>
        </div>
      </div>
    </div>
  );
}
