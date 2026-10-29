import { CounterClick } from "./CounterClick";

export function CounterView() {
  return (
    <main>
      <h3>Contadores</h3>

      <section style={{ display: "flex", gap: 12 }}>
        <CounterClick />
        <CounterClick />
      </section>
    </main>
  );
}