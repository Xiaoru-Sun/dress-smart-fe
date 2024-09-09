import {
  GoogleMap,
  Marker,
  LoadScript,
  Autocomplete,
} from "@react-google-maps/api";
import { useState } from "react";

/* google api key not in .env
// const googleMapApi = import.meta.env.VITE_GOOGLE_MAPS_API_KEYS;
// const googleMapApi = process.env.VITE_GOOGLE_MAPS_API_KEYS;
*/
const Map = ({ onHandlePlace, onSetState }) => {
  const [location, setLocation] = useState({ lat: 51.66, lng: -0.397 });
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoC) => {
    setAutocomplete(autoC);
  };
  const handleMapClick = (e) => {
    console.log(e, e.latLng.lat(), e.latLng.lng());
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    onSetState((obj) => ({ ...obj, lat, lng }));

    const geoCoder = new window.google.maps.Geocoder();
    geoCoder.geocode({ location: e.latLng }, (results, status) => {
      if (
        status === window.google.maps.GeocoderStatus.OK &&
        results.length > 0
      ) {
        console.log("result", results);
        const addressComponents = results[0].address_components;
        // console.log("addressComponents", addressComponents);
        let place = "";
        for (let component of addressComponents) {
          const types = component.types;
          if (types.includes("postal_town")) {
            place = component.long_name;
            break;
          }
          if (types.includes("locality")) {
            place = component.long_name;
            break;
          }
          if (types.includes("administrative_area_level_1")) {
            place = component.long_name;
          }
        }
        onSetState((obj) => ({
          ...obj,
          name: place,
        }));
      }
    });
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      console.log("place", place);
      onHandlePlace({
        name: place.name,
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
    }
  };
  return (
    <div className="w-full h-screen flex flex-col p-4">
      <LoadScript
        googleMapsApiKey="AIzaSyBN6r1pqHllV7TY6js8wW2xNqYLFQgOdk0"
        libraries={["places"]}
      >
        <h1>Choose location...</h1>
        <Autocomplete
          onLoad={onLoad}
          onPlaceChanged={onPlaceChanged}
          options={{ fields: ["name", "geometry", "formatted_address"] }}
        >
          <input placeholder="Enter your location" />
        </Autocomplete>
        <h1>Find your location on the map</h1>
        <GoogleMap
          zoom={10}
          center={location}
          mapContainerStyle={{ width: "390px", height: "390px" }}
          onClick={handleMapClick}
        >
          <Marker position={location} draggable={true} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
