export const data = [
    {
      items: {
        Bread: 4.0,
        Curry: 10.0,
        Pasta: 10.0,
        Rice: 5.0,
        Soda: 2.0,
        Soup: 8.0,
      },
      name: "Alice Smith",
      owed_by: [
        {
          amount: 1.0,
          user: "David Wilson",
        },
      ],
      owes_to: [],
      total_amount: 39.0,
      total_items: 6,
    },
    {
      items: {
        Curry: 10.0,
        Pasta: 10.0,
        Rice: 5.0,
        Soda: 2.0,
      },
      name: "Bob Johnson",
      owed_by: [
        {
          amount: 1.5,
          user: "David Wilson",
        },
        {
          amount: 2.0,
          user: "Charlie Brown",
        },
        {
          amount: 0.5,
          user: "Eve Davis",
        },
      ],
      owes_to: [],
      total_amount: 27.0,
      total_items: 4,
    },
    {
      items: {
        Curry: 10.0,
        Juice: 3.0,
        Pasta: 10.0,
        Rice: 5.0,
        Salad: 6.0,
        Soda: 2.0,
      },
      name: "Charlie Brown",
      owed_by: [],
      owes_to: [
        {
          amount: 2.0,
          user: "Bob Johnson",
        },
      ],
      total_amount: 36.0,
      total_items: 6,
    },
    {
      items: {
        Bread: 3.0,
        Curd: 4.0,
        Juice: 3.0,
        Pasta: 10.0,
        Salad: 6.0,
        Soda: 2.0,
      },
      name: "David Wilson",
      owed_by: [],
      owes_to: [
        {
          amount: 1.0,
          user: "Alice Smith",
        },
        {
          amount: 1.5,
          user: "Bob Johnson",
        },
      ],
      total_amount: 28.0,
      total_items: 6,
    },
    {
      items: {
        Bread: 7.0,
        Curd: 4.0,
        Juice: 3.0,
        Salad: 6.0,
        Soup: 8.0,
      },
      name: "Eve Davis",
      owed_by: [],
      owes_to: [
        {
          amount: 0.5,
          user: "Bob Johnson",
        },
      ],
      total_amount: 28.0,
      total_items: 5,
    },
  ];
  