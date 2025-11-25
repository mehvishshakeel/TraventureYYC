# Demo Script: TraventureYYC Complete Demo Guide

## Overview
This demo script covers the complete functionality of TraventureYYC, including user authentication, itinerary management, and event editing.

---

## User Authentication & Login

### Available Demo Accounts

The following hardcoded accounts are available for testing:

#### Account 1: Demo User 1
- **Email:** `demo1@traventure.com`
- **Password:** `demo123`
- **Display Name:** Demo User 1

#### Account 2: Demo User 2
- **Email:** `demo2@traventure.com`
- **Password:** `demo123`
- **Display Name:** Demo User 2

#### Account 3: Alice Johnson
- **Email:** `alice@traventure.com`
- **Password:** `alice123`
- **Display Name:** Alice Johnson

#### Account 4: Bob Smith
- **Email:** `bob@traventure.com`
- **Password:** `bob123`
- **Display Name:** Bob Smith

#### Guest Account
- **Email:** `guest@guest.com`
- **Password:** `guest123`
- **Display Name:** Guest User

**Note:** All users share the same itinerary data. The name displayed on the homepage will change based on which account you log in with.

---

### Sign In Process

1. **Navigate to Sign In Page**
   - From the welcome page, click "Sign Up / Sign In"
   - Or directly navigate to `pages/signin.html`

2. **Enter Credentials**
   - **Email Address:** Type one of the demo email addresses above (e.g., `demo1@traventure.com`)
   - **Password:** Type the corresponding password (e.g., `demo123`)

3. **Error Handling**
   - **Invalid Email:** If you enter an email that doesn't exist, you'll see: "Invalid email address. Please check your email and try again."
   - **Wrong Password:** If you enter the wrong password, you'll see: "Incorrect password. Please try again."
   - Error messages appear in a red box at the top of the form and automatically disappear after 5 seconds

4. **Successful Login**
   - After entering correct credentials, you'll be redirected to the homepage
   - The homepage greeting will display "Hello, [First Name]" based on the logged-in user
   - Example: If logged in as "Demo User 1", it shows "Hello, Demo"

---

### Sign Up Process (Demo Restriction)

1. **Navigate to Sign Up Page**
   - From the sign in page, click "Sign Up" link at the bottom
   - Or navigate to `pages/signup.html`

2. **Attempt to Create Account**
   - Fill in Email, Username, and Password fields
   - **Note:** For demo purposes, new account creation is disabled
   - You'll see an error message: "For demo purposes, please use an existing account. Check DEMO_SCRIPT.md for available accounts."

3. **Use Existing Account Instead**
   - Click "Sign In" link to go back to sign in page
   - Use one of the hardcoded demo accounts listed above

---

### Guest Mode

1. **Access Guest Mode**
   - From the welcome page (`index.html`), click "Continue as a Guest"
   - This automatically logs you in as "Guest User"
   - Homepage will display "Hello, Guest"

2. **Guest Account Details**
   - Guest has the same itinerary access as other users
   - No password required
   - Can access all features

---

## Homepage Personalization

### Displaying User Name

- After logging in, the homepage greeting automatically updates:
  - **Logged in as "Demo User 1":** Shows "Hello, Demo"
  - **Logged in as "Alice Johnson":** Shows "Hello, Alice"
  - **Logged in as "Bob Smith":** Shows "Hello, Bob"
  - **Logged in as Guest:** Shows "Hello, Guest"

- The name is extracted from the user's display name (first word only)
- If no user is logged in, defaults to "Hello, Guest"

---

## Itinerary Edit & Add Functionality

### Overview
This demo shows how to edit Calgary Zoo timings with conflict detection and add a new restaurant (River Café) to the itinerary.

---

## Step-by-Step Demo Flow

### Part 1: Adding River Café (New Restaurant) - Manual Entry

1. **Start on Itinerary Page**
   - Open the itinerary page for July 14, 2026
   - Point out: "Currently, we have 4 events scheduled: Calgary Zoo at 10:00, Peace Bridge at 13:00, Ten Foot Henry at 17:15, and Avesta Shawarma at 19:00"
   - Say: "I want to add a breakfast at River Café before the Calgary Zoo visit"

2. **Click the Plus (+) Button**
   - Click the "+" button in the top right corner
   - This opens the "Add Event" page

3. **Click "Add Event Manually"**
   - Click the "Add event manually" button at the top
   - This navigates to the edit form

4. **Fill in Event Title**
   - In the **Title** field, type "River Cafe" (or "River Café")
   - Say: "I'm entering the restaurant name"

5. **Set the Date and Time**
   - **Date**: Should already be set to July 14, 2026 (or set it manually)
   - **Start Time**: Set to "08:00" (morning before Calgary Zoo)
   - **End Time**: Set to "09:30" (giving 30 minutes before Calgary Zoo)
   - Say: "I'm scheduling it for breakfast, from 8:00 AM to 9:30 AM, which gives us time to get to the Calgary Zoo by 10:00 AM"

6. **Location Field - Dropdown Appears**
   - Click in the **Location** field
   - Point out: "Notice that a dropdown appears automatically"
   - Say: "Because I typed 'River Cafe' as the title, the system suggests the location"
   - Show the dropdown with the option: "25 Prince's Island Park, SW, Calgary, AB T2P 0R1"
   - **Option A - Use Suggested Location**:
     - Click on the suggested location in the dropdown
     - Say: "I can select the suggested location from the dropdown"
     - Point out: "The location field is now filled automatically"
   - **Option B - Enter Custom Location**:
     - Say: "Or I can ignore the dropdown and type my own location if I want"
     - Type a different address to demonstrate

7. **Add Notes (Optional)**
   - In the **Notes** field, you can add any additional notes
   - Example: "Bring hat" or leave it blank
   - Say: "Notes are optional, so I can add them or skip"

8. **Check for Conflicts**
   - The system automatically checks for time conflicts as you enter times
   - Say: "Notice that there are no conflicts because 8:00-9:30 is before all other events"
   - Point out: "No yellow warning appears, so we're good to go"

9. **Save the Event**
   - Click "Save Changes" button
   - Say: "This saves the event and adds it to the itinerary"

10. **Verify Addition with Image**
    - You'll be redirected back to the itinerary page
    - Point out: "River Café now appears at 8:00 AM with its image displayed"
    - Show: River Café (with riverCafe.png image) → Calgary Zoo → Peace Bridge → Ten Foot Henry → Avesta Shawarma
    - Highlight: "The event card automatically shows the River Café image because the system recognizes it"

---

### Part 2: Editing Calgary Zoo Timing (with Conflict Detection)

1. **Navigate to Calgary Zoo Event**
   - On the itinerary page, find the Calgary Zoo event card
   - Point out: "Calgary Zoo is currently scheduled from 10:00 AM to 1:00 PM"

2. **Click the Edit Button (✏️)**
   - Click the pencil icon (✏️) on the Calgary Zoo event card
   - Say: "I want to adjust the timing. Maybe we want to arrive a bit later or stay longer"

3. **Edit the Time**
   - **Option A - Create a Conflict (Demo Warning)**:
     - Change Start Time to "11:00"
     - Change End Time to "14:00"
     - Say: "If I change it to 11:00-14:00, notice that..."
   - **⚠️ Conflict Warning Appears**
     - Point out the yellow warning box that appears
     - Say: "The system detects that this new time (11:00-14:00) conflicts with Peace Bridge, which is scheduled from 13:00-14:00"
     - Show the conflict list: "Peace Bridge (13:00 - 14:00)"
     - Explain: "The system is warning us that there's an overlap. We have two options:"
       - "Option 1: Adjust the time to avoid the conflict"
       - "Option 2: Proceed anyway if we want to override (not recommended)"

4. **Adjust to Avoid Conflict**
   - Change Start Time back to "10:00"
   - Change End Time to "12:30"
   - Say: "Let me adjust it to end at 12:30 instead, which gives us a 30-minute buffer before Peace Bridge"
   - Point out: "The conflict warning disappears because there's no longer an overlap"

5. **Alternative: Extend without Conflict**
   - **Option B - Valid Change**:
     - Change Start Time to "09:30"
     - Change End Time to "13:30"
     - Say: "Actually, let me try starting earlier and ending later"
   - **⚠️ Conflict Warning Appears Again**
     - Point out: "Now we have a conflict because 13:30 overlaps with Peace Bridge (13:00-14:00)"
   - **Fix the Conflict**:
     - Change End Time to "12:45"
     - Say: "Let me end at 12:45 to avoid any conflicts"
     - Show: Warning disappears

6. **Save the Changes**
   - Click "Save Changes" button
   - Say: "The system will save the updated timing and automatically sort events by time"

7. **Verify Updated Schedule**
   - You'll see the updated itinerary
   - Point out: "Calgary Zoo now shows the new timing, and all events remain in chronological order"

---

### Part 3: Deleting Events with Undo Functionality

1. **Navigate to an Event Detail Page**
   - On the itinerary page, click on any event card (e.g., Peace Bridge)
   - Say: "Clicking on an event takes you to its detail page where you can see all the information and manage it"

2. **View Event Details**
   - Point out the detail page shows:
     - Full event title
     - Date and time
     - Location/address
     - Event image
     - Edit and Delete buttons at the bottom

3. **Click the Delete Button**
   - Scroll down to see the action buttons at the bottom of the card
   - Click the "Delete" button (red button)
   - Say: "I can delete an event that's no longer needed from the detail page"

4. **Confirm Deletion**
   - A confirmation dialog appears: "Are you sure you want to delete '[Event Name]'?"
   - Click "OK" to confirm
   - Say: "This confirmation prevents accidental deletions"

5. **Redirect to Itinerary Page**
   - Point out: "After deletion, you're automatically redirected back to the itinerary page"
   - Say: "The event card has been removed from the timeline"

6. **Undo Notification Appears**
   - Point out the dark notification bar at the top of the itinerary page
   - Say: "A notification appears at the top showing 'Event deleted' with an 'Undo' button"
   - Highlight: "This gives you a chance to undo the deletion if it was a mistake"
   - Explain: "You have 5 seconds to undo before it becomes permanent"

7. **Click Undo**
   - Click the "Undo" button in the notification
   - Say: "Let me undo that deletion"
   - Point out: "The event is restored to its original position in the timeline"
   - Explain: "This is perfect for accidental deletions"

8. **Automatic Timeout (Optional Demo)**
   - Say: "If you don't click undo within 5 seconds, the notification automatically disappears and the deletion becomes permanent"
   - To demonstrate: Delete another event and let the notification timeout
   - Point out: "After 5 seconds, the notification disappears and the deletion is permanent"

---

## Key Features to Highlight

### ✅ Conflict Detection
- **Automatic Detection**: The system checks for time overlaps in real-time
- **Visual Warning**: Yellow warning box clearly shows conflicts
- **Conflict List**: Shows exactly which events conflict and their times
- **User Choice**: Allows saving despite conflicts (with confirmation) or adjusting times

### ✅ Event Management
- **Add New Events**: Easy to add restaurants or activities
- **Edit Existing Events**: Quick edit with pencil icon
- **Automatic Sorting**: Events always sorted by time
- **Data Persistence**: Changes saved and persist across page reloads

### ✅ Delete & Undo
- **Safe Deletion**: Confirmation dialog prevents accidental deletions
- **Undo Functionality**: Notification with undo button appears after deletion
- **Time-limited Undo**: 5-second window to undo before deletion becomes permanent
- **Visual Feedback**: Clear notification bar at top of screen
- **Automatic Cleanup**: Notification auto-dismisses after timeout

### ✅ User Experience
- **Intuitive Interface**: Clear edit and delete buttons on each event
- **Real-time Feedback**: Immediate conflict warnings and deletion confirmations
- **Easy Navigation**: Simple back/save flow
- **Form Validation**: Prevents invalid time ranges
- **Forgiving UX**: Undo feature reduces anxiety about making mistakes

---

## Troubleshooting Notes for Demo

1. **If conflicts don't show**: Make sure the time ranges actually overlap
   - Example: 10:00-13:00 conflicts with 13:00-14:00 (same end/start time)
   - Example: 11:00-14:00 overlaps with 13:00-14:00 (overlap in the middle)

2. **If data doesn't persist**: Check browser's sessionStorage is enabled
   - Data is saved in sessionStorage (cleared when browser closes)

3. **To reset demo data**: Clear browser sessionStorage or refresh the page after clearing

---

## Demo Talking Points

- "This system helps prevent scheduling conflicts automatically"
- "You can easily adjust your itinerary on the go"
- "The conflict warning gives you visibility before making changes"
- "All events are automatically sorted chronologically"
- "You can add new experiences like restaurants without worrying about time management"
- "The delete feature has built-in safety with confirmation dialogs"
- "The undo functionality gives you a 5-second window to recover from accidental deletions"
- "This makes it safe to make changes without fear of losing important information"

---

## Expected Results

### After Adding River Café:
- River Café at 08:00 - 09:30
- Calgary Zoo at 10:00 - 13:00
- Peace Bridge at 13:00 - 14:00
- Ten Foot Henry at 17:15 - 19:00
- Avesta Shawarma at 19:00 - 20:00

### After Editing Calgary Zoo:
- River Café at 08:00 - 09:30
- Calgary Zoo at 09:30 - 12:45 (or your chosen time)
- Peace Bridge at 13:00 - 14:00
- Ten Foot Henry at 17:15 - 19:00
- Avesta Shawarma at 19:00 - 20:00

---

**Note**: Make sure the River Café image (riverCafe.png) is in the images folder before running the demo.

