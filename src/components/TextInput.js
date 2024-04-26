import React from 'react';

function TextInput({ value, onChange }) {
    return (
        <textarea
            className="w-full h-64 p-2 border rounded shadow"
            value={value}
            onChange={onChange}
            placeholder="Paste your article here..."
        />
    );
}

export default TextInput;
