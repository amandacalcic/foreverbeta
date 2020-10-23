import React, {useState} from 'react';

import PlusIcon from '../../assets/images/icons/plus.svg';
import CommentIcon from '../../assets/images/icons/comment.svg';
import TotalCommentIcon from '../../assets/images/icons/comment-purple.svg';
import ArrowUpIcon from '../../assets/images/icons/arrow-up.svg';
import ArrowDownIcon from '../../assets/images/icons/arrow-down.svg';

import Funny from '../../assets/images/likeIcons/funny.svg';
import Sad from '../../assets/images/likeIcons/sad.svg';
import Surprise from '../../assets/images/likeIcons/surprise.svg';
import Block from '../../assets/images/likeIcons/block.svg';
import Heart from '../../assets/images/likeIcons/heart.svg';
import Fire from '../../assets/images/likeIcons/fire.svg';

import './styles.css';

export interface Post {
    id: number;
    image: string;
    description: string;
    reference: string;
    likes: number;
    likeImage: string;
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
    const [like, setLike] = useState("");

    function toggleExpandIndications(){
        setExpandInd(expandedInd === false ? true : false);
    }

    function SelectLike(liketype : string){
        like === "" || like !== liketype ? setLike(liketype) : setLike("")
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
                            <div className="like-button">
                                <div className="dropdown-content">
                                    <img src={Funny} onClick={() => SelectLike("funny")} alt=""/>
                                    <img src={Sad} onClick={() => SelectLike("sad")} alt=""/>
                                    <img src={Surprise} onClick={() => SelectLike("surprise")} alt=""/>
                                    <img src={Block} onClick={() => SelectLike("block")} alt=""/>
                                    <img src={Heart} onClick={() => SelectLike("heart")} alt=""/>
                                    <img src={Fire} onClick={() => SelectLike("fire")} alt=""/>
                                </div>
                                    {
                                        like === "" ? <img src={PlusIcon} alt=""/>
                                        :   <div className="dropbtn" >
                                                <img className="icon-image" src={require(`../../assets/images/likeIcons/${like}.svg`)} alt="" />
                                            </div>
                                    }
                            </div>
                            <img src={CommentIcon} alt="Commentário"/>
                       </div>
    
                        <div className="post-actions">
                            <div className="post-comments">
                                <img src={TotalCommentIcon} alt="Icones"/>
                                <span>{post.comments}</span>
                            </div>
                            <div className="post-evaluation">
                                <img src={require(`../../assets/images/likes/${post.likeImage}`)} alt="Icones"/>
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