import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCycle } from 'framer';

import Menu from '../../components/Menu';
import PostItem, { Post } from '../../components/PostItem';
import StoriesIcon, { Story } from '../../components/StoriesIcon';
import Loader from '../../components/Loader';
import StoriesModal from '../../components/StoriesModal';
import End from '../End';

import LogoImg from '../../assets/images/logo-white.svg';
import DownIcon from '../../assets/images/icons/down.svg';

import './styles.css';

function Feed() {
    const [loading, setLoading] = useState(true);
    const [end, setEnd] = useState(false);
    const [feed, setFeed] = useState([]);
    const [stories, setStories] = useState([]);
    const [isStoriesOpen, toggleStoriesOpen] = useCycle(false, true);
    const [selectedStories, setselectedStories] = useState(0);

    function openModalStories(id: number){
        setselectedStories(id - 1)  
        toggleStoriesOpen()

        const body = document.getElementsByTagName("body")
        body[0].style.cssText = "overflow : hidden;";
    }

    function closeModalStories(){
        const body = document.getElementsByTagName("body")
        body[0].style.cssText = "overflow : auto;";
    }    

    !isStoriesOpen && closeModalStories();

    useEffect(() => {
        window.scrollTo(0, 0)

        async function loadStories() {
            const response = await fetch(
                `https://server-foreverbeta.herokuapp.com/stories?_expand=author`
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
            <div style={{display: loading ? 'none' : 'inherit'}}>
                <div id="page-feed" className="container" style={{display: end ? 'none' : 'inherit'}}>
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
                                return <StoriesIcon key={story.id} story={story} onClick={() => openModalStories(story.id)} />
                            })}
                        </div>

                        <main>
                            {feed.map((post: Post) => {
                                return <PostItem key={post.id} post={post} />
                            })}
                        </main>
                    </div>

                    <div className="end-button-section" onClick={() => setEnd(true)} >
                        <a href="#end-section" onClick={() => setEnd(true)}>
                            <img src={DownIcon} className="jump" alt=""/>
                        </a>
                    </div>
                </div>

                <div id="end-section" style={{display: !end ? 'none' : 'flex'}} >
                    <End /> 
                </div>

                <Menu />

                {isStoriesOpen && <StoriesModal toggle={() => toggleStoriesOpen()} stories={stories[selectedStories]} />}
            </div>
        </div>
    );
};

export default Feed;