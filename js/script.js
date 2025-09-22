const Theme = (() => {
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
      toggleButton.addEventListener("click", toggleTheme);
    }

    listenForSystemChanges();
  };

  return { init };
})();



const ContactForm = (() => {
  const init = () => {
    const form = document.getElementById("contact-form");
    const feedback = document.getElementById("form-feedback");

    if (!form || !feedback) {
      return;
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        feedback.textContent = "Please fill out all required fields with valid information.";
        feedback.style.color = "#dc2626";
        return;
      }

      const formData = new FormData(form);
      const name = formData.get("name");

      feedback.textContent = `Thanks ${name || "there"}! Your message is on its way.`;
      feedback.style.color = "#16a34a";
      form.reset();
    });
  };

  return { init };
})();

const Footer = (() => {
  const init = () => {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  };

  return { init };
})();


