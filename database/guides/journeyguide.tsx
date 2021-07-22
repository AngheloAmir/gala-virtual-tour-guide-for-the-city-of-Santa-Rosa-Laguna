import { GuideContent } from '../!interfaces/GuideContent';

const guide :GuideContent = {
    title: 'Journey Guide in Santa Rosa',
    date:   'June 2021',
    headerImage:    require('../../assets/santarosa/guides/journey.jpg'),
    contents:       [
        {
            paragraph: 'Visiting Santa Rosa City can be fun. You may go to the Enchanted Kingdom*, the most visited tourist spot in Laguna. You may take a walk in the Nuvalli or have a glimpse of the past in the Santa Rosa city proper (Santa Rosa Bayan). However, the presence of a global scale pandemic caused by a coronavirus has made traveling restricted, but still, traveling is possible. Luckily, our program will provide you a assitant tour that MAY HELP your journey that accessible in Assistant Tour. Let us start!',
        },
        {
            type: 'accordionList',
            data: [
                {
                    headingText: 'Starting from SLEX',
                    paragraph: 'If you have your car, you would normally enter Santa Rosa City thru SLEX. The image above shows the map of the SLEX entrance and exit in Santa Rosa. Exiting SLEX and you will reach Felix Road. With that, you will be faced with two paths, going north and you will close to Enchanted Kindom while the other path (going south of Felix Road) will lead to Nuvalli Park and Tagaytay. Please use Assitant Tour to find out your path to the place you want to visit. However, the traffic on this road can be heavy especially during rush hour.',
                    image: require('../../assets/santarosa/guides/slexmap.jpg'),
                    links: { link: 'https://www.openstreetmap.org/copyright', text: '© OpenStreetMap' },
                },
                {
                    headingText: 'Starting from Balibago',
                    paragraph: 'If you commute (thru riding a bus), you would normally drop off at the Barangay Balibago Complex Santa Rosa. The image above shows the map. Balibago Complex is one of the busiest and crowded places in Santa Rosa, because of Bus Terminals, Malls (such as Target Mall), Grocery Stores, Tiangge, Restaurant, Fast Food Chain and more. Going to Enchanted Kindom will take only a single ride of tricycle (see Assistant Tour) and going to Santa Rosa City Proper (Santa Rosa Bayan) takes a single ride of a Jeep (as of now, the fare cost is P10).',
                    image: require('../../assets/santarosa/guides/balibagomap.jpg'),
                    links: { link: 'https://www.openstreetmap.org/copyright', text: '© OpenStreetMap' },
                },
                {
                    headingText: 'To Enchanted Kingdom',
                    paragraph: 'Most visitors of Santa Rosa City have the goal to visit the Enchanted Kingdom. However, the presence of the coronavirus and quarantine protocols can make the theme park closed. Please visit the link first. \n\nFrom SLEX by car, drive until you reach Felix Road. Then, drive the car to the northern part of the road until you see Walter Mart. There is a street to it and enter the street. Then, drive into that street straight until you have reached the Enchanted Kingdom entrance.\n\nFrom Balibago Complex (bus terminal), find the tricycle terminal (close to Target Mall) and then take a ride. Ask the driver to take you to the Enchanted Kingdom. The fare may reach above P100. Note, there is also a tricycle terminal outside the Enchanted Kingdom, or take a walk back to Walter Mart.\n',
                    link: 'https://www.enchantedkingdom.ph/',
                    linkText: 'Visit enchantedkindom.ph',
                },
                {
                    headingText: 'To Nuvali/Solenad',
                    paragraph: 'Nuvali Park is an eco-park developed by Ayala Lands. According to www.nuvali.ph, "NUVALI is the country’s first and largest eco-city development, built on the principles of sustainable design. A project of Ayala Land, NUVALI is a 2,290-hectare mixed-use development that straddles the cities of Sta. Rosa, Cabuyao and Calamba in Laguna".\n\nFrom SLEX or the Enchanted Kingdom by car, drive to the southern path of Felix Reyes road until you reach the park. It may take some time to travel and the area is noticeable because of its green environment.\n\nFrom balibago complex (bus terminal), find the tricycle terminal ask the driver to drop you at Nuvali. The fare may reach above P150.'
                },
                {
                    headingText: 'To City Proper',
                    paragraph: 'Santa Rosa City proper (Santa Rosa bayan) is a place you could still see a glimpse of the past. The City Plaza is dedicated to Dr. Jose Rizal, World War 2 veterans, and local events. On the left side of the park is the Museum of Santa Rosa. It was a former municipal building that was used during Spanish colonization. Behind the plaza is the Sta. Rosa Delima Parish church (Diocese of San Pablo) and was built in the year 1792. Santa Rosa Market, municipal hall, NBI building, a historic Santa Rosa Archway, ancestral houses, and more.\n\nIf you are in Enchanted Kindom, SLEX entrance, or in Nuvali/Solenad, the first thing to do is to reach Balibago Complex (Bus Terminal). Then, head outside the Complex (note of the one-way road) or by riding a jeepney heading "Santa Rosa Bayan" or "Tagapo". Tagapo is a barangay in Santa Rosa close to city proper (bayan). The fare is only P10.',
                },
                {
                    headingText: 'To SM Malls',
                    paragraph: 'SM Mall is the biggest malls in Santa Rosa. It has a neighboring mall, the Robinso Mall which may take some 20 minutes walk. First, head over to Balibago Complex (bus terminal). Unless you are in Santa Bayan, it can be reached by simply riding a jeep heading SM. Then, drive to the northern part of the National Highway (leading to Binan City).',
                },
            ]
        },
    ]
};
export default guide;