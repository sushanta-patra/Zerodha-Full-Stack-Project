import Dashboard from './Dashboard';
import './Home.css';
import Topbar from './Topbar';

function Home() {
  return (
    <div className="Home">
        <Topbar />
        <Dashboard />
    </div>
  );
}

export default Home;
