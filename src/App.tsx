// PascalCase - Toda letra no inicio da palavra incia em caixa alta, restante em caixa baixa, palavras juntas.
// Exemplo:
//  App.tsx
//  HeaderHeading.tsx
//  ExemploDeComponente.tsx

function App() {
  console.log('Oi');

  return (
    <>
      <h1>Olá Mundo ! Do APP !</h1>

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
