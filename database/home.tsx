/*
    Defines the appearance of the Hometab

    This is file is not optional - which means that it should appear when remaking the 
    app for a different cities.
*/
import { HomeTabInterface } from './!interfaces/HomeTab';

export const HomeTabData :HomeTabInterface = {
    externalLinkText: 'Visits the official FB and website of Santa Rosa, E.K and more!',
    cityMapText: 'View an online map and explore virtually with google street view.',
    aboutcity: 'Learn more about Santa Rosa\'s history, heritage sites, and more.',
    cityCovidNews: 'Latest news about Covid-19 cases in Santa Rosa.',

    headingSlides: [
        {
            image: require('../assets/santarosa/places/balibago.jpg'),
            place: 'Brgy. Balibago Complex',
          },
          {
            image:  require('../assets/santarosa/places/arch.jpg'),
            place: 'Santa Rosa Arch, Market Area',
            isWhite: true,
          },
          {
            image:  require('../assets/santarosa/places/Chair of St. Peter Parish.jpg'),
            place: 'Chair of St. Peter Parish church, Balibago',
            isWhite: true,
          },
          {
            image:  require('../assets/santarosa/places/plaza.jpg'),
            place: 'Sta. Rosa Plaza, Bayan',
          },
          {
            image:  require('../assets/santarosa/places/Santa Rosa de Lima.jpg'),
            place: 'Sta. Rosa de Lima Parish church',
          },
    ],
    offlineStories: [
      {
        title: 'The 17th City Hood Anniversary',
        date: 'July 2021',
        text: 'The Lion City of the South celebrates its 17th anniversary of the declaration of cityhood on July 10.'
      },
      {
        title: 'The Tiongco Brothers',
        date: 'July 2021',
        text: 'The Tiongco Brothers (Fernando, Emilio, and Arthuro) are well-known pop artists in the \'50s to \'70s.'
      },
      {
        title: 'Enchanted Kingdom',
        date: 'July 2021',
        text: 'Read the latest news about the Enchanted Kingdom (EK) - the most visited tourist spot in Laguna.'
      },
    ]
}