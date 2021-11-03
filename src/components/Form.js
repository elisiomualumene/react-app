    const Form = () =>{
        function Cadastrar( event ){
            event.preventDefault()
            console.log('Usuario Cadastrado')
          
        }

        return(
            <>
            <form onSubmit={Cadastrar}>
                <input type="text" placeholder='Digite o seu nome'></input>
                <input type="submit" value='Submit'></input>
            </form>
            </>
            
        );
    }

    export default Form