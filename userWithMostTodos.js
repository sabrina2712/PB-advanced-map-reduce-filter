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

const userWithMostTodos = (todosArr) => {
  // we want userIds and their todoCount in an structured way
  // userStatistic { <userName>: <todoCount> }
  const userStatistic = todosArr.reduce((userStats, todo) => {
    const userId = todo.userId;

    // User is not tracked yet?
    if (userStats[userId] === undefined) {
      // init user with 0
      userStats[userId] = 0;
    }

    userStats[userId]++;

    return userStats;
  }, {});

  console.log("user statistic:", userStatistic);

  const userStatisticArray = Object.entries(userStatistic);

  // userStatisticsArray [[<userName>, <todoCount>], [...]]
  const userStatisticArraySorted = userStatisticArray.sort((a, b) => {
    return b[1] - a[1];
  });

  // we want to find the highest todoCount to get its property name

  return userStatisticArraySorted[0][0];
};

console.log(userWithMostTodos(todos));

// const friends =[
//   {name:"Peter",friends:50, job: ""},
//   {name:"Jessica",friends:100,job:""}
// ]
const friends = {
  Peter: 50,
  Jessica: 100
};

// const todos = [
//   {
//     userId: "Jane",
//     id: 1,
//     title: "delectus aut autem",
//     completed: false
//   },
//   {
//     userId: "Tom",
//     id: 2,
//     title: "quis ut nam facilis et officia qui",
//     completed: false
//   }
// ];

// todos.filter(justJane).map(setCompleted) 🤔 how to update todos array
//

// TODO: Move to Collection Live Code
const todosObj = {
  Jane: true
};

const user = currentUser();
todosObj[user] = todosObj[user].map((todo) => {
  todo.completed = true;
  return todo;
});

console.log(todosObj);

const userStatisticTodosCount = (todos) => {
  const userStatistic = {};

  for (let i = 0; i < todos.length; i++) {
    const currentelement = todos[i];

    const userId = currentelement.userId;

    if (userStatistic[userId] === undefined) {
      userStatistic[userId] = 0;
    }

    userStatistic[userId]++;
  }

  return userStatistic;
};

console.log(userStatisticTodosCount(todos));

const userStatisticTodosCountWithReduce = (todos) => {
  const userStatisticReduced = todos.reduce((userStatistic, currentelement) => {
    const userId = currentelement.userId;

    if (userStatistic[userId] === undefined) {
      userStatistic[userId] = 0;
    }

    userStatistic[userId]++;
  }, {});

  return userStatisticReduced;
};

console.log(userStatisticTodosCountWithReduce(todos));

const arrayReduce = (array, reducer, initialVal) => {
  debugger;
  let accumulator = initialVal;

  for (let i = 0; i < array.length; i++) {
    const currenElement = array[i];
    accumulator = reducer(accumulator, currenElement);
  }

  return accumulator;
};

const numbers = ["Wigns, ", "Door, ", "Glass, ", "Wheels"];
const reducer = (acc, curr) => {
  acc = acc + curr;
  return acc;
};

const Car = arrayReduce(numbers, reducer, "Plane with: ");
console.log("sum ", Car);
