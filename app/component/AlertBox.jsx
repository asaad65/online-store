
export default function AlertBox({ message, onClose }) {
  return (
    <div style={styles.overlay}>
      <div style={styles.box}>
        <h3 style={styles.title}>{message}</h3>
        <button style={styles.button} onClick={onClose}>OK</button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100vw', height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 9999, direction: 'rtl'
  },
  box: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
    maxWidth: '300px'
  },
  title: {
    marginBottom: '20px',
    fontSize: '18px',
    color: '#333'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#ff9900ff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer'
  }
};