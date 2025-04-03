import React from "react";

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="relative flex items-center justify-center">
                {/* Left Eye */}
                <div className="absolute w-8 h-8 bg-blue-500 rounded-full shadow-blue-500 shadow-md animate-pulse glow-effect left-[-50px]"></div>

                {/* Right Eye */}
                <div className="absolute w-8 h-8 bg-purple-500 rounded-full shadow-purple-500 shadow-md animate-pulse glow-effect right-[-50px]"></div>

                {/* Smiley Trail */}
                <div className="absolute w-44 h-44 border-t-4 border-blue-400 rounded-full opacity-90 animate-smile-spin glow-trail"></div>
                <div className="absolute w-44 h-44 border-b-4 border-purple-400 rounded-full opacity-90 animate-reverse-smile glow-trail"></div>
            </div>

            {/* Animation Styles */}
            <style>
                {`
          @keyframes smile-spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(180deg);
            }
          }

          @keyframes reverse-smile {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(-180deg);
            }
          }

          .animate-smile-spin {
            animation: smile-spin 2s linear infinite;
          }

          .animate-reverse-smile {
            animation: reverse-smile 2s linear infinite;
          }

          /* Glow Effects */
          .glow-effect {
            box-shadow: 0 0 15px rgba(59, 130, 246, 0.8), 0 0 20px rgba(139, 92, 246, 0.8);
            transition: box-shadow 0.3s ease-in-out;
          }

          .glow-trail {
            filter: drop-shadow(0 0 15px rgba(59, 130, 246, 0.6)) drop-shadow(0 0 25px rgba(139, 92, 246, 0.6));
          }
        `}
            </style>
        </div>
    );
};

export default Loading;
