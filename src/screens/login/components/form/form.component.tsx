import React, { useCallback, useState } from 'react';
import Button from '../../../../components/buttons/button/button.component';
import InputText from '../../../../components/inputs/input-text/input-text.component';
import * as yup from 'yup';
import { ErrorMessage } from './form.types';
import { ErrorDescription } from './form.styled';

const errorInitial = '';

export default function Form() {
    const [data, setData] = useState({ email: '', password: ''});
    const [error, setError] = useState(errorInitial);

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
                console.log(true);

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
            await validation()
            console.log(data)
        },
        [validation]
    )

    console.log(data, 'data')

    return (
        <>
            <InputText type={'text'} placeholder={'E-mail'} name={'email'} onChange={(evento): void => handleChange(evento)} />
            <InputText type={'password'} placeholder={'Senha'} name={'password'} onChange={(evento) => handleChange(evento)} />
            <ErrorDescription>{error}</ErrorDescription>
            <Button primary onClick={onSubmit}>Entrar</Button>        
        </>
    )
}