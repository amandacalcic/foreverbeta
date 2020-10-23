import React from 'react';
import { Link } from 'react-router-dom';
import { Frame, Page } from "framer";

import PrimaryButton from '../../components/PrimaryButton';

import logoImg from '../../assets/images/logo.svg';
import arrowImg from '../../assets/images/icons/arrow.svg';

import './styles.css';


function Home() {
    const pages = [
        {id: 1, title: "Bem-vinde,", text: "O Forever Beta é uma experiencia digital interativa que imita uma rede social. \n\nO objetivo do Forever é questionar as relações humanas dentro da rede."},
        {id: 2, title: "Importante", text: "Aqui você não irá encontrar notícias reais! Apenas uma copia do que é discutido nas redes lá fora. \n\nEntre na experiência com a mente aberta. Alguns dos posts podem ser surpreendentes de forma positiva ou negativa. Outros terão aviso de gatilho."},
        {id: 3, title: "Está preparade?", text: "Você poderá sair a qualquer momento, mas a experiência irá reiniciar toda a vez que fechar a página, ok? \n\nAntes de entrar você irá fazer um cadastro fictício, não se preocupe em responder com infos reais!"},
    ]

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
                        <Page className="page-framer" >
                            {pages.map(page => {
                                return (
                                    <Frame key={page.id} >
                                        <div className="logo-container">
                                            <img src={logoImg} alt="Forever Beta"/>
                                        </div>

                                        <h1>{page.title}</h1>

                                        <div className="text-container">
                                            <p>{page.text}</p>
                                        </div>

                                        <footer style={{display: page.id === 3 ? '' : 'none'}}>
                                            <Link to="/register">
                                                <PrimaryButton title="Entrar" />
                                            </Link>
                                        </footer>
                                        
                                        <div className="indicators">
                                            <ul>
                                                {pages.map(p => {
                                                    return (<li className={page.id === p.id ? "active" : ""}></li>)
                                                })}
                                            </ul>
                                        </div>
                                    </Frame>
                                )
                            })}
                        </Page>
                    </div>
                </div>
            </div>
        </div>
       
      )
}

export default Home;