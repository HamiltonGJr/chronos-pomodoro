// PascalCase - Toda letra no inicio da palavra incia em caixa alta, restante em caixa baixa, palavras juntas.
// Exemplo:
//  App.tsx
//  HeaderHeading.tsx
//  ExemploDeComponente.tsx

import './styles/global.css';
import './styles/theme.css';

function App() {
  return (
    <>
      <div className='container'>
        <div className='content'>
          <section>LOGO</section>
        </div>
      </div>

      <div className='container'>
        <div className='content'>
          <section>MENU</section>
        </div>
      </div>

      <div className='container'>
        <div className='content'>
          <section>FORMS</section>
        </div>
      </div>

      <div className='container'>
        <div className='content'>
          <section>FOOTER</section>
        </div>
      </div>
    </>
  );
}

export { App }; // Aqui estamos fazendo o export nomeado, mas podemos fazer assim:
// export default App; // Exportação que pode sofrer alteração de nome na importação.
