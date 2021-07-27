/*
    contains all of the assets available.
    This file is required because dynamic loading of assets is not possible,
    they must be preloaded before they can be used.

    This file should be the only tsx file in database folder
*/

const ASSETS = {
//Icons=================================================================================
    "listicon.png":         require('../assets/santarosa/guides/list.png'),
    "busicon.png":          require('../assets/santarosa/guides/bus.png'),
    "globeicon.png":        require('../assets/santarosa/guides/globe.png'),
    "buildingicon.png":     require('../assets/santarosa/guides/building.png'),

//Assets used in a guide===============================================================
    "balibagoterminal.jpg": require('../assets/santarosa/guides/balibagoterminal.jpg'),
    "jeepneymap.jpg":       require('../assets/santarosa/guides/jeepneymap.jpg'),
    "slexmap.jpg":          require('../assets/santarosa/guides/slexmap.jpg'),
    "balibagomap.jpg":      require('../assets/santarosa/guides/balibagomap.jpg'),
    "travellingto.jpg":     require('../assets/santarosa/guides/travellingto.jpg'),
    "balibagoroadmap.jpg":  require('../assets/santarosa/guides/balibagoroadmap.jpg'),
    "journey.jpg":          require('../assets/santarosa/guides/journey.jpg'),

//Images==============================================================================
    "balibago.jpg":         require('../assets/santarosa/places/balibago.jpg'),
    "arch.jpg":             require('../assets/santarosa/places/arch.jpg'),
    "stpeterchruch.jpg":    require('../assets/santarosa/places/saint_peter_church.jpg'),
    "plaza.jpg":            require('../assets/santarosa/places/plaza.jpg'),
    "delimachurch.jpg":     require('../assets/santarosa/places/delima_church.jpg'),

    "basilo.jpg":           require('../assets/santarosa/places/basilo.jpg'),
    "casagonzalez.jpg":     require('../assets/santarosa/places/casagonzalez.jpg'),
    "casazalla.jpg":        require('../assets/santarosa/places/casazavalla.jpg'),
    "delimastatue.jpg":     require('../assets/santarosa/places/delima statue.jpg'),
    "enchanted.jpg":        require('../assets/santarosa/places/ek.jpg'),
    "museo.jpg":            require('../assets/santarosa/places/museo.jpg'),
    "santarosa.jpg":        require('../assets/santarosa/places/santarosa.jpg'),
    "tionco.jpg":           require('../assets/santarosa/places/tiongco.jpg'),
    "zavallahouse.jpg":     require('../assets/santarosa/places/zavallahouse.jpg'),
    "casaarambulo.jpg":     require('../assets/santarosa/places/casaarambulo.jpg'),

//JSON===============================================================================
    "publictransport.json": require('./guides/publictransport.json'),
    "journeyguide.json":    require('./guides/journeyguide.json'),
    "jeepneyroutes.json":   require('./guides/jeepneyroutes.json'),
    "visitingguide.json":   require('./guides/visitingguide.json'),

//STORIES===========================================================================
    "tempstroy.json":       require('./home/tempstory.json'),
    "aboutthecity.json":    require('./home/aboutthecity.json'),
    "externallinks.json":   require('./home/externallinks.json'),

//TOURS=============================================================================
    "bisitaiglesia.json":   require('./assistantour/bisitaiglesia.json'),
    "glimpseofhistory.json":require('./assistantour/glimpseofhistory.json'),
    "busterminal.json":     require('./assistantour/busterminal.json'),
    "enchantedkingdom.json":require('./assistantour/enchantedkingdom.json'),
    "paseonuvali.json":     require('./assistantour/paseonuvali.json'),

    "testtour.json":        require('./assistantour/testtour.json'),

//PLACES============================================================================
    "stpeterchruch.json":   require('./places/Chair of St. Peter Parish Church.json'),
    "delimachurch.json":    require('./places/Santa Rosa De Lima Parish Church.json'),
    "cuartel.json":         require('./places/Cuartel de Santo Domingo.json'),
    "gonzalezstatue.json":  require('./places/Gonzalez Statue.json'),
    "plaza.json":           require('./places/City Plaza.json'),
    "arch.json":            require('./places/Arch.json'),
    "casagonzalez.json":    require('./places/Casa Gonzalez.json'),
    "casazavalla.json":     require('./places/Casa Zavalla.json'),
    "zavallahouse.json":    require('./places/Zavalla House.json'),
    "arambulohouse.json":   require('./places/Arambulo House.json'),
    "gomezhouse.json":      require('./places/Former Gomez Residence.json'),
    "tiongcohouse.json":    require('./places/Tiongco Ancestral House.json'),
    "museo.json":           require('./places/Museo ng Santa Rosa.json'),
    "placeEK.json":         require('./places/Enchanted Kingdom.json'),
    "placeNuvali.json":     require('./places/Nuvali.json'),

    "starosabinan.json":    require('./places/infomarker/starosabinan.json'),
    "sm.json":              require('./places/infomarker/sm.json'),
    "complexentrance.json": require('./places/infomarker/complexentrance.json'),
    "slexsouth.json":       require('./places/infomarker/slexsouth.json'),
    "slexnorth.json":       require('./places/infomarker/slexnorth.json'),
    "ekstreetview.json":    require('./places/infomarker/ekstreetview.json'),
    "paseooutlets.json":    require('./places/infomarker/paseooutlets.json'),
    "nuvalifish.json":      require('./places/infomarker/nuvalifish.json'),
    "nuvalilake.json":      require('./places/infomarker/nuvalilake.json'),
    "nuvaligarden.json":    require('./places/infomarker/nuvaligarden.json'),
    "complex.json":         require('./places/infomarker/complex.json'),
    "starosacabuyao.json":  require('./places/infomarker/starosacabuyao.json'),
    "belair.json":          require('./places/infomarker/belair.json'),

//MP3================================================================================
    "sample.mp3":           require('../assets/santarosa/speech/sample.mp3'),
    "stpeterchruch.mp3":    require('../assets/santarosa/speech/Chair of St. Peter Parish Church.mp3'),
    "delimachurch.mp3":     require('../assets/santarosa/speech/Delima Parish Church.mp3'),
    "gonzales.mp3":         require('../assets/santarosa/speech/Gonzalez Statue.mp3'),
    "arch.mp3":             require('../assets/santarosa/speech/Arch.mp3'),
    "museo.mp3":            require('../assets/santarosa/speech/Museo ng Santa Rosa.mp3'),
    "plaza.mp3":            require('../assets/santarosa/speech/Plaza.mp3'),
    "casagonzales.mp3":     require('../assets/santarosa/speech/Case Gonzalez.mp3'),
    //"casazavalla.mp3":     require(''),
}
export default ASSETS;
