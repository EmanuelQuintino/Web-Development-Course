import "./style.css"
import { Link } from "react-router-dom"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

export function Gallery() {
    return (
        <div className="container">
            <main>
                <article>
                    <section>
                        <h1>Galeria</h1>
                    </section>
                    <section>
                        <p>
                            O React Router permite "roteamento do lado do cliente".
                        </p>

                        <p>
                            Em sites tradicionais, o navegador solicita um documento de um servidor da web, baixa e avalia recursos CSS e JavaScript e renderiza o HTML enviado do servidor. Quando o usuário clica em um link, ele inicia o processo novamente para uma nova página.
                        </p>

                        <p>
                            O roteamento do lado do cliente permite que seu aplicativo atualize a URL de um clique no link sem fazer outra solicitação para outro documento do servidor. Em vez disso, seu aplicativo pode renderizar imediatamente uma nova interface do usuário e fazer solicitações de dados com busca para atualizar a página com novas informações.
                        </p>

                        <p>
                            Isso permite experiências de usuário mais rápidas porque o navegador não precisa solicitar um documento totalmente novo ou reavaliar recursos CSS e JavaScript para a próxima página. Ele também permite experiências de usuário mais dinâmicas com coisas como animação.
                        </p>
                    </section>

                    <section className="arrowLinks">
                        <Link to="/">
                            <AiOutlineArrowLeft className="arrowIcon"/>
                        </Link>

                        <Link to="/contact">
                            <AiOutlineArrowRight className="arrowIcon"/>
                        </Link>
                    </section>
                </article>
            </main>
        </div>
    )
}