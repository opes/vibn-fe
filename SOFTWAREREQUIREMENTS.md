# Software Requirements

## Vision
---
 <i>What is the vision of this product</i>
This product endeavours to create a platform where users can connect via taste in music.
<i>What pain point does this project solve?</i>
This project hopes to be a catalyst for connection during a time in history that makes physically doing so nearly impossible.
<i>Why should we care about your product?</i>
Meeting people is hard enough as it is, let alone in the current social climate. This product helps provide commonality from the moment one signs up and the accessibility to connect in a global pandemic.

## Scope (In/Out)
---
<i>IN: What will your product do</i>
The app will connect to a users Spotify account and collect their top data.
It will allow users to create a profile displaying a photo, bio and top Spotify artists/tracks.
It will allow a user to see a list of other profiles and gives the ability to select and see the other detailed view. 
It allows the capability of connecting with a user and messaging them, or declining a connection.
It will allow a user to view a list of messages/connections. 
<i>OUT: What will your product not do</i>
It will not have the ability to create a playlist on the app
It will not display a chart or graph of a users top 5-10 top genres.

## MVP
---
Signup/Signin via Spotify oAuth and profile creation to display a users photo and name.
Auto-populate a users top artists and tracks.
Show all users with few specifics (i.e. photo, username and top 3 artists) in a list/grid view.
Have detailed profiles with a button to connect.
Chat functionality where the full chat history is always available.
A list of matches and conversations where a user can select and continue/start a conversation.

## Stretch
---
Can change profile picture and display name.
Controls to give the user the ability to add/delete/update displayed artists/tracks
The ability to search for users who have a specific genre/artist/track in the profile
Swipe capability rather than only list view.
Display percentage of genre/artist match between two users.
Remove/block a user after matching
Inability to message unless it’s a match.

# Functional Requirements
---
## Admins:
---

## Users:
---
Users can connect to the app via Spotify and create a profile. They will be able to interact with other users via messaging. Can access another users detailed profile that displays their information and top Spotify artists/tracks.

# Non-Functional Requirements
---
## oAuth
---
An important non-functional requirement being used by this app is oAuth. By connecting to their Spotify account, users top artists and tracks will be displayed. Using authorization helps provide security and reliability of the information provided.

## Usability 
---
Usability is another important non-functional requirement. Accessibility is always taken into account with the color scheme and a simple, clean interface.

# Data Flow
---
 User flow:
-Launch page: Sign up
-Authorized login through Spotify
-Upon signup or signing in, user is taken to their profile, which is auto-created with picture, name, and top tracks from Spotify, and they can input their age/other demographics. This is also where the user can log out.
-User's Spotify will auto-populate user's top songs/artists/genres
-User navigates to list page, where list of users is displayed with those user's picture, name, age, and states their top 2 artists
-User can click on another user's profile, and are directed to that user's profile page
-Other user's profile page displays all details of demographics, top tracks, bio, etc
-User can either send this user a message or pass. If they pass, user is redirected back to list page
-If user selects messaging the other user, they are redirected to a chat page where they can message with the user, and full chat history is displayed
-User can navigate to a list page of all conversations they have going, which they can select to continue chatting with that user
