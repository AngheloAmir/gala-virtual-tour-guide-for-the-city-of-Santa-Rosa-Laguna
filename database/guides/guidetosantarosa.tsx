import { GuideContent } from '../!interfaces/GuideContent';

const guide :GuideContent = {
    title:  'Public transport to the Santa Rosa City',
    date:   'June 2021',
    headerImage: require('../../assets/santarosa/guides/balibago terminal.jpg'),
    contents:       [
        {
            paragraph:
            'Planning a trip to Santa Rosa City? Most commuter transport will drop you at the Balibago Complex terminal, as shown in the picture above. Here is the list of ways to visit Santa Rosa from different places.',
        },
        {
            type: 'accordionList',
            data: [
                {
                    headingText: 'Notice',
                    paragraph: 'As of writing, Santa Rosa City is under General Community Quarantine (GCQ) with enhanced restriction. Therefore, wearing a face mask and face shield is a must at all times. If your area (city/region) is under Modified Enhance Community Quaritine (MECQ), please avoid traveling. We recommend to you that you visit the philippines.travel to learn about the current travel restriction.',
                    link: 'https://www.philippines.travel/safetrip',
                    linkText: 'Tap to visit philipines.travel'
                },
                {
                    headingText: 'Batangas, Tanuan',
                    paragraph:  'There is a bus from Tanuan, Batangas that directly drops you to Balibago Santa Rosa. From Tanuan City, ride a Bus to Balibago (Santa Rosa). The fare cost may reach above P150 and may take 3hrs travel time.'
                },
                {
                    headingText: 'Coloocan',
                    paragraph: 'First, take a ride to Gil Puyat Station thru LRT-1. Then, ride a bus to Balibago (Santa Rosa). The fare cost may reach above P100 (from Gil Puyat) and may take 1hr and 30minutes travel time.'
                },
                {
                    headingText: 'Carmona, Cavite',
                    paragraph: 'Take a bus to Alabang Terminal (or Starmall Alabang) and take another bus to Santa Rosa - Balibago. The bus may drop you at Balibago Complex or Brgy. Tagapo. The fare may reach above P100 and may take 1hr travel time.',
                },
                {
                    headingText: 'Las Pinas',
                    paragraph: 'Take a bus to Alabang but drop off at the Manuela Metropolis Alabang. Then, take a bus to Santa Rosa Balibago passing SLEX. The fare may reach above P100 and may take about 1 hrs and 30 minutes travel time.'
                },
                {
                    headingText: 'Makati',
                    paragraph: 'Take an MRT or ride a bus to Ayala Bus Terminal. Then ride a bus to Balibago Santa Rosa or Laguna BelAir. The fare may reach above P120 and may take 1 hrs and minutes travel time.'
                },
                {
                    headingText: 'Manila',
                    paragraph: 'Take a ride to Lawton Ave./Pedro Gil. Then, ride a bus to Santa Rosa - Balibago. The fare may reach above P150 and may take 1hrs travel time.'
                },
                {
                    headingText: 'Muntinlupa',
                    paragraph: 'Take a ride to Manuela Metropolis Alabang (Metropolis Mall). Then ride a bus to Sta. Rosa - Balibago via SLEX. The fare cost may reach above P100 and may take 30 minutes of travel time.',
                },
                {
                    headingText: 'Paranaque',
                    paragraph: 'Getting into Santa Rosa City takes some steps and rides. Take a ride to Sucat (Sucat Dulo) then, ride a jeep to Alabang. Ask the driver to drop you at the Santa Rosa - Baliago bus terminal. The fare cost may reach P200 and may take up 2hrs of travel time.'
                },
                {
                    headingText: 'Pasay',
                    paragraph: 'Take a ride to Buendia Corner Taft Avenue by LRT-1 or bus. Then walk to reach Atrium Suites. From there, ride a bus to Sta. Rosa - Balibago. The fare may reach above P150 and may take 1hr and 30 minutes of travel time.'
                },
                {
                    headingText: 'Pasig',
                    paragraph: 'Take a bus to Ayala Bus Terminal, then ride another bus to Balibago Santa Rosa. The fare may reach above P120 and may take 1 hrs and minutes travel time.'
                },
                {
                    headingText: 'Quezon City',
                    paragraph: 'Take a ride to Cubao Bus Terminal. Then, ride another bus to Sta. Rosa - Balibago. The fare may reach above P80 and may take 1hr travel time.'
                },
                {
                    headingText: 'Tagaytay',
                    paragraph: 'Although Tagaytay city is close to Santa Rosa city, the bus will take some time to travel. Ride of a bus to Balibago. The fare may reach P180 and may take 1hr travel time.'
                },
                {
                    headingText: 'Taguig',
                    paragraph: 'Ride a bus to Ayala Terminal, then take a bus to Santa Rosa - Balibago. The fare may reach P150 and may take 1hr travel time.'
                },
        
                { 
                    headingText: 'Source Information',
                    paragraph: 'Visit www.transportroutesinstarosalaguna for more information. Disclaimer: the link is not affiliated with the developer of the application.',
                    link: 'https://transportroutesinstarosalaguna.wordpress.com/transport-routes/going-to-sta-rosa/',
                    linkText: 'Tap to visit'
                }
            ]
        },
    ]
};
export default guide;
