//Import List Components
import List from './components/List';

function App() {
  return (
    <div>
      <p>On the image element using the default props, namely src</p>
      <img src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1542354895/ulaqus4ev5ihhqkpbhuz.jpg" />

      <List data="BMW" />
      <List data="Mercedes-Benz" />
      <List data="Lamborghini" />
    </div>
  );
}

export default App;
