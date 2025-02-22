function ProfileModal({ isOpen, onClose }) {
    const userData = {
        username: "JohnDoe",
        email: "john@example.com",
        currentStreak: 5,
        maxStreak: 15
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" data-name="profile-modal">
            <div className="modal-content">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Profile</h2>
                    <button onClick={onClose}>&times;</button>
                </div>

                <div className="space-y-4" data-name="profile-info">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                            <i className="fas fa-user text-2xl"></i>
                        </div>
                        <div>
                            <h3 className="font-bold">{userData.username}</h3>
                            <p className="text-gray-600">{userData.email}</p>
                        </div>
                    </div>

                    <div className="border-t pt-4">
                        <div className="flex justify-between mb-2">
                            <span>Current Streak</span>
                            <span className="font-bold">{userData.currentStreak} days</span>
                        </div>
                        <div className="flex justify-between mb-4">
                            <span>Max Streak</span>
                            <span className="font-bold">{userData.maxStreak} days</span>
                        </div>
                    </div>

                    <button 
                        className="w-full py-2 bg-red-500 text-white rounded"
                        onClick={() => {/* Implement logout */}}
                        data-name="logout-button"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}
