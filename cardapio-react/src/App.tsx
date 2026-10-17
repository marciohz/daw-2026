import "./App.css"
import { Header } from "./assets/components/layout/header"
import { Produtos } from "./assets/components/layout/produtos"
import { Carrinho } from "./assets/components/layout/carrinho"
import { Footer } from "./assets/components/layout/footer"

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <Produtos />
        <Carrinho />
      </main>

      <Footer />
    </>
  )
}

export default App