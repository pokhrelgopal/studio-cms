import React from "react";

const PageLoader = () => {
  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "white",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "50px",
          aspectRatio: "1",
          borderRadius: "50%",
          background: `
            radial-gradient(farthest-side, #9352f9 94%, #0000) top/8px 8px no-repeat,
            conic-gradient(#0000 30%, #9352f9)
          `,
          WebkitMask:
            "radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0)",
          animation: "spinLoader 1s infinite linear",
        }}
      />
      <style>
        {`
          @keyframes spinLoader {
            100% { transform: rotate(1turn); }
          }
        `}
      </style>
    </div>
  );
};

export default PageLoader;
