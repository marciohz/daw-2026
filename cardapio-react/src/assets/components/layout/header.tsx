export function Header() {
    return (

        <header>
            <div className="container header-top">
                <div className="brand">
                    <img src="./assets/img/logo_lanchonete.svg" alt="Logo da Lanchonete" />
                    <div>
                        <h1>Cardápio Digital</h1>
                        <p>Faça seu pedido aqui</p>
                    </div>
                </div>

                <div className="cart-button">
                    <img src="./assets/img/cart.svg" alt="Carrinho de Compras" />
                </div>
            </div>
        </header>
    )
}
