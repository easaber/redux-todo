import './App.css';
import TodoComponent from './components/TodoComponent';
import { Provider } from 'react-redux'
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>Todo List</h2>
        <TodoComponent />
      </div>
    </Provider>
  );
}

export default App;
