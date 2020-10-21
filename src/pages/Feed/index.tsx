import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Menu from '../../components/Menu';
import PostItem, { Post } from '../../components/PostItem';
import StoriesIcon, { Story } from '../../components/StoriesIcon';
import Loader from '../../components/Loader';

import LogoImg from '../../assets/images/logo-white.svg';

import './styles.css';

function Feed() {
    const [loading, setLoading] = useState(true);
    const [feed, setFeed] = useState([]);
    const [stories, setStories] = useState([]);

    useEffect(() => {
        async function loadStories() {
            const response = await fetch(
                'https://server-foreverbeta.herokuapp.com/stories?_expand=author'
            );

            const data = await response.json()

            setStories(data)
        }

        async function loadFeed() {
            const responseFeed = await fetch(
                `https://server-foreverbeta.herokuapp.com/feed?_expand=author`
            );
            
            const dataFeed = await responseFeed.json()

            setFeed(dataFeed);
            setLoading(false);
        }

        loadStories();
        loadFeed();
    }, [])

    return (
        <div>
            <Loader style={{display: !loading ? 'none' : 'flex'}} />
            <div style={{display: loading ? 'none' : 'flex'}}>
                <div id="page-feed" className="container">
                    <header className="page-header">
                        <div className="logo-page-header">
                            <Link to="/">
                                <img src={LogoImg} alt="Forever Beta"/>
                            </Link>
                        </div>
                    </header>

                    <div className="feed-body">
                        <div className="stories-container">
                            {stories.map((story: Story) => {
                                return <StoriesIcon key={story.id} story={story} />
                            })}
                        </div>

                        <main>
                            {feed.map((post: Post) => {
                                return <PostItem key={post.id} post={post} />
                            })}
                        </main>
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    );
};

export default Feed;