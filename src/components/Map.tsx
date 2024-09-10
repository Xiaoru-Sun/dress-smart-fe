import {
  GoogleMap,
  Marker,
  LoadScript,
  Autocomplete,
} from "@react-google-maps/api";
import { useEffect, useState } from "react";
import "../autocomplete.css";
/* google api key not in .env
// const googleMapApi = import.meta.env.VITE_GOOGLE_MAPS_API_KEYS;
// const googleMapApi = process.env.VITE_GOOGLE_MAPS_API_KEYS;
*/
const Map = ({ onHandlePlace, onSetPlaceDetails, setIsMapOpen }) => {
  const [location, setLocation] = useState({ lat: 51.66, lng: -0.397 });
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoC) => {
    setAutocomplete(autoC);
  };
  const handleMapClick = (e) => {
    console.log(e, e.latLng.lat(), e.latLng.lng());
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    onSetPlaceDetails((obj) => ({ ...obj, lat, lng }));

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
        onSetPlaceDetails((obj) => ({
          ...obj,
          name: place,
        }));
        setIsMapOpen(false);
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
      setIsMapOpen(false);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center p-4">
      <LoadScript
        googleMapsApiKey="AIzaSyBN6r1pqHllV7TY6js8wW2xNqYLFQgOdk0"
        libraries={["places"]}
      >
        <h1 className="text-[16px] text-secondary font-semibold mr-auto">
          Choose location...
        </h1>
        <Autocomplete
          onLoad={onLoad}
          onPlaceChanged={onPlaceChanged}
          options={{ fields: ["name", "geometry", "formatted_address"] }}
        >
          <input
            placeholder="Enter your location"
            className="w-[380px] h-[50px] border-2 mt-4 rounded-lg border-primary outline-none pl-4 "
          />
        </Autocomplete>
        <h1 className="mt-8 text-[16px] text-secondary font-semibold mr-auto">
          Find your location...
        </h1>
        <GoogleMap
          zoom={10}
          center={location}
          mapContainerStyle={{
            width: "100%",
            height: "460px",
            marginTop: "16px",
          }}
          onClick={handleMapClick}
        >
          <Marker position={location} draggable={true} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
