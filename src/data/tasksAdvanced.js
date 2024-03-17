export const tasksAdvanced = [
  {
    id: 1,
    level: "advanced",
    description: "Optimize a query to find users who have both asked questions and provided answers but have not commented in the last year.",
    solution: "WITH UserActivity AS (SELECT OwnerUserId FROM Posts WHERE PostTypeId IN (1,2) GROUP BY OwnerUserId HAVING COUNT(DISTINCT PostTypeId) = 2), LastYearComments AS (SELECT DISTINCT UserId FROM Comments WHERE CreationDate >= DATEADD(year, -1, GETDATE())) SELECT ua.OwnerUserId FROM UserActivity ua WHERE ua.OwnerUserId NOT IN (SELECT UserId FROM LastYearComments);",
    ruleDescription: "This task combines CTEs and subqueries to isolate users engaging in both asking and answering but excludes those active in commenting recently. It showcases advanced use of grouping, aggregation, and date functions.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/queries/with-common-table-expression-transact-sql"
  },
  {
    id: 2,
    level: "advanced",
    description: "Create a partitioned view of the 'Posts' table that splits data into yearly segments for performance optimization.",
    solution: "CREATE VIEW Posts_Yearly AS SELECT * FROM Posts WHERE CreationDate BETWEEN '2020-01-01' AND '2020-12-31' UNION ALL SELECT * FROM Posts WHERE CreationDate BETWEEN '2021-01-01' AND '2021-12-31'; -- Repeat for each year",
    ruleDescription: "This task demonstrates how to create a partitioned view to optimize queries on large datasets by segmenting data into more manageable, yearly intervals. It uses UNION ALL to combine results from each segment.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/statements/create-view-transact-sql"
  },
  {
    id: 3,
    level: "advanced",
    description: "Implement a dynamic SQL query to generate a report that includes a variable number of top-performing tags based on post score.",
    solution: "DECLARE @TopN INT = 5; EXEC sp_executesql N'SELECT TOP (@TopN) t.TagName, SUM(p.Score) AS TotalScore FROM Tags t JOIN PostTags pt ON t.Id = pt.TagId JOIN Posts p ON pt.PostId = p.Id GROUP BY t.TagName ORDER BY TotalScore DESC;', N'@TopN INT', @TopN;",
    ruleDescription: "This task uses dynamic SQL to allow for a variable, @TopN, determining the number of top tags to return based on their associated posts' scores. It illustrates executing complex queries with parameters.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/language-elements/execute-transact-sql"
  },
  {
    id: 4,
    level: "advanced",
    description: "Write a query to calculate the median score of all posts, considering the distribution of scores.",
    solution: "SELECT PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY Score) OVER () AS MedianScore FROM Posts;",
    ruleDescription: "This task applies the PERCENTILE_CONT window function to calculate the median score from the 'Posts' table. The function is used to find the middle value in the distribution of scores.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/functions/percentile-cont-transact-sql"
  },
  {
    id: 5,
    level: "advanced",
    description: "Design a recursive CTE to trace the hierarchy of comments on a post, identifying the root post and all subsequent replies.",
    solution: "WITH RecursiveComments AS (SELECT Id, ParentId, Body, 1 AS Level FROM Comments WHERE ParentId IS NULL UNION ALL SELECT c.Id, c.ParentId, c.Body, rc.Level + 1 FROM Comments c INNER JOIN RecursiveComments rc ON c.ParentId = rc.Id) SELECT * FROM RecursiveComments ORDER BY Level, ParentId;",
    ruleDescription: "This advanced task uses a recursive CTE to map out the comment threads for posts, showing how comments are nested. It illustrates recursion in SQL, a powerful tool for dealing with hierarchical or tree-structured data.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/queries/with-common-table-expression-transact-sql"
  }
];
