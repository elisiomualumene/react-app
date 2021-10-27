import HelloWorld from './components/helloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/pessoa'
import List from './components/List'

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

      <List  lancamento={1998} nome='ferrar'/>  
    </div>
  );
}

export default App;
