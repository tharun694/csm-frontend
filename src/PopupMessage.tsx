import './PopupMessage.css';

type PopupMessageProps = {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
};

function PopupMessage({ message, type, onClose }: PopupMessageProps) {
  const title = type === 'success' ? 'Success' : 'Something went wrong';

  return (
    <div className="popup-message-backdrop">
      <section
        className={`popup-message popup-message--${type}`}
        role={type === 'error' ? 'alert' : 'status'}
        aria-live={type === 'error' ? 'assertive' : 'polite'}
        aria-labelledby="popup-message-title"
      >
        <div className="popup-message__content">
          <h2 id="popup-message-title">{title}</h2>
          <p>{message}</p>
        </div>
        <button
          className="popup-message__close"
          type="button"
          onClick={onClose}
          aria-label="Close message"
        >
          ×
        </button>
        <button
          className="popup-message__action"
          type="button"
          onClick={onClose}
        >
          OK
        </button>
      </section>
    </div>
  );
}

export default PopupMessage;
