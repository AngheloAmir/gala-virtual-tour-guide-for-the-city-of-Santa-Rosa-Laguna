import { GuideContent } from '../!interfaces/GuideContent';

const guide :GuideContent = {
    title:  'Jeepney Routes',
    date:   'June 2021',
    headerImage:    require('../../assets/santarosa/guides/jeepneymap.jpg'),
    contents:       [
        {
            paragraph: 'The jeepney routes will take the path (in the redline) as shown in the map above.\nThe jeepney sign:\nSM will lead to SM Mall.\n\nSan Pedro/Landayan will take a path of National Highway (which it will pass by to SM Mall and Robinson Mall) or if the jeep is taking the road to Santa Rosa Bayan, then it will pass by to Barangay Tagapo then to Binan.\n\nIf Calamba/Crossing will lead to Calamba. It always takes a path to National Highway.\n\nSanta Rosa Bayan will of course lead to Santa Rosa Plaza whatever place you ride it. \n\nMap image is from © OpenStreetMap\nhttps://www.openstreetmap.org',
        },
    ]
};
export default guide;