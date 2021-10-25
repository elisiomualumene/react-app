import style from './pessoa.module.css'

function Pessoa({nome, idade, profissao}){
    return(
        <div className={style.back}>
            <h1>
                Nome: {nome}
            </h1>

            <p>
                Idade: {idade}
            </p>

            
            <p>
                profissão: {profissao}
            </p>
        </div>
    );
}

export default Pessoa