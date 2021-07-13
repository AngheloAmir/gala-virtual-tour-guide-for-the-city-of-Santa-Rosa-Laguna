import { GuideContent } from '../!interfaces/GuideContent';

const guide :GuideContent = {
    title:  'Visiting Guide in Santa Rosa City',
    date:   'June 2021',
    headerImage:    require('./assets/travelling to.jpg'),
    contents:       [
        {
            paragraph: 'As of this writing, Santa Rosa City is under General Community Quaritine with enhanced restriction. You may visit www.philippines.travel/safetrip to learn more about the current restriction.',
            link: 'https://www.philippines.travel/safetrip',
            linkText: 'Tap to visit philipines.travel'
        },
        {
            type: 'accordionList',
            data: [
                {
                    headingText: 'Basic',
                    paragraph: 'As per the minimum health standard presented by IATF, please wear a face mask and face shield all the time. The face shield must cover the whole face. Avoid crowded places as possible. However, it is likely unavoidable since many busy areas in Santa Rosa are crowded (ex. in the Balibago Complex, bus terminal). Ideally, you should get vaccinated first before visiting, also bring you evidence of being vacinated.',
                },
                {
                    headingText: 'Ages restriction',
                    paragraph: 'Only ages above 17 years old and less than 66 years old are allowed to roam the city. Pregnant and sick (like flu) are not allowed.',
                },
                {
                    headingText: 'Curfew',
                    paragraph: 'Curfew hours are between 10pm to 4am. If you are planning to stay in Santa Rosa for more than a day, please book or rent a room before the curfew.'
                },
                {
                    headingText: 'Establishments',
                    paragraph: 'Most establishments are open such as malls and hardware stores. Dine-in services are allowed only at 20% capacity while outdoor dining is allowed at 50% capacity. Before entering most establishments, you have to fill up a form where you write your information for the purpose of contact tracing.'
                },
                {
                    headingText: 'Outdoor activities',
                    paragraph: 'Outdoor activities and non-contact sport are allowed in Santa Rosa. Activities such as walking, badminton, biking, diving & swimming, equestrian, golf, jogging, range shooting, running, tennis, and skateboarding. However, a face mask and face shield should be wear at all the time.'
                },
                {
                    headingText: 'Outdoor attractions',
                    paragraph: 'Outdoor tourist attractions are allowed to operate at 30% capacity. However, indoor tourist attractions are closed for a moment. If you are planning to visit Enchanted Kindom, please book in the giving link. (They may be close so view the link).',
                    link: 'https://www.enchantedkingdom.ph/',
                    linkText: 'Visit enchantedkindom.ph',
                },
                {
                    headingText: 'One Way Roads',
                    paragraph: 'There are some one-way roads in Santa Rosa to be watched out for. One of the possible confusing one-way roads in Santa Rosa is in Barangay Balibago Complex (Bus terminals). The image above shows the road map. The Assistant Tour may help you in your journey.',
                    image: require('./assets/balibagoroadmap.jpg'),
                },
                {
                    headingText: 'Recomendation',
                    paragraph: 'If you live outside the NCR+ (which includes CALARZON), we recommend that you should avoid visiting. Also, avoid visiting the city on particular days of the month that are close to 15 or 30.  Because on these days, a new quarantine protocol will be implemented.'
                }
            ]
        },
    ]
};
export default guide;
