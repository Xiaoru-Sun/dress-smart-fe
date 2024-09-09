import { useState } from "react";
import Map from "../components/Map";

type Place = {
  name: string | null;
  lat: number | null;
  lnt: number | null;
};

const Location = ({
  onHandlePlace,
  onSetPlaceDetails,
}: (place: Place) => void) => {
  return (
    <div>
      <Map onHandlePlace={onHandlePlace} onSetState={onSetPlaceDetails} />
    </div>
  );
};

export default Location;
