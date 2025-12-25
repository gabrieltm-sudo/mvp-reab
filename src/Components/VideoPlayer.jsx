import React from 'react';

const VideoPlayer = ({ 
  playbackId, 
  title = "Vídeo", 
  poster,
  autoplay = false 
}) => {
  if (!playbackId) {
    return (
      <div className="video-placeholder">
        <p>Vídeo não disponível</p>
      </div>
    );
  }

  return (
    <div className="video-container">
      <iframe
        src={`https://stream.mux.com/${playbackId}.m3u8`}
        title={title}
        width="100%"
        height="400"
        frameBorder="0"
        allowFullScreen
        style={{
          borderRadius: '10px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
        }}
      />
    </div>
  );
};

export default VideoPlayer;