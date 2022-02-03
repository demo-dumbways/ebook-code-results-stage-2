import { useState } from 'react';

function PrivatePage(props) {
  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={props.logout}>Logout</button>
    </div>
  );
}

function GuestPage(props) {
  return (
    <div>
      <h1>Please Sign</h1>
      <button onClick={props.login}>Login</button>
    </div>
  );
}

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <div>
      {isLoggedin ? (
        <PrivatePage logout={() => setIsLoggedin(!isLoggedin)} />
      ) : (
        <GuestPage login={() => setIsLoggedin(!isLoggedin)} />
      )}
    </div>
  );
}

export default App;
