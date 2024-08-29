import { useState } from 'react'
import Header from "./Componets/Header/header"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      

      <div className="question">
      <Header />
        <form action="">
          
          <h3>Questão 01</h3>
          <p>Qual tag HTML é usada para definir um parágrafo?</p>
          <label htmlFor="">
          <input type="radio" name='q1' value='a' id=''/>  a) &lt;head&gt;
          </label>

          <label htmlFor="">
          <input type="radio" name='q1' value='ab' id=''/>  b) &lt;body&gt;
          </label>

          <label htmlFor="">
          <input type="radio" name='q1' value='c' id=''/>  c) &lt;p&gt;
          </label>

          <label htmlFor="">
          <input type="radio" name='q1' value='d' id=''/>  d) &lt;div&gt;
          </label>

          <h3>Questão 02</h3>
          <p>Qual é o propósito principal do JavaScript em uma página web?</p>
          <label htmlFor="">
          <input type="radio" name='q2' value='a' id=''/>  a) Estruturar o conteúdo
          </label>

          <label htmlFor="">
          <input type="radio" name='q2' value='ab' id=''/>  b) Definir a aparência
          </label>

          <label htmlFor="">
          <input type="radio" name='q2' value='c' id=''/>  c) Adicionar interatividade
          </label>

          <label htmlFor="">
          <input type="radio" name='q2' value='d' id=''/>  d) Otimizar o desempenho
          </label>


          <h3>Questão 03</h3>
          <p>Qual atributo HTML é usado para incluir uma folha de estilo externa em um documento?</p>
          <label htmlFor="">
          <input type="radio" name='q3' value='a' id=''/>  a) &lt;style&gt;
          </label>

          <label htmlFor="">
          <input type="radio" name='q3' value='ab' id=''/>  b) &lt;link&gt;
          </label>

          <label htmlFor="">
          <input type="radio" name='q3' value='c' id=''/>  c) &lt;script&gt;
          </label>

          <label htmlFor="">
          <input type="radio" name='q3' value='d' id=''/>  d) &lt;meta&gt;
          </label>


          <h3>Questão 04</h3>
          <p>Explique a diferênça entre frontend e backend.</p>
          <textarea name="" id=""></textarea>


          <h3>Questão 05</h3>
          <p>Explique o conceito de "responsividade" no desenvolvimento web.</p>
          <textarea name="" id=""></textarea>

          <button className='button' type="button">Enviar as respostas</button>
        </form>
      </div>
    </>
  )
}

export default App
