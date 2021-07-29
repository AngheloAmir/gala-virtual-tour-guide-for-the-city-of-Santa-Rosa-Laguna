/*
    contains all of the assets available.
    This file is required because dynamic loading of assets is not possible,
    they must be preloaded before they can be used.

    This file should be the only tsx file in database folder
*/

const IMAGES = {
    "arch.jpg":             require('../assets/santarosa/places/arch.jpg'),
    "balibago.jpg":         require('../assets/santarosa/places/balibago.jpg'),
    "basilo.jpg":           require('../assets/santarosa/places/basilo.jpg'),
    "casaarambulo.jpg":     require('../assets/santarosa/places/casaarambulo.jpg'),
    "casagonzalez.jpg":     require('../assets/santarosa/places/casagonzalez.jpg'),
    "casazalla.jpg":        require('../assets/santarosa/places/casazavalla.jpg'),
    "cuartel.jpg":          require('../assets/santarosa/places/cuartel.jpg'),
    "delimachurch.jpg":     require('../assets/santarosa/places/delima_church.jpg'),
    "delimastatue.jpg":     require('../assets/santarosa/places/delima statue.jpg'),
    "enchanted.jpg":        require('../assets/santarosa/places/ek.jpg'),
    "museo.jpg":            require('../assets/santarosa/places/museo.jpg'),
    "plaza.jpg":            require('../assets/santarosa/places/plaza.jpg'),
    "santarosa.jpg":        require('../assets/santarosa/places/santarosa.jpg'),
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
    "testtour.json":        require('./assistantour/testtour.json'),
};

const GUIDESASSETS = {
    "balibagoroadmap.jpg":  require('../assets/santarosa/guides/balibagoroadmap.jpg'),
    "balibagomap.jpg":      require('../assets/santarosa/guides/balibagomap.jpg'),
    "balibagoterminal.jpg": require('../assets/santarosa/guides/balibagoterminal.jpg'),
    "buildingicon.png":     require('../assets/santarosa/guides/building.png'),
    "busicon.png":          require('../assets/santarosa/guides/bus.png'),
    "globeicon.png":        require('../assets/santarosa/guides/globe.png'),
    "listicon.png":         require('../assets/santarosa/guides/list.png'),
    "jeepneymap.jpg":       require('../assets/santarosa/guides/jeepneymap.jpg'),
    "journey.jpg":          require('../assets/santarosa/guides/journey.jpg'),
    "slexmap.jpg":          require('../assets/santarosa/guides/slexmap.jpg'),
    "travellingto.jpg":     require('../assets/santarosa/guides/travellingto.jpg'),
};

const GUIDESJSON = {
    "visitingguide.json":   require('./guides/visitingguide.json'),
    "publictransport.json": require('./guides/publictransport.json'),
    "journeyguide.json":    require('./guides/journeyguide.json'),
    "jeepneyroutes.json":   require('./guides/jeepneyroutes.json'),
};

const STORIES = {
    "cityhood.json":        require('./home/cityhood.json'),
    "tioncobrothers.json":  require('./home/tioncobrothers.json'),
    "ekstory.json":         require('./home/ekstory.json'),
    "aboutthecity.json":    require('./home/aboutthecity.json'),
    "externallinks.json":   require('./home/externallinks.json'),
};

const STORIESASSETS = {
    "cityhood.jpg":         require('../assets/santarosa/story/cityhood.jpg'),
    "tiongcobrothers.jpg":  require('../assets/santarosa/story/tiongcobrothers.jpg'),
    "studentcanteen.jpg":   require('../assets/santarosa/story/studentcanteen.jpg'),
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
    "casagonzales.mp3":     require('../assets/santarosa/speech/Case Gonzalez.mp3'),
    "delimachurch.mp3":     require('../assets/santarosa/speech/Delima Parish Church.mp3'),
    "gonzales.mp3":         require('../assets/santarosa/speech/Gonzalez Statue.mp3'),
    "museo.mp3":            require('../assets/santarosa/speech/Museo ng Santa Rosa.mp3'),
    "plaza.mp3":            require('../assets/santarosa/speech/Plaza.mp3'),
    "stpeterchruch.mp3":    require('../assets/santarosa/speech/Chair of St. Peter Parish Church.mp3'),
    "sample.mp3":           require('../assets/santarosa/speech/sample.mp3'),
};

const ASSETS = {
    ...IMAGES,
    ...GUIDESASSETS,
    ...GUIDESJSON,
    ...STORIES,
    ...STORIESASSETS,
    ...GALATOURS,
    ...PLACESJSON,
    ...MARKERSJSON,
    ...MP3SPEECH,
}
export default ASSETS;
