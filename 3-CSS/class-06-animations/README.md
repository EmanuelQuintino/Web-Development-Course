# Animations

## Transition

```css
transition-property: background-color, transform;
transition-duration: 3s;
transition-delay: 3s;
transition-timing-function: ease-in-out;
transition: background-color 1s 1s ease-in, transform 3s 1s ease-out;
```

## @keyframes

```css
@keyframes animationName {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes animationName {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}
```

## Links

- [animation](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
