import { useState } from "react";


function Condicional(){

    const [email, setEmail] = useState()
    const [User_email, set_User_Email] = useState()
  
    function EnviarEmail(e){
        e.preventDefault()
        set_User_Email(email)
    }

    
    function LimparEmail(){
    set_User_Email('')
    }

    return(
        <div>
        <h1>Testando Condições</h1>
        <form>
        <input type="email" placeholder="Digite o seu email" onChange={(e) => setEmail(e.target.value)}/>
        <button type="submit" onClick={EnviarEmail}>Enviar Email</button>
        {User_email &&(
          <div>
              <p>O email do usuario é {User_email}</p>
              <button onClick={LimparEmail}>Limpar email</button>
        </div>  
        )}
        </form>
        </div>
    )
}

export default Condicional