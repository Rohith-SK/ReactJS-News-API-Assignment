import { BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainPage from './Components/Main Page/MainPage'
import RegisterPage from './Components/Register Page/RegisterPage';
import NewsInfo from './Components/News Info Page/NewsInfo';
import NewsDetails from './Components/News Details Page/NewsDetails'
import TitleInfo from './Components/Title Info Page/TitleInfo';
import TitleInfoDetails from './Components/Title Info Details Page/TitleInfoDetails';
import RangeTitle from './Components/Range Title Page/RangeTitle'
import RangeTitleDetails from './Components/Range Title Details Page/RangeTitleDetails';
import About from './Components/Pages/About/About';
import Team from './Components/Pages/Team/Team';
import Works from './Components/Pages/Works/Works';




function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/registerpage' element={<RegisterPage />} />
          <Route path='/newsinfo' element={<NewsInfo />} />
          <Route path='/titleinfo' element={<TitleInfo />} />
          <Route path='/newsdetails' element={<NewsDetails />} />
          <Route path='/titleinfodetails' element={<TitleInfoDetails />} />
          <Route path='/rangetitle' element={<RangeTitle />} />
          <Route path='/rangetitledetails' element={<RangeTitleDetails />} />
          <Route path='/about' element={<About />} />
          <Route path='/teammembers' element={<Team />} />
          <Route path='/works' element={<Works />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App