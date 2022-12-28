import React from "react";
import "./style.css"

export function Home() {
  return (
    <React.Fragment>
      <header>
        <h1>Class React Fundamentals</h1>
      </header>

      <main>
        <article>
          <section>
            <h2>Paragraph 1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quis quod reiciendis sequi quasi ratione fuga tempora nostrum quisquam ipsum quibusdam asperiores! Neque aliquam adipisci necessitatibus blanditiis esse eum nulla.
            </p>
          </section>

          <section>
            <h2>Paragraph 2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quis quod reiciendis sequi quasi ratione fuga tempora nostrum quisquam ipsum quibusdam asperiores! Neque aliquam adipisci necessitatibus blanditiis esse eum nulla.
            </p>
          </section>
        </article>
      </main>

      <footer>
        &copy; Web Development Course - Jucás
      </footer>
    </React.Fragment>
  )
}