function EnrolledCourse() {
    const progress = 65; // Example progress percentage

    return (
        <div className="enrolled-course" data-name="enrolled-course">
            <h2 className="text-xl font-bold mb-2">Enrolled Course</h2>
            <h3 className="text-lg mb-4">Basics of Finance</h3>
            
            <div className="progress-bar" data-name="progress-bar">
                <div 
                    className="progress-fill"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            
            <div className="flex justify-between items-center">
                <span>{progress}% Complete</span>
                <button 
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    data-name="continue-button"
                >
                    Continue Learning
                </button>
            </div>
        </div>
    );
}
