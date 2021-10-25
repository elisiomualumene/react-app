import './App.css';
import HelloWorld from './components/helloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/pessoa';

function App() {
  return (
    <div className='app'>
      <HelloWorld/>
      <SayMyName nome='Elísio'/>
      <SayMyName nome='José'/>

      <Pessoa
      nome='Mualumene'
      idade='28'
      profissao='Programador'
      />
    </div>
  );
}

export default App;
