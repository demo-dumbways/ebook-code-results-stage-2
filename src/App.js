function App() {
  function Greeting() {
    return alert('good morning everyone have a nice day');
  }

  return (
    <div>
      <p>If you press Click Here then an alert will appear</p>
      <button onClick={() => alert('Hello full-stack bootcamp participants')}>
        Click Here
      </button>

      <p>If you press Greeting then an alert will appear</p>
      <button onClick={Greeting}>Greeting</button>
    </div>
  );
}

export default App;
