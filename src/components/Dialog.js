function Dialog( {onClose} ) {

  return (
    <div className="dialog flex column gap-20">
      <div className="dialog-content flex column gap-10">
        <h3>🎉 Your feedback has been sent 🎉</h3>
        <div>
          <p>Thank you!</p>
          <p>We'll share it with our team and use it to improve our customer service.</p>
        </div>    
      </div>
      <button onClick={onClose}>close dialog</button>
    </div>
  )
}

export default Dialog;