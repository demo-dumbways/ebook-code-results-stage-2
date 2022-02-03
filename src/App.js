function App() {
  function getMajor() {
    return ' Full-Stack';
  }

  const companyName = 'Dumbways.id';

  return (
    <div>
      <p>
        Welcome To {companyName} Class {getMajor()}
      </p>
    </div>
  );
}

export default App;
