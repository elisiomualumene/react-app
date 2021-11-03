const Saudacao = ({nome}) => {
    
    function GerarNome(Algum_Nome){
        return " olá " + Algum_Nome + " tudo bem?"
    }

    return(
        <>
        <p>{GerarNome(nome)}</p>
        </> 
    );
}

export default Saudacao