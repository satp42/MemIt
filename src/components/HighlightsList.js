import React from 'react';

const HighlightsList = ({ highlights }) => {
    const sortedHighlights = highlights.sort((a, b) => {
        if(a.bookTitle < b.bookTitle) {
            return -1;
        }
        if(a.bookTitle > b.bookTitle) {
            return 1;
        }
        return 0;
    });
    return (
        <div>
            {highlights.map((highlight, index) => (
                <div key={index}>
                    <h3>{highlight.bookTitle}</h3>
                    <p>{highlight.author}</p>
                    <p>{highlight.highlight}</p>
                </div>
            ))}
        </div>
    );
};

export default HighlightsList;