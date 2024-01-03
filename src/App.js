
import './App.css';
import { AuthProvider } from './context/AuthProvider';
import HomePage from './pages/Homepage';
import RoutesFile from './RoutesFile';


function App() {
  return (
    <>
    <AuthProvider>
    <RoutesFile />
    </AuthProvider>
    </>
  )
}

export default App;
