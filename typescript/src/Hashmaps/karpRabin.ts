export {};

function karpRabin(pattern: string, text: string) {
  // Keeps the hash small and prevents overflow
  const PRIME = 101;
  // Total possible characters (ASCII)
  const BASE = 256;

  const m = pattern.length;
  const n = text.length;

  let patternHash = 0;
  let windowHash = 0;

  // initial hashes for the pattern and the very first window
  //   using char code
  for (let i = 0; i < m; i++) {
    patternHash = (patternHash * BASE + pattern.charCodeAt(i)) % PRIME;
    windowHash = (windowHash * BASE + text.charCodeAt(i)) % PRIME;
  }

  // "Multiplier" (BASE^(m-1) % PRIME)
  // how heavily the leading character is weighted
  //   to remove leading char
  let multiplier = 1;
  for (let i = 0; i < m - 1; i++) {
    multiplier = (multiplier * BASE) % PRIME;
  }

  // Slide the window and search
  for (let i = 0; i <= n - m; i++) {
    // if hashes match
    if (patternHash === windowHash) {
      // Confirm with a real string check to avoid collisions
      if (text.substring(i, i + m) === pattern) {
        console.log(`Match found at index: ${i}`);
      }
    }

    // THE ROLLING HASH
    if (i < n - m) {
      let oldChar = text.charCodeAt(i); // The letter leaving the window
      let newChar = text.charCodeAt(i + m); // The letter entering the window

      // Step A: Remove the old character's value
      windowHash = (windowHash - ((oldChar * multiplier) % PRIME)) % PRIME;

      // Step B: Shift everything to the left (multiply by base)
      windowHash = (windowHash * BASE) % PRIME;

      // Step C: Add the new character's value
      windowHash = (windowHash + newChar) % PRIME;

      // JavaScript modulo quirk: If the math dips into negative numbers,
      // just wrap it back around to a positive number
      if (windowHash < 0) {
        windowHash += PRIME;
      }
    }
  }
}

karpRabin("cat", "dog rivals cat");
