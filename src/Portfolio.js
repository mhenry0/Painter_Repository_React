import React, { useState } from 'react';
import './Portfolio.css'; // Include the CSS for the zoom effect and styling

const Portfolio = () => {
  // State to store the image source for the modal
  const [currentImage, setCurrentImage] = useState(null);

  // Open the modal with the clicked image
  const openModal = (imageSrc) => {
    setCurrentImage(imageSrc);
  };

  // Close the modal
  const closeModal = () => {
    setCurrentImage(null);
  };

  // Prevent right-click on the image
  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent the default context menu (right-click)
  };

  return (
    <section id="portfolio" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Portfolio</h2>
        <div className="row g-4">
          {/* Artwork 1 */}
          <div className="col-md-4">
            <img
              src="/images/paintingbg.jpg"
              alt="Artwork 1"
              className="img-fluid"
              onClick={() => openModal('/images/paintingbg.jpg')}
              onContextMenu={handleContextMenu} // Disable right-click for this image
            />
            <div className="painting-info mt-3">
              <p><strong>Style of Painting:</strong> Abstract Expressionism</p>
              <p><strong>Price:</strong> $1,200</p>
            </div>
          </div>

          {/* Artwork 2 */}
          <div className="col-md-4">
            <img
              src="/images/paintingbg.jpg"
              alt="Artwork 2"
              className="img-fluid"
              onClick={() => openModal('/images/paintingbg.jpg')}
              onContextMenu={handleContextMenu} // Disable right-click for this image
            />
            <div className="painting-info mt-3">
              <p><strong>Style of Painting:</strong> Surrealism</p>
              <p><strong>Price:</strong> $1,500</p>
            </div>
          </div>

          {/* Artwork 3 */}
          <div className="col-md-4">
            <img
              src="/images/paintingbg.jpg"
              alt="Artwork 3"
              className="img-fluid"
              onClick={() => openModal('/images/paintingbg.jpg')}
              onContextMenu={handleContextMenu} // Disable right-click for this image
            />
            <div className="painting-info mt-3">
              <p><strong>Style of Painting:</strong> Impressionism</p>
              <p><strong>Price:</strong> $950</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for full-screen image */}
      {currentImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={currentImage} alt="Full Screen" className="img-fluid" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
