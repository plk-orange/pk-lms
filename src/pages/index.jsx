import News from './News';
import Venues from './Venues';
import Scores from './Scores';
import Home from './Home';
import Calendar from './Calendar';
import Rules from './Rules';

const routies = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'news',
    element: <News />,
  },
  {
    path: 'calendar',
    element: <Calendar />,
  },
  {
    path: 'scores',
    element: <Scores />,
  },
  {
    path: 'venues',
    element: <Venues />,
  },
  {
    path: 'rules',
    element: <Rules />,
  },
];

export default routies;
