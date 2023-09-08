import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { LocationButton, Map } from "./style";

const MapButton = ({ handleShowModal, smaller }) => {
  return (
    <Map smaller={smaller}>
      <LocationButton onClick={handleShowModal}>
        <IoLocationSharp color="#0093d2" size={21} />
      </LocationButton>
    </Map>
  );
};

export default MapButton;
