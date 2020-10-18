import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import PrimaryButton from '../../components/PrimaryButton';

import './styles.css';

function AboutUs() {
    let history = useHistory();

    return (
        <div id="about-us-page" className="container">
            <Header title="Ficou curioso sobre quem somos?" />

            <article>
                <p>Siga a página do forever no instagram e acesse o nosso projeto no behance!</p>

                <p>Instagram:</p>
                <ul>
                    <li><Link to="">@infinitoppers</Link></li>
                    <li><Link to="">@foreverbeta</Link></li>
                </ul>

                <div className="behance-link">
                    <Link to="">Projeto no Behance</Link>
                </div>
            </article>

            <footer>
                <PrimaryButton onClick={() => history.goBack()} title="Voltar" />
            </footer>
        </div>
    );
}

export default AboutUs;