function Sidebar({ activeTab, onTabChange }) {
    const navItems = [
        { id: 'home', icon: 'fa-house', text: 'Home', link: 'index.html' },
        { id: 'learn', icon: 'fa-book-open', text: 'Learn', link: '/landing_page/project/LEARNINGGHUB_FINACE/index.html' },
        { id: 'practice', icon: 'fa-brain', text: 'Practice', link: '/landing_page/project/practice_finance/index.html' },
        { id: 'dashboard', icon: 'fa-chart-simple', text: 'Dashboard', link: '/landing_page/project/dashboard_finace/index.html' },
        { id: 'settings', icon: 'fa-gear', text: 'Settings', link: 'settings.html' }
    ];

    return (
        <div className="sidebar" data-name="sidebar">
            <div className="logo-container" data-name="logo">
                <i className="fas fa-rocket logo-icon"></i>
                <div className="logo-text">FinLearn</div>
            </div>
            {navItems.map(item => (
                <a
                    key={item.id}
                    href={item.link} // Added navigation link
                    className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                    onClick={() => onTabChange(item.id)}
                    data-name={`nav-${item.id}`}
                >
                    <i className={`fas ${item.icon} nav-icon`}></i>
                    <span className="nav-text">{item.text}</span>
                </a>
            ))}
        </div>
    );
}
