# TraventureYYC - Mobile App

A comprehensive travel and event planning application for Calgary, Alberta.

## Project Structure

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

## Features

### Authentication
- Sign In / Sign Up pages
- Social login options (Google, Apple, Facebook)
- Guest mode access

### Homepage
- User profile section
- Upcoming events card
- Quick access cards:
  - Food Spots
  - Events
  - Currency Conversion
  - Favorites
  - Activities
  - Itinerary

### Food Discovery
- Search functionality
- Category filters
- Popular restaurants listing
- Restaurant details and ratings

### Events
- Local events listing
- Event details
- Add to favorites
- Add to itinerary

### Attractions
- Attractions listing
- Search functionality
- Add to favorites
- Add to itinerary

### Itinerary Management
- Daily timeline view
- Date selector
- Add events manually or from categories
- Edit event details
- View event details

### Currency Conversion
- Multi-currency support
- Real-time exchange rates (mock)
- Swap currencies
- Conversion calculator

### Emergency Services
- 911 emergency call
- Hospitals and clinics
- Embassies and consulates
- Non-emergency contacts
- Emergency contact list

### Favorites
- Tabbed view (Restaurants, Events, Activities)
- Saved items management
- Quick access to favorite places

### Settings
- User profile management
- Account settings
- Personalization options
- Privacy & Safety settings
- Trip & Sharing options

## Design System

### Colors
- Primary: `rgba(180, 113, 107, 1)` - Pink/brown
- Primary Light: `rgba(236, 207, 195, 1)` - Light pink
- Background: `rgba(255, 255, 255, 1)` - White
- Card Background: `rgba(255, 235, 234, 1)` - Light pink
- Emergency Red: `rgba(220, 53, 69, 1)` - Red
- Text Dark: `rgba(26, 26, 26, 1)` - Dark gray
- Text Accent: `rgba(128, 61, 61, 1)` - Brown

### Typography
- Primary Font: SF Compact Rounded (system fallback)
- Secondary Font: SF Compact (system fallback)
- Display Font: Neucha

### Spacing
- XS: 4px
- SM: 8px
- MD: 16px
- LG: 24px
- XL: 32px
- 2XL: 48px

### Border Radius
- SM: 10px
- MD: 15px
- LG: 30px
- XL: 45px
- Full: 1000px

## Usage

1. Open `index.html` in a web browser to start the application
2. Navigate through the app using the bottom navigation bar
3. Use the links and buttons to move between pages

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for mobile devices (375px width)

## Notes

- This is a static HTML/CSS implementation
- No backend integration (forms submit to same page)
- Map functionality requires integration with mapping service (Google Maps, Mapbox, etc.)
- Currency conversion uses mock exchange rates
- Images are placeholder images from the `images/` folder
- All navigation is handled via HTML links


## Development

To modify styles:
1. Edit CSS files in the `css/` folder
2. Main stylesheet is `css/main.css` which imports all others
3. Component-specific styles are in `css/components.css`

To add new pages:
1. Create new HTML file in `pages/` folder
2. Use the same structure as existing pages
3. Link to it from relevant pages
4. Add navigation items if needed

## Credits

- Design based on Figma mockups
- Images from `images/` folder
- Icons from SVG files in `images/` folder

