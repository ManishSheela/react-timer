// // src/CountdownTimer.js
// import React, { useState, useEffect } from "react";

// function Timer({ initialMinutes = 0, initialSeconds = 60 }) {
//   const [minutes, setMinutes] = useState(initialMinutes);
//   const [seconds, setSeconds] = useState(initialSeconds);
//   const [isActive, setIsActive] = useState(false);

//   useEffect(() => {
//     let interval;
//     if (isActive) {
//       interval = setInterval(() => {
//         if (minutes === 0 && seconds === 0) {
//           clearInterval(interval);
//           setIsActive(false);
//         } else {
//           if (seconds === 0) {
//             setMinutes((prevMinutes) => prevMinutes - 1);
//             setSeconds(59);
//           } else {
//             setSeconds((prevSeconds) => prevSeconds - 1);
//           }
//         }
//       }, 1000);
//     } else {
//       clearInterval(interval);
//     }

//     return () => {
//       clearInterval(interval);
//     };
//   }, [isActive, minutes, seconds]);

//   const startTimer = () => {
//     setIsActive(true);
//   };

//   const stopTimer = () => {
//     setIsActive(false);
//   };

//   const resetTimer = () => {
//     setIsActive(false);
//     setMinutes(initialMinutes);
//     setSeconds(initialSeconds);
//   };

//   return (
//     <div className="countdown-timer">
//       <div className="timer">
//         <span>
//           {minutes > 0 && `${minutes}${minutes === 1 ? "m" : "m"} `}
//           &nbsp;
//           {seconds}
//           {seconds === 1 ? "s" : "s"}
//         </span>
//       </div>

//       <div className="buttons">
//         <button onClick={startTimer}>Start</button>

//         <button onClick={stopTimer}>Stop</button>

//         <button onClick={resetTimer} className="reset">
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Timer;


// src/CountdownTimer.js
import React, { useState, useEffect } from "react";

function Timer({ initialMinutes = 0, initialSeconds = 60 }) {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          clearInterval(interval);
          setIsActive(false);
        } else {
          if (seconds === 0) {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          } else {
            setSeconds((prevSeconds) => prevSeconds - 1);
          }
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, minutes, seconds]);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(initialMinutes);
    setSeconds(initialSeconds);
  };

  // Format seconds to always display as two digits
  const formattedSeconds = seconds.toString().padStart(2, "0");

  return (
    <div className="countdown-timer">
      <div className="timer">
        <span>
          {minutes > 0 && `${minutes}${minutes === 1 ? "m" : "m"} `}
          &nbsp;
          {formattedSeconds}
          {seconds === 1 ? "s" : "s"}
        </span>
      </div>

      <div className="buttons">
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer} className="reset">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
