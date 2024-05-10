import Dialog from "./components/Dialog";
import React, { useState } from 'react';

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  }

  return (
    <> 
      <button onClick={() => setIsDialogOpen(true)}>open dialog</button>
    </>
  );
}

export default App;
