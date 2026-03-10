import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar';
import SettingsPage from './pages/SettingsPage';

function App() {
  const [page, setPage] = useState('settings');

  let content;
  if (page === 'settings') {
    content = <SettingsPage />;
  } else {
    content = <div>Page not found</div>;
  }

  return (
    <div className="App">
      <Navbar onSelect={setPage} current={page} />
      {content}
    </div>
  );
}

export default App;
