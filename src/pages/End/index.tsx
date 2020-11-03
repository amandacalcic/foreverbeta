import React, { useEffect } from 'react';

import PrimaryButton from '../../components/PrimaryButton';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

import './styles.css';

function End() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div id="page-end" className="container">
            <Header title="esse é o fim" />

            <article className="article-end-body">
                <p>
                    O <span className="decoration-text">Forever beta</span> é uma experiência finita, as redes sociais não são tão simples assim.
                    <br/>
                    Queremos que você responda para si mesmo duas perguntas finais:
                    <br/><br/>
                    <span className="decoration-text">Porquê você continuou até o fim?</span>
                    <br/>
                    <span className="decoration-text">Sua rede social se assemelha com o que você viu até aqui?</span>
                </p>
                <p>
                    Os conteúdos aqui dentro não expressam nossa opinião, são apenas baseados em temas que lidamos em nosso dia a dia.
                    <br/><br/>
                    As redes sociais podem trazer riscos a sua sáude mental. Consulte um especialista caso precise de ajuda!
                    <br/><br/>
                    Esse projeto é o nosso Trabalho de Conclusão de Curso da graduação de Design Digital na Universidade Anhembi Morumbi.
                    <br/><br/>
                    Se você deseja ler nossa monografia e entender o estudo por trás desse projeto acesse o link abaixo:
                </p>
            </article>

            <footer>
                <a href="https://www.google.com.br" rel="noopener noreferrer" target="_blank">
                    <PrimaryButton title="Acesse o projeto" />
                </a>
            </footer>

            <Menu />
        </div>
    );
};

export default End;