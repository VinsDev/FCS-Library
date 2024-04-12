import { Link } from "react-router-dom";

const FeaturedContent = () => {
    const featuredItems = [
      {
        id: 1,
        title: 'Featured Book 1',
        description: 'Content of book 1 will show here',
        imageUrl: 'https://via.placeholder.com/150',
      },
      {
        id: 2,
        title: 'Featured Book 2',
        description: 'Content of book 2 will show here',
        imageUrl: 'https://via.placeholder.com/150',
      },
      {
        id: 3,
        title: 'Featured Book 3',
        description: 'Content of book 3 will show here',
        imageUrl: 'https://via.placeholder.com/150',
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
                <Link to={`/books/${item.id}`} className="mt-2 inline-block text-blue-500 hover:text-blue-700">Read more</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  export default FeaturedContent;