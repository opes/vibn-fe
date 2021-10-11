# Software Requirements

## Vision<br>
---
 <i>What is the vision of this product</i><br>
This product endeavours to create a platform where users can connect via taste in music.<br>
<i>What pain point does this project solve?</i><br>
This project hopes to be a catalyst for connection during a time in history that makes physically doing so nearly impossible.<br>
<i>Why should we care about your product?</i><br>
Meeting people is hard enough as it is, let alone in the current social climate. This product helps provide commonality from the moment one signs up and the accessibility to connect in a global pandemic.<br><br>

## Scope (In/Out)
---
<i>IN: What will your product do</i><br>
The app will connect to a users Spotify account and collect their top data.<br>
It will allow users to create a profile displaying a photo, bio and top Spotify artists/tracks.<br>
It will allow a user to see a list of other profiles and gives the ability to select and see the other detailed view. <br>
It allows the capability of connecting with a user and messaging them, or declining a connection.<br>
It will allow a user to view a list of messages/connections. <br>
<i>OUT: What will your product not do</i><br>
It will not have the ability to create a playlist on the app<br>
It will not display a chart or graph of a users top 5-10 top genres.<br><br>

## MVP
---
Signup/Signin via Spotify oAuth and profile creation to display a users photo and name.<br>
Auto-populate a users top artists and tracks.<br>
Show all users with few specifics (i.e. photo, username and top 3 artists) in a list/grid view.<br>
Have detailed profiles with a button to connect.<br>
Chat functionality where the full chat history is always available.<br>
A list of matches and conversations where a user can select and continue/start a conversation.<br><br>

## Stretch
---
Can change profile picture and display name.<br>
Controls to give the user the ability to add/delete/update displayed artists/tracks.<br>
The ability to search for users who have a specific genre/artist/track in the profile.<br>
Swipe capability rather than only list view.<br>
Display percentage of genre/artist match between two users.<br>
Remove/block a user after matching.<br>
Inability to message unless it’s a match.<br><br>

# Functional Requirements
---
## Users:
---
Users can connect to the app via Spotify and create a profile. They will be able to interact with other users via messaging. Can access another users detailed profile that displays their information and top Spotify artists/tracks.<br>

# Non-Functional Requirements
---
## oAuth
---
An important non-functional requirement being used by this app is oAuth. By connecting to their Spotify account, users top artists and tracks will be displayed. Using authorization helps provide security and reliability of the information provided.<br>

## Usability 
---
Usability is another important non-functional requirement. Accessibility is always taken into account with the color scheme and a simple, clean interface.<br><br>

# Data Flow
---
-Launch page: Sign up<br>
-Authorized login through Spotify<br>
-Upon signup or signing in, user is taken to their profile, which is auto-created with picture, name, and top tracks from Spotify, and they can input their age/other demographics. This is also where the user can log out.<br>
-User's Spotify will auto-populate user's top songs/artists/genres<br>
-User navigates to list page, where list of users is displayed with those user's picture, name, age, and states their top 2 artists<br>
-User can click on another user's profile, and are directed to that user's profile page <br>
-Other user's profile page displays all details of demographics, top tracks, bio, etc <br>
-User can either send this user a message or pass. If they pass, user is redirected back to list page <br>
-If user selects messaging the other user, they are redirected to a chat page where they can message with the user, and full chat history is displayed <br>
-User can navigate to a list page of all conversations they have going, which they can select to continue chatting with that user
