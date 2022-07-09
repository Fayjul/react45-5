import logo from './logo.svg';
import './App.css';
import Article from './components/Article';
import Mobile from './components/Mobile';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <Todo></Todo>
      <Mobile></Mobile>
      <Article heading="Lorem" auther="Fayjul"></Article>
      <Article heading="Baba" auther="Adib"></Article>
      <Article heading="Lorem" auther="Fayjul"></Article>
    </div>
  );
}

export default App;
