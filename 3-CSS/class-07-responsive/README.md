# RESPONSIVE

- Units CSS

  ```css
  :root {
    font-size: 1rem;
    font-size: 16px;

    /* 16px => 100%* = 1rem */
    /* 16px => 50%* = 2rem */
    /* 16px => 25%* = 4rem */
    /* 16px => 12.5%* = 8rem */
    /* 16px => 6.25%* = 16rem */

    font-size: 6.25%;
  }
  ```

  - Fixed Unit

  - 'px' - Pixels

  - Flexible Unit

    - '%' - Percentage
    - 'auto' - Automatic
    - 'vh' - Viewport Height
    - 'vw' - Viewport Width
    - 'em' - Parent Element
    - 'rem' - Root Element

- Media Queries

  ```css
  @media (min-width: 420px) {
    h1 {
      font-size: 4.2rem;
    }
  }
  ```

  - Uma regra de grupo condicional que aplicará seu conteúdo se o dispositivo atender aos critérios da condição definida usando uma consulta de mídia

- Mobile First

  - Normal Flow

## Links

- [Responsive](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
