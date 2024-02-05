// src/components/ItemDetailContainer.js
import React, { useState, useEffect } from 'react';

const getItem = () => {
    // Simulando uma requisição assíncrona com Promise e delay
    return new Promise((resolve) => {
        setTimeout(() => {
            // Mock de um item
            const item = {
                id: 1,
                nome: 'Exemplo de Item',
                descricao: 'Descrição do item de exemplo.',
                preco: 29.99,
            };
            resolve(item);
        }, 2000); // Delay de 2 segundos
    });
};

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);

    useEffect(() => {
        // Ao montar o componente, chama a função getItem
        getItem().then((result) => setItem(result));
    }, []);

    // Renderiza o JSX após a resolução da Promise
    return (
        <div className="container mt-3">
            <h2>Detalhes do Item</h2>
            {item ? (
                <div>
                    <p>ID: {item.id}</p>
                    <p>Nome: {item.nome}</p>
                    <p>Descrição: {item.descricao}</p>
                    <p>Preço: R${item.preco.toFixed(2)}</p>
                </div>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
};

export default ItemDetailContainer;
