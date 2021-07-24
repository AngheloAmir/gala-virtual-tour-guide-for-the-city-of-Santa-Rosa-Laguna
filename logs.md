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

## July 17, VErsion 0.3.4.3 - GPS Feature 90% completion
-Added NotifyWhenClose, a component that show below a toolbar when user is close to POI
-Added the dialog box and the ability to play sound if possible
-Improve the Find Nearest Establishment feature, now it should be more accurate
-Added in !interface/GalaSelfGuidedTour is the description for a DestinationLocation object

## July 16, VErsion 0.3.4.2 - GPS Improvements and code documentation
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
