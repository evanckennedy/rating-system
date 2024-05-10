import Dialog from "./components/Dialog";
import React, { useState } from 'react';

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  }

  return (
    <>
      <main>
        <button className="open-button" onClick={() => setIsDialogOpen(true)}>open dialog</button>
        {isDialogOpen && <Dialog onClose={handleCloseDialog} />}
      </main>
      
    </>
  );
}

export default App;
