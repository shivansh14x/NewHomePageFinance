function NewsSection() {
    const news = [
        {
            id: 1,
            title: "Federal Reserve Announces New Interest Rates",
            time: "2 hours ago"
        },
        {
            id: 2,
            title: "Global Markets React to Economic Data",
            time: "4 hours ago"
        },
        {
            id: 3,
            title: "New Budget Policy Implementation",
            time: "6 hours ago"
        }
    ];

    return (
        <div className="news-section" data-name="news-section">
            <h2 className="text-xl font-bold mb-4">Financial News</h2>
            <div className="space-y-4">
                {news.map(item => (
                    <div 
                        key={item.id}
                        className="p-3 border-b hover:bg-gray-50 cursor-pointer"
                        data-name={`news-${item.id}`}
                    >
                        <h3 className="font-medium">{item.title}</h3>
                        <span className="text-sm text-gray-500">{item.time}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
