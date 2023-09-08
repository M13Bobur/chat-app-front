import { Modal } from "antd";
import React from "react";
import "./modal.css";

import { createPortal } from "react-dom";
import { CloseButton, Wrapper } from "./style";
import MapY from "components/Map/MapModal";
import { CloseOutlined } from "@ant-design/icons";
import { YMaps, Map, Placemark } from "react-yandex-maps";

export default ({ url, setModalOpen, modalOpen }) =>
  createPortal(
    <Wrapper>
      <Modal
        title="Харитада кўриш!"
        centered
        className="modal__body"
        width={1000}
        closable={false}
        visible={modalOpen}
        footer={null}
      >
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
                center: url.some((itm) => itm === 0) ? [40.3734, 71.7978] : url,
                zoom: 13,
              }}
              width="100%"
              height="100%"
            >
              <Placemark geometry={url} />
            </Map>
          </div>
        </YMaps>
        <CloseButton onClick={() => setModalOpen(!modalOpen)}>
          <CloseOutlined size={40} />
        </CloseButton>
      </Modal>
    </Wrapper>,
    document.getElementById("map-root")
  );
