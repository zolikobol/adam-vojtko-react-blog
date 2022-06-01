import './App.css';
import Blog from './components/blog.component';
import {createMemoryHistory} from 'history';

function App() {
  const history = createMemoryHistory();
  return (
    <div className="App">
      <Blog></Blog>
    </div>
  );
}

export default App;
