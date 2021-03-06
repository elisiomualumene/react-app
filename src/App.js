import './App.css';
/*import SeuNome from './components/SeuNome';
import HelloWorld from './components/helloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/pessoa'
import List from './components/List'
import Evento from './components/Evento';
import Form from './components/Form'
import Form2 from './components/Form2'
import Button from './components/Eventos/button';
import Condicional from './components/Eventos/Condicional';
import OutraLista from './components/OutraLista';

import { useState } from 'react'
import Saudacao from './components/Saudacao';
*/
import Home from './Pages/Home';
import Empresa from './Pages/Empresa';
import Contato from './Pages/Contato';
import NavBar from './components/NavBar';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Footer from './components/Footer';

const App = () => {
  
  return(
    <Router>
      <NavBar/>
      <Switch>
      <Route exact path="/"><Home/></Route>
      <Route path="/Empresa"><Empresa/></Route>
      <Route path="/Contato"><Contato/></Route>
      </Switch>
      <Footer/>
    </Router>
  );
}
export default App
























/*  const MeusItens = ['React', 'Vue', 'Angular']We can use more expecifics objects like [{framework: 'React', age: 20 , height: 1.70}] 

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
      <Form/>
      <Form2/>
      <Button/>
      <Condicional/>
      <OutraLista itens={MeusItens}/>
      <OutraLista itens={[]}/>
    </div>
  );
}
*/
