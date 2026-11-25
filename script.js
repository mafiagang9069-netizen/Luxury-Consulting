/* ==========================================================================
   AURELIA & VANCE — Vanilla JS Interactions
   Template by PixelNestByNS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Toggle
  const burger = document.getElementById('luxBurger');
  const mobileMenu = document.getElementById('luxMobileMenu');

  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      const expanded = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!expanded));
      mobileMenu.hidden = expanded;
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        burger.setAttribute('aria-expanded', 'false');
        mobileMenu.hidden = true;
      });
    });
  }

  // 2. Interactive Practice Pillars Tab Switcher
  const tabs = document.querySelectorAll('.practice-tab');
  const panels = document.querySelectorAll('.practice-panel');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetId = `panel-${tab.dataset.tab}`;

      tabs.forEach((t) => {
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');

      panels.forEach((panel) => {
        const isMatch = panel.id === targetId;
        panel.hidden = !isMatch;
        panel.classList.toggle('is-active', isMatch);
      });
    });
  });

  // 3. Mandate Dossier Accordion
  const dossierTriggers = document.querySelectorAll('.dossier-trigger');
  dossierTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const expanded = trigger.getAttribute('aria-expanded') === 'true';
      const body = trigger.nextElementSibling;
      trigger.setAttribute('aria-expanded', String(!expanded));
      if (body) {
        body.hidden = expanded;
      }
    });
  });

  // 4. Private Correspondence Form Validation
  /*
   * FORM INTEGRATION NOTE:
   * Static HTML templates validate inputs on the client side in Demo Mode.
   * Replace action="#" on #luxForm with your Formspree, Basin, or Netlify Forms endpoint
   * to receive private consultation inquiries directly in your inbox.
   */
  const luxForm = document.getElementById('luxForm');
  const luxFeedback = document.getElementById('luxFeedback');

  if (luxForm && luxFeedback) {
    luxForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = luxForm.name.value.trim();
      const org = luxForm.organization.value.trim();
      const email = luxForm.email.value.trim();
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !org || !emailValid) {
        luxFeedback.textContent = 'Please provide your name, organization, and a valid email address.';
        luxFeedback.className = 'lux-feedback is-error';
        return;
      }

      luxFeedback.textContent =
        'Validation confirmed (Demo Mode): Connect Formspree or Netlify Forms in index.html for live routing.';
      luxFeedback.className = 'lux-feedback is-success';
      luxForm.reset();
    });
  }
});
