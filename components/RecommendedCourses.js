function RecommendedCourses() {
    const courses = [
        {
            id: 1,
            title: "Investment Basics",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=60&h=40&fit=crop"
        },
        {
            id: 2,
            title: "Stock Market 101",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=60&h=40&fit=crop"
        },
        {
            id: 3,
            title: "Personal Finance",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=60&h=40&fit=crop"
        }
    ];

    return (
        <div className="recommended-courses" data-name="recommended-courses">
            <h2 className="text-xl font-bold mb-4">Recommended Courses</h2>
            {courses.map(course => (
                <div key={course.id} className="course-item" data-name={`course-${course.id}`}>
                    <img
                        src={course.image}
                        alt={course.title}
                        className="course-image"
                    />
                    <span>{course.title}</span>
                </div>
            ))}
        </div>
    );
}
