// PascalCase - Toda letra no inicio da palavra incia em caixa alta, restante em caixa baixa, palavras juntas.
// Exemplo:
//  App.tsx
//  HeaderHeading.tsx
//  ExemploDeComponente.tsx

import { TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading';

import './styles/global.css';
import './styles/theme.css';

function App() {
  console.log('Oi');

  return (
    <>
      <Heading>
        Olá Mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
        neque repudiandae eum earum ab incidunt, rem quae maxime blanditiis
        laudantium praesentium obcaecati, distinctio aperiam doloremque, nam
        voluptatibus totam itaque a. ! Do APP !
      </p>
    </>
  );
}

export { App }; // Aqui estamos fazendo o export nomeado, mas podemos fazer assim:
// export default App; // Exportação que pode sofrer alteração de nome na importação.
