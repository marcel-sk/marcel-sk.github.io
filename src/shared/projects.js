import ElecLibComponent from '../components/ElecLib.js';

const PROJECTS =
    [
        {
            name: 'Elec-Lib',
            description: 'This is a python library to solve certain recurrent problems I have faced when sizing off-grid electrical systems...',
            link: 'www.github.com/marcel-sk/eleclib',
            component: <ElecLibComponent/>
        },
        {
            name: 'ML Climbing',
            description: 'This is a  project I am starting using my new understanding of Machine Learning and specifically Sequence Models. The idea is to gather data regarding rock climbing holds and routes and teach a system to create its own routes given a specified difficulty',
            link: null,
            component: null
        },
        {
            name: 'Web Showcase',
            description: 'The project you are currently viewing! Trying to show off some of my front-end knowledge. May not be pretty yet, but I think it is pretty good given the time constaints!',
            link: '/about',
            component: null
        }

    ]

export default PROJECTS;