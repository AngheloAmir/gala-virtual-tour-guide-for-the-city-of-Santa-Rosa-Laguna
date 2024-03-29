/*
    contains all of the assets available.
    This file is required because dynamic loading of assets is not possible,
    they must be preloaded before they can be used.

    This file should be the only tsx file in database folder
*/
export const AVATARICONS_MALE = [
    require('../assets/icons/male1.png'),
    require('../assets/icons/male2.png'),
    require('../assets/icons/male3.png'),
    require('../assets/icons/male4.png'),
];

export const AVATARICONS_FEMALE = [
    require('../assets/icons/female1.png'),
    require('../assets/icons/female2.png'),
    require('../assets/icons/female3.png'),
    require('../assets/icons/female4.png'),
];

const IMAGES = {
    "about.png":            require('../assets/app/about.png'),
    "arch.jpg":             require('../assets/santarosa/places/arch.jpg'),
    "balibago.jpg":         require('../assets/santarosa/places/balibago.jpg'),
    "basilo.jpg":           require('../assets/santarosa/places/basilo.jpg'),
    "casaarambulo.jpg":     require('../assets/santarosa/places/casaarambulo.jpg'),
    "casagonzalez.jpg":     require('../assets/santarosa/places/casagonzalez.jpg'),
    "casazalla.jpg":        require('../assets/santarosa/places/casazavalla.jpg'),
    "cuartel.jpg":          require('../assets/santarosa/places/cuartel.jpg'),
    "delimachurch.jpg":     require('../assets/santarosa/places/delima_church.jpg'),
    "enchanted.jpg":        require('../assets/santarosa/places/ek.jpg'),
    "museo.jpg":            require('../assets/santarosa/places/museo.jpg'),
    "plaza.jpg":            require('../assets/santarosa/places/plaza.jpg'),
    "stpeterchruch.jpg":    require('../assets/santarosa/places/saint_peter_church.jpg'),
    "tionco.jpg":           require('../assets/santarosa/places/tiongco.jpg'),
    "zavallahouse.jpg":     require('../assets/santarosa/places/zavallahouse.jpg'),
};

const GALATOURS = {
    "bisitaiglesia.json":   require('./assistantour/bisitaiglesia.json'),
    "glimpseofhistory.json":require('./assistantour/glimpseofhistory.json'),
    "enchantedkingdom.json":require('./assistantour/enchantedkingdom.json'),
    "paseonuvali.json":     require('./assistantour/paseonuvali.json'),
    "busterminal.json":     require('./assistantour/busterminal.json'),
    "test.json":            require('./assistantour/test.json'),
};

const GUIDESASSETS = {
    "fbicon.png":           require('../assets/icons/fbicon.png'),
    "tourguide.png":        require('../assets/icons/gala.png'),
};

const STORIES = {
    "aboutthecity.json":    require('./home/aboutthecity.json'),
};

const STORIESASSETS = {
    "santarosa.jpg":        require('../assets/santarosa/story/santarosa.jpg'),
    "delimastatue.jpg":     require('../assets/santarosa/story/delimastatue.jpg'),
};

const PLACESJSON = {
    "arambulohouse.json":   require('./places/Arambulo House.json'),
    "arch.json":            require('./places/Arch.json'),
    "casagonzalez.json":    require('./places/Casa Gonzalez.json'),
    "casazavalla.json":     require('./places/Casa Zavalla.json'),
    "cuartel.json":         require('./places/Cuartel de Santo Domingo.json'),
    "delimachurch.json":    require('./places/Santa Rosa De Lima Parish Church.json'),
    "gomezhouse.json":      require('./places/Former Gomez Residence.json'),
    "gonzalezstatue.json":  require('./places/Gonzalez Statue.json'),
    "museo.json":           require('./places/Museo ng Santa Rosa.json'),
    "placeEK.json":         require('./places/Enchanted Kingdom.json'),
    "placeNuvali.json":     require('./places/Nuvali.json'),
    "plaza.json":           require('./places/City Plaza.json'),
    "stpeterchruch.json":   require('./places/Chair of St. Peter Parish Church.json'),
    "tiongcohouse.json":    require('./places/Tiongco Ancestral House.json'),
    "zavallahouse.json":    require('./places/Zavalla House.json'),
};

const MARKERSJSON = {
    "belair.json":          require('./places/infomarker/belair.json'),
    "complex.json":         require('./places/infomarker/complex.json'),
    "complexentrance.json": require('./places/infomarker/complexentrance.json'),
    "ekstreetview.json":    require('./places/infomarker/ekstreetview.json'),
    "nuvalifish.json":      require('./places/infomarker/nuvalifish.json'),
    "nuvaligarden.json":    require('./places/infomarker/nuvaligarden.json'),
    "nuvalilake.json":      require('./places/infomarker/nuvalilake.json'),
    "paseooutlets.json":    require('./places/infomarker/paseooutlets.json'),
    "slexnorth.json":       require('./places/infomarker/slexnorth.json'),
    "slexsouth.json":       require('./places/infomarker/slexsouth.json'),
    "sm.json":              require('./places/infomarker/sm.json'),
    "starosabinan.json":    require('./places/infomarker/starosabinan.json'),
    "starosacabuyao.json":  require('./places/infomarker/starosacabuyao.json'), 
};

const MP3SPEECH = {
    "arch.mp3":             require('../assets/santarosa/speech/Arch.mp3'),
    "casagonzales.mp3":     require('../assets/santarosa/speech/CaseGonzalez.mp3'),
    "delimachurch.mp3":     require('../assets/santarosa/speech/DelimaParishChurch.mp3'),
    "gonzales.mp3":         require('../assets/santarosa/speech/GonzalezStatue.mp3'),
    "museo.mp3":            require('../assets/santarosa/speech/MuseongSantaRosa.mp3'),
    "plaza.mp3":            require('../assets/santarosa/speech/Plaza.mp3'),
    "stpeterchruch.mp3":    require('../assets/santarosa/speech/ChairofStPeterParishChurch.mp3'),
    "sample.mp3":           require('../assets/santarosa/speech/sample.mp3'),
    "stibldg2.mp3":         require('../assets/test/stibldg2.mp3'),
};

let ASSETS = {
    "externallinks.json":  require('../database/home/externallinks.json'),
    ...IMAGES,
    ...GUIDESASSETS,
    ...STORIES,
    ...STORIESASSETS,
    ...GALATOURS,
    ...PLACESJSON,
    ...MARKERSJSON,
    ...MP3SPEECH,
}

//this function is used to preload all of the assets in the app
//contents defined in this object is not important however.
export const ALLASSETS =  [
    require('../assets/app/about.png'),
    require('../assets/santarosa/places/arch.jpg'),
    require('../assets/santarosa/places/balibago.jpg'),
    require('../assets/santarosa/places/basilo.jpg'),
    require('../assets/santarosa/places/casaarambulo.jpg'),
    require('../assets/santarosa/places/casagonzalez.jpg'),
    require('../assets/santarosa/places/casazavalla.jpg'),
    require('../assets/santarosa/places/cuartel.jpg'),
    require('../assets/santarosa/places/delima_church.jpg'),
    require('../assets/santarosa/places/ek.jpg'),
    require('../assets/santarosa/places/museo.jpg'),
    require('../assets/santarosa/places/plaza.jpg'),
    require('../assets/santarosa/places/saint_peter_church.jpg'),
    require('../assets/santarosa/places/tiongco.jpg'),
    require('../assets/santarosa/places/zavallahouse.jpg'),
    require('../assets/icons/gala.png'),
    require('../assets/santarosa/story/santarosa.jpg'),
    require('../assets/santarosa/story/delimastatue.jpg'),
    require('../assets/santarosa/speech/Arch.mp3'),
    require('../assets/santarosa/speech/CaseGonzalez.mp3'),
    require('../assets/santarosa/speech/DelimaParishChurch.mp3'),
    require('../assets/santarosa/speech/GonzalezStatue.mp3'),
    require('../assets/santarosa/speech/MuseongSantaRosa.mp3'),
    require('../assets/santarosa/speech/Plaza.mp3'),
    require('../assets/santarosa/speech/ChairofStPeterParishChurch.mp3'),
    require('../assets/santarosa/speech/sample.mp3'),
    require('../assets/test/stibldg2.mp3'),
    ...AVATARICONS_MALE,
    ...AVATARICONS_FEMALE,

    require('../assets/icons/fbicon.png'),
];

export const ALLPLACES = [
    require('./places/Arambulo House.json'),
    require('./places/Arch.json'),
    require('./places/Casa Gonzalez.json'),
    require('./places/Casa Zavalla.json'),
    require('./places/Cuartel de Santo Domingo.json'),
    require('./places/Santa Rosa De Lima Parish Church.json'),
    require('./places/Former Gomez Residence.json'),
    require('./places/Gonzalez Statue.json'),
    require('./places/Museo ng Santa Rosa.json'),
    require('./places/Enchanted Kingdom.json'),
    require('./places/Nuvali.json'),
    require('./places/City Plaza.json'),
    require('./places/Chair of St. Peter Parish Church.json'),
    require('./places/Tiongco Ancestral House.json'),
    require('./places/Zavalla House.json'),
]

export default ASSETS;
