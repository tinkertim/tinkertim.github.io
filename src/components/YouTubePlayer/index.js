import React from "react";
import styles from "./index.module.css";

export function YouTubeShortPlayer({ id }) {
  var url = `https://www.youtube-nocookie.com/embed/${id}`;
  return (
    <div className={styles.shortEmbed}>
      <iframe
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      >
      </iframe>
    </div>
  );
}

export default function YouTubePlayer({ id }) {
  var url = `https://www.youtube-nocookie.com/embed/${id}`;
  return (
    <div className={styles.videoEmbed}>
      <iframe
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      >
      </iframe>
    </div>
  );
}
