(() => {
  const supported = new Set(["en", "tr"]);
  const storageKey = "numera-language";
  const requested = new URLSearchParams(window.location.search).get("lang");
  let saved;
  try {
    saved = localStorage.getItem(storageKey);
  } catch {
    // Language selection also works when browser storage is unavailable.
  }

  const preferred = (
    navigator.languages?.length ? navigator.languages : [navigator.language]
  )
    .map((language) => language?.toLowerCase().split("-")[0])
    .find((language) => supported.has(language));
  const language = supported.has(requested)
    ? requested
    : supported.has(saved)
      ? saved
      : preferred || "en";

  // Run in the head so only the selected translation appears on first paint.
  document.documentElement.lang = language;
  if (supported.has(requested)) {
    try {
      localStorage.setItem(storageKey, language);
    } catch {
      // The URL carries the choice when storage is unavailable.
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const content = document.querySelector(
      `[data-localized][lang="${language}"]`,
    );
    document.title = content.querySelector("h1").textContent;
    const description = document.querySelector('meta[name="description"]');
    if (description && language === "tr") {
      description.content = "Numera için destek ve iletişim bilgileri.";
    }
    document.querySelectorAll("[data-language]").forEach((link) => {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", link.dataset.language);
      link.href = url.href;
      if (link.dataset.language === language)
        link.setAttribute("aria-current", "true");
    });
    document
      .querySelectorAll('[data-localized] a[href^="/numera/"]')
      .forEach((link) => {
        const url = new URL(link.href);
        url.searchParams.set("lang", language);
        link.href = url.href;
      });
  });
})();
