import React, { useCallback, useState, useEffect, useMemo } from 'react';
import * as yup from 'yup'; // Para validação de campos
import Button from '../../../../components/buttons/button/button.component';
import InputText from '../../../../components/inputs/input-text/input-text.component';
import { ErrorMessage } from './form.types';
import { ErrorDescription } from './form.styled';
import { userActions } from '../../../../store/user/user.slice';
import { useDispatch, useSelector } from 'react-redux';
import { errorMessage, isAuthenticated, isLoading } from '../../../../store/user/user.selectors';
import { useLocation, useNavigate } from 'react-router-dom';
import { HomePath } from '../../../home/home.types';

const errorInitial = '';

export default function Form() {

    const [data, setData] = useState({ email: '', password: ''});
    const [error, setError] = useState(errorInitial);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const isUserAuthentication = useSelector(isAuthenticated);
    const isUserLoading = useSelector(isLoading);
    const loginErrorMessage = useSelector(errorMessage);

    useEffect(
        () => {
            if (isUserAuthentication) {
                const to = location.state?.form?.pathname || HomePath;
                navigate(to);                
            }
        },
        [isUserAuthentication]
    )

    const buttonDescription = useMemo(
        () => isUserLoading? 'Carregando...': 'Entrar',
        [isUserLoading]
    )
    
    const resetError = useCallback(
        () => { 
            setError(errorInitial);            
        },
        []
    )

    const handleChange = useCallback(
        (event: any) => setData(prevState => ({
        ...prevState,
        [event.target.name]: event.target.value,
    })),
    [setData]
    )
    
    const validation = useCallback(
        async () => {
            const schema = yup.object().shape({
                email: yup.string().required(ErrorMessage.Required).email(ErrorMessage.EmailBadFormat),
                password: yup.string().required(ErrorMessage.Required),
            })

            try {
                await schema.validate(data);
                resetError();
                return true;
            } catch (error) {
                // @ts-ignore
                setError(error.errors[0]);                
                return false
            }
        },
        [data, setError]
    )

    const onSubmit = useCallback(
        async () => {
            if(await validation()) {
                dispatch(userActions.login(data))            
            }
        },
        [validation, data]
    )

    return (
        <>
            <InputText type={'text'} placeholder={'E-mail'} name={'email'} onChange={(evento): void => handleChange(evento)} />
            <InputText type={'password'} placeholder={'Senha'} name={'password'} onChange={(evento) => handleChange(evento)} />
            <ErrorDescription>{error || loginErrorMessage}</ErrorDescription>
            <Button primary onClick={onSubmit}>{buttonDescription}</Button>        
        </>
    )
}
