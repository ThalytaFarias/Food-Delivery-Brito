// src/components/ItemDetail.js
import React from 'react';

function ItemDetail({ item }) {
    return (
        <>
            {item && (
                <div className="card">
                    {/* Imagem do item */}
                    <img src="url_da_imagem" className="card-img-top" alt={item.nome} />
                    
                    <div className="card-body">
                        <h5 className="card-title">{item.nome}</h5>
                        <p className="card-text">{item.descricao}</p>
                        <p className="card-text">Preço: R${item.preco.toFixed(2)}</p>

                        <a href="#" className="btn btn-primary">
                            Adicionar ao Carrinho
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}

export default ItemDetail;
