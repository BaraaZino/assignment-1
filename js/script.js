const Theme = (() => {
  // Handles theme selection, persistence, and system preference sync.
  const STORAGE_KEY = "portfolio-theme";

  const getPreferredTheme = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return stored;
    }

    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  };

  const applyTheme = (theme) => {
    document.body.dataset.theme = theme;
    localStorage.setItem(STORAGE_KEY, theme);
  };

  const toggleTheme = () => {
    // Swap between light and dark modes on demand.
    const next = document.body.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
  };

  const listenForSystemChanges = () => {
    if (!window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (event) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(event.matches ? "dark" : "light");
      }
    };

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handler);
    } else if (typeof mediaQuery.addListener === "function") {
      mediaQuery.addListener(handler);
    }
  };

  const init = () => {
    applyTheme(getPreferredTheme());

    const toggleButton = document.querySelector(".theme-toggle");
    if (toggleButton) {
      // Let users flip the theme manually.
      toggleButton.addEventListener("click", toggleTheme);
    }

    listenForSystemChanges();
  };

  return { init };
})();

const Greeting = (() => {
  // Populates the hero greeting with a time-aware salutation.
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  const init = () => {
    const greetingEl = document.getElementById("greeting");
    if (greetingEl) {
      greetingEl.textContent = `${getGreeting()}, welcome to my portfolio.`;
    }
  };

  return { init };
})();

const ContactForm = (() => {
  // Adds client-side validation feedback and friendly confirmation messaging.
  const init = () => {
    const form = document.getElementById("contact-form");
    const feedback = document.getElementById("form-feedback");

    if (!form || !feedback) {
      return;
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        // Highlight validation issues with a red status message.
        feedback.textContent = "Please fill out all required fields with valid information.";
        feedback.style.color = "#dc2626";
        return;
      }

      const formData = new FormData(form);
      const name = formData.get("name");

      // Thank the sender, using a fallback when the name is missing.
      feedback.textContent = `Thanks ${name || "there"}! Your message is on its way.`;
      feedback.style.color = "#16a34a";
      form.reset();
    });
  };

  return { init };
})();

const Footer = (() => {
  // Updates the footer year dynamically to keep the copyright current.
  const init = () => {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  };

  return { init };
})();

const Header = (() => {
  // Applies a scrolled state to the header after a small offset.
  const SCROLL_THRESHOLD = 16;

  const init = () => {
    const header = document.querySelector(".site-header");
    if (!header) {
      return;
    }

    const updateState = () => {
      header.classList.toggle("is-scrolled", window.scrollY > SCROLL_THRESHOLD);
    };

    updateState();
    window.addEventListener("scroll", updateState, { passive: true });
  };

  return { init };
})();

// Kick off all modules once the DOM is ready.
window.addEventListener("DOMContentLoaded", () => {
  Theme.init();
  Greeting.init();
  ContactForm.init();
  Footer.init();
  Header.init();
});
