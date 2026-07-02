def num_unique_emails(emails: list[str]) -> int:
    unique = set()
    for email in emails:
        # max split 1 
        local, domain = email.split("@", 1)

        # Remove everything after '+' in local part
        local = local.split("+", 1)[0]

        # Remove all '.' in local part
        local = local.replace(".", "")

        unique.add(f"{local}@{domain}")

    return len(unique)



print(num_unique_emails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
]))
print(num_unique_emails(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"]))



def num_unique_emails(emails: list[str]) -> int:
    return len({
        f"{email.split('@',1)[0].split('+',1)[0].replace('.', '')}@{email.split('@',1)[1]}"
        for email in emails
    })


