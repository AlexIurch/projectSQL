export const tasksFunctionsSQL = [
    {
      id: 1,
      level: "functions",
      description: "Write a query to select the current server time using the GETDATE() function.",
      solution: "SELECT GETDATE() AS CurrentServerTime;",
      ruleDescription: "GETDATE() is a nondeterministic function that retrieves the current date and time from the SQL Server. This function can be used to record timestamps in data logging or to calculate age/time differences.",
      link: "https://docs.microsoft.com/en-us/sql/t-sql/functions/getdate-transact-sql"
    },
    {
      id: 2,
      level: "functions",
      description: "Use the SUSER_SNAME() function to retrieve the login name of the user.",
      solution: "SELECT SUSER_SNAME() AS LoginName;",
      ruleDescription: "SUSER_SNAME(), a nondeterministic function, returns the login name for a user based on their security identifier (SID). This can be particularly useful for auditing or tracking user activity in applications.",
      link: "https://docs.microsoft.com/en-us/sql/t-sql/functions/suser-sname-transact-sql"
    },
    {
      id: 3,
      level: "functions",
      description: "Create a list of employees' names and their years of experience, calculated from their hireDate to the current date.",
      solution: "SELECT Name, DATEDIFF(year, hireDate, GETDATE()) AS ExperienceYears FROM Employees;",
      ruleDescription: "DATEDIFF is a deterministic function that calculates the difference between two dates. In this task, it's used to calculate each employee's years of experience by subtracting their hire date from the current date.",
      link: "https://docs.microsoft.com/en-us/sql/t-sql/functions/datediff-transact-sql"
    },
    {
      id: 4,
      level: "functions",
      description: "Utilize the COUNT() function to determine the total number of posts made by each user.",
      solution: "SELECT OwnerUserId, COUNT(*) AS TotalPosts FROM Posts GROUP BY OwnerUserId;",
      ruleDescription: "COUNT() is an aggregate function that returns the number of items in a group. This task demonstrates its use to count the total number of posts made by each user, showcasing how aggregate functions can summarize data.",
      link: "https://docs.microsoft.com/en-us/sql/t-sql/functions/count-transact-sql"
    },
    {
      id: 5,
      level: "functions",
      description: "Display the highest score ever recorded in the 'Posts' table using the MAX() function.",
      solution: "SELECT MAX(Score) AS HighestScore FROM Posts;",
      ruleDescription: "MAX() is an aggregate function that finds the maximum value in a set. This task uses MAX() to find the highest post score, illustrating how to extract significant statistics from data.",
      link: "https://docs.microsoft.com/en-us/sql/t-sql/functions/max-transact-sql"
    },
    {
      id: 6,
      level: "functions",
      description: "Show the first name, last name, and the day of the week each employee was hired, using the DATENAME function.",
      solution: "SELECT firstName, lastName, DATENAME(weekday, hireDate) AS HireDayOfWeek FROM Employees;",
      ruleDescription: "DATENAME is a function that returns the specified part of a date as a string. In this task, it's used to find the day of the week on which employees were hired, demonstrating how to work with date parts in SQL.",
      link: "https://docs.microsoft.com/en-us/sql/t-sql/functions/datename-transact-sql"
    }
  ];
  