function Sidebar({ activeTab, onTabChange }) {
    const navItems = [
        { id: 'home', icon: 'fa-house', text: 'Home' },
        { id: 'learn', icon: 'fa-book-open', text: 'Learn' },
        { id: 'practice', icon: 'fa-brain', text: 'Practice' },
        { id: 'dashboard', icon: 'fa-chart-simple', text: 'Dashboard' },
        { id: 'settings', icon: 'fa-gear', text: 'Settings' }
    ];

    return (
        <div className="sidebar" data-name="sidebar">
            <div className="logo-container" data-name="logo">
                <i className="fas fa-rocket logo-icon"></i>
                <div className="logo-text">FinLearn</div>
            </div>
            {navItems.map(item => (
                <div
                    key={item.id}
                    className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                    onClick={() => onTabChange(item.id)}
                    data-name={`nav-${item.id}`}
                >
                    <i className={`fas ${item.icon} nav-icon`}></i>
                    <span className="nav-text">{item.text}</span>
                </div>
            ))}
        </div>
    );
}
