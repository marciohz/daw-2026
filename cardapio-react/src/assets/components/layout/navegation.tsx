import type { Category } from "../../data/categories"

type NavigationBarProps = {
    categories: Category[]
}

export function NavigationBar({
    categories
}: NavigationBarProps) {
    return (
    <nav>
      <ul className="container">
        <li>
          <button type="button">Todos</button>
        </li>
        <li>
          <button type="button">Lanches</button>
        </li>
        <li>
          <button type="button">Porções</button>
        </li>
        <li>
          <button type="button">Bebidas</button>
        </li>
        <li>
          <button type="button">Sobremesas</button>
        </li>
      </ul>
    </nav>
  );
}
