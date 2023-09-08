import React, { useState, useEffect } from "react";
import {
  DeleteOutlined,
  PauseCircleOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import "./player.css";
import { PlayTracke, PlayBack } from "./style.js";

const useAudio = (url) => {
  const [audio] = useState(new Audio(`data:audio/ogg;base64,${url}`));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle, audio];
};
const PlayTrack = ({ playing, audio }) => {
  return (
    <div id="playing__box">
      <PlayTracke
        playing={playing && true}
        duration={Math.round(audio?.duration)}
      />
    </div>
  );
};

const Player = ({ url, deleteSound }) => {
  const [playing, toggle, audio] = useAudio(url);

  return (
    <PlayBack>
      {playing ? (
        <button className="play__btn" onClick={toggle}>
          <PauseCircleOutlined size="150px" />
        </button>
      ) : (
        <button className="play__btn" onClick={toggle}>
          <PlayCircleOutlined size="150px" />
        </button>
      )}
      <PlayTrack url={url} playing={playing} audio={audio} />

      {/* <button
        className="play__btn"
        style={{ color: "red" }}
        onClick={deleteSound}
      >
        <DeleteOutlined size="150px" color="red" />
      </button> */}
    </PlayBack>
  );
};

export default React.memo(Player);
