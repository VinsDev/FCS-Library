import FeaturedContent from "../../components/landing/FeaturedContent";
import AboutUs from "./About";
import LibraryServices from "./Services";

const Home = () => {
    return (
        <div>
            <FeaturedContent />
            <LibraryServices />
            <Reviews />
            <AboutUs />
        </div>
    )
}

export default Home;

const Reviews = () => {
    // Sample array of reviews (replace with actual data)
    const reviews = [
        { id: 1, name: 'John Doe', comment: 'Great selection of books! Highly recommended.', rating: 5 },
        { id: 2, name: 'Jane Smith', comment: 'The library staff is very helpful. Always a pleasant experience.', rating: 4 },
        { id: 3, name: 'Alice Johnson', comment: 'Love attending the events organized by the library. Fun and informative.', rating: 5 },
    ];

    return (
        <section id='reviews' className="container mx-auto py-8">
            <h2 className="text-2xl font-bold mb-4">Reviews</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Map through the reviews array to display each review */}
                {reviews.map(review => (
                    <div key={review.id} className="bg-white rounded-lg shadow-sm p-4">
                        <div className="flex items-center mb-2">
                            <div className="text-xl font-semibold mr-2">{'\u2605'.repeat(review.rating)}</div>
                            <div>{review.name}</div>
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
