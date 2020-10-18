import React from 'react';

import './styles.css';

export interface Story {
    id: number;
    image: string;
    author: {
        id: number;
        name: string;
        avatar: string
    }
}

interface StoriesIconProps{
    story: Story;
}

const StoriesIcon: React.FC<StoriesIconProps> = ({ story }) => {
    return (
        <div className="icon-stories">
            <img src={require(`../../assets/images/avatars/${story.author.avatar}`)} alt="Imagem Post" />
        </div>
    );
};

export default StoriesIcon;