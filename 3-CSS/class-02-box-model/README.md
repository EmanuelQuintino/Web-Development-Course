# Box Model

- Cada elemento é representado como uma caixa retangular
- Essa caixa possui propriedades de uma caixa em 2 dimensões (largura x altura)

<img src="./images/box-model.png" alt="box model" width="480">

## Properties:

- width
- heigh
- content
- border
- padding
- margin
  - Margin Collapsing
    - Quando o top se junta com o bottom sem somar (Pega o margin maior)
    - Obs: Quando os elementos estão lado a lado somam-se as margens

### Reset

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

### Shorthand:

- 1px > top, right, bottom, left (1px)
- 1px 2px > top, bottom (1px) - right, left (2px)
- 1px 2px 3px > top (1px) - right, left (2px) - bottom (3px)
- 1px 2px 3px 4px > top(1px) - right(2px) - bottom (3px) - left(4px)

## Display

- block

  - Mantém as propriedades

- inline

  - height e width não funcionam
  - Somente valores horizontais em padding, margin e border vão funcionar

- inline-block

## Links

- [Box-Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
