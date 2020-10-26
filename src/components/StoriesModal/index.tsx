import React, { useState } from 'react'

import { Story } from '../StoriesIcon';
import { StoryMidia } from './StoryMidia';

import './styles.css';

interface StoriesModalProps {
    stories: Story;
    toggle: any;
}

const StoriesModal: React.FC<StoriesModalProps> = ({ stories, toggle }) => {
    const [ storyID, setStoryID] = useState(0);

    return (
        <div className="modal-stories-container">
            <div className="close-stories" onClick={toggle}></div>

                {<StoryMidia story={stories.storiesposts[storyID]} nextVideo={() => (storyID + 2) > stories.storiesposts.length ? toggle() : setStoryID(storyID + 1)} />}

                <div className="indicators">
                    <ul>
                        {
                            stories.storiesposts.map(story => {
                                return (                              
                                    <li key={story.id} className={(storyID + 1) === story.id ? "active" : ""}></li>
                                )
                            })
                        }
                    </ul>
                </div>

            <div className="buttons-stories">
                <div onClick={() => setStoryID(storyID - 1)} style={{visibility: storyID !== 0 ? "unset": "hidden"}}></div>
                <div onClick={() => (storyID + 2) > stories.storiesposts.length ? toggle() : setStoryID(storyID + 1)}></div>
            </div>
        </div>
    )
}

export default StoriesModal;