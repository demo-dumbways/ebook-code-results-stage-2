//Import Header Component
import Header from './components/header';

// Content Component
function Content() {
  return (
    <div>
      <h1>This Is A Content</h1>
      <button>Click Me</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}

export default App;
