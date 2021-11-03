import{ useState} from 'react'

const Form2 = () => {

    function cadastrar(e){
        e.preventDefault()
        console.log(name)
        console.log(password)
        console.log('Cadastrou o usuario')
    }


const [name, SetName] = useState()
const [password, SetPassword] = useState()
    
    return(
        <div>
        <h1>Meu Cadastro</h1>
        <form onSubmit={cadastrar}>
        <div>

        <label htmlFor='name'>Nome:</label>
        <input type='text' id='name' name='name' placeholder='Digite o seu nome'
        onChange={(e) => SetName(e.target.value)}
        />

        </div>

        
        <div>

        <label htmlFor='password'>Senha:</label>
        <input type='password' id='password' name='password' placeholder='Digite a sua senha'
        onChange={(e) => SetPassword(e.target.value)}
        />

        </div>


        <div>

        <input type='submit' value='Cadastrar'/>

        </div>

        </form>
        </div>
    );
}

export default Form2