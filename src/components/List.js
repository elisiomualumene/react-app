import PropType from 'prop-types'

function List({nome, lancamento}){
    return(
        <>
        <p>Minha Lista</p>

        <ul>
            <li>Lista 1 {nome}, {lancamento}</li>
            <li>Lista 2 {nome}, {lancamento}</li>
            <li>Lista 3 {nome}, {lancamento}</li>
        </ul>
        </>


    );
}

List.prototype = {
    nome: PropType.string.isRequired,
    lancamento: PropType.number,
}

export default List