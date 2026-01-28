// PascalCase - Toda letra no inicio da palavra incia em caixa alta, restante em caixa baixa, palavras juntas.
// Exemplo:
//  App.tsx
//  HeaderHeading.tsx
//  ExemploDeComponente.tsx

import './styles/global.css';
import './styles/theme.css';

import { Container } from './components/Container';
import { Heading } from './components/Heading';

function App() {
  return (
    <>
      <Container>
        <Heading>LOGO</Heading>
      </Container>

      <Container>
        <Heading>MENU</Heading>
      </Container>
    </>
  );
}

export { App }; // Aqui estamos fazendo o export nomeado, mas podemos fazer assim:
// export default App; // Exportação que pode sofrer alteração de nome na importação.
