import { useState, useRef } from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <section className="relative w-full overflow-hidden py-8 px-4 bg-background">
      <div className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <video
          ref={videoRef}
          src="https://storage.googleapis.com/msgsndr/f5ehsbHfdFg2UsHEIb49/media/691dfee088e1e604ea8cd838.mp4"
          controls={isPlaying}
          className="w-full h-full object-cover"
          onPause={handlePause}
          onEnded={handlePause}
        >
          Your browser does not support the video tag.
        </video>
        
        {/* Tinted Overlay with Text - hidden when playing */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/50 flex items-center">
            <div className="px-8 md:px-16 lg:px-24 max-w-2xl">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                style={{ fontFamily: 'Times New Roman, serif' }}
              >
                See ENDevo in Action
              </h2>
              <p className="text-base md:text-lg text-white/90 leading-relaxed">
                Experience how we simplify legacy readiness and digital resilience through AI-powered tools,
                human-centered guidance, and our connected marketplace approach.
              </p>
            </div>
            
            {/* Play Button */}
            <button
              onClick={handlePlay}
              className="absolute right-8 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-105"
              aria-label="Play video"
            >
              <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;