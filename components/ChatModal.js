function ChatModal({ isOpen, onClose, initialQuestion }) {
    const [messages, setMessages] = React.useState([]);
    const [input, setInput] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const chatRef = React.useRef(null);

    React.useEffect(() => {
        if (initialQuestion && isOpen) {
            handleQuestion(initialQuestion);
        }
    }, [isOpen, initialQuestion]);

    const handleQuestion = async (question) => {
        try {
            setIsLoading(true);
            const newMessages = [...messages, { type: 'user', content: question }];
            setMessages(newMessages);
            setInput('');

            const response = await invokeAIAgent(
                "You are a financial expert AI assistant. Provide clear, accurate, and helpful responses to financial questions.",
                question
            );

            setMessages([...newMessages, { type: 'ai', content: response }]);
            scrollToBottom();
        } catch (error) {
            reportError(error);
        } finally {
            setIsLoading(false);
        }
    };

    const scrollToBottom = () => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" data-name="chat-modal">
            <div className="modal-content w-full max-w-2xl h-[600px] flex flex-col">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">AI Assistant</h2>
                    <button onClick={onClose} className="text-2xl">&times;</button>
                </div>

                <div 
                    ref={chatRef}
                    className="flex-1 overflow-y-auto mb-4"
                    data-name="chat-messages"
                >
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={`mb-4 p-3 rounded-lg ${
                                msg.type === 'user' 
                                    ? 'bg-blue-100 ml-auto max-w-[80%]' 
                                    : 'bg-gray-100 mr-auto max-w-[80%]'
                            }`}
                        >
                            {msg.content}
                        </div>
                    ))}
                    {isLoading && (
                        <div className="text-center">
                            <i className="fas fa-spinner fa-spin"></i>
                        </div>
                    )}
                </div>

                <form 
                    onSubmit={(e) => {
                        e.preventDefault();
                        if (input.trim()) handleQuestion(input);
                    }}
                    className="flex gap-2"
                    data-name="chat-input-form"
                >
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-1 p-2 border rounded"
                        placeholder="Type your question..."
                        data-name="chat-input"
                    />
                    <button 
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                        disabled={isLoading}
                        data-name="send-button"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}
