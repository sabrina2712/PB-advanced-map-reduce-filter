/**
 * Exercise 2
 *
 * Create your solutions right here in this file!
 *
 * Create functions that accepts a todo array as the one defined in this file
 * you can use the todos array to test your functions.
 *
 * Functions to create:
 *  - todoDone(todos) (returns all todos which are completed)
 *  - todoUnDone(todos) (returns all todos which are not completed)
 *  - userWithMostTodos(todos) (returns userID)
 *  - userWithMostDoneTodos(todos) (returns userID)
 *  - userWithMostUnDoneTodos(todos) (returns userID)
 *  - getTodoByID(todos, id) (returns the todo object with id)
 */

const todos = [
  // Tip fold this section ☝️
  {
    userId: "Ben",
    id: 1,
    title: "delectus aut autem",
    completed: false
  },
  {
    userId: "Ben",
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false
  },
  {
    userId: "Ben",
    id: 3,
    title: "quis ut nam facilis et officia qui",
    completed: false
  },
  {
    userId: "Ben",
    id: 4,
    title: "quis ut nam facilis et officia qui",
    completed: true
  },
  {
    userId: "Ben",
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false
  },
  {
    userId: "Ben",
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false
  },
  {
    userId: "Ben",
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false
  },
  {
    userId: "Ben",
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true
  },
  {
    userId: "Ben",
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false
  },
  {
    userId: "Ben",
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true
  },
  {
    userId: "Ben",
    id: 11,
    title: "vero rerum temporibus dolor",
    completed: true
  },
  {
    userId: "Ben",
    id: 12,
    title: "ipsa repellendus fugit nisi",
    completed: true
  },
  {
    userId: "Ben",
    id: 13,
    title: "et doloremque nulla",
    completed: false
  },
  {
    userId: "Ben",
    id: 14,
    title: "repellendus sunt dolores architecto voluptatum",
    completed: true
  },
  {
    userId: "Ben",
    id: 15,
    title: "ab voluptatum amet voluptas",
    completed: true
  },
  {
    userId: "Ben",
    id: 16,
    title: "accusamus eos facilis sint et aut voluptatem",
    completed: true
  },
  {
    userId: "Ben",
    id: 17,
    title: "quo laboriosam deleniti aut qui",
    completed: true
  },
  {
    userId: "Ben",
    id: 18,
    title: "dolorum est consequatur ea mollitia in culpa",
    completed: false
  },
  {
    userId: "Ben",
    id: 19,
    title: "molestiae ipsa aut voluptatibus pariatur dolor nihil",
    completed: true
  },
  {
    userId: "Ben",
    id: 20,
    title: "ullam nobis libero sapiente ad optio sint",
    completed: true
  },
  {
    userId: "Jane",
    id: 21,
    title: "suscipit repellat esse quibusdam voluptatem incidunt",
    completed: false
  },
  {
    userId: "Jane",
    id: 22,
    title: "distinctio vitae autem nihil ut molestias quo",
    completed: true
  },
  {
    userId: "Jane",
    id: 23,
    title: "et itaque necessitatibus maxime molestiae qui quas velit",
    completed: false
  },
  {
    userId: "Jane",
    id: 24,
    title: "adipisci non ad dicta qui amet quaerat doloribus ea",
    completed: false
  },
  {
    userId: "Jane",
    id: 25,
    title: "voluptas quo tenetur perspiciatis explicabo natus",
    completed: true
  },
  {
    userId: "Jane",
    id: 26,
    title: "aliquam aut quasi",
    completed: true
  },
  {
    userId: "Jane",
    id: 27,
    title: "veritatis pariatur delectus",
    completed: true
  },
  {
    userId: "Jane",
    id: 28,
    title: "nesciunt totam sit blanditiis sit",
    completed: false
  },
  {
    userId: "Jane",
    id: 29,
    title: "laborum aut in quam",
    completed: false
  },
  {
    userId: "Jane",
    id: 30,
    title:
      "nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis",
    completed: true
  },
  {
    userId: "Jane",
    id: 31,
    title: "repudiandae totam in est sint facere fuga",
    completed: false
  },
  {
    userId: "Jane",
    id: 32,
    title: "earum doloribus ea doloremque quis",
    completed: false
  },
  {
    userId: "Jane",
    id: 33,
    title: "sint sit aut vero",
    completed: false
  },
  {
    userId: "Jane",
    id: 34,
    title: "porro aut necessitatibus eaque distinctio",
    completed: false
  },
  {
    userId: "Jane",
    id: 35,
    title: "repellendus veritatis molestias dicta incidunt",
    completed: true
  },
  {
    userId: "Jane",
    id: 36,
    title: "excepturi deleniti adipisci voluptatem et neque optio illum ad",
    completed: true
  },
  {
    userId: "Jane",
    id: 37,
    title: "sunt cum tempora",
    completed: false
  },
  {
    userId: "Jane",
    id: 38,
    title: "totam quia non",
    completed: false
  },
  {
    userId: "Jane",
    id: 39,
    title: "doloremque quibusdam asperiores libero corrupti illum qui omnis",
    completed: false
  },
  {
    userId: "Jane",
    id: 40,
    title: "totam atque quo nesciunt",
    completed: true
  },
  {
    userId: "Tom",
    id: 41,
    title:
      "aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit",
    completed: false
  },
  {
    userId: "Tom",
    id: 42,
    title: "rerum perferendis error quia ut eveniet",
    completed: false
  },
  {
    userId: "Tom",
    id: 43,
    title: "tempore ut sint quis recusandae",
    completed: true
  }
];

const mostTodosBy = (todosArray, propertyName) => {
  const statistic = todosArray.reduce((acc, curr) => {
    const property = curr[propertyName];

    if (acc[property] === undefined) {
      acc[property] = [];
    }

    acc[property].push(curr);

    return acc;
  }, {});

  return statistic;
};

console.log(mostTodosBy(todos, "completed"));

const userWithMostTodos = (todosInput) => {
  const userStatistic = mostTodosBy(todosInput, "userId");

  const userStatisticArray = Object.entries(userStatistic);

  const sorted = userStatisticArray.sort((a, b) => {
    return b[1].length - a[1].length;
  });

  return sorted[0][0];
};

console.log(userWithMostTodos(todos));

// userWithMostTodos(todos);
// userWithMostDoneTodos(todos);
// userWithMostUnDoneTodos(todos);
