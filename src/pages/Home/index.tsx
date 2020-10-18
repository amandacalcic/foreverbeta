import React from 'react';
import { Link } from 'react-router-dom';
import { Frame, Page } from "framer";

import PrimaryButton from '../../components/PrimaryButton';

import logoImg from '../../assets/images/logo.svg';
import arrowImg from '../../assets/images/icons/arrow.svg';

import './styles.css';


function Home() {
    return (
        <div className="page-home">
            <div id="page-home-content" className="page-container">
                <div className="overlays-root">
                    <div className="model-section">
                        <div className="logo-container">
                            <img src={logoImg} alt="Forever Beta"/>
                        </div>

                        <div className="button-container">
                            <p>iniciar</p>
                            <img src={arrowImg} alt="Iniciar"/>
                        </div>
                    </div>
                </div>
            </div>

            <div id="page-home-informations" className="page-container">
                <div className="overlays-root">
                    <div className="model-section">
                    <Page className="page-framer">
                        <Frame>
                            <div className="logo-container">
                                <img src={logoImg} alt="Forever Beta"/>
                            </div>

                            <h1>Bem-vinde,</h1>

                            <div className="text-container">
                                <p>O Forever Beta é uma experiencia digital interativa que imita uma rede social.</p>

                                <p>O objetivo do Forever é questionar as relações humanas dentro da rede. </p>
                            </div>
                        </Frame>

                        <Frame>
                            <div className="logo-container">
                                <img src={logoImg} alt="Forever Beta"/>
                            </div>

                            <h1>Importante</h1>

                            <div className="text-container">
                                <p>Aqui você não irá encontrar notícias reais! Apenas uma copia do que é discutido nas redes lá fora.</p>

                                <p>Entre na experiência com a mente aberta. Alguns dos posts podem ser surpreendentes de forma positiva ou negativa. Outros terão aviso de gatilho.</p>
                            </div>
                        </Frame>

                        <Frame>
                            <div className="logo-container">
                                <img src={logoImg} alt="Forever Beta"/>
                            </div>

                            <h1>Está preparade?</h1>

                            <div className="text-container">
                                <p>Você poderá sair a qualquer momento, mas a experiência irá reiniciar toda a vez que fechar a página ok?</p>

                                <p>Antes de entrar você irá fazer um cadastro fictício, não se preocupe em responder com infos reais!</p>
                            </div>

                            <footer>
                                <Link to="/register">
                                    <PrimaryButton title="Entrar" />
                                </Link>
                            </footer>
                        </Frame>
                    </Page>
                    </div>
                </div>
            </div>
        </div>
       
      )
}

export default Home;