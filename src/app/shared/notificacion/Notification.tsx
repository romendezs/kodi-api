// src/shared/notificacion/Notification.tsx
import React from 'react';
import styles from './Notification.module.css'; // Asegúrate de que tienes estilos para la notificación

interface NotificationProps {
    message: string;
    onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, onClose }) => {
    return (
        <div className={styles.notification}>
            <p>{message}</p>
            <button onClick={onClose}>Cerrar</button>
        </div>
    );
};

export default Notification;