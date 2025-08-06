"use client";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./map-component"), {
  ssr: false,
  loading: () => <div>Loading map...</div>,
});

export const BrazilMap = () => {
  return <MapComponent />;
};
