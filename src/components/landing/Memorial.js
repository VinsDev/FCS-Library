import React from 'react';

const MemoryComponent = () => {
    const imageUrl = '/images/man.jpeg';
    const name = 'Prof. T.A Gbodi Memorial FCS elibrary';

    return (
        <div className="max-w-xl mx-auto bg-white overflow-hidden">
            <img className="w-full h-auto object-cover" src={imageUrl} alt={name} />
            <div className="text-center px-6 py-4">
                <div className="font-semibold text-2xl mb-2">{name}</div>
            </div>
        </div>
    ); 
};

export default MemoryComponent;
