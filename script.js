/**
 * Modern Developer Site Scripts
 * Handles Dark/Light Theme Switching & Interactive UX
 */

(function () {
  'use strict';

  // Initialize theme from localStorage or system preference
  const THEME_STORAGE_KEY = 'nicklu_site_theme';
  const metaColorScheme = document.querySelector('meta[name="color-scheme"]');

  function getStoredTheme() {
    return localStorage.getItem(THEME_STORAGE_KEY) || 'auto';
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (metaColorScheme) metaColorScheme.setAttribute('content', 'dark');
    } else if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      if (metaColorScheme) metaColorScheme.setAttribute('content', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (metaColorScheme) metaColorScheme.setAttribute('content', 'light dark');
    }
    updateToggleButton(theme);
  }

  function updateToggleButton(theme) {
    const btn = document.getElementById('theme-toggle-btn');
    if (!btn) return;

    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let label = '外觀';
    let icon = '🌓';

    if (theme === 'dark') {
      label = '深色';
      icon = '🌙';
    } else if (theme === 'light') {
      label = '淺色';
      icon = '☀️';
    } else {
      label = isSystemDark ? '自動 (深色)' : '自動 (淺色)';
      icon = '🌓';
    }

    btn.innerHTML = `<span aria-hidden="true">${icon}</span> <span>${label}</span>`;
    btn.setAttribute('aria-label', `切換網站外觀主題（目前為：${label}）`);
  }

  function toggleNextTheme() {
    const current = getStoredTheme();
    let next;
    if (current === 'auto') {
      // If auto, toggle to opposite of current system
      const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      next = isSystemDark ? 'light' : 'dark';
    } else if (current === 'dark') {
      next = 'light';
    } else if (current === 'light') {
      next = 'auto';
    } else {
      next = 'auto';
    }

    if (next === 'auto') {
      localStorage.removeItem(THEME_STORAGE_KEY);
    } else {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    }
    applyTheme(next);
  }

  // Set up listeners once DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(getStoredTheme());

    const btn = document.getElementById('theme-toggle-btn');
    if (btn) {
      btn.addEventListener('click', toggleNextTheme);
    }

    // Listen for OS system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (getStoredTheme() === 'auto') {
        applyTheme('auto');
      }
    });
  });
})();
