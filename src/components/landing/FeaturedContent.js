import { Link } from "react-router-dom";

const FeaturedContent = ({setSelectedBook}) => {
    const featuredItems = [
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
    ];
  
    return (
      <section id='featured' className="container mx-auto"> {/* Add top padding here */}
        <h2 className="text-2xl font-bold mb-4">Featured Contents</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Map through the featuredItems array to display each item */}
          {featuredItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md">
              <img src={item.imageUrl} alt={item.title} className="w-full h-64 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <div onClick={() => setSelectedBook(item)} className="mt-2 inline-block text-blue-500 hover:text-blue-700">Read</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  export default FeaturedContent;