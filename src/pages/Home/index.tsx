import React from 'react';
import { Link } from 'react-router-dom';
import { Frame, Page } from "framer";

import PrimaryButton from '../../components/PrimaryButton';

import logoImg from '../../assets/images/logo.svg';
import arrowImg from '../../assets/images/icons/arrow.svg';

import './styles.css';


function Home() {
    const pages = [
        {id: 1, title: "Bem-vinde,", text: "O Forever Beta é uma experiência digital interativa que se assemelha a  uma rede social. \n\nO objetivo do Forever é questionar as relações humanas dentro da redes."},
        {id: 2, title: "Importante", text: "Os conteúdos presentes durante a imersão são fictícios e não refletem, necessariamente, a nossa opnião. \n\nEntre na experiência de mente aberta e viés critico."},
        {id: 3, title: "Está preparade?", text: "Você poderá sair a qualquer momento, mas a experiência irá reiniciar toda a vez que fechar a página ok? \n\nAntes de entrar, você irá fazer um cadastro fictício. Não se preocupe em responder com infos reais!"},
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
                                                    return (<li key={p.id} className={page.id === p.id ? "active" : ""}></li>)
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