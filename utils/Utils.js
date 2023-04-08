// Function to parse MyClippings.txt file contents and extract highlights

export const parseHighlights = (file) => {
    const parsedPdf = file.toString().split('==========');
    const highlights = [];
    // Regular expressions for book title, author, and highlighted text
    const bookTitleRegex = /(.*)\((.*)\)/;
    const authorRegex = /by (.*)/;
    const highlightRegex = /- Your Highlight on page (\d+) \| Location (\d+)-\n(.*)\n\|{3}/;

    // Split the text into lines
    const lines = text.split('\n');

    // Loop through the lines
    for(let i = 0; i < lines.length; i++) {
        // Check if the line contains the book title
        if(bookTitleRegex.test(lines[i])) {
            // Extract the book title and author
            const bookTitle = lines[i].match(bookTitleRegex)[1];
            const author = lines[i].match(authorRegex)[1];

            // Check if the line contains the highlighted text
            if(highlightRegex.test(lines[i + 1])) {
                // Extract the highlighted text
                const highlight = lines[i + 1].match(highlightRegex)[3];

                // Add the highlight to the highlights array
                highlights.push({
                    bookTitle,
                    author,
                    highlight
                });
            }
        }
    }
    return highlights;
};