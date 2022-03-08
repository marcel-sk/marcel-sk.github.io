import ElecLibComponent from '../components/ElecLib.js';

const PROJECTS =
    [
        {
            name: 'Elec-Lib',
            description: 'This is a python library to solve certain recurrent problems I have faced when sizing off-grid electrical systems. So far only one module exists- the Household module. This module allows us to define various parameters of our household and appliances in order to determine the maximum current draw and total power consumption (both important for sizing an energy system). Further development will be made to generate cost and component lists for solar, wind, and small-scale hydro systems that suit the specified household.',
            link: 'www.github.com/marcel-sk/eleclib',
            component: <ElecLibComponent/>
        },
        {
            name: 'ML Climbing',
            description: 'This is a  project I am starting, using my new understanding of Machine Learning and specifically Sequence Models. The idea is to gather data regarding rock climbing holds and routes and teach a system to create its own routes given a specified difficulty. Thus far, I am still in the process of trying to gather data. Some of this data is coming from the MoonBoard app which stores a large data set of routes for a given hold setup. Gathering their data will require scraping the mobile app as the website does not contain the data and there is no publicly available info on their API.',
            link: null,
            component: null
        },
        {
            name: 'Web Showcase',
            description: 'The project you are currently viewing! It may not be much yet, but I will continue to refine it, and add a backend which will allow a connection to my other projects.',
            link: '/about',
            component: null
        }

    ]

export default PROJECTS;