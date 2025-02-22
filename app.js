function App() {
    const [activeTab, setActiveTab] = React.useState('home');
    const [darkMode, setDarkMode] = React.useState(() => initTheme());
    const [showChatModal, setShowChatModal] = React.useState(false);
    const [showProfileModal, setShowProfileModal] = React.useState(false);
    const [chatQuestion, setChatQuestion] = React.useState('');

    const handleThemeToggle = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        toggleTheme(newDarkMode);
    };

    const handleSearch = (question) => {
        setChatQuestion(question);
        setShowChatModal(true);
    };

    return (
        <div className={`main-layout ${darkMode ? 'dark' : ''}`} data-name="app">
            <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
            
            <main>
                <Header
                    darkMode={darkMode}
                    toggleDarkMode={handleThemeToggle}
                    onSearch={handleSearch}
                    onProfileClick={() => setShowProfileModal(true)}
                />
                
                <div className="main-content">
                    <div className="content-grid">
                        <div className="content-row">
                            <div className="content-main">
                                <EnrolledCourse />
                                <DailyTip />
                                <StockAnalysis />
                                <NewsSection />
                            </div>
                            <div className="content-side">
                                <Calendar />
                                <RecommendedCourses />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <ChatModal
                isOpen={showChatModal}
                onClose={() => setShowChatModal(false)}
                initialQuestion={chatQuestion}
            />

            <ProfileModal
                isOpen={showProfileModal}
                onClose={() => setShowProfileModal(false)}
            />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
