import React from 'react';

const ImageUpload = ({ onUpload }) => {
  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      onUpload(e.target.files[0]);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default ImageUpload;
