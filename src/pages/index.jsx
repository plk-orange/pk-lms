import News from './News'
import Venues from './Venues'
import Scores from './Scores'
import Home from './Home'
import Calendar from './Calendar'
import Rules from './Rules'
import { PlayerTemplate, VenueTemplate, TeamTemplate } from './templates'

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
        path: 'team/:id',
        element: <TeamTemplate />,
    },
    {
        path: 'player/:id',
        element: <PlayerTemplate />,
    },
    {
        path: 'scores',
        element: <Scores />,
    },
    {
        path: 'venues',
        element: <Venues />,
        children: [
            {
                path: ':venueId',
                element: <VenueTemplate />,
            },
        ],
    },
    {
        path: 'rules',
        element: <Rules />,
    },
]

export default routies
