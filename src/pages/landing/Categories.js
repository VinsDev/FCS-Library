import React, { useState } from 'react';

const Categories = ({ setSelectedCategory }) => {
    // Sample array of categories (replace with actual data)
    const categories = [
        { id: 1, title: 'Religion', icon: '⛪️' },
        { id: 2, title: 'Lifestyle', icon: '🌿' },
        { id: 3, title: 'Motivation', icon: '💪' },
        { id: 4, title: 'Education', icon: '📚' },
        { id: 5, title: 'Inspirational', icon: '✨' },
        { id: 6, title: 'Audiobooks', icon: '🎧' },
        { id: 7, title: 'Documentaries', icon: '🎥' },
        { id: 8, title: 'Relationships', icon: '💑' },
        { id: 9, title: 'Fiction', icon: '📖' },
    ];

    // State to keep track of selected category
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

    // Handle click on category
    const handleCategoryClick = (categoryId, categoryTitle) => {
        setSelectedCategoryId(categoryId);
        setSelectedCategory(categoryTitle); // Pass selected category to parent component
    };

    return (
        <section id='categories' className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Map through the categories array to display each category */}
                {categories.map(category => (
                    <div
                        key={category.id}
                        className={`bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer ${
                            selectedCategoryId === category.id ? 'border-2 border-blue-500' : ''
                        }`}
                        onClick={() => handleCategoryClick(category.id, category.title)}
                    >
                        <div className="p-4 flex items-center justify-center">
                            <span className="text-4xl">{category.icon}</span>
                            <h3 className="text-lg font-semibold ml-2">{category.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Categories;
