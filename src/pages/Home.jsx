import Sidebar from '../components/Sidebar'
import Task from '../components/Task'

import './Home.scss'

const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <Task />
    </div>
  )
}

export default Home
