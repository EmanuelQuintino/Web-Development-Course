# Grid Layout

## Display Grid

Dividing the entire page into rows and columns in a two-dimensional way

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

Note: Use grid-area on the elements with the chosen names

## Alignment

- Knowing that the Grid is two-dimensional, we can work on the X (justify) and Y (align) axes
- The "content" allows us to align the Grid, relative to its own outer space when smaller than the defined area
- The "items" allows us to align the grid content
- The "self" allows us to align the content of its own child in the grid

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
