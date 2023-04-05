# Qwik Builder Prototype ⚡️

---

## Things to try

- [x] Routing/Navigation
- [x] Styling
- [ ] Testing
- [ ] State/Signal
- [ ] Effects
- [ ] Data Fetching and Suspense

## Issues and Workarounds

### Styling

- [🛑](https://github.com/BuilderIO/qwik/issues/2071) Link component não funciona com hooks useStyles$ e useStylesScoped$.

- 💡 Definir o scopeId no class do componente Link.
  ```tsx
    const { scopeId } = useStylesScoped$(styles)

    return (
      <Link href="/" class={`${scopeId} my-class`}>
    )
  ```

### State
