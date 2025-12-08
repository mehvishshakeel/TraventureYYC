// js/app.js
document.addEventListener('DOMContentLoaded', () => {
  setupSearchFilters();
  setupWishlistToggles();
  setupAddToItineraryButtons();
  setupAddEventTickButtons();   // ✅ NEW
  setupBottomNavHighlight();
  setupCurrencyConverter();     // ✅ NEW
  hideSignUpIfLoggedIn();       // ✅ NEW
});



/* -------------------------
   1. SEARCH FILTERS
   ------------------------- */

function setupSearchFilters() {
  const inputs = document.querySelectorAll('.search-bar__input');

  inputs.forEach(input => {
    input.addEventListener('input', event => {
      const query = event.target.value.trim().toLowerCase();
      const content = event.target.closest('.content');
      if (!content) return;

      const items = content.querySelectorAll('.list-item');
      items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? '' : 'none';
      });
    });
  });
}

/* -------------------------
   2. FAVORITES / WISHLIST
   ------------------------- */

const FAVORITES_KEY = 'favorites';

function loadFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.warn('Could not read favorites from localStorage', e);
    return [];
  }
}

function saveFavorites(favorites) {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (e) {
    console.warn('Could not save favorites to localStorage', e);
  }
}

function getCardData(cardEl) {
  if (!cardEl) return null;
  const title = cardEl.querySelector('.list-item__title')?.textContent.trim() || '';
  const subtitle = cardEl.querySelector('.list-item__subtitle')?.textContent.trim() || '';
  const id = cardEl.dataset.id || title;
  const type = cardEl.dataset.type || 'item';
  const image    = cardEl.querySelector('.list-item__image')?.src || '';
  return { id, title, subtitle, type };
}

function applyFavoriteState(cardEl, favorites) {
  const data = getCardData(cardEl);
  if (!data) return;

  const isFav = favorites.some(f => f.id === data.id);
  const heartBtn = cardEl.querySelector('.list-item__fav-btn');

  if (heartBtn) {
    heartBtn.classList.toggle('is-active', isFav);
    heartBtn.textContent = isFav ? '♥' : '♡';
  }

  cardEl.classList.toggle('is-favorite', isFav);
}

function setupWishlistToggles() {
  const favorites = loadFavorites();

  document.querySelectorAll('.list-item').forEach(cardEl => {
    const heartBtn = cardEl.querySelector('.list-item__fav-btn');
    if (!heartBtn) return;

    // initial state
    applyFavoriteState(cardEl, favorites);

    heartBtn.style.cursor = 'pointer';
    heartBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // don’t open the detail overlay

      const data = getCardData(cardEl);
      if (!data || !data.id) return;

      let current = loadFavorites();
      const index = current.findIndex(item => item.id === data.id);

      if (index >= 0) {
        // remove
        current.splice(index, 1);
      } else {
        // add
        current.push(data);
      }

      saveFavorites(current);
      applyFavoriteState(cardEl, current);
    });
  });
}


/* -------------------------
   3. ADD TO ITINERARY (+)
   ------------------------- */

const ITINERARY_KEY = 'traventure_quick_add';

function loadQuickAdds() {
  try {
    const raw = localStorage.getItem(ITINERARY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.warn('Could not read quick-add items', e);
    return [];
  }
}

function saveQuickAdds(items) {
  try {
    localStorage.setItem(ITINERARY_KEY, JSON.stringify(items));
  } catch (e) {
    console.warn('Could not save quick-add items', e);
  }
}

function addItemToItinerary(data) {
  if (!data || !data.id) return;

  const items = loadQuickAdds();
  items.push({
    ...data,
    addedAt: new Date().toISOString()
  });
  saveQuickAdds(items);
}


function setupAddToItineraryButtons() {
  // Buttons live inside .list-item__actions with class .add-to-itinerary-btn
  document.querySelectorAll('.list-item').forEach(cardEl => {
    const addBtn = cardEl.querySelector('.list-item__actions .add-to-itinerary-btn');
    if (!addBtn) return;

    addBtn.style.cursor = 'pointer';

    addBtn.addEventListener('click', (event) => {
      event.stopPropagation(); // don't trigger card click / navigation

      const data = getCardData(cardEl);
      if (!data || !data.id) return;

      const items = loadQuickAdds();
      items.push({
        ...data,
        addedAt: new Date().toISOString()
      });
      saveQuickAdds(items);

      // Tiny inline feedback – swap + to ✓
      addBtn.textContent = '✓';
      setTimeout(() => {
        addBtn.textContent = '✓'; // you can change back to "+" if you prefer
      }, 800);
    });
  });
}

/* -------------------------
   UNIVERSAL UNSAVE MODAL
--------------------------*/

function openUnsaveModal(id, onConfirm) {
  const modal = document.getElementById("unsaveModal");
  if (!modal) return;

  modal.style.display = "flex";

  const yesBtn = document.getElementById("unsaveYesBtn");
  const noBtn = document.getElementById("unsaveNoBtn");

  yesBtn.onclick = () => {
    onConfirm();
    modal.style.display = "none";
  };

  noBtn.onclick = () => {
    modal.style.display = "none";
  };
}




/* ---------------------------------------
   4. OPEN CALL MODAL (EMERGENCY CONTACTS)
   --------------------------------------- */
let currentCallNumber = "";

// Opens modal
function openCallModal(title, number, description) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalDescription").textContent = description;
  document.getElementById("modalNumberDisplay").textContent = number;

  currentCallNumber = number;

  document.getElementById("callModal").style.display = "flex";
}

// Closes modal
function closeCallModal() {
  document.getElementById("callModal").style.display = "none";
}

// Confirm call 

const confirmCallBtn = document.getElementById("confirmCallBtn");
if (confirmCallBtn) {
  confirmCallBtn.addEventListener("click", () => {
    window.location.href = `tel:${currentCallNumber}`;
  });
}

/* ---------------------------------------
   5. OPEN LANGUAGE FEATURE MODAL
   --------------------------------------- */

// LANGUAGE DROPDOWN
document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".language-selector");
  if (!dropdown) return;

  const btn = dropdown.querySelector(".lang-btn");
  const menu = dropdown.querySelector(".lang-menu");
  const options = dropdown.querySelectorAll(".lang-option");

  // Toggle menu
  btn.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  // Select language → show modal
  options.forEach(option => {
    option.addEventListener("click", () => {
      openLangModal();
      menu.classList.remove("show");
    });
  });

  // Click outside = close dropdown
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".language-selector")) {
      menu.classList.remove("show");
    }
  });
});

// MODAL
function openLangModal() {
  document.getElementById("langModal").style.display = "flex";
}

function closeLangModal() {
  document.getElementById("langModal").style.display = "none";
}
// Confirm call  (only if the button exists on this page)
document.addEventListener('DOMContentLoaded', () => {
  const confirmCallBtn = document.getElementById("confirmCallBtn");
  if (confirmCallBtn) {
    confirmCallBtn.addEventListener("click", () => {
      if (currentCallNumber) {
        window.location.href = `tel:${currentCallNumber}`;
      }
    });
  }
});


function setupAddToItineraryButtons() {
  const buttons = document.querySelectorAll('.list-item .add-to-itinerary-btn');
  if (!buttons.length) return;

  // Preset details for each attraction (you can tweak these)
  const attractionPresets = {
    "peace-bridge": {
      title: "Peace Bridge",
      date: "2026-07-14",
      startTime: "13:00",
      endTime: "14:00",
      location: "98 Memorial Dr NW, Calgary, AB T2N 5C1"
    },
    "calgary-zoo": {
      title: "Calgary Zoo",
      date: "2026-07-11",
      startTime: "10:00",
      endTime: "13:00",
      location: "210 St. George's Drive NE, Calgary, AB T2E 7V6"
    },
    "stephen-avenue": {
      title: "Stephen Avenue Walk",
      date: "2026-07-15",
      startTime: "12:00",
      endTime: "14:00",
      location: "Stephen Ave SW, Calgary, AB"
    },
    "calgary-tower": {
      title: "Calgary Tower",
      date: "2026-07-12",
      startTime: "17:00",
      endTime: "19:00",
      location: "101 9 Ave SW, Calgary, AB T2P 1J9"
    }
    // add more here if you have more attractions
  };

  buttons.forEach(btn => {
    btn.style.cursor = 'pointer';

    btn.addEventListener('click', (event) => {
      event.stopPropagation(); // don't trigger card click

      const cardEl = btn.closest('.list-item');
      const data = getCardData(cardEl) || {};
      const id = cardEl?.dataset.id;

      // base from presets or fall back to card title only
      const preset = (id && attractionPresets[id]) || {};
      const payload = {
        title: preset.title || data.title || "",
        date: preset.date || "2026-07-14",
        startTime: preset.startTime || "10:00",
        endTime: preset.endTime || "11:00",
        location: preset.location || ""
      };

      // store for the edit page
      sessionStorage.setItem('pendingItineraryData', JSON.stringify(payload));

      // ✅ go straight to the manual edit screen
      window.location.href = 'itinerary-edit.html';
    });
  });
}




/* ---------------------------------------
   7. GLOBAL HANDLER FOR + ITINERARY BUTTONS
   --------------------------------------- */

document.addEventListener('click', (event) => {
  const addBtn = event.target.closest('.add-to-itinerary-btn');
  if (!addBtn) return;          // click wasn't on a + button

  const cardEl = addBtn.closest('.list-item');
  if (!cardEl) return;

  event.stopPropagation();      // don't trigger any card click / navigation

  const data = getCardData(cardEl);
  if (!data || !data.id) return;

  const items = loadQuickAdds();
  items.push({
    ...data,
    addedAt: new Date().toISOString()
  });
  saveQuickAdds(items);

  // Tiny visual feedback
  addBtn.textContent = '✓';
  setTimeout(() => {
    addBtn.textContent = '✓';   // keep it as tick to show it's added
  }, 600);
});

/* ---------------------------------------
   8. HIDE SIGN UP LINK IF USER IS LOGGED IN
   --------------------------------------- */

function hideSignUpIfLoggedIn() {
  try {
    const currentUserStr = sessionStorage.getItem('currentUser');
    if (currentUserStr) {
      const currentUser = JSON.parse(currentUserStr);
      // Hide sign up link if user is logged in (not a guest)
      if (currentUser && currentUser.email && currentUser.email !== 'guest@guest.com') {
        // Find all sign up links in the top bar
        const signUpLinks = document.querySelectorAll('a[href*="signup.html"]');
        signUpLinks.forEach(link => {
          // Only hide if it's in the top-bar__actions area
          if (link.closest('.top-bar__actions')) {
            link.style.display = 'none';
          }
        });
      }
    }
  } catch (e) {
    console.warn('Error checking user login status', e);
  }
}


