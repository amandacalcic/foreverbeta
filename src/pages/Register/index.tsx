import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Select from '../../components/Select';
import PrimaryButton from '../../components/PrimaryButton';

import PlusIcon from '../../assets/images/icons/plus.svg';
import LessIcon from '../../assets/images/icons/less.svg';

import './styles.css';

function Register() {
    var coisa = useRef(null);
    const [avatar, setAvatar] = useState("");
    const [showAvatar, setShowAvatar] = useState(false);

    function SelectAcatar(selectedAvatar : string){
        avatar === "" || avatar !== selectedAvatar ? setAvatar(selectedAvatar) : setAvatar("")
    }

    function useOutsideAlerter(ref: any){
        useEffect(() => {

            function handleClickOutside(event : any) {
                if(ref.current && event.target.id !== `avatar`) {
                    setShowAvatar(false)
                }
            }

            document.addEventListener('mousedown', handleClickOutside)
            return () => {
                document.removeEventListener('mousedown', handleClickOutside)
            }
        }, [ref])
    }

    useOutsideAlerter(coisa)

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

                    <div className="avatar-button">
                        <div className="avatar-icon">
                            <Input name="foto-perfil" id="avatar" value={avatar === "" ? "Selecione sua foto de perfil biscoiteira" : "Foto selecionada :)"} autoComplete="off" disabled />

                            <div onClick={() => setShowAvatar(!showAvatar)}>
                                {
                                    avatar === "" && !showAvatar ? <img id="avatar" src={PlusIcon} alt="Adicionar"/> :
                                    avatar === "" && showAvatar ? <img id="avatar" src={LessIcon} alt="Adicionar"/>
                                    : <img id="avatar" className="avatar-image" src={require(`../../assets/images/avatars/${avatar}.svg`)} alt="" />
                                }
                            </div>
                                
                        </div>

                        <div id="avatar" className="avatar-dropdown" style={{display: showAvatar ? "block" : "none"}} ref={coisa}>
                            <div id="avatar" className="avatar-grid">
                                <img src={require(`../../assets/images/avatars/avatar1.svg`)} onContextMenu={(e) => e.preventDefault()} onClick={() => SelectAcatar("avatar1")} id="avatar" alt=""/>
                                <img src={require(`../../assets/images/avatars/avatar2.svg`)} onContextMenu={(e) => e.preventDefault()} onClick={() => SelectAcatar("avatar2")} id="avatar" alt=""/>
                                <img src={require(`../../assets/images/avatars/avatar3.svg`)} onContextMenu={(e) => e.preventDefault()} onClick={() => SelectAcatar("avatar3")} id="avatar" alt=""/>
                                <img src={require(`../../assets/images/avatars/avatar4.svg`)} onContextMenu={(e) => e.preventDefault()} onClick={() => SelectAcatar("avatar4")} id="avatar" alt=""/>
                                <img src={require(`../../assets/images/avatars/avatar5.svg`)} onContextMenu={(e) => e.preventDefault()} onClick={() => SelectAcatar("avatar5")} id="avatar" alt=""/>
                                <img src={require(`../../assets/images/avatars/avatar6.svg`)} onContextMenu={(e) => e.preventDefault()} onClick={() => SelectAcatar("avatar6")} id="avatar" alt=""/>
                            </div>
                        </div>
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