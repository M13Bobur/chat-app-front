/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

function MapY({ latLang }) {
  return (
    <YMaps
      query={{
        lang: "ru_RU",
        apikey: "a8f72beb-f3fd-427b-8911-4d55bb3fb3c5",
      }}
      enterprise={true}
    >
      <div
        style={{
          width: "100%",
          height: "650px",
          border: "1px solid #adadad",
        }}
      >
        <Map
          defaultState={{
            center: latLang.some((itm) => itm === 0)
              ? [40.3734, 71.7978]
              : latLang,
            zoom: 13,
          }}
          width="100%"
          height="100%"
        >
          <Placemark geometry={latLang} />
        </Map>
      </div>
    </YMaps>
  );
}

export default React.memo(MapY);
