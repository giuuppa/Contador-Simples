
import  { useState } from 'react'
export default function App() { 

    const [numero, setNumero] = useState(0)

    function aumentar() {
        setNumero(numero + 1)
    }
    function diminuir() {
        setNumero(numero - 1)
    }

    function resetar() {
        setNumero(0)
    }

    return (
        <section>
            <h1>Contador</h1>
            <p>{numero}</p>
            <button onClick={aumentar}>mais</button>
            <button onClick={diminuir}>menos</button>
            <button onClick={resetar}>resetar</button>
        </section>
    )
}