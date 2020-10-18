import React from 'react';
import { useHistory } from "react-router-dom";

import Header from '../../components/Header';
import PrimaryButton from '../../components/PrimaryButton';

import './styles.css';

function PrivacyTerm(){
    let history = useHistory();

    return(
        <div id="privacy-term-page" className="container">
            <Header title="Termo" />

            <article>
                <p>
                    Este é um projeto acadêmico que visa retratar a realidade das redes sociais por meio de uma experiência digital interativa.
                    O projeto não tem e não terá nenhuma forma de monetização.
                </p>

                <p>
                    CLÁUSULA DE RESERVA (Lei 9.610/98 - LEI DE DIREITOS AUTORAIS): Este site foi
                    publicado e é mantido pelos discentes do 8º semestre, do Curso de Graduação em Design Digital, da
                    Universidade Anhembi Morumbi, visando a atender às exigências da disciplina <b>TRABALHO DE CONCLUSÃO DE CURSO</b>. 
                    Trata-se de uma publicação temporária para propósitos estritamente acadêmicos e sem fins lucrativos.
                    Em atendimento às exigências da Lei 9.610/98, do parágrafo 4°, do Artigo 184, do Código Penal, os discentes responsáveis por esta publicação
                    colocam-se à disposição, por intermédio do e-mail <b>infinitoppers@gmail.com</b>, para dirimir
                    quaisquer dúvidas referentes à eventual violação de direitos autorais, comprometendo-se desde já, a
                    retirar do ar, qualquer texto, som ou imagem pertencente a autor ou titular que se sinta direta ou
                    indiretamente prejudicado.
                </p>
            </article>

            <footer>
                <PrimaryButton onClick={() => history.goBack()} title="Voltar" />
            </footer>
        </div>
    );
}

export default PrivacyTerm;