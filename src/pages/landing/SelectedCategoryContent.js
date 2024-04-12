import React from 'react';

const SelectedCategoryContent = ({ category, setSelectedCategory, setSelectedBook }) => {
    // Mock data for books
    const books = [
        {
            id: 1,
            name: 'Book 1',
            author: 'Author 1',
            description: 'Description of Book 1',
            genre: 'Genre 1',
            publicationDate: 'January 1, 2022',
            isbnNumber: '123456789',
            size: '6 x 9 inches',
            bookFormat: 'Hardcover',
            imageUrl: 'https://cdn.pixabay.com/photo/2018/03/19/18/20/tea-time-3240766_1280.jpg', // Replace with actual imageUrl URL
        },
        {
            id: 2,
            name: 'Book 2',
            author: 'Author 2',
            description: 'Description of Book 2',
            genre: 'Genre 2',
            publicationDate: 'February 1, 2022',
            isbnNumber: '987654321',
            size: '5 x 8 inches',
            bookFormat: 'Paperback',
            imageUrl: 'https://template-frame.canva.com/EADi-8Vl31I/1/2/400x400.png', // Replace with actual imageUrl URL
        },
        {
            id: 3,
            name: 'Book 3',
            author: 'Author 3',
            description: 'Description of Book 3',
            genre: 'Genre 3',
            publicationDate: 'March 1, 2022',
            isbnNumber: '135792468',
            size: '7 x 10 inches',
            bookFormat: 'E-book',
            imageUrl: 'https://template-frame.canva.com/EAFSulsfnzQ/1/2/400x335.png', // Replace with actual imageUrl URL
        },
        {
            id: 4,
            name: 'Book 4',
            author: 'Author 4',
            description: 'Description of Book 4',
            genre: 'Genre 4',
            publicationDate: 'March 1, 2022',
            isbnNumber: '135792468',
            size: '7 x 10 inches',
            bookFormat: 'E-book',
            imageUrl: 'https://template-frame.canva.com/EADcaaSuGCA/1/2/282x400.png', // Replace with actual imageUrl URL
        },
        // Add more books as needed
    ];


    // Render a single book card
    const renderBookCard = (book) => (
        <div key={book.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
            <img src={book.imageUrl} alt={book.name} className="w-full h-64 object-cover" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{book.name}</div>
                <p className="text-gray-700 text-base">{book.description}</p>
            </div>
            <div className="px-6 py-4">
                <span onClick={() => setSelectedBook(book)} className="t-2 inline-block text-blue-500 hover:text-blue-700 cursor-pointer">
                    View
                </span>
            </div>
        </div>
    );


    const handleBackClick = () => {
        setSelectedCategory(null); // Clear the selected category
    };

    return (
        <div className="selected-category-content">
            <div className="flex items-center justify-start mb-4 gap-10 px-10">
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
