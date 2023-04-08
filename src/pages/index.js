import React from 'react';
import FileUploader from '../components/FileUploader';
import HighlightsList from '../components/HighlightsList';

const IndexPage = () => {
  const handleFileUpload = (file) => {
    // Read file contents
    const fileReader = new FileReader();
    fileReader.onload = async (e) => {
      const fileContents = e.target.result;

      // Parse highlights from file contents
      const highlights = parseHighlights(fileContents);

      // Do something with the extracted highlights data
      console.log(highlights);
    };
    fileReader.readAsText(file);
  };
  return (
    <div>
      <h1>MemIt</h1>
      <FileUploader onFileUpload={handleFileUpload} />
    </div>
  )
};

export default IndexPage;
