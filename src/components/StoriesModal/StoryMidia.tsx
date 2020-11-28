import React, { AllHTMLAttributes } from 'react';

import { StoriesPost } from '../StoriesIcon'

interface StoryProps extends AllHTMLAttributes<HTMLDivElement> {
    story: StoriesPost;
    nextVideo: any;
}

export const StoryMidia: React.FC<StoryProps> = ({ story, nextVideo }) => {

    function myFunction() {
        const el = document.getElementById("video-stories")

        if (el instanceof HTMLVideoElement) {
            if (el.paused) {
                el.play();
            }
            else {
                el.pause();
            }
        }
    }

    return (
        <div className="video-class" onClick={() => myFunction()}>
            {
                story.type === "video" 
                ?   <video 
                        id="video-stories"
                        className="video"
                        autoPlay 
                        preload="none"
                        playsInline
                        onEnded={nextVideo}
                        src={require(`../../assets/videos/${story.src}`)}
                    >
                    </video>
                : <img src={require(`../../assets/images/${story.src}`)} alt="Imagem Post" />
            }
        </div>
    )
}