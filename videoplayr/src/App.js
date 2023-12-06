import { useState } from "react";
import Menu from "./menu";
import Video from "./video.js";
import vid1 from "./vid/deer.mp4";
import vid2 from "./vid/cat.mp4";
import vid3 from "./vid/spider.mp4";
import "./styles.css";


const videos = {
  deer:
          vid1,
  snail:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  cat:
          vid2,
  spider:
          vid3
};

const videoNames = Object.keys(videos);

export default function App() {
  const [videoSrc, setVideoSrc] = useState(videos.spider);

  function onSelectVideo(video) {
    const videoSrc = videos[video];
    setVideoSrc(videoSrc);
  }

  return (
    <div>
      <h1> Video Player</h1>
      <Menu onSelectVideo={onSelectVideo} videoValues={videoNames} />
      <Video videoSrc={videoSrc} />
    </div>
  );
}
