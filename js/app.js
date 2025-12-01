// js/app.js
document.addEventListener('DOMContentLoaded', () => {
  setupSearchFilters();
  setupWishlistToggles();
  setupAddToItineraryButtons();
  setupBottomNavHighlight();
  setupCurrencyConverter();     // ✅ NEW
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

const FAVORITES_KEY = 'traventure_favorites';

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
  // Use title as a simple id – good enough for this prototype
  const id = cardEl.dataset.id || title;
  const type = cardEl.dataset.type || 'item';
  return { id, title, subtitle, type };
}

function applyFavoriteState(cardEl, favorites) {
  const data = getCardData(cardEl);
  if (!data) return;
  const isFav = favorites.some(f => f.id === data.id);
  if (isFav) {
    cardEl.classList.add('is-favorite');
  } else {
    cardEl.classList.remove('is-favorite');
  }
}

function setupWishlistToggles() {
  const favorites = loadFavorites();

  // Attach click handlers to heart icons on list items
  document.querySelectorAll('.list-item').forEach(cardEl => {
    const heart = cardEl.querySelector('.list-item__actions .list-item__icon');
    if (!heart) return;

    // Initial state based on stored favorites
    applyFavoriteState(cardEl, favorites);

    heart.style.cursor = 'pointer';
    heart.addEventListener('click', () => {
      const data = getCardData(cardEl);
      if (!data || !data.id) return;

      let current = loadFavorites();
      const index = current.findIndex(item => item.id === data.id);

      if (index >= 0) {
        // Remove from favorites
        current.splice(index, 1);
      } else {
        // Add to favorites
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

function setupAddToItineraryButtons() {
  // Plus buttons live inside .list-item__actions and use "+" as text
  document.querySelectorAll('.list-item').forEach(cardEl => {
    const actionSpans = cardEl.querySelectorAll('.list-item__actions span');

    actionSpans.forEach(span => {
      if (span.textContent.trim() === '+') {
        span.style.cursor = 'pointer';

        span.addEventListener('click', () => {
          const data = getCardData(cardEl);
          if (!data || !data.id) return;

          const items = loadQuickAdds();
          items.push({
            ...data,
            addedAt: new Date().toISOString()
          });
          saveQuickAdds(items);

          // Tiny inline feedback – good enough for the prototype
          span.textContent = '✓';
          setTimeout(() => {
            span.textContent = '+';
          }, 1000);
        });
      }
    });
  });
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
document.getElementById("confirmCallBtn").addEventListener("click", () => {
  window.location.href = `tel:${currentCallNumber}`;
});