/**
 * Exercise 1
 *
 * Create your solutions right here in this file!
 *
 * Create functions that accepts a user array as the one defined in this file
 * you can use the user array to test your functions.
 *
 * Functions to create:
 * - justDCIEmployees(users) (returns an array of DCI employees)
 * - userWithTLD(users, tld) (returns just user with a tld in their website e.g. info || de)
 * - allUserWithoutAnLInTheirName (returns all user without an l (case insensitive) in their name)
 * - getUserById(user, id) (returns one user object according to the provided id || undefined)
 * - getUserByEmail(user, email) (returns one user object according to the provided email)
 */

const users = [
  // Tip fold this section ☝️
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    country: "UK",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.de",
    company: "DCI"
  },
  {
    id: 2,
    name: "Ervin Smith",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    country: "Germany",
    phone: "010-692-6593 x09125",
    website: "anastasia.de",
    company: "DCI"
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    country: "Iran",
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: "Apple"
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    country: "Japan",
    phone: "493-170-9623 x156",
    website: "kale.de",
    company: "DCI"
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    country: "USA",
    phone: "(254)954-1289",
    website: "demarco.info",
    company: "DCI"
  }
];
