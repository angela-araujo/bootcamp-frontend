import React, { useCallback, useState, useEffect } from 'react';
import * as yup from 'yup'; // Para validação de campos
import Button from '../../../../components/buttons/button/button.component';
import InputText from '../../../../components/inputs/input-text/input-text.component';
import { ErrorMessage } from './form.types';
import { ErrorDescription } from './form.styled';
import { userActions } from '../../../../store/user/user.slice';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthenticated } from '../../../../store/user/user.selectors';
import { useLocation, useNavigate } from 'react-router-dom';
import { HomePath } from '../../../home/home.types';

const errorInitial = '';

export default function Form() {

    /* useState: Retorna um valor e uma função para atualizar o valor. 
    Durante a renderização inicial, o estado retornado é o mesmo que 
    o valor passado como argumento inicial (initialState). */
    const [data, setData] = useState({ email: '', password: ''});
    const [error, setError] = useState(errorInitial);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const isUserAuthentication = useSelector(isAuthenticated);

    useEffect(
        () => {
            if (isUserAuthentication) {
                const to = location.state?.form?.pathname || HomePath
                // navigate(to) //comentado apenas para testar o código
            }
        },
        [isUserAuthentication]
    )

    const resetError = useCallback(
        () => setError(errorInitial),
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
                console.log(true, 'validate schema yup');

                return true;

            } catch (error) {
                // Persiste o erro para poder exibir
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
            console.log(data)
        },
        [validation, data]
    )

    // console.log(data, 'data')

    return (
        <>
            <InputText type={'text'} placeholder={'E-mail'} name={'email'} onChange={(evento): void => handleChange(evento)} />
            <InputText type={'password'} placeholder={'Senha'} name={'password'} onChange={(evento) => handleChange(evento)} />
            <ErrorDescription>{error}</ErrorDescription>
            <Button primary onClick={onSubmit}>Entrar</Button>        
        </>
    )
}