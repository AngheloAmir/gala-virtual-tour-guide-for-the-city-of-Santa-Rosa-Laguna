## January 6, 1.5 Improvements
-Guides tab now has online and offline articles
-Added news in the guide tab
-move the Visiting Guide into an online article to easier to update it content
-update typo in Assistant Tour
-Assistant Tour GPS now works properly in the web browser
-Added checking of the status of internet connection before nav path is made

## January 4, 1.4 (Maintenace) Added new articles and minor fixes
-Added new articles: EK Reopens and Santa Rosa Local Hero
-Updated the contents of the guides
-Fix the issue where the info is updated but it does get update the async storage

## November 20, 1.3b Safe area view fixes
-Uses Asset preloading with Expo Assets, to fix images not showing on build apk on some devices
-Online map (Expoleaflet) now use flex: 1, instead of a fix height.
-Remove spaces for assets name (mp3) and applied these changes to asset.tsx

## November 20, 1.3 Safe area view fixes
-Use Safe Area View to make sure that virtual buttons does not interfer
-Bottom tabs gets hidden when typing
-Fix a typo in the database
-Added loading scene when the user: loads a thread, delete a thread, update user info...
-useResponsive now uses 'window' instead of 'screen'

## November 15, 1.2 Minor new features
-Added search for place in Home > Map
-Added test tour (temporary) for capstone defense

## October 12, 1.1 Fixes 
-Fix error due to border attribute whih work in web browser but not with mobiles
-Added a minor feature
-Minor text updates

## August 22, 1.0 Initial Releasable Version
-The app is ready to ship waiting for additonal changes  

## August 21, 0.7.3 Improvements
-Minor improvements  

## August 21, 0.7.2 Improvements
-Added content for About Screen  
-Improve the Account Screen  
-Improve Forum  

## August 20, 0.7.1 Account Screen
-Added the ability to view and change user account 
-Forum UI improvements

## August 20, 0.7 Forum Requirement Complete
-Added NewThread.tsx  
-Forum feature improvement  
-Some UI adjustments  

## August 19, 0.6.7.1 Minor UI improvements
-Added GlobalStyle.ts  
-Make UI a little better

## August 17, 0.6.7 Forum building
-Added Reply.tsx  
-Other code changes

## August 16, Version 0.6.4 User Registration update
-Update the user registration since the server is also updated to prevent spams  
-Improve threads

## August 15, Version 0.6.3 User Registration
-Added the ability to be registered online  
-Added the backend server

## August 3, Version 0.6.2 Forum initial design
-Added Forum initial design

## August 2, Version 0.6.1 Forum - User Registration
-Added Term and Condition Scene before the register in the forum  
-Added (move) tour intro text into assistanttour.json  
-Move magentoMeterUpdateInterval to map.json  
-Move map markers icon to map.json  

## August 1, Version 0.6.0 Forum - User Register
-Added Forum Register screen  
-AssistantTour main tab is now use JSON to store "further reading" and "disclaimer text"  
-Adjusted place info text  
-Adjusted aquitance range from 0.00002 to 0.000025  
-Changed Support screen to Feedback screen  
-Remove Testtour  

## July 31, Version 0.5.4 Completed Home Tab
-Improve Assistant Tour Tab, now the error: 'Cant update on umounted component is less likey to happen'  
    -It is done by removing many React.useEffect()  
-Added City information  

## July 30, Version 0.5.3 Completing Home Tab 3
-Added article about Santa Rosa city hood  
-Added article about Tiongco Brothers  
-Added artice about EK  
-Adjusted places description  
-Remove the footer in the home tab  
-Remove Covid case button in the home tab  
-Arrange assets.tsx in alphabetical order  

## July 29, Version 0.5.2 Completing Home Tab 2
-Added StoryViewer  
-The Guide Tab and reading an article in Home tab now uses same component named StoryViewer  
-Remove Accordion.tsx, Paragraph.tsx in Guide folder  
-Remove GuideItem in the database/!interface  
-Remove CovidNews.tsx and MoreArticles.tsx. Now street view, covid news and more articles features (button)  
will now refer to a single Webview.tsx.  
    -- The result is that, the number of screen stack is reduce  
-Adjusted components in the Home folder  
-Added newline at the end of some json file  
-Now the street view will be refer to user web browser instead of putting inside of webview  
-Home Tab > External links is complete  

## July 28, Version 0.5.1 Completing Home Tab
-completing the feature of map in the home tab  
-Added loading of articles like about the city  
-Added images to places  
-Database improvements  

## July 27, Version 0.5 Revamp database to JSON
-Revamp the code structure, now the database contains "JSON" files instead of tsx for  
easier editting of the contents  
-refraction was made  
-improve online map  
-additional assets are added  

## July 26, Version 0.4.2 General Fixes
-Fix AutoImageSlider (improperly displaying in mobile phones)  
-Remove spacing in the names of the assets  
-Adjusted init() function of Assistant Tour feature  
-Adjusted info visiting Cuartel de Santo Domingo  
-Remove Tiongco tour voice and adjusted the text  

## July 25, Version 0.4.1 Home Tab City Map
-Create a new google account and github account (galavtg@gmail.com)  
-Links added in the Home Tab  
-Added City Map  

## July 24, Version 0.4.0 Home Tab Initial Design
-Constructed the Home Tab design  
-Added "export const WindowDimension = { height, width };" code in useResponsive.tsx  
-Added AutoImageSlider in Utility  
-Added more speech for "Glimpse of History" tour  

## July 23, Version 0.3.8 Documentation, Speech, and Improvements
-Added comments for documentation purposes in most of components of AssistantTour  
-Added streetviewlink in the json file of places  
-Added text in the attribution window (Assitant Tour)  
-Added more speech for "Glimpse of History" tour  
-Move assets that exist in database folder into assets folder  
-StateAPI changes which remove non used code  
-Code improvement in Assistant Tours  
-Images in Guides are now displayed properly and also optimize them  
-Added the in image attribution for guides  

## July 22, Version 0.3.7 Improve Tour text
-Improve the text of tours  
-Added mp3 speech to Col. Basillo B. Gonzalez statue  
-Adjust header text bottom margin in the Assitant Tour Tab in "Futher Reading" window  

## July 20, Version 0.3.6
-Remove the use of setInterval to get the user position, instead it subscribe to get user position  
-Updated the magnetometer icon  
-Changes UI in the tapping the marker  
-Adding tour informatiomations  

## July 19, Version 0.3.5 - Added Magnetometer
-Added Magnetometer  
-Remove Privacy policy  
-Added Further reading in the AssistanTourTab which contains info about GPS  

## Jul8 18, Version 0.3.4.4 - Assistant Tour improvements
-Added new Point of Interest in the Tour such as in the enchanted kingdom  
-Fix NotifyWhenClose showing even the current tour has changed  
-Added folder windowDialogs (which move dialog components)  

## July 17, Version 0.3.4.3 - GPS Feature 90% completion
-Added NotifyWhenClose, a component that show below a toolbar when user is close to POI  
-Added the dialog box and the ability to play sound if possible  
-Improve the Find Nearest Establishment feature, now it should be more accurate  
-Added in !interface/GalaSelfGuidedTour is the description for a DestinationLocation object  

## July 16, Version 0.3.4.2 - GPS Improvements and code documentation
-Improve the Assistant Tour Code base  
-Added Attribution in the map (as per requirement of Mapbox lincess)  
-Added documentation for many of the components  
-Arrange the Find Places in Alphabetical order  

## July 15, Version 0.3.4.1 - Code improvements
-Source code where improve in the GPS Nav feature of the App  
-Arrange the database/assistanttour/establishments in an order and alphabetically  

## July 14, Version 0.3.4 - User Interface Changes and improvements
-Updated the version of the SDK of EXPO to v42  
-Remove Map (Interactive Map) Tab in the home screen  
-Remove More Tab  
-Remove Account (Account Screen)  
-Added Forum Tab  

## July 12, Version 0.3.3.3 - Fix GPS Dialog not touchable (not responding)
-Fix an issue where the dialog box when show in the screen is unclickable  

## July 10, Version 0.3.3 - Fully working GPS Navigation system with some extra feature not being added
-Remove Zoom in and Zoom out functionality  
-Added Tour Information Button - which show the current tour information  
-Added Find Places - enables to find nearest establishment or look for based on the user location  
-Added Map Lock Button - the map will center on user position or not  

## July 9, Version 0.3.3 - Added find places
-Added find places dialog box  

## July 8, Version 0.3.2 - Added a feature
-Added tour information dialog box  

## July 7, Version 3.1 - Recode and Revamp the GPS Navigation system
-Added the use of local context and local state API  
which means that the core source code of the Assitant Tour is rework in order for  
a cleaner code and better structure.  

## July 7, Version 0.3 - Working but not complete GPS Navigation System       
-Added the GPS Navigation system  
-Added the toolbar in the system  
