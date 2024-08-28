# Animations

## Transition

```css
.element {
  transition-property: background-color, transform, border-radius;
  transition-duration: 3s;
  transition-delay: 2s;
  transition-timing-function: ease-in-out;
  transition: background-color 2s 1s ease-in, transform 2s 1s ease-out,
    border-radius 3s 1s;
}

.element:hover {
  background-color: teal;
  transform: scale(1.5);
  border-radius: 100%;
}
```

## @keyframes

```css
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

@keyframes animationName {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

## Links

- [Transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
- [Animation](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
