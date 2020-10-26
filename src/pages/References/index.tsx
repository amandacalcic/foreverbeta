import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import { Post } from '../../components/PostItem';
import PrimaryButton from '../../components/PrimaryButton';

import './styles.css';

function References() {
    const [postReferences, setPostReferences] = useState([]);

    let history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0)

        async function loadStories() {
            const response = await fetch(
                `https://server-foreverbeta.herokuapp.com/feed`
            );

            const data = await response.json()

            setPostReferences(data)
        }

        loadStories()
    }, [])

    return (
        <div id="reference-page" className="container">
            <Header title="Referências" />

            <div className="reference-article">
                <div>
                    <p className="title-reference">Fonte</p>
                    <p>Hind Silinguiri - Indian Type Foundry - Open Font</p>
                    <a 
                        href="https://fonts.google.com/specimen/Hind+Siliguri?query=hind#about" 
                        target="_blank" 
                        rel="noopener noreferrer">
                            https://fonts.google.com/specimen/Hind+Siliguri?query=hind#about
                    </a>
                </div>

                <div>
                    <p className="title-reference">Imagens criação de perfil</p>

                    <p>1 - créditos imagem: Fabian Albert/Unsplash</p>
                    <p>2 - créditos imagem: Jake davies/Unsplash</p>
                    <p>3 - créditos imagem: Gian Cescon/Unsplash</p>
                    <p>4 - créditos imagem: Cerqueira/Unsplash</p>
                    <p>5 - créditos imagem: Gantas Vaiciulenas/Unsplash</p>
                    <p>6 - créditos imagem: Hisu Lee/Unsplash</p>
                </div>

                <div>
                    <p className="title-reference">Imagens Postagens</p>
                    {
                        postReferences.map((post : Post) => {
                            return post.reference !== "" && <p key={post.id}>Post {post.id} créditos imagem: {post.reference}</p>
                        })
                    }
                </div>
            </div>

            <footer>
                <PrimaryButton onClick={() => history.goBack()} title="Voltar" />
            </footer>
        </div>
    );
}

export default References;