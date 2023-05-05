import { useState } from "react";
import './App.css';
import Header from './assets/components/header/Header'

function App() {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [imc, setImc] = useState(0);

    function calcularIMC(){
        console.log("altura ", altura);
        console.log("peso ", peso);

        // setAltura(altura/100);
        const alturaEmMetros = (altura/100)*2;
        console.log("altura em metros ", alturaEmMetros);
        setImc(imc.toFixed(2));
        console.log("imc ", imc);
    }

    return (
        <>
        <Header />
        <div className="campos">
            <label for="campo-altura">Altura (em cm):</label>
            <input
                id="campo-altura"
                type="number"
                name={altura}
                onChange={(event) => setAltura(event.target.value)}
            />
            <label for="campo-peso">Peso:</label>
            <input
                id="campo-peso"
                type="number"
                name="peso"
                value={peso}
                onChange={(event) => setPeso(event.target.value)}
            />
            <button className="botao-calcular" onClick={calcularIMC}>Calcular IMC</button>
        </div>
        <div className={altura > 0 && peso > 0 ? "mostrarResultado" : "ocultarResultado"}>
        <table>
            <thead>
                <tr>
                    <th>Classificação</th>
                    <th>IMC</th>
                </tr>
            </thead>
            <tbody>
                <tr className={imc < 18.5 ? "destaque" : ""}>
                    <td>Abaixo do peso</td>
                    <td>Menos de 18,5</td>
                </tr>
                <tr className={imc >= 18.5 && imc <= 24.9 ? "destaque" : ""}>
                    <td>Peso normal</td>
                    <td>18,5 a 24,9</td>
                </tr>
                <tr className={imc >= 25 && imc <= 29.9 ? "destaque" : ""}>
                    <td>Sobrepeso</td>
                    <td>25,0 a 29,9</td>
                </tr>
                <tr className={imc >= 30 && imc <= 34.9 ? "destaque" : ""}>
                    <td>Obesidade grau I</td>
                    <td>30,0 a 34,9</td>
                </tr>
                <tr className={imc >= 35 && imc <= 39.9 ? "destaque" : ""}>
                    <td>Obesidade grau II</td>
                    <td>35,0 a 39,9</td>
                </tr>
                <tr className={imc > 40 ? "destaque" : ""}>
                    <td>Obesidade grau III</td>
                    <td>40,0 ou mais</td>
                </tr>
            </tbody>
        </table>
        <h2>Seu IMC é de {imc} de acordo com a tabela acima.</h2>
        
    </div>
        </>
    )
}

export default App
