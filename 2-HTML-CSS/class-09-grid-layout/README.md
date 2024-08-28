# Grid Layout

## Display Grid

Divisão de toda a página em linhas e colunas de forma bidimensional

<img src="./images/flex-vs-grid.jpg" alt="flex vs grid" width="560">

```css
grid-template-columns: minmax(100px, 30%);
grid-template-rows: 10% 50% 1fr 1fr 10%;

grid-template-columns: 128px 128px;
grid-template-rows: repeat(5, 72px);

column-gap: 2%;
row-gap: 12px;
gap: 16px 8px;

grid-column: 1 / 3;
grid-row: 1 / 2;

grid-template-areas:
  "Header Header" 240px
  "Main   Aside" 1fr
  ".      Aside" 1fr
  ".      Aside" 1fr
  "Footer Footer" 120px / 1fr 240px;
```

Obs: Usar grid-area nos elementos com os nomes escolhidos;

## Alignment

- Sabendo que o Grid é bidimensional podemos trabalhar nos eixos X (justify) e Y (aling)
- O "content" nos permite alinhar o Grid, relativo ao próprio espaço de fora quando menor que a área definida
- O "items" nos permite alinhar o conteúdo do grid
- O "self" permite alinhar o conteúdo do próprio filho no grid

```css
align-content: start;
justify-content: space-around;
place-content: center;

align-items: center;
justify-items: end;
place-items: stretch;

align-self: center;
justify-self: end;
place-self: center;
```

## Links

- [Grids](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids)
