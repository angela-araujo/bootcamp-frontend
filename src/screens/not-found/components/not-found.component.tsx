import { MessagePageNotFound } from "./not-found.styled";

export default function MessageNotFound() {
    return (
        <>
            <MessagePageNotFound>Ops! Esta página não existe.</MessagePageNotFound>
            <a href="http://localhost:3000"><MessagePageNotFound>Voltar para home</MessagePageNotFound></a>
        </>
    )
}