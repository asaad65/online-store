
"use client";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function BodyWrapper({ children }) {
  const mood = useSelector((state) => state.Mood.value);

  useEffect(() => {
    const backgroundColor = mood === "dark" ? "#111" : "#fff";
    const textColor = mood === "dark" ? "#fff" : "#000";

    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = textColor;
  }, [mood]);

  return <>{children}</>;
}