export const tasksView = [
    {
      id: 1,
      level: "view",
      description: "Create a view named `IT_Employees` to list the names and positions of all employees in the IT department.",
      solution: "CREATE VIEW IT_Employees AS SELECT Name, Position FROM Employees WHERE Department = 'IT';",
      ruleDescription: "This task introduces the concept of creating a simple view in SQL. view act as virtual tables representing the result set of a SQL query. `IT_Employees` view simplifies access to the list of IT department employees, making future queries against this dataset more straightforward.",
      link: "https://docs.microsoft.com/en-us/sql/t-sql/statements/create-view-transact-sql"
    },
    {
      id: 2,
      level: "view",
      description: "Update the `IT_Employees` view to include employees' salaries.",
      solution: "CREATE OR ALTER VIEW IT_Employees AS SELECT Name, Position, Salary FROM Employees WHERE Department = 'IT';",
      ruleDescription: "This task demonstrates how to modify an existing view to add additional information. By including the salary column, the view now provides a more comprehensive overview of the IT department employees.",
      link: "https://docs.microsoft.com/en-us/sql/t-sql/statements/alter-view-transact-sql"
    },
    {
      id: 3,
      level: "view",
      description: "Create a view named `UserPostsOverview` that provides the count of posts, average score, and maximum view count for each user.",
      solution: "CREATE VIEW UserPostsOverview AS SELECT OwnerUserId, COUNT(*) AS PostCount, AVG(Score) AS AvgScore, MAX(ViewCount) AS MaxView FROM Posts GROUP BY OwnerUserId;",
      ruleDescription: "This task focuses on aggregating user post data into a single view, facilitating analysis of user activity on the platform. The view summarizes the total number of posts, average score of these posts, and the highest view count among them for each user.",
      link: "https://docs.microsoft.com/en-us/sql/t-sql/statements/create-view-transact-sql"
    },
    {
      id: 4,
      level: "view",
      description: "Design a view `RecentPosts` to display titles and creation dates of posts made in the last 30 days.",
      solution: "CREATE VIEW RecentPosts AS SELECT Title, CreationDate FROM Posts WHERE CreationDate >= DATEADD(day, -30, GETDATE());",
      ruleDescription: "This task aims to create a view that filters posts to those created within the last 30 days. It utilizes the DATEADD function alongside GETDATE() to dynamically calculate the 30-day threshold, showcasing how view can provide timely insights based on current date.",
      link: "https://docs.microsoft.com/en-us/sql/t-sql/functions/dateadd-transact-sql"
    }
  ];
  