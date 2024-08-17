import React, { useState, useRef, useEffect } from "react";

// Infinite Loop

// Note: In case you go back and forth between the below two, ensure that local
// storage is cleared to execute the first function for demo.

export default function EffectsDemoInfiniteLoop() {
  const [title, setTitle] = useState("default title");
  const titleRef = useRef();
  useEffect(() => {
    console.log("useEffect title");
    document.title = title;
  });
  useEffect(() => {
    console.log("useEffect local storage");
    const persistedTitle = localStorage.getItem("title");
    setTitle(persistedTitle || []);
  });
  console.log("render");
  const handleClick = () => setTitle(titleRef.current.value);
  return (
    <div>
      <input ref={titleRef} />
      <button onClick={handleClick}>change title</button>
    </div>
  );
}

// Infinite Fix

// export default function EffectsDemoInfiniteLoop() {
//     const [title, setTitle] = useState("default title");

//       const titleRef = useRef();
//       const titleLocalRef = useRef();
//       useEffect(() => {
//         console.log("useEffect title");
//         document.title = title;
//       }, [title]);
//       useEffect(() => {
//         console.log("useEffect local storage");
//         const persistedTitle = localStorage.getItem("title");
//         setTitle(persistedTitle || "default title");
//       });
//       console.log("render");
//       console.log(title)
//       const handleClick = () => setTitle(titleRef.current.value);
//       const handleLocalClick = () => localStorage.setItem("title", titleLocalRef.current.value)
//       return (
//         <div>
//           <input ref={titleRef} />
//           <button onClick={handleClick}>change title</button>
//           <input ref={titleLocalRef} />
//           <button onClick={handleLocalClick}>change title</button>
//         </div>
//       );
//   }