# How to Clear Cached Data to See Updated Peace Bridge Time

The Peace Bridge time has been updated from 13:00-14:00 to 15:00-16:00 in the code, but your browser may be showing old cached data from sessionStorage.

## Method 1: Clear Session Storage in Browser Console (Recommended)

1. **Open your browser's Developer Console:**
   - **Chrome/Edge**: Press `F12` or `Ctrl+Shift+J` (Windows/Linux) or `Cmd+Option+J` (Mac)
   - **Firefox**: Press `F12` or `Ctrl+Shift+K` (Windows/Linux) or `Cmd+Option+K` (Mac)
   - **Safari**: Press `Cmd+Option+C` (Mac) - you may need to enable Developer menu first

2. **Clear Session Storage:**
   - In the Console tab, type the following command and press Enter:
   ```javascript
   sessionStorage.clear()
   ```

3. **Refresh the Page:**
   - Press `F5` or click the refresh button
   - Navigate back to the itinerary page
   - You should now see Peace Bridge at 15:00-16:00

## Method 2: Use Browser DevTools Application/Storage Tab

1. **Open DevTools** (F12)
2. **Go to Application Tab** (Chrome) or **Storage Tab** (Firefox)
3. **Click on "Session Storage"** in the left sidebar
4. **Select your domain** (localhost:8000 or file://)
5. **Right-click** and select "Clear" or delete the `itineraryData` item
6. **Refresh the page**

## Method 3: Close and Reopen Browser

1. **Close all browser windows/tabs**
2. **Reopen the browser**
3. **Navigate to the itinerary page**
4. SessionStorage will be cleared when the browser session ends

## Verify the Change

After clearing sessionStorage, you should see:
- **Peace Bridge**: 15:00 - 16:00 (instead of 13:00 - 14:00)

The updated schedule for July 14, 2026 should show:
- Calgary Zoo: 10:00 - 13:00 (or 11:00 - 13:00 if you've edited it)
- Peace Bridge: 15:00 - 16:00 ✨ (NEW TIME)
- Ten Foot Henry: 17:15 - 19:00
- Avesta Shawarma: 19:00 - 20:00

