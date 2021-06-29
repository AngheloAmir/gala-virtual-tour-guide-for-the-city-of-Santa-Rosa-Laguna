import { PlaceInformationInterface } from '../!PlaceInfoInterface';

export default function PlaceInfo() :PlaceInformationInterface {
    return {
        name:           'Traffic Advisory',
        address:        'Lorem, ipsum dolor sit amet',
        latitude:       123,
        longitude:      123,
        headerimage:    undefined,
        website:        'https://jjjjjjjjjj',
        contents: [
            {
                headingText: 'aaaaa', paragraph: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae aspernatur dolor ex, beatae et dignissimos sit deleniti corporis? Pariatur, ullam tempora exercitationem molestias repellendus illo fugit, aliquid error, voluptates consequuntur soluta! Animi enim nostrum eum eaque aut, dolor autem. Omnis ea magni explicabo enim libero accusantium laborum autem numquam asperiores.',
            },
            {
                headingText: 'adasdadaasas', paragraph: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae aspernatur dolor ex, beatae et dignissimos sit deleniti corporis? Pariatur, ullam tempora exercitationem molestias repellendus illo fugit, aliquid error, voluptates consequuntur soluta! Animi enim nostrum eum eaque aut, dolor autem. Omnis ea magni explicabo enim libero accusantium laborum autem numquam asperiores.',
            }
        ],
    }
};