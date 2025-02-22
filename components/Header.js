function Header({ darkMode, toggleDarkMode, onSearch, onProfileClick }) {
    const [searchText, setSearchText] = React.useState('');
    const streak = 5;

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchText.trim()) {
            onSearch(searchText);
        }
    };

    const startVoiceRecognition = () => {
        try {
            const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
            recognition.onresult = (event) => {
                const text = event.results[0][0].transcript;
                setSearchText(text);
                onSearch(text);
            };
            recognition.start();
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <header className="header" data-name="header">
            <div className="search-container" data-name="search-container">
                <form onSubmit={handleSearchSubmit}>
                    <div className="relative">
                    <i class="fa-solid fa-magnifying-glass search-icon"></i>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Ask me anything..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            data-name="search-input"
                        />
                        <i 
                            className="fas fa-microphone voice-icon"
                            onClick={startVoiceRecognition}
                            data-name="voice-button"
                        ></i>
                    </div>
                </form>
            </div>
            <div className="header-icons" data-name="header-icons">
                <button
                    onClick={toggleDarkMode}
                    className="header-icon"
                    data-name="theme-toggle"
                >
                    <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
                </button>
                <div className="header-icon" data-name="streak">
                    <i className="fas fa-fire"></i>
                    <span className="streak-count">{streak}</span>
                </div>
                <div className="header-icon" data-name="notifications">
                    <i className="fas fa-bell"></i>
                </div>
                <div
                    className="cursor-pointer"
                    onClick={onProfileClick}
                    data-name="profile"
                >
                    <img 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop"
                        alt="Profile"
                        className="profile-image"
                    />
                </div>
            </div>
        </header>
    );
}
