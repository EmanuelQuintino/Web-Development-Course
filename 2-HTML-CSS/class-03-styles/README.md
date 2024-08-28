# CSS (Cascading Style Sheets)

## Syntax

Selector > Declaration > Propertie > Value

## Colorimetry

### Properties

- background-color (para caixas)
- color (para textos)
- border-color (para caixas)

### Values

- palavra-chave: blue, transparent
- hexadecimal: #990AFF
- funções:
  - rgb, rgba: RED, GREEN, BLUE, ALPHA
    - Ex: rgb(0, 255, 64, 0.6);
  - hsl, hsla: HUE(DEGREE), SATURATION(%), LIGHTNESS(%), ALPHA(%)
    - Ex: hsl(180, 100%, 50%, 60%)

## Especificity

- 0 = \* Seletor universal
- 1 = Elementos (tags) h1, p, img, span...
- 10 = Class Ex: (.class)
- 100 = ID Ex: (#id)
- 1000 = Inline
- !important

## Typography

```css
@charset "utf-8";
/* Define o conjunto de caracteres usado pela folha de estilo */

font-family: "Times New Roman", Times, serif;
/* fallback */

font-weight: bold;
/* 400, 700, 800 */

font-style: normal;
/* italic, oblique */

font-size: 16px;
/* 16px - Absoluty */
/* 2rem - Relative */
/* 50% - Relative */

letter-spacing: 4px;
word-spacing: 1em;
line-height: 1.5;

text-transform: uppercase;
/* lowercase, capitalize, none */

text-decoration: wavy overline blue;
/* dashed, dotted */
/* underline, line-through */

text-align: center;
/* start, end, left, right, justify */

text-shadow: 1px 1px 2px red;
/* offset-x | offset-y | blur-radius */
```

### Web-Fonts

- Link - Usado dentro da tag head

- @import — Diz ao mecanismo CSS para incluir uma folha de estilo externa

- @font-face — Descreve o aspecto de uma fonte externa a ser baixada.

  ```css
  @font-face {
    font-family: nameFont;
    src: url("fonts/font.ttf");
  }
  ```

  - TTF (TrueType), OTF (OpenType)
  - Site: https://www.dafont.com/pt/

## Background

- background-color: rgb(55, 100, 50);
- background-image: url("image.jpg"), -linear-gradient(lightblue, lightgreen);
- background-size: 240px auto;
- background-size: contain;
- background-repeat: no-repeat;
- background-position: center top;
- background-attachment: fixed;
