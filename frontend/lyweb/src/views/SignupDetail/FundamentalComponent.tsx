import React, { useState, useEffect } from 'react';
import { UserData } from '../types';
import './FundamentalComponent.css';
import { removeKorean, checkOnlyNumber } from '../../function/verification';
import { checkIDDuplicate } from '../../function/api';

interface Props {
    userData: UserData;
    setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

const FundamentalComponent: React.FC<Props> = ({userData, setUserData}) => {
    const [isIdDuplicate, setIsIdDuplicate] = useState(false);
    const [idErrorMessage, setIdErrorMessage] = useState('');
    const [pwErrorMessage, setPwErrorMessage] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [bithErrorMessage, setBirthErrorMessage] = useState('');
    const [phoneErrorMessage, setPhoneErrorMessage] = useState('');
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        const valueWithoutKorean = removeKorean(event.target.value);

        if (valueWithoutKorean !== value){
            if (name === 'id'){
                setIdErrorMessage('영어/숫자만 입력해주세요!');
            }
            else if (name === 'pw'){
                setPwErrorMessage('영어/숫자만 입력해주세요!');
            }
            else if (name === 'email'){
                setEmailErrorMessage('영어/숫자만 입력해주세요!');
            }
            else if (name === 'birthdate'){
                if (checkOnlyNumber(valueWithoutKorean)){
                    setBirthErrorMessage('');
                }
                else{
                    setBirthErrorMessage('숫자만 입력해주세요!');
                }
            }
            else if (name === 'phone'){
                if (checkOnlyNumber(valueWithoutKorean)){
                    setPhoneErrorMessage('');
                }
                else{
                    setPhoneErrorMessage('숫자만 입력해주세요!');
                }
            }
        }
        else {
            setIdErrorMessage('');
            setPwErrorMessage('');
            setEmailErrorMessage('');
            setBirthErrorMessage('');
            setBirthErrorMessage('');
            setUserData((prevData) => ({
                ...prevData,
                [name] : name === 'birthdate' || name === 'phone' ? parseInt(valueWithoutKorean,10) : valueWithoutKorean,
            }));
        }
    };

    useEffect(() => {
        setIsIdDuplicate(false);
    },[userData.id]);

    return (
        <div className='fundamental-container'>
            <h2>회원 가입</h2>

            <div>
                <label>
                    아이디: <input 
                    type="text" 
                    name="id" 
                    value={userData.id} 
                    onChange={handleInputChange} 
                    placeholder='4~20자리/영문,숫자 조합' />
                    {isIdDuplicate && <p className='duplicate-error-text'>이미 사용 중인 아이디입니다.</p>}
                    {!isIdDuplicate && userData.id && <p className='duplicate-suceess-text'>사용 가능한 아이디입니다.</p>}
                    {idErrorMessage && <p className='korean-error-text'>{idErrorMessage}</p>}                    
                </label>
            </div>

            <div>
                <label>
                    비밀번호: <input 
                    type="password" 
                    name="pw" 
                    value={userData.pw} 
                    onChange={handleInputChange} 
                    placeholder='4~20자리/영문,숫자 조합' />
                    {pwErrorMessage && <p className='korean-error-text'>{pwErrorMessage}</p>} 
                </label>
            </div>

            <div>
                <label>
                    이메일: <input 
                    type="text"
                     name="email" 
                     value={userData.email} 
                     onChange={handleInputChange} 
                     placeholder='example@example.com' />
                     {emailErrorMessage && <p className='korean-error-text'>{emailErrorMessage}</p>} 
                </label>
            </div>

            <div>
                <label>
                    생년월일: <input 
                    type="text" 
                    name="birthdate" 
                    value={userData.birthdate} 
                    onChange={handleInputChange} 
                    placeholder='YYYYMMDD' />
                    {bithErrorMessage && <p className='number-error-text'>{bithErrorMessage}</p>} 
                </label>
            </div>

            <div>
                <label>
                    전화번호: <input 
                    type="text" 
                    name="phone" 
                    value={userData.phone} 
                    onChange={handleInputChange} 
                    placeholder='숫자만 입력' />
                    {phoneErrorMessage && <p className='number-error-text'>{phoneErrorMessage}</p>}
                </label>
            </div>
        </div>
    )
};

export default FundamentalComponent;