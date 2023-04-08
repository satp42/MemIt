// components/FileUploader.js

import React from 'react';

const FileUploader = ({ onFileUpload }) => {
    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        const fileContents = await file.text();
        const highlights = parseHighlights(fileContents);
        onFileUpload(file);
    };

    return (
        <div>
            <input type="file" accept=".txt" onChange={handleFileUpload} />
        </div>
    );
};

export default FileUploader;
