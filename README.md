# KSCW Spielplanung - Team Matches Calendar

A comprehensive web application for managing and displaying team matches, absences, and gym closures for KSC Wiedikon sports teams.

## Overview

This application provides a dynamic calendar interface for viewing and managing sports team schedules, including volleyball and basketball matches, team absences, and gym availability. It integrates with Google Sheets for data management and offers both calendar and list views.

## Features

### 🏐 **Multi-Sport Support**
- Volleyball (VB) and Basketball (BB) team management
- Sport-specific indicators and filtering
- Championship/league tracking

### 📅 **Calendar View**
- Monthly calendar layout (September 2025 - May 2026)
- Color-coded team matches with home/away indicators
- Special date highlighting (Spielsamstag)
- Gym closure overlays
- Cup match indicators (🏆 Swiss Volley Cup, 🥈 Züri Cup)

### 📋 **List View**
- Organized by date or by team
- Detailed match information in table format
- Sortable by date, time, and team

### 📱 **Responsive Design**
- Mobile-optimized interface
- Touch-friendly controls
- Adaptive layout for different screen sizes
- Manual desktop/mobile view toggle

### 🔍 **Advanced Filtering**
- Filter by sport (Volleyball/Basketball)
- Filter by team
- Filter by match type (Home/Away)
- Toggle absence visibility
- Real-time filter application

### 📊 **Data Management**
- Google Sheets integration
- Real-time data updates
- Team color customization
- Absence priority management
- Gym closure tracking

## Technical Details

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Bootstrap 5.3.2
- **Data Source**: Google Sheets API
- **Responsive**: Mobile-first design with CSS media queries
- **No Dependencies**: Pure client-side application

## Usage

### Viewing Matches
1. Open `index.html` in a web browser
2. Use the calendar view to see monthly schedules
3. Switch to list view for detailed information
4. Use filters to focus on specific teams or sports

### Data Updates
- Data is automatically loaded from Google Sheets
- Click the "🔄 Refresh" button to reload data
- Changes in the spreadsheet are reflected in real-time

### Mobile Usage
- Automatically detects mobile devices
- Use mobile view toggle for optimal mobile experience
- Touch-friendly interface for mobile devices

## File Structure

```
kscw_spielplanung/
├── index.html          # Main application file
├── README.md           # This file
└── .git/               # Git repository
```

## Data Sources

The application connects to Google Sheets with the following ranges:
- **Team_Matches**: Main match schedule data
- **Gym Closed**: Gym closure dates and reasons
- **Team_Preferences**: Team absence requests and priorities
- **Übersicht VB + BB**: Team colors and full names

## Browser Compatibility

- Modern browsers with ES6+ support
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Development

This is a standalone web application that can be run locally without a server. Simply open `index.html` in any modern web browser.

## License

This project is for internal use by KSC Wiedikon.
