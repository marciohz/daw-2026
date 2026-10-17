export function Produtos() {
  return (
    <section className="produtos">

      <header>
        <h2>Produtos</h2>
        <p>10 itens</p>
      </header>

      <div className="produtos-grid">

        <article>
          <figure>
            <img src="/assets/img/burger.png" alt="Burguer" />
            <figcaption>Lanches</figcaption>
            <h3>Burguer</h3>
          </figure>
          <div className="info">
            <p>Pão brioche, hambúrguer 160g, queijo prato e molho da casa.</p>
            <div className="info-footer">
              <span className="price">R$ 22,00</span>
              <button type="button">Adicionar</button>
            </div>
          </div>
        </article>

        <article>
          <figure>
            <img src="/assets/img/burger-bacon.png" alt="Bacon Burger" />
            <figcaption>Lanches</figcaption>
            <h3>Bacon Burger</h3>
          </figure>
          <div className="info">
            <p>Pão brioche, hambúrguer 160g, bacon, queijo cheddar e molho da casa.</p>
            <div className="info-footer">
              <span className="price">R$ 25,00</span>
              <button type="button">Adicionar</button>
            </div>
          </div>
        </article>

        <article>
          <figure>
            <img src="/assets/img/burger-double.png" alt="Duplo Burguer" />
            <figcaption>Lanches</figcaption>
            <h3>Duplo Burguer</h3>
          </figure>
          <div className="info">
            <p>Dois hambúrgueres de 160g cada, cheddar, bacon e cebola caramelizada.</p>
            <div className="info-footer">
              <span className="price">R$ 29,00</span>
              <button type="button">Adicionar</button>
            </div>
          </div>
        </article>

        <article>
          <figure>
            <img src="/assets/img/batata-rustica.png" alt="Batata Rustica" />
            <figcaption>Porções</figcaption>
            <h3>Batata Rustica</h3>
          </figure>
          <div className="info">
            <p>Porção de batata com alecrim, parmesão e maionese verde.</p>
            <div className="info-footer">
              <span className="price">R$ 18,00</span>
              <button type="button">Adicionar</button>
            </div>
          </div>
        </article>

        <article>
          <figure>
            <img src="/assets/img/batata-tradicional.png" alt="Batata Tradicional" />
            <figcaption>Porções</figcaption>
            <h3>Batata Tradicional</h3>
          </figure>
          <div className="info">
            <p>Porção de batata e maionese verde.</p>
            <div className="info-footer">
              <span className="price">R$ 15,00</span>
              <button type="button">Adicionar</button>
            </div>
          </div>
        </article>

        <article>
          <figure>
            <img src="/assets/img/agua.png" alt="Água Sem Gás" />
            <figcaption>Bebidas</figcaption>
            <h3>Água sem gás</h3>
          </figure>
          <div className="info">
            <p>Garrafa descartável de água sem gás com 500 ml.</p>
            <div className="info-footer">
              <span className="price">R$ 8,00</span>
              <button type="button">Adicionar</button>
            </div>
          </div>
        </article>

        <article>
          <figure>
            <img src="/assets/img/refri.png" alt="Refrigerante" />
            <figcaption>Bebidas</figcaption>
            <h3>Refrigerante</h3>
          </figure>
          <div className="info">
            <p>Copo de refrigerante de 300 ml.</p>
            <div className="info-footer">
              <span className="price">R$ 10,00</span>
              <button type="button">Adicionar</button>
            </div>
          </div>
        </article>

        <article>
          <figure>
            <img src="/assets/img/chopp.png" alt="Chopp" />
            <figcaption>Bebidas</figcaption>
            <h3>Chopp</h3>
          </figure>
          <div className="info">
            <p>Caneca de 300 ml do nosso chopp pilsen geladíssimo.</p>
            <div className="info-footer">
              <span className="price">R$ 15,00</span>
              <button type="button">Adicionar</button>
            </div>
          </div>
        </article>

        <article>
          <figure>
            <img src="/assets/img/petit-gateau.png" alt="Petit Gateau" />
            <figcaption>Sobremesas</figcaption>
            <h3>Petit Gateau</h3>
          </figure>
          <div className="info">
            <p>Petit Gateau com uma bola de sorvete de creme.</p>
            <div className="info-footer">
              <span className="price">R$ 25,00</span>
              <button type="button">Adicionar</button>
            </div>
          </div>
        </article>

        <article>
          <figure>
            <img src="/assets/img/mousse-maracuja.png" alt="Mousse de Maracujá" />
            <figcaption>Sobremesas</figcaption>
            <h3>Mousse de Maracujá</h3>
          </figure>
          <div className="info">
            <p>Mousse de maracujá feito com a fruta de verdade.</p>
            <div className="info-footer">
              <span className="price">R$ 18,00</span>
              <button type="button">Adicionar</button>
            </div>
          </div>
        </article>

      </div>
    </section>
  )
}