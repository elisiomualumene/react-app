import PropTypes from 'prop-types'

function List({nome, lancamento}){
    return(
        <>  
        <ul>
            <li>Lista {nome}, {lancamento}</li>
        </ul>
        </>

        /*
        Comentarios apenas funcionam fora de fragmentos
        */
    );
}

List.prototypes = {
    nome: PropTypes.string.isRequired,
    lancamento: PropTypes.number.isRequired
}

List.defaultProps = {
    nome: 'Faltou o nome',
    lancamento: 0,
}

export default List