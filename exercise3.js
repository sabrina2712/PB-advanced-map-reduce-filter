/**
 * Exercise 2
 *
 * Create your solutions right here in this file!
 * 
 * Now we want to combine our functions to create powerful solutions
 * 
 * Functions to create:
 *  - userWithMostTodos(users, todos)         (returns user object)
 *  - userWithMostDoneTodos(users, todos)     (returns user object)
 *  - userWithMostUnDoneTodos(users, todos)   (returns user object)
 *  - getUserByTodoId(users, todos)           (returns user object)
 *  - getTodosForUserName(users, todos)       (returns todo array)
 *  - getStatistic(users, todos) 
 *      returns user statistic array e.g: 
 *      [
 *        {username: 'User 1', id: 1, todosOverview: {total: 4, done:1, undone: 3}, todos: [...]}
 *      ]
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

const todos = [
  // Tip fold this section ☝️
 {
   userId: 1,
   id: 1,
   title: "delectus aut autem",
   completed: false
 },
 {
   userId: 1,
   id: 2,
   title: "quis ut nam facilis et officia qui",
   completed: false
 },
 {
   userId: 1,
   id: 3,
   title: "fugiat veniam minus",
   completed: false
 },
 {
   userId: 1,
   id: 4,
   title: "et porro tempora",
   completed: true
 },
 {
   userId: 1,
   id: 5,
   title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
   completed: false
 },
 {
   userId: 1,
   id: 6,
   title: "qui ullam ratione quibusdam voluptatem quia omnis",
   completed: false
 },
 {
   userId: 1,
   id: 7,
   title: "illo expedita consequatur quia in",
   completed: false
 },
 {
   userId: 1,
   id: 8,
   title: "quo adipisci enim quam ut ab",
   completed: true
 },
 {
   userId: 1,
   id: 9,
   title: "molestiae perspiciatis ipsa",
   completed: false
 },
 {
   userId: 1,
   id: 10,
   title: "illo est ratione doloremque quia maiores aut",
   completed: true
 },
 {
   userId: 1,
   id: 11,
   title: "vero rerum temporibus dolor",
   completed: true
 },
 {
   userId: 1,
   id: 12,
   title: "ipsa repellendus fugit nisi",
   completed: true
 },
 {
   userId: 1,
   id: 13,
   title: "et doloremque nulla",
   completed: false
 },
 {
   userId: 1,
   id: 14,
   title: "repellendus sunt dolores architecto voluptatum",
   completed: true
 },
 {
   userId: 1,
   id: 15,
   title: "ab voluptatum amet voluptas",
   completed: true
 },
 {
   userId: 1,
   id: 16,
   title: "accusamus eos facilis sint et aut voluptatem",
   completed: true
 },
 {
   userId: 1,
   id: 17,
   title: "quo laboriosam deleniti aut qui",
   completed: true
 },
 {
   userId: 1,
   id: 18,
   title: "dolorum est consequatur ea mollitia in culpa",
   completed: false
 },
 {
   userId: 1,
   id: 19,
   title: "molestiae ipsa aut voluptatibus pariatur dolor nihil",
   completed: true
 },
 {
   userId: 1,
   id: 20,
   title: "ullam nobis libero sapiente ad optio sint",
   completed: true
 },
 {
   userId: 2,
   id: 21,
   title: "suscipit repellat esse quibusdam voluptatem incidunt",
   completed: false
 },
 {
   userId: 2,
   id: 22,
   title: "distinctio vitae autem nihil ut molestias quo",
   completed: true
 },
 {
   userId: 2,
   id: 23,
   title: "et itaque necessitatibus maxime molestiae qui quas velit",
   completed: false
 },
 {
   userId: 2,
   id: 24,
   title: "adipisci non ad dicta qui amet quaerat doloribus ea",
   completed: false
 },
 {
   userId: 2,
   id: 25,
   title: "voluptas quo tenetur perspiciatis explicabo natus",
   completed: true
 },
 {
   userId: 2,
   id: 26,
   title: "aliquam aut quasi",
   completed: true
 },
 {
   userId: 2,
   id: 27,
   title: "veritatis pariatur delectus",
   completed: true
 },
 {
   userId: 2,
   id: 28,
   title: "nesciunt totam sit blanditiis sit",
   completed: false
 },
 {
   userId: 2,
   id: 29,
   title: "laborum aut in quam",
   completed: false
 },
 {
   userId: 2,
   id: 30,
   title:
     "nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis",
   completed: true
 },
 {
   userId: 2,
   id: 31,
   title: "repudiandae totam in est sint facere fuga",
   completed: false
 },
 {
   userId: 2,
   id: 32,
   title: "earum doloribus ea doloremque quis",
   completed: false
 },
 {
   userId: 2,
   id: 33,
   title: "sint sit aut vero",
   completed: false
 },
 {
   userId: 2,
   id: 34,
   title: "porro aut necessitatibus eaque distinctio",
   completed: false
 },
 {
   userId: 2,
   id: 35,
   title: "repellendus veritatis molestias dicta incidunt",
   completed: true
 },
 {
   userId: 2,
   id: 36,
   title: "excepturi deleniti adipisci voluptatem et neque optio illum ad",
   completed: true
 },
 {
   userId: 2,
   id: 37,
   title: "sunt cum tempora",
   completed: false
 },
 {
   userId: 2,
   id: 38,
   title: "totam quia non",
   completed: false
 },
 {
   userId: 2,
   id: 39,
   title: "doloremque quibusdam asperiores libero corrupti illum qui omnis",
   completed: false
 },
 {
   userId: 2,
   id: 40,
   title: "totam atque quo nesciunt",
   completed: true
 },
 {
   userId: 3,
   id: 41,
   title:
     "aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit",
   completed: false
 },
 {
   userId: 3,
   id: 42,
   title: "rerum perferendis error quia ut eveniet",
   completed: false
 },
 {
   userId: 3,
   id: 43,
   title: "tempore ut sint quis recusandae",
   completed: true
 }
];
