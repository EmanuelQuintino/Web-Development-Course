# Box Model

- Each element is represented as a rectangular box
- The box has properties of a 2-dimensional (width x height)

<img src="./images/box-model.png" alt="box model" width="480">

## Properties:

- width

- height

- content

- border

- padding

- margin
  - Margin Collapsing
    - When the top joins the bottom without adding (take the largest margin)
    - Note: When the elements are side by side, the margins are added

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

  - keeps the properties

- inline

  - height and width do not work
  - only horizontal values ​​in padding, margin and border will work

- inline-block

# Flexbox

- Display-Flex

```css
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
gap: 32px;
flex-wrap: wrap;
order: 1;
```

# Position (top, right, bottom, left)

- absolute
- relative
- sticky
- fixed
- z-index

## Links

- [Box-Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
- [Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
- [Position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
