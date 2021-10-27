import './App.css';
import HelloWorld from './components/helloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/pessoa'
import List from './components/List'
import Evento from './components/Evento';

const App = () => {
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

      <List  lancamento={1900} nome='Ferrari'/>
      <List  lancamento={1900} nome='Audi'/>
      <List/>  

      <Evento/>
    </div>
  );
}

export default App;
