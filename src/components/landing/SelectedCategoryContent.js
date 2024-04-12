import React from 'react';

const SelectedCategoryContent = ({ category, setSelectedCategory }) => {
    // Mock data for books
    const books = [
        {
            id: 1,
            name: 'Book 1',
            author: 'Author 1',
            description: 'Description of Book 1',
            image: 'book1.jpg', // Replace with actual image URL
        },
        {
            id: 1,
            name: 'Book 1',
            author: 'Author 1',
            description: 'Description of Book 1',
            image: 'book1.jpg', // Replace with actual image URL
        },{
            id: 1,
            name: 'Book 1',
            author: 'Author 1',
            description: 'Description of Book 1',
            image: 'book1.jpg', // Replace with actual image URL
        },{
            id: 1,
            name: 'Book 1',
            author: 'Author 1',
            description: 'Description of Book 1',
            image: 'book1.jpg', // Replace with actual image URL
        },{
            id: 1,
            name: 'Book 1',
            author: 'Author 1',
            description: 'Description of Book 1',
            image: 'book1.jpg', // Replace with actual image URL
        },{
            id: 1,
            name: 'Book 1',
            author: 'Author 1',
            description: 'Description of Book 1',
            image: 'book1.jpg', // Replace with actual image URL
        },{
            id: 1,
            name: 'Book 1',
            author: 'Author 1',
            description: 'Description of Book 1',
            image: 'book1.jpg', // Replace with actual image URL
        },{
            id: 1,
            name: 'Book 1',
            author: 'Author 1',
            description: 'Description of Book 1',
            image: 'book1.jpg', // Replace with actual image URL
        },
        // Add more books as needed
    ];

    // Render a single book card
    const renderBookCard = (book) => (
        <div key={book.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
            <img src={book.image} alt={book.name} className="w-full h-64 object-cover" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{book.name}</div>
                <p className="text-gray-700 text-base">{book.description}</p>
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    Author: {book.author}
                </span>
            </div>
        </div>
    );

    const handleBackClick = () => {
        setSelectedCategory(null); // Clear the selected category
    };

    return (
        <div className="selected-category-content">
            <div className="flex items-center justify-start mb-4 gap-10">
                <button onClick={handleBackClick} className="text-gray-700 hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-blue-500">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7 7-7" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 12h16" />
                    </svg>

                </button>
                <h2 className="text-3xl font-semibold">{category}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {books.map(renderBookCard)}
            </div>
            <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                See More
            </button>
        </div>
    );
};

export default SelectedCategoryContent;
