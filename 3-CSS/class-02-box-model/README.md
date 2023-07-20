# BOX MODEL

- Cada elemento é representado como uma caixa retangular
- Essa caixa possui propriedades de uma caixa em 2 dimensões (largura x altura)

![box-model](./images/box-model.png)

## Properties:

- width, heigh (size)
- content
- border
- padding
- margin
  - Margin Collapsing
    - Quando o top se junta com o bottom sem somar (Pega o margin maior)
    - Obs: Quando os elementos estão lado a lado somam-se as margens.

### Shorthand:

- 1px > top, right, bottom, left (1px)
- 1px 2px > top, bottom (1px) - right, left (2px)
- 1px 2px 3px > top (1px) - right, left (2px) - bottom (3px)
- 1px 2px 3px 4px > top(1px) - right(2px) - bottom (3px) - left(4px)

## Position

- static
- relative
- absolute
- sticky
- fixed
  (top, right, bottom, left)

## Display

- block

  - Mantém as propriedades

- inline

  - height e width não funcionam
  - Somente valores horizontais em padding, margin e border vão funcionar

- inline-block

# Links

-[Box-Model-MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
