import { PlaceInformation } from '../!interfaces/PlaceInformation';
import { PlaceInfoContent } from '../!interfaces/PlaceInfoContent';

function tempContent() :Array<PlaceInfoContent> {
    return [
        {
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi ea, placeat et, impedit provident quidem accusantium atque error vero sint fuga totam ullam iste assumenda tenetur! Similique ratione omnis nemo cumque ducimus, ea iusto dolorem error nam quisquam voluptatem, fugiat quia aspernatur ab! Maxime tempora ipsam dolorem error impedit!',
        },
        {
            title: 'This is the title of the content',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi ea, placeat et, impedit provident quidem accusantium atque error vero sint fuga totam ullam iste assumenda tenetur! Similique ratione omnis nemo cumque ducimus, ea iusto dolorem error nam quisquam voluptatem, fugiat quia aspernatur ab! Maxime tempora ipsam dolorem error impedit!',
            image: require('../../assets/santarosa/arch.png')
        },
        {
            title: 'This is the title of the content',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi ea, placeat et, impedit provident quidem accusantium atque error vero sint fuga totam ullam iste assumenda tenetur! Similique ratione omnis nemo cumque ducimus, ea iusto dolorem error nam quisquam voluptatem, fugiat quia aspernatur ab! Maxime tempora ipsam dolorem error impedit!',
        },
    ]
}

const allplaces :Array<PlaceInformation> = [
    {
        name: 'Santa Rosa City Proper',
        description: 'Santa Rosa Bayan. It has a park, museum, market, school and more.',
        address: '708 Rizal Blvd, Santa Rosa, Laguna',
        type:   'spot',
        longitude: 121.112111,
        latitude:  14.314083,
        streetviewlink: 'https://www.instantstreetview.com/@14.31415,121.112388,263.16h,-8.12p,0z,Y7IyeToX30rPA016e1Rj9Q',
        getImage: () => { return require('../../assets/santarosa/arch.png') },
        getIcon: () => { return require('../../assets/santarosa/map icon/plaza.jpg') },
        getDescriptipn: tempContent
    },
];
export default allplaces;