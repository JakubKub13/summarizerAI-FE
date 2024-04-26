import React, { useState } from 'react';
import TextInput from './components/TextInput';
import SummaryDisplay from './components/SummaryDisplay';
import { summarizeArticle } from './services/api';

function App() {
    const [article, setArticle] = useState('');
    const [summary, setSummary] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const handleArticleChange = (event) => {
        setArticle(event.target.value);
    };

    const handleSummarize = async () => {
        if (!article.trim()) {
            alert("Cannot submit empty text field.");
            return;
        }

        setIsLoading(true);
        try {
            const data = await summarizeArticle(article);
            setSummary(data.summary);
            setError('');
        } catch (err) {
            setError('Failed to summarize the article: ' + err.message);
            setSummary('');
        }
        setIsLoading(false);
    };

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-xl">
                <div className="mb-16">
                    <h1 className="text-5xl font-bold text-blue-800 mb-6 text-center">Article Summarizer</h1>
                </div>
                    <TextInput value={article} onChange={handleArticleChange} />
                <div className="flex justify-center my-8 mb-20">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleSummarize}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Loading...' : 'Summarize'}
                    </button>
                </div>

                {/* Add margin-top to the div that wraps SummaryDisplay */}
                <div className="mt-8">
                    <SummaryDisplay summary={summary} error={error} />
                </div>
            </div>
        </div>
    );
}

export default App;
