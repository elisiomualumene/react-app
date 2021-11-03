const Evento = () => {

    function meuEvento(){
        console.log('Opá fui Ativado!')
    }
    return(
        <div>
            <p>Clique para disparar o evento</p>
            <button event={meuEvento} text='Primeiro Evento'/>
        </div>
    );
}

export default Evento