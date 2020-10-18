import React, {useState} from 'react';

import PlusIcon from '../../assets/images/icons/plus.svg';
import CommentIcon from '../../assets/images/icons/comment.svg';
import TotalCommentIcon from '../../assets/images/icons/comment-purple.svg';
import HeartIcon from '../../assets/images/icons/heart.svg';
import ArrowUpIcon from '../../assets/images/icons/arrow-up.svg';
import ArrowDownIcon from '../../assets/images/icons/arrow-down.svg';


import './styles.css';

export interface Post {
    id: number;
    image: string;
    description: string;
    likes: number;
    comments: number
    author: {
        id: number;
        name: string;
        avatar: string
    }
}

interface PostItemProps {
    post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
    const [expandedInd, setExpandInd] = useState(false);

    function toggleExpandIndications(){
        setExpandInd(expandedInd === false ? true : false);
    }

    return (
       <div className="post-container">
            <header>
            <img src={require(`../../assets/images/avatars/${post.author.avatar}`)} alt="avatar" />
            <span>@{post.author.name}</span>
            </header>
    
            <article className="post-user">
                <header>
                    <img src={require(`../../assets/images/posts/${post.image}`)} alt="Imagem Post" />
    
                    <div className="post-data">
                       <div className="post-buttons">
                            <img src={PlusIcon} alt="Icones"/>
                            <img src={CommentIcon} alt="Commentário"/>
                       </div>
    
                        <div className="post-actions">
                            <div className="post-comments">
                                <img src={TotalCommentIcon} alt="Icones"/>
                                <span>{post.comments}</span>
                            </div>
                            <div className="post-evaluation">
                                <img src={HeartIcon} alt="Icones"/>
                                <span>{post.likes}</span>
                            </div>
                        </div>
                    </div>
                    
                </header>
    
                <div className="post-description">
                    { (!expandedInd && <p>{post.description.substring(0,200)+"..."}</p>) 
                        || (expandedInd && <p>{post.description}</p>) } 
                    <div onClick={toggleExpandIndications}>
                        {expandedInd === false ? <img src={ArrowDownIcon} alt="" /> : <img src={ArrowUpIcon} alt="" />}
                    </div>
                </div>
            </article>
       </div>
    );
}

export default PostItem;