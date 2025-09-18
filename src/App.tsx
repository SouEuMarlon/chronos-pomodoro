import './styles/theme.css';
import './styles/global.css';
// import { AboutPomodoro } from './pages/AboutPomodoro';
import { Home } from './pages/Home';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
// import { NotFound } from './pages/NotFound';

function App() {
  return (
    <>
      <TaskContextProvider>
        <Home />
      </TaskContextProvider>
      {/* <AboutPomodoro /> */}
    </>
  );
}

export default App;
