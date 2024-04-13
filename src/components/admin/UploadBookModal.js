import React, { useState } from 'react';
import { Modal, TextField, Button } from '@mui/material';

const UploadBookModal = ({ isOpen, closeModal, uploadBook }) => {
  const [formData, setFormData] = useState({
    name: '',
    author: '',
    description: '',
    genre: '',
    publicationDate: '',
    isbnNumber: '',
    bookFormat: '',
    imageUrl: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, imageUrl: URL.createObjectURL(file) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadBook(formData);
  };

  return (
    <Modal open={isOpen} onClose={closeModal}>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center">
        <div className="relative max-w-lg w-full mx-auto max-h-screen">
          <div className="bg-white shadow-md rounded-lg p-6 max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-4">Upload Book</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <TextField label="Name" name="name" value={formData.name} onChange={handleInputChange} required fullWidth />
              </div>
              <div>
                <TextField label="Author" name="author" value={formData.author} onChange={handleInputChange} required fullWidth />
              </div>
              <div>
                <TextField label="Description" name="description" value={formData.description} onChange={handleInputChange} required fullWidth multiline />
              </div>
              <div>
                <TextField label="Genre" name="genre" value={formData.genre} onChange={handleInputChange} required fullWidth />
              </div>
              <div>
                <TextField label="Publication Date" name="publicationDate" value={formData.publicationDate} onChange={handleInputChange} required fullWidth />
              </div>
              <div>
                <TextField label="ISBN Number" name="isbnNumber" value={formData.isbnNumber} onChange={handleInputChange} required fullWidth />
              </div>
              <div>
                <TextField label="Book Format" name="bookFormat" value={formData.bookFormat} onChange={handleInputChange} required fullWidth />
              </div>
              <div>
                <input type="file" accept="image/*" onChange={handleFileChange} required />
              </div>
              <div className="flex justify-end">
                <Button variant="outlined" onClick={closeModal} className="mr-2">Cancel</Button>
                <Button variant="contained" type="submit">Upload</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default UploadBookModal;
