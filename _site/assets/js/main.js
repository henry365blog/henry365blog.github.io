// Load the selected language
async function loadLanguage(lang) {
    try {
      const response = await fetch(`/i18n/${lang}.json`);
      const translations = await response.json();
      applyTranslations(translations);
    } catch (error) {
      console.error("Error loading language file:", error);
    }
  }
  
  // Apply translations to elements
  function applyTranslations(translations) {
    document.querySelectorAll("[data-i18n]").forEach(element => {
      const key = element.getAttribute("data-i18n");
      if (translations[key]) {
        element.innerText = translations[key];
      }
    });
  }
  
  // Handle language selection
  document.getElementById("language-selector").addEventListener("change", (event) => {
    const selectedLang = event.target.value;
    localStorage.setItem("language", selectedLang);
    loadLanguage(selectedLang);
  });
  
  // Load saved language on page load
  document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("language") || "en";
    document.getElementById("language-selector").value = savedLang;
    loadLanguage(savedLang);
  });