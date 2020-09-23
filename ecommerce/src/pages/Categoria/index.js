import React from 'react';



const Categoria = () => {
    let categoria = ['olá', 'tudo bem'];
    

    return (
        <div>
            <h1>Categoria</h1>
            { categoria.map((categoria) => {
                return (
                <p key={categoria}>{categoria}</p>
                )
            })}
        </div>
    )
}

export default Categoria;
