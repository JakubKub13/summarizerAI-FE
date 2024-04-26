import React from 'react';

function SummaryDisplay({ summary, error }) {
    return (
        <div>
            <h2 className="text-3xl font-bold mb-4">Summary</h2>
            {summary && <p className="bg-white p-4 rounded shadow">{summary}</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!summary && !error && <p>No summary available. Try summarizing an article.</p>}
        </div>
    );
}

export default SummaryDisplay;
