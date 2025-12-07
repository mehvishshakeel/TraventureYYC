# TraventureYYC - Travel Itinerary Management Application

**Developer Name:** Mehvish Shakeel, Al Farhana Siddique, Dhruv Pujara, Eric Pham , Nancy (Phuong Ngan) Tran

A comprehensive travel and event planning application for Calgary, Alberta, designed to help users discover attractions, manage their itinerary, and access essential travel information.

---

## Table of Contents

1. [Overview](#overview)
2. [Getting Started](#getting-started)
3. [Implemented Features and Functions](#implemented-features-and-functions)
4. [System Usage Instructions](#system-usage-instructions)
5. [Complete Walkthrough Guide](#complete-walkthrough-guide)
6. [Technical Details](#technical-details)

---

## Overview

TraventureYYC is a mobile-responsive web application that provides travelers with a complete solution for planning and managing their trip to Calgary. The application includes user authentication, itinerary management, event discovery, emergency services access, currency conversion, and more.

---

## Getting Started

### Running the Application

1. **Open the Application**
   - Navigate to the project directory
   - Open `index.html` in a web browser (Chrome, Firefox, Safari, or Edge)
   - Alternatively, use a local web server:
     ```bash
     python3 -m http.server 8000
     ```
     Then access `http://localhost:8000/` in your browser

2. **Initial Screen**
   - You will see the welcome page with two options:
     - "Sign Up / Sign In" button (top button)
     - "Continue as a Guest" button (bottom button)

---

## Implemented Features and Functions

### 1. User Authentication System
- **Sign In Functionality**: Hardcoded user accounts with email/password authentication
- **Sign Up Page**: UI created (disabled for demo purposes)
- **Guest Mode**: Quick access without authentication
- **Session Management**: User session stored in browser sessionStorage
- **Personalized Homepage**: Displays user's first name after login

### 2. Itinerary Management System
- **Multi-Date Timeline View**: 14-day date selector (July 11-24, 2026)
- **Dynamic Date Navigation**: Horizontal scrolling date tabs with active state
- **Event Timeline Display**: Chronological event listing with images
- **Add Events**: Multiple methods (manual entry, category-based)
- **Edit Events**: Full event editing with time conflict detection
- **Delete Events**: With undo functionality via notification
- **Event Details View**: Full event information with image display
- **Conflict Detection**: Warns when event times overlap
- **Location Auto-Suggest**: Dropdown for River Café location

### 3. Event Management Functions
- **Time Conflict Warning**: Visual warnings when scheduling conflicts
- **Automatic Time Sorting**: Events sorted chronologically
- **Notes Field**: Optional notes for each event
- **Image Mapping**: Automatic image assignment based on event title
- **Date Preservation**: Remembers last viewed date when navigating

### 4. Interactive UI Components
- **Custom Delete Confirmation Modal**: In-app popup (not browser alert)
- **Undo Notification**: Top-of-screen notification after deletion
- **Smooth Animations**: Fade-in/out transitions
- **Responsive Design**: Mobile-optimized layout
- **Dynamic Padding Overlay**: Visual frame around content

### 5. Navigation System
- **Bottom Navigation Bar**: Persistent navigation (Itinerary, Home, Emergency, Settings)
- **Top Bar Navigation**: Page-specific actions and back buttons
- **Breadcrumb Navigation**: Clear path back to previous views

### 6. Emergency Services
- **Emergency Call Button**: 911 access
- **Hospital Directory**: List of hospitals and clinics
- **Embassy Information**: Embassy and consulate contacts
- **Emergency Contacts**: Personal emergency contact list

### 7. Discovery Features
- **Food Discovery**: Restaurant listings
- **Events Discovery**: Local events listing
- **Attractions Discovery**: Tourist attractions
- **Favorites System**: Save favorite restaurants, events, and activities

### 8. Utility Features
- **Currency Conversion**: Multi-currency converter (mock rates)
- **Map View**: Map interface (placeholder for map service integration)
- **Settings Page**: User preferences and account management

---

## System Usage Instructions

### Data Entry Requirements

#### When to Enter Authentication Credentials
- **On Welcome Page**: Choose to sign in or continue as guest
- **Email Format**: Must match hardcoded account emails exactly
- **Password**: Must match exactly (case-sensitive)

#### When to Enter Event Information
- **Adding Events**: Title, Date, Start Time, End Time, Location (required)
- **Editing Events**: All fields can be modified
- **Location Dropdown**: Appears automatically when typing "River Cafe" in title
- **Notes Field**: Optional text field for additional information

#### When Data is Saved
- **Login**: User session saved immediately upon successful authentication
- **Event Changes**: Saved when clicking "Save" button on edit page
- **Delete Actions**: Saved immediately, can be undone within 5 seconds
- **Session Persistence**: All changes persist in browser sessionStorage

---

## Complete Walkthrough Guide

### Walkthrough 1: User Authentication and Homepage Access

This walkthrough demonstrates the authentication flow: starting as a guest, then testing sign-in error handling, and finally logging in with a user account.

#### Step 1: Launch Application
1. Open `index.html` in your web browser
2. **Observe**: Welcome screen displays "Welcome to Calgary" with two buttons:
   - "Sign Up / Sign In" (top button, reddish-brown)
   - "Continue as a Guest" (bottom button, grey)

#### Step 2: Start as Guest (Initial Demo)
1. **Click**: "Continue as a Guest" button (bottom button, grey)
2. **Observe**: Navigate to homepage showing "Hello, Guest"
3. **Say**: "First, let me show you the app as a guest user. You can access all features without creating an account. Now let me demonstrate the sign-in process."

#### Step 3: Access Sign In Page
1. **Navigate Back**: Use browser back button or click "Home" in bottom navigation
2. **Click**: "Sign Up / Sign In" button (top button, reddish-brown) on the homepage
3. **Alternative**: If on welcome page, click "Sign Up / Sign In" button directly
4. **Observe**: Navigate to sign-in page showing:
   - Email Address input field
   - Password input field
   - "Sign In" button
   - Social login icons (Google, Apple, Facebook)

#### Step 4: Test Error Handling - Invalid Email
1. **Type**: In the "Email Address" field, enter: `wrong@email.com`
2. **Type**: In the "Password" field, enter: `wrongpassword`
3. **Click**: "Sign In" button (reddish-brown button)
4. **Observe**: Red error message appears at top of form: "Invalid email address. Please check your email and try again."
5. **Say**: "The system validates that the email exists in our database. If it doesn't, you see this error message."
6. **Wait**: Error message automatically disappears after 5 seconds, or continue typing to dismiss it

#### Step 5: Test Error Handling - Wrong Password
1. **Type**: In the "Email Address" field, enter: `tony@traventure.com`
2. **Type**: In the "Password" field, enter: `wrongpassword`
3. **Click**: "Sign In" button
4. **Observe**: Red error message appears: "Incorrect password. Please try again."
5. **Say**: "Even if the email is correct, entering the wrong password shows a different error message. This helps users identify whether they entered the wrong email or password."
6. **Wait**: Error message automatically disappears after 5 seconds, or continue typing to dismiss it

#### Step 6: Successful Login with Tony's Account
1. **Type**: In the "Email Address" field, enter: `tony@traventure.com`
2. **Type**: In the "Password" field, enter: `tony123`
3. **Click**: "Sign In" button (reddish-brown button)
4. **Observe**: 
   - No error message appears
   - Redirected to homepage
   - Homepage greeting changes to "Hello, Tony"
5. **Say**: "After entering the correct credentials, we're logged in and the homepage personalizes to show Tony's name."
6. **Demonstrate**: Show that the itinerary and other features are now accessible as Tony

---

### Walkthrough 2: Viewing and Navigating the Itinerary

#### Step 1: Access Itinerary Page
1. **From Homepage**: Click the "Itinerary" card (shows calendar icon)
2. **Alternative**: Click "Itinerary" in bottom navigation bar
3. **Observe**: Itinerary page loads showing date selector at top

#### Step 2: Navigate Between Dates
1. **Observe**: Horizontal scrollable date tabs at top (showing July 11-24, 2026)
2. **Click**: Any date tab (e.g., "14th Jul" for July 14)
3. **Observe**: 
   - Selected date tab becomes larger and highlighted
   - Timeline below updates to show events for that date
   - Date display updates (e.g., "Sunday - July 14, 2026")

#### Step 3: View Event Details
1. **Click**: Any event card in the timeline (e.g., "Calgary Zoo" card)
2. **Observe**: Navigate to event detail page showing:
   - Event title
   - Date and time
   - Location address
   - Notes (or "No notes")
   - Event image
   - Edit and Delete buttons at bottom

#### Step 4: Navigate Back
1. **Click**: Back arrow (←) in top-left corner
2. **Observe**: Returns to itinerary page on the same date you were viewing

---

### Walkthrough 3: Adding a New Event (River Café)

#### Step 1: Open Add Event Page
1. **On Itinerary Page**: Click the "+" button in top-right corner
2. **Observe**: Navigate to "Add Event" page with category cards

#### Step 2: Choose Manual Entry
1. **Click**: "Add event manually" button at top of page
2. **Observe**: Navigate to event edit form

#### Step 3: Enter Event Title
1. **Click**: "Title" input field
2. **Type**: `River Cafe` (or `River Café`)
3. **Observe**: Title appears in input field

#### Step 4: Set Date
1. **Click**: "Date" input field
2. **Type or Select**: `2026-07-14` (July 14, 2026)
3. **Observe**: Date field populated

#### Step 5: Set Time
1. **Click**: "Time" start time input (left field)
2. **Type or Select**: `08:30` (8:30 AM)
3. **Click**: "Time" end time input (right field)
4. **Type or Select**: `10:00` (10:00 AM)
5. **Observe**: Both time fields populated

#### Step 6: Enter Location with Auto-Suggest
1. **Click**: "Location" input field
2. **Observe**: Dropdown appears automatically showing: "25 Prince's Island Park, SW, Calgary, AB T2P 0R1"
3. **Click**: The dropdown option
4. **Observe**: Location field automatically filled with: `25 Prince's Island Park, SW, Calgary, AB T2P 0R1`

**OR** Type manually if dropdown doesn't appear:
1. **Type**: `25 Prince's Island Park, SW, Calgary, AB T2P 0R1`
2. **Observe**: Location field populated

#### Step 7: Add Notes (Optional)
1. **Click**: "Notes" textarea field
2. **Type**: `Breakfast before zoo visit`
3. **Observe**: Notes appear in textarea

#### Step 8: Save Event
1. **Click**: "Save" button at bottom (reddish-brown button)
2. **Observe**: Navigate back to itinerary page
3. **Observe**: New event "River Cafe" appears in timeline at 08:30 position
4. **Observe**: Event image displays automatically (riverCafe.png)
5. **Note**: The timeline now shows River Café at 08:30-10:00, followed by Calgary Zoo at 10:00-13:00. In the next walkthrough, we'll adjust the Calgary Zoo timing to accommodate the breakfast schedule.

---

### Walkthrough 4: Adjusting Calgary Zoo Time to Accommodate Breakfast

**Context**: After adding River Café breakfast at 08:30-10:00, we'll adjust the Calgary Zoo timing to accommodate the breakfast schedule. This walkthrough demonstrates conflict detection when the adjusted time overlaps with the next event.

#### Step 1: Open Calgary Zoo Event for Editing
1. **On Itinerary Page**: Ensure River Café is already added (from Walkthrough 3)
2. **Observe**: Timeline shows River Café at 08:30-10:00, followed by Calgary Zoo at 10:00-13:00, then Peace Bridge at 15:00-16:00
3. **Click**: On "Calgary Zoo" event card
4. **Observe**: Navigate to event detail page showing all Calgary Zoo information
5. **Click**: "Edit" button at bottom (left button, reddish-brown)

#### Step 2: Initial Adjustment - Set Start Time
1. **Observe**: Edit form loads with existing event data:
   - Title: "Calgary Zoo"
   - Start Time: `10:00`
   - End Time: `13:00`
   - Location: "210 St. George's Drive NE, Calgary, AB T2E 7V6"
2. **Click**: "Time" start time input field
3. **Change**: From `10:00` to `11:00`
4. **Observe**: No conflict warning appears (11:00 starts after River Café ends at 10:00)
5. **Say**: "I'm adjusting the start time to 11:00 to give us more time after breakfast and travel to the zoo"

#### Step 3: Attempt to Extend End Time - Trigger Conflict Detection
1. **Click**: "Time" end time input field
2. **Change**: From `13:00` to `15:30`
3. **Observe**: **Yellow conflict warning appears** at top showing:
   - "⚠️ Time Conflict Detected!"
   - Lists conflicting events: "Peace Bridge (15:00 - 16:00)"
4. **Say**: "The system detects that extending the zoo visit to 15:30 would overlap with Peace Bridge which starts at 15:00. This is the conflict detection feature in action!"

#### Step 4: Resolve Conflict - Set Final Time
1. **Click**: "Time" end time input field again
2. **Change**: From `15:30` back to `13:00`
3. **Observe**: Conflict warning disappears automatically
4. **Say**: "I'll set the end time to 13:00, which gives us 2 hours at the zoo (11:00-13:00) and avoids any conflicts with Peace Bridge at 15:00"
5. **Verify**: 
   - Start Time: `11:00`
   - End Time: `13:00`
   - No conflict warnings visible

#### Step 5: Save Changes
1. **Click**: "Save" button at bottom
2. **Observe**: Navigate back to event detail page (not main itinerary)
3. **Observe**: Updated event details displayed:
   - Time now shows: "11:00 - 13:00"
4. **Click**: Back arrow (←) to return to itinerary page

#### Step 6: Verify Updated Timeline
1. **Observe**: Itinerary page shows updated timeline:
   - River Café: 08:30 - 10:00
   - Calgary Zoo: 11:00 - 13:00 (updated)
   - Peace Bridge: 15:00 - 16:00
   - Ten Foot Henry: 17:15 - 19:00
   - Avesta Shawarma: 19:00 - 20:00
2. **Say**: "The schedule now flows smoothly with breakfast at 8:30-10:00, travel time, zoo visit from 11:00-13:00, and Peace Bridge later at 15:00. All events are properly spaced with no conflicts."

#### Key Features Demonstrated
- **Conflict Detection**: The system automatically warns when adjusted times overlap with existing events
- **Real-time Feedback**: Warnings appear immediately as you change times
- **Safe Scheduling**: The conflict warning helps prevent double-booking events

---

### Walkthrough 5: Deleting an Event with Undo

#### Step 1: Delete Event
1. **On Event Detail Page**: Click "Delete" button at bottom (right button, grey)
2. **Observe**: Custom modal popup appears (not browser alert) asking:
   - "Delete Event"
   - "Are you sure you want to delete [Event Name]?"
   - "This action cannot be undone, but you can use the undo notification to restore it."
   - Two buttons: "Cancel" (grey) and "Delete" (red)

#### Step 2: Confirm Deletion
1. **Click**: "Delete" button in modal (red button)
2. **Observe**: 
   - Modal closes
   - Redirected to itinerary page
   - Event removed from timeline
   - Undo notification appears at top: "Event deleted. [Undo]"

#### Step 3: Undo Deletion
1. **Click**: "Undo" button in the notification
2. **Observe**:
   - Event reappears in timeline at original position
   - Notification disappears

#### Alternative: Let Timeout Expire
1. **Wait**: 5 seconds without clicking "Undo"
2. **Observe**: Notification automatically disappears
3. **Result**: Deletion is permanent (cannot undo after timeout)

---

### Walkthrough 6: Testing All User Accounts

#### Test Account 1: Demo User 1
1. **Sign Out**: Close browser or clear sessionStorage
2. **Open**: `index.html`
3. **Click**: "Sign Up / Sign In"
4. **Type Email**: `demo1@traventure.com`
5. **Type Password**: `demo123`
6. **Click**: "Sign In"
7. **Observe**: Homepage shows "Hello, Demo"

#### Test Account 2: Alice Johnson
1. Repeat steps with:
   - Email: `alice@traventure.com`
   - Password: `alice123`
   - Expected: "Hello, Alice"

#### Test Account 3: Bob Smith
1. Repeat steps with:
   - Email: `bob@traventure.com`
   - Password: `bob123`
   - Expected: "Hello, Bob"

#### Test Account 4: Tony
1. Repeat steps with:
   - Email: `tony@traventure.com`
   - Password: `tony123`
   - Expected: "Hello, Tony"

---

### Walkthrough 7: Finding Local Events

**Scenario**: Tony wants to find an upcoming event in Calgary and add it to his itinerary.

#### Step 1: Access Events
1. **Note**: You should already be logged in from Walkthrough 1 (as Tony or any user)
2. **From Homepage**: Click "Events" card on the homepage (shows event/calendar icon)
3. **Observe**: Navigate to "Calgary's Events" page showing:
   - Page title: "Calgary's Events"
   - Search bar at the top with 🔍 icon
   - List of upcoming events below

#### Step 2: Browse Events List
1. **Observe**: Events are displayed in a scrollable list, each showing:
   - Event image
   - Event title
   - Date/time subtitle (e.g., "July 3 - July 12")
   - Heart icon (favorites)
   - Plus icon (add to itinerary)
2. **Say**: "Events are displayed chronologically with the nearest ones first, making it easy to find something interesting without searching."
3. **Scroll**: Browse through the events list to see available options

#### Step 3: Select Calgary Stampede
1. **Observe**: Find "Calgary Stampede" event card in the list
   - Shows event image
   - Title: "Calgary Stampede"
   - Subtitle: "July 3 - July 12"
2. **Click**: On the "Calgary Stampede" event card (anywhere on the card)
3. **Observe**: Navigate to event details page showing:
   - Large hero image at top
   - Event title: "Calgary Stampede"
   - Date and time information
   - Location/address
   - Event description
   - Action buttons (Add to Favorites, Add to Itinerary)

#### Step 4: View Event Details and Add to Itinerary
1. **Review**: Scroll through the event details page to see:
   - Clear time and date information
   - Location address
   - Description of the event
2. **Say**: "The event details page provides all the key information Tony needs to decide whether to attend - time, date, location, and description are all clearly displayed."
3. **Click**: "+ Add" button or "Add to Itinerary" button on the event details page
4. **Observe**: Event is added to the itinerary

#### Step 5: Verify Event in Itinerary
1. **Navigate**: Click "Itinerary" in bottom navigation bar or use back button to return to itinerary
2. **Observe**: Navigate to itinerary page
3. **Find Date**: Scroll date selector to find the date range for Calgary Stampede (July 3-12)
4. **Observe**: "Calgary Stampede" appears in the timeline for the appropriate dates
5. **Say**: "The event has been successfully added to Tony's itinerary and he can later adjust the time and date as needed."

---

### Walkthrough 8: Finding Restaurants

**Scenario**: Tony wants to find a shawarma restaurant for lunch.

#### Step 1: Access Food Discovery
1. **Note**: You should already be logged in from Walkthrough 1 (as Tony or any user)
2. **From Homepage**: Click "Food Spots" card on the homepage
3. **Observe**: Navigate to food discovery page showing:
   - Page title/header
   - Search bar at top
   - Cuisine filter options (fast food, Indian, Halal, etc.)
   - "Popular Near You" section

#### Step 2: Search for Shawarma
1. **Observe**: Search bar is visible at the top of the page
2. **Click**: In the search bar input field
3. **Type**: `shawarma`
4. **Observe**: Search results appear showing restaurants matching "shawarma"
5. **Say**: "Tony can quickly search for specific cuisines using the search bar, similar to popular food apps."

#### Step 3: Review Search Results
1. **Observe**: Search results show restaurants with:
   - Restaurant images
   - Restaurant names (e.g., "Avesta Shawarma", "Jerusalem Shawarma")
   - Ratings (if available)
   - Distance information (if available)
2. **Review**: Scroll through the results to compare options
3. **Say**: "Results show highly rated, nearby options with ratings and distance to help Tony make a quick decision."

#### Step 4: Select Avesta Shawarma
1. **Click**: On "Avesta Shawarma" restaurant card
2. **Observe**: Navigate to restaurant details page showing:
   - Restaurant hero image
   - Restaurant name: "Avesta Shawarma"
   - Address and location
   - Top dishes/menu items
   - Reviews/ratings
   - Map with location marker
   - Navigation options (if available)

#### Step 5: View Restaurant Details
1. **Observe**: Restaurant page displays:
   - Clear location information
   - Menu highlights or top dishes
   - Reviews and ratings
   - Map showing restaurant location
2. **Review**: Scroll through restaurant information
3. **Say**: "The restaurant page provides all essential information - location, menu highlights, and reviews - helping Tony decide quickly."

#### Step 6: Add to Itinerary or Get Directions
1. **Option A - Add to Itinerary**:
   - **Click**: "+ Add" button to add restaurant to itinerary
   - **Observe**: Restaurant added to itinerary
2. **Option B - Get Directions**:
   - **Click**: Map or "Get Directions" button
   - **Observe**: Opens map with navigation options
3. **Option C - Add To Favourites**:
   - **Click**: Heart icon on the restaurant card
   - **Observe**: Heart icon gets filled with pink signifying that it's been added to favourites

---

### Walkthrough 9: Accessing Emergency Contacts

**Scenario**: Steve's child has a mild fever and he needs to find a nearby hospital.

#### Step 1: Open App and Access Emergency Services
1. **Open**: TraventureYYC app (already logged in or as guest)
2. **Observe**: Homepage is displayed
3. **Click**: "Emergency" button in bottom navigation bar (phone icon with cross)
4. **Observe**: Navigate to Emergency Services page showing:
   - Large red "Call 911" button at top with 🚨 icon
   - Menu grid below with emergency options

#### Step 2: Review Emergency Options
1. **Observe**: Emergency page displays:
   - **Call 911** button (large, prominent at top)
   - **Nearest Hospitals/Clinics** card (🏥 icon)
   - **Embassy & Consulate** card (🏛️ icon)
   - **Other Services** card (📞 icon)
2. **Say**: "The emergency button is prominently placed on every page for immediate visibility in urgent situations."

#### Step 3: Access 911 Information (Optional Demo)
1. **Click**: "Call 911" button (large red button at top)
2. **Observe**: Modal/dialog appears showing:
   - Title: "Emergency Services (911)"
   - Information explaining that 911 is Canada's emergency number
   - Instructions for life-threatening emergencies
3. **Say**: "For international tourists who may not know that 911 is Canada's emergency number, this button displays helpful information."
4. **Click**: "Cancel" or close button to dismiss modal

#### Step 4: Find Nearby Hospital
1. **Click**: "Nearest Hospitals/Clinics" card (🏥 icon)
2. **Observe**: Navigate to hospitals page showing list of:
   - Hospitals
   - Urgent care centers
   - Pharmacies
   - Each showing:
     - Name
     - Address
     - Phone number
     - Hours (if available)
     - Distance (if available)

#### Step 5: Select Hospital and Get Directions
1. **Review**: Scroll through the hospital list
2. **Find**: Nearest or most convenient option
3. **Click**: On a hospital/clinic card
4. **Observe**: Hospital details page or map opens showing:
   - Hospital name
   - Full address
   - Phone number
   - Map with location marker
5. **Click**: "Get Directions" button or map link (if available)
6. **Observe**: Navigation map opens with directions options (car, public transit, walk)
7. **Say**: "Steve can quickly locate the nearest hospital and get directions using integrated map services."

---

### Walkthrough 10: Currency Conversion

**Scenario**: Yutong wants to convert 500 Chinese Yuan to Canadian Dollars.

#### Step 1: Access Currency Converter
1. **Note**: You should already be logged in from Walkthrough 1
2. **From Homepage**: Click "Currency Conversion" card on the homepage
3. **Observe**: Navigate to currency conversion page showing:
   - Page title: "CURRENCY CONVERSION"
   - Currency conversion interface with:
     - "From" currency dropdown
     - Amount input field
     - "To" currency dropdown
     - Converted amount display

#### Step 2: Select Base Currency (CNY)
1. **Observe**: Currency selector shows current selection (may default to CAD)
2. **Click**: On the "From" currency dropdown (top currency selector)
3. **Observe**: Dropdown menu opens showing list of currencies
4. **Scroll**: Find "CNY" (Chinese Yuan) in the list
5. **Click**: "CNY" to select it
6. **Observe**: Currency selector updates to show CNY (may display flag icon)

#### Step 3: Select Target Currency (CAD)
1. **Click**: On the "To" currency dropdown (bottom currency selector)
2. **Observe**: Dropdown menu opens showing list of currencies
3. **Scroll**: Find "CAD" (Canadian Dollar) in the list
4. **Click**: "CAD" to select it
5. **Observe**: Currency selector updates to show CAD

#### Step 4: Enter Amount to Convert
1. **Click**: In the amount input field (next to "From" currency)
2. **Type**: `500`
3. **Observe**: Number appears in input field
4. **Say**: "The numeric input field accepts the amount to convert."

#### Step 5: View Conversion Result
1. **Observe**: Conversion happens automatically (real-time) or:
2. **Click**: "Convert" button (if present) or wait for auto-conversion
3. **Observe**: Converted amount appears in the "To" currency field showing:
   - Result: Approximately "94.63 CAD" (or current exchange rate)
   - Exchange rate information displayed below
4. **Say**: "The conversion is instant and shows both the converted amount and the current exchange rate, helping Yutong make informed decisions."

---

### Walkthrough 11: Finding Attractions

**Scenario**: Tony wants to discover new attractions in Calgary and add them to his itinerary.

#### Step 1: Access Attractions
1. **Note**: You should already be logged in from Walkthrough 1 (as Tony or any user)
2. **From Homepage**: Click "Activities" card on the homepage
3. **Observe**: Navigate to "Attractions" page showing:
   - Page title/header
   - Search bar (if available)
   - Scrollable list of attractions

#### Step 2: Browse Attractions List
1. **Observe**: Attractions are displayed in a scrollable list, each showing:
   - Attraction image
   - Attraction name (e.g., "Calgary Tower", "Calgary Zoo", "Peace Bridge")
   - Brief description or location
   - Heart icon (add to favorites/wishlist)
   - Plus icon (add to itinerary)
2. **Scroll**: Browse through available attractions
3. **Say**: "The attractions page displays high-quality images and clear labels to help users like Tony quickly discover interesting places."

#### Step 3: Add Peace Bridge to Wishlist
1. **Find**: "Peace Bridge" in the attractions list
2. **Click**: Heart icon (❤️) on the Peace Bridge card
3. **Observe**: 
   - Heart icon changes to filled/active state (if applicable)
   - Visual confirmation appears (animation or text: "Added to Wishlist")
4. **Say**: "The heart icon allows Tony to save attractions to his wishlist for later, similar to popular travel apps."

#### Step 4: Add Peace Bridge to Itinerary
1. **On Same Card**: Click the "+" (plus) icon on the Peace Bridge card
2. **Observe**: 
   - Confirmation appears (success message or visual cue)
   - Attraction is added to itinerary
3. **Say**: "The plus icon allows Tony to quickly add attractions directly to his itinerary."

#### Step 5: Verify Addition in Itinerary
1. **Navigate**: Click "Itinerary" in bottom navigation bar
2. **Observe**: Navigate to itinerary page
3. **Find**: Scroll to the date where Peace Bridge was added
4. **Observe**: Peace Bridge appears in the timeline
5. **Say**: "Tony can review his itinerary to confirm the new activity has been added successfully, helping him manage his travel plans."

---

## Technical Details

### Project Structure
```
TraventureYYC/
├── css/
│   ├── variables.css      # CSS variables and color scheme
│   ├── reset.css          # CSS reset and base styles
│   ├── base.css           # Base layout and component styles
│   ├── components.css     # Reusable component styles
│   └── main.css           # Main stylesheet (imports all)
├── pages/
│   ├── index.html         # Landing/Initial page
│   ├── signin.html        # Sign In page
│   ├── signup.html        # Sign Up page
│   ├── homepage.html      # Main homepage/dashboard
│   ├── food.html          # Food discovery and ordering
│   ├── events.html        # Local events listing
│   ├── attractions.html   # Attractions and activities
│   ├── favorites.html     # Favorites (restaurants, events, activities)
│   ├── itinerary.html     # Itinerary view
│   ├── itinerary-add.html # Add new event to itinerary
│   ├── itinerary-detail.html # Event detail view
│   ├── itinerary-edit.html   # Edit event in itinerary
│   ├── currency.html      # Currency conversion
│   ├── map.html           # Map view with directions
│   ├── emergency.html     # Emergency contacts main page
│   ├── emergency-hospitals.html # Hospitals and clinics
│   ├── emergency-embassy.html   # Embassies and consulates
│   ├── emergency-contacts.html  # Emergency contact list
│   └── settings.html      # User settings
├── images/                # Image assets
└── README.md             # This file
```

### Available User Accounts

The homepage greeting changes based on logged-in user.

1. **Demo User 1**
   - Email: `demo1@traventure.com`
   - Password: `demo123`
   - Homepage Display: "Hello, Demo"

2. **Demo User 2**
   - Email: `demo2@traventure.com`
   - Password: `demo123`
   - Homepage Display: "Hello, Demo"

3. **Alice Johnson**
   - Email: `alice@traventure.com`
   - Password: `alice123`
   - Homepage Display: "Hello, Alice"

4. **Bob Smith**
   - Email: `bob@traventure.com`
   - Password: `bob123`
   - Homepage Display: "Hello, Bob"

5. **Tony**
   - Email: `tony@traventure.com`
   - Password: `tony123`
   - Homepage Display: "Hello, Tony"

6. **Guest User**
   - Access: Click "Continue as a Guest" on welcome page
   - Homepage Display: "Hello, Guest"

### Data Storage

- **Storage Method**: Browser sessionStorage (data persists during browser session)
- **User Session**: Stored as JSON object with email, username, and name
- **Itinerary Data**: Stored as nested JSON object by date (YYYY-MM-DD format)
- **Deleted Events**: Stored temporarily for undo functionality (5-second timeout)

### Default Itinerary Data

The application comes pre-loaded with events for July 11-20, 2026, including:
- Calgary Zoo visits
- Heritage Park
- Glenbow Museum
- Prince's Island Park
- Bow River Pathway
- Calgary Stampede
- And more...

### Browser Compatibility

- **Tested Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Support**: iOS Safari, Chrome Mobile
- **Responsive Design**: Optimized for 375px width (mobile-first)
- **Features Used**: sessionStorage, CSS Grid, Flexbox, CSS Variables

### Known Limitations

1. **Sign Up**: Disabled for demo purposes (shows error message)
2. **Social Login**: Buttons present but not functional (placeholder)
3. **Map Integration**: Requires external mapping service API
4. **Currency Rates**: Uses mock exchange rates (not real-time)
5. **Backend**: No server-side storage (all data in browser)

---

## Additional Notes

- All images are stored in the `images/` folder
- CSS uses CSS Variables for easy theming
- Navigation uses HTML links (no JavaScript routing framework)
- Forms use client-side JavaScript validation
- Error messages auto-dismiss after 5 seconds
- All user interactions are logged to browser console for debugging

---

## Support and Contact

For questions or issues, please refer to the DEMO_SCRIPT.md file for detailed feature demonstrations.

---

**Last Updated**: [Current Date]
**Version**: 1.0.0
