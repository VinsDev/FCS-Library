const LibraryServices = () => {
    // Sample array of library services (replace with actual data)
    const services = [
        { id: 2, title: 'Digital Resources', icon: '💻', description: 'Access e-books, audiobooks, and online databases from anywhere.' },
        { id: 3, title: 'Events & Workshops', icon: '🎉', description: 'Participate in book clubs, author talks, and educational workshops.' },
        { id: 4, title: 'Research Assistance', icon: '🔍', description: 'Get help with research projects and finding resources.' },
    ];

    return (
        <section id='services' className="container mx-auto py-8">
            <h2 className="text-2xl font-bold mb-4">Library Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Map through the services array to display each service */}
                {services.map(service => (
                    <div key={service.id} className="bg-white rounded-lg shadow-md">
                        <div className="p-4 flex items-center justify-center">
                            <span className="text-4xl">{service.icon}</span>
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LibraryServices;