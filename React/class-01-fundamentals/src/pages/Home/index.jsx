import React from "react";
import newCityImage from '../../images/newCity.jpg'
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
            <img src={newCityImage} alt="image-city" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur consequuntur voluptatum, voluptatem exercitationem sapiente corrupti adipisci ut itaque corporis. Voluptates dolor harum fugiat non reiciendis sequi quaerat minima beatae nisi.
            </p>
          </section>

          <section>
            <h2>Paragraph 2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur consequuntur voluptatum, voluptatem exercitationem sapiente corrupti adipisci ut itaque corporis. Voluptates dolor harum fugiat non reiciendis sequi quaerat minima beatae nisi.
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