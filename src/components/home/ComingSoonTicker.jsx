
import React from "react";

const ComingSoonSlider = () => {
  return (
    <div className="w-full overflow-hidden bg-[#0F766E] py-3">
      <div className="coming-soon-slider">
        <span>
          COMING SOON — PRODUCTS FOR CHEMICALS, OILS &amp; LUBRICANTS, AND
          AGRO INDUSTRY
        </span>
      </div>

      <style>{`
        .coming-soon-slider {
          display: flex;
          width: max-content;
          animation: comingSoonRight 18s linear infinite;
          will-change: transform;
        }

        .coming-soon-slider span {
          flex-shrink: 0;
          padding-left: 100vw;
          padding-right: 20px;
          color: #ffffff;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1.5px;
          white-space: nowrap;
        }

        @keyframes comingSoonRight {
          from {
            transform: translateX(-100%);
          }

          to {
            transform: translateX(0);
          }
        }

        @media (max-width: 640px) {
          .coming-soon-slider span {
            font-size: 11px;
            letter-spacing: 1px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .coming-soon-slider {
            animation: none;
            width: 100%;
          }

          .coming-soon-slider span {
            padding-left: 12px;
            white-space: normal;
          }
        }
      `}</style>
    </div>
  );
};

export default ComingSoonSlider;
