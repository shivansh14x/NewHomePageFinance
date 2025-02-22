async function chatAgent(question, chatHistory = []) {
    try {
        const systemPrompt = `You are a financial expert AI assistant. 
            Provide clear, accurate, and helpful responses to financial questions.
            
            Chat history:
            ${JSON.stringify(chatHistory)}`;
            
        return await invokeAIAgent(systemPrompt, question);
    } catch (error) {
        reportError(error);
        throw error;
    }
}
