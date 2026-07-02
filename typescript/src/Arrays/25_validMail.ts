export {};

// tc = n * m
// but mail size are bounded so O(n)

// sc = O(n)

function numUniqueEmails(emails: string[]): number {
  let uniqueMails = new Set<string>();
  for (let email of emails) {
    let AtInd = email.indexOf("@");

    let localName = email.slice(0, AtInd);
    let domainName = email.slice(AtInd + 1, email.length);

    // dot in localname (remove it)
    let dotInd = localName.indexOf(".");
    while (dotInd !== -1) {
      localName =
        localName.slice(0, dotInd) +
        localName.slice(dotInd + 1, localName.length);

      // update if more dot exist
      dotInd = localName.indexOf(".");
    }

    // plus in localname (remove letters after it it)
    let plusInd = localName.indexOf("+");
    while (plusInd !== -1) {
      localName = localName.slice(0, plusInd);

      // update if more plus exist
      plusInd = localName.indexOf("+");
    }

    uniqueMails.add(localName + "@" + domainName);
  }

  return uniqueMails.size;
}

console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
  ])
);
console.log(
  numUniqueEmails(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"])
);
