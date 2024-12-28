import React from 'react';

const FloatingWhatsAppButton = () => {
  const whatsappNumber = '+1234567890'; // Reemplaza con tu número de WhatsApp

  return (
    <div>
      {/* Botón flotante de WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.button}
      >
        <i className="fab fa-whatsapp" style={styles.icon}></i>
      </a>
    </div>
  );
};

// Estilos en línea para el botón flotante
const styles = {
  button: {
    position: 'fixed',
    bottom: '20px', // Ajusta la distancia desde el borde inferior
    right: '20px', // Ajusta la distancia desde el borde derecho
    backgroundColor: '#25D366', // Color verde de WhatsApp
    borderRadius: '100%',
    padding: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    zIndex: 1000,
    cursor: 'pointer',
  },
  icon: {
    color: 'white',
    fontSize: '35px', // Tamaño del ícono
  },
};

export default FloatingWhatsAppButton;
