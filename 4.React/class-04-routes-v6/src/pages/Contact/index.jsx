import "./style.css"
import { Link } from "react-router-dom"
import { AiOutlineArrowLeft } from "react-icons/ai"

export function Contact() {
    return (
        <div className="container">
            <main>
                <article>
                    <section>
                        <h1>Contato</h1>
                    </section>

                    <form action="">
                        <section>
                            <label htmlFor="">Name:</label>
                            <input type="text" placeholder="Digite seu nome"/>
                        </section>
                        
                        <section>
                            <label htmlFor="">E-mail:</label>
                            <input type="text" placeholder="Digite seu E-mail"/>
                        </section>

                        <section>
                            <label htmlFor="">Observações:</label>
                            <textarea name="" id="" cols="30" rows="10" placeholder="Suas observações"></textarea>
                        </section>

                        <button onClick={(event) => {
                            event.preventDefault()
                            alert('Formulário enviado com sucesso!')
                        }}>Enviar</button>
                    </form>

                    <section>
                    <Link to="/gallery">
                        <AiOutlineArrowLeft className="arrowIcon"/>
                    </Link>
                    </section>
                </article>
            </main>
        </div>
    )
}