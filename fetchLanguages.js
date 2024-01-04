const fetch = require("node-fetch").default;
const fs = require("fs");
const path = require("path");

const LOCALES_DIR = path.join("public", "locales");

async function fetchAndCreateTranslations(langId, shortCut) {
  try {
    const response = await fetch(
      `https://api4z.suwa.io/api/Settings/GetStaticWords?lang=${langId}`
    );
    if (!response.ok)
      throw new Error(
        `Failed to fetch translations for lang ID ${langId}: ${response.status}`
      );
    const translations = await response.json();

    const langDir = path.join(LOCALES_DIR, shortCut);
    if (!fs.existsSync(langDir)) {
      fs.mkdirSync(langDir);
    }

    // Generate the translations file
    const translationsFile = path.join(langDir, "common.json");
    fs.writeFileSync(translationsFile, JSON.stringify(translations, null, 2));
  } catch (error) {
    console.error(
      `Error fetching or writing translations for lang ID ${langId}:`,
      error
    );
  }
}

async function fetchLanguages() {
  try {
    const response = await fetch(
      "https://api4z.suwa.io/api/Settings/GetAllLanguages?pagenum=1&pagesize=50"
    );
    if (!response.ok) throw new Error(`API call failed: ${response.status}`);
    const languages = await response.json();

    if (!fs.existsSync(LOCALES_DIR)) {
      fs.mkdirSync(LOCALES_DIR);
    }

    for (const lang of languages) {
      if (lang.publishedForUser) {
        await fetchAndCreateTranslations(lang.id, lang.shortCut);
      }
    }

    console.log("Language directories and common.json files created.");
  } catch (error) {
    console.error("Failed to fetch languages:", error);
  }
}

fetchLanguages();
