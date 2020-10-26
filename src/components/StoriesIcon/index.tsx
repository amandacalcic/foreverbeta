import React, { AllHTMLAttributes } from 'react';

import './styles.css';

export interface StoriesPost {
    id: number;
    src: string;
    type: any;
}

export interface Story {
    id: number;
    author: {
        id: number;
        name: string;
        avatar: string
    },
    storiesposts: Array<StoriesPost>
}

interface StoriesIconProps extends AllHTMLAttributes<HTMLDivElement> {
    story: Story;
}

const StoriesIcon: React.FC<StoriesIconProps> = ({ story, ...rest }) => {
    return (
        <div className="icon-stories" {...rest} >
            <img src={require(`../../assets/images/avatars/${story.author.avatar}`)} alt="Imagem Post" />
            {
                story.author.name.length > 10 
                    ? <p>{story.author.name.substring(0,10) + "..."}</p>
                    : <p>{story.author.name}</p>
            }
        </div>
    );
};

export default StoriesIcon;