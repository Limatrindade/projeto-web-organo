import './Colaborador.css'

function Colaborador ({nome, imagem, cargo}) {
    return (
        <div className='colaborador'>
            <div className='cabecalho'>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h5>{nome}</h5>
                <h6>{cargo}</h6>
            </div>
        </div>
    )
}

export default Colaborador 