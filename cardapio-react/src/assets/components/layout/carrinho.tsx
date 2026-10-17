export function Carrinho() {
  return (
    <aside className="carrinho">
      <h2>Carrinho</h2>

      <ul className="carrinho-itens">
        <li className="vazio">Nenhum item adicionado ainda.</li>
      </ul>

      <div className="carrinho-total">
        <span>Total</span>
        <strong>R$ 0,00</strong>
      </div>

      <button type="button">Finalizar pedido</button>
    </aside>
  )
}