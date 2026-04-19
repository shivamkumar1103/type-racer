const NORMALIZED_CHAR_MAP = {
  "\u2018": "'",
  "\u2019": "'",
  "\u201C": '"',
  "\u201D": '"',
  "\u2013": "-",
  "\u2014": "-",
  "\u2212": "-",
  "\u00A0": " ",
  "\u202F": " ",
  "\u2007": " ",
};

function normalizeTypingChar(char) {
  if (!char) return "";

  const normalized = char.normalize("NFC");
  return NORMALIZED_CHAR_MAP[normalized] ?? normalized;
}

function normalizeTypingValue(value) {
  if (!value) return "";

  return value
    .normalize("NFC")
    .split("")
    .map((char) => NORMALIZED_CHAR_MAP[char] ?? char)
    .join("");
}

export { normalizeTypingChar, normalizeTypingValue };
