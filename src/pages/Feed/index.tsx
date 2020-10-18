import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Menu from '../../components/Menu';
import PostItem, { Post } from '../../components/PostItem';
import StoriesIcon, { Story } from '../../components/StoriesIcon';

import LogoImg from '../../assets/images/logo-white.svg';

import './styles.css';

function Feed() {
    const [feed, setFeed] = useState([]);
    const [stories, setStories] = useState([]);

    useEffect(() => {
        async function loadStories() {
            const response = await fetch('http://192.168.15.18:3333/stories?_expand=author')
            const data = await response.json()
            setStories(data)
        }

        async function loadFeed() {
            const responseFeed = await fetch('http://192.168.15.18:3333/feed?_expand=author')
            const dataFeed = await responseFeed.json()
            setFeed(dataFeed)
        }

        loadStories();
        loadFeed();
    }, [])

    return (
        <div>
            <div id="page-feed" className="container">
                <header className="page-header">
                    <div className="logo-page-header">
                        <Link to="/">
                            <img src={LogoImg} alt="Forever Beta"/>
                        </Link>
                    </div>
                </header>

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
            <Menu />
        </div>
    );
};

export default Feed;