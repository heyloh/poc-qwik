# Qwik Builder Prototype ⚡️

---

## Things to try

- [x] Routing/Navigation
- [x] Styling
- [x] State/Signal
- [x] Effects
- [x] Data Fetching and Suspense

## Issues and Workarounds

### Styling

- [🛑](https://github.com/BuilderIO/qwik/issues/2071) Link component não funciona com hooks useStylesScoped$.

- 💡 Definir o scopeId no class do componente Link.

  ```tsx
    const { scopeId } = useStylesScoped$(styles)

    return (
      <Link href="/" class={`${scopeId} my-class`}>
    )
  ```

### State

#### Store

- [🛑]() Só detecta alterações no primeiro nível do objeto

- 💡

```tsx
const store = useStore({ user: { id: "", cpf: "", address: { street: "" } } });

const changeStreet1 = $(() => {
  store.user.address.street = "new street"; // Não funciona
});

const changeStreet2 = $(() => {
  store.user = {
    ...store.user,
    address: { street: "new street" },
  }; // Funciona
});

return (
  <div>
    <button onClick$={changeStreet1}>Não muda</button>
    <button onClick$={changeStreet2}>Muda</button>
  </div>
);
```

## References

- [Qwik](https://qwik.builder.io/docs/)
- [Ecosystem](https://qwik.builder.io/ecosystem)
- [Misko Hevery - Qwik Overview](https://www.youtube.com/watch?v=0dC11DMR3fU&t=154s)

## In depth

- [API Routes](https://qwik.builder.io/docs/endpoints/)
- [Qwik Dollar Sign](https://qwik.builder.io/docs/advanced/dollar/)
- [Context](https://qwik.builder.io/docs/components/context/)
