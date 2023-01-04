import "./style.css"
import IconReact from "../../images/react.svg"

export function Home() {
  return (
      <div className="container">
        <main>
          <article>
            <section>
              <h1>Class React Base JSX</h1>
              <h2>Uma biblioteca JavaScript para criar interfaces de usuário</h2>
              <img src={IconReact} alt="" className="iconReact"/>
            </section>
            <section>
              <h3>Declarativo</h3>
              <p>              
                React faz com que a criação de UIs interativas seja uma tarefa fácil. Crie views simples para cada estado na sua aplicação, e o React irá atualizar e renderizar de forma eficiente apenas os componentes necessários na medida em que os dados mudam.
              </p>
                <p>
                Views declarativas fazem com que seu código seja mais previsível e simples de depurar.
                </p>
            </section>
            <section>
              <h3>Baseado em componentes</h3>
              <p>
              Crie componentes encapsulados que gerenciam seu próprio estado e então, combine-os para criar UIs complexas.
              </p>
              <p>
              Como a lógica do componente é escrita em JavaScript e não em templates, você pode facilmente passar diversos tipos de dados ao longo da sua aplicação e ainda manter o estado fora do DOM.
              </p>
            </section>
          </article>
        </main>
      </div>
  )
}