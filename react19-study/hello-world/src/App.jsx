import './App.css';

function Welcome() {
  return <h2>Bem-vindo, Manoel!</h2>;
}

function Button() {
  return <button>Clique aqui</button>;
}

function App() {
  return (
    <div>
      <h1>Código de evolução do React</h1>
      <Welcome />
      <Button />
    </div>
  );
}

export default App;
