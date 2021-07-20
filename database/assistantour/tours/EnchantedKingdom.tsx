import { GalaSelfGuidedTour } from '../../!interfaces/GalaSelfGuidedTour';


const TEMP_VOICE = require('../../../assets/speech/sample.mp3');

const EnchantedKindom :GalaSelfGuidedTour = {
    name:               'Enchanted Kingdom',
    description:        'Visit the theme park*',
    longdescription:    'The Enchanted Kingdom was opened in 1995 and since then, it becomes the most visited tourist spot in Laguna. It is a fun-filled experience to visit the theme park and you should do that. There tag line \"The magic stays with you\" is true. Due to the Covid-19 restriction, the park may be closed. Visit https://www.enchantedkingdom.ph/ to see if the park is open or not.',
    destinations: [
        {
            from: 'user',
            to: {
                lat: 14.281996, lng: 121.097719,
                name: 'Enchanted Kindom',
                commute: 'Take a ride to "Complex" or a bus, then find the tricle terminal (close to Target Mall) and ride a tricle. Ask the driver to Enchangted Kingdom. The fare rate may reach P100',
            }
        }
    ],
    pointOfInterests: [
        { lat: 14.282312, lng: 121.096497, name: 'Grand Carousel',
            description: 'The Grand Carousel is the first attraction that you will see. There has a mascot here that resides in this area. Why not take a selfie?',
            voiceasset: () => { return TEMP_VOICE }
        },
        { lat: 14.282474, lng: 121.095424, name: 'Brooklyn ',
            description: 'The Brookly resembles the Brooklyn in New York City, USA. There is only one attraction here, the Rialto 4D - a fun thrilled watching a movie.',
            voiceasset: () => { return TEMP_VOICE }
        },
        { lat: 14.283177, lng: 121.096136, name: 'EKStreme Drop Tower ',
            description: 'EKStreme Drop Tower will drop you from a 40-meter height building with a speed of 76 Kph! Be sure your heart is capable of such extreme speed!',
            voiceasset: () => { return TEMP_VOICE }
        },
        { lat: 14.281617, lng: 121.096367, name: 'Disk-O-Magic',
            description: 'Disk-O-Magic is a breathtaking ride that puts the visitor in a spinning and rocking motion!',
            voiceasset: () => { return TEMP_VOICE }
        },
        { lat: 14.281927, lng: 121.095970, name: 'Rio Grande Rapids',
            description: 'The Rio Grande is a ride for up to 8 people where everyone will ride to a boat. Prepare for getting wet on this ride. It is best to keep gadgets sealed in a plastic container to prevent them from getting wet.',
            voiceasset: () => { return TEMP_VOICE }
        },
        { lat: 14.282869, lng: 121.094872, name: 'Anchors Away',
            description: 'A classic ride that puts the visitor into swinging motion in a boat, reaching an angle of about 70 degrees. ',
            voiceasset: () => { return TEMP_VOICE }
        },
        { lat: 14.281820, lng: 121.094222, name: 'Space Shuttle',
            description: 'The Space Shuttle ride is one of the most popular rides in the Enchanted Kingdom. Why not try this ride for the experience.',
            voiceasset: () => { return TEMP_VOICE }
        },
        { lat: 14.282642, lng: 121.093968, name: 'Jungle Rapids',
            description: 'Jungle Rapids / Jungle Log is one of the extreme rides. Caution has to be taken when riding this ride as you may get wet, and the fall speed may put a lot of pressure on your heart.',
            voiceasset: () => { return TEMP_VOICE }
        },
        { lat: 14.282402, lng: 121.094941, name: 'Wheel of Faith (Ferris Wheel)',
            description: 'Wheel of Faith which is basically a Ferris Wheel - the most clamming ride. Here, you see Santa Rosa City, Laguna Lake, and others when you are at the top. Why not take pictures while at the top.',
            voiceasset: () => { return TEMP_VOICE }
        },
    ],
}
export default EnchantedKindom;
