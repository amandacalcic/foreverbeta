import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Select from '../../components/Select';
import PrimaryButton from '../../components/PrimaryButton';

import PlusIcon from '../../assets/images/icons/plus.svg';

import './styles.css';

function Register() {
    return (
        <div id="register-page" className="container">
           <Header title="Faça o seu cadastro ;)" />

            <div className="form-page">
                <form>
                    <Input name="nickname" placeholder="Digite nickname soberbo ou deprimido" autoComplete="off" />

                    <Select
                        name="personalidade"
                        placeholder="Escolha uma personalidade fake para você"
                        options={[
                            {value: '1', label: 'Ativista de storie' },
                            {value: '2', label: 'Biscoiter@ sexual' },
                            {value: '3', label: 'Gamer padrãozinh@' },
                            {value: '4', label: 'Hater sem vida social' },
                            {value: '5', label: 'Militante amorzinho' },
                            {value: '6', label: 'Privilegiad@ boladão' }
                        ]}
                    />

                    <div className="photo-icon">
                        <Input name="foto-perfil" placeholder="Selecione sua foto de perfil biscoiteira" autoComplete="off" />
                        <img src={PlusIcon} alt="Adicionar"/>
                    </div>

                    <div className="term-confirmation" >
                        <Input name="termo" type="radio" required />
                        <p>Você aceita nossos <Link to="/term" >termos e condições</Link>?
                        </p>
                    </div>

                    <div className="text-information">
                        <p>A gente sabe que você nao vai ler!</p>
                        <p>Mas depois não reclame se vendermos seus dados para empresas ou para mudar as eleições.</p>
                        <p>Combinado?</p>
                    </div>
                </form>

                <footer>
                    <Link to="/feed" >
                        <PrimaryButton title="Cadastrar" />
                    </Link>
                </footer>
            </div>
        </div>
    );
}

export default Register;