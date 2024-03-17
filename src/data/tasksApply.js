export const tasksApply = [
  {
    id: 1,
    level: "apply",
    description: "Automate monthly report generation for top 10 most active users based on post activity, including questions, answers, and comments.",
    solution: "WITH ActivityCounts AS (SELECT OwnerUserId, COUNT(*) AS ActivityCount FROM Posts WHERE CreationDate >= DATEADD(MONTH, -1, GETDATE()) GROUP BY OwnerUserId UNION ALL SELECT UserId, COUNT(*) FROM Comments WHERE CreationDate >= DATEADD(MONTH, -1, GETDATE()) GROUP BY UserId) SELECT TOP 10 u.DisplayName, SUM(ac.ActivityCount) AS TotalActivities FROM ActivityCounts ac JOIN Users u ON ac.OwnerUserId = u.Id GROUP BY u.DisplayName ORDER BY TotalActivities DESC;",
    ruleDescription: "This solution combines data from Posts and Comments over the last month to calculate total user activity. A Common Table Expression (CTE) aggregates activity counts, which are then joined with the Users table to rank the most active users.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/statements/with-common-table-expression-transact-sql"
  },
  {
    id: 2,
    level: "apply",
    description: "Identify and clean duplicate records in the 'Users' table based on email address, retaining only the most recently created account.",
    solution: "WITH DuplicateUsers AS (SELECT Email, MIN(CreationDate) as EarliestDate FROM Users GROUP BY Email HAVING COUNT(Email) > 1) DELETE FROM Users WHERE Email IN (SELECT Email FROM DuplicateUsers) AND CreationDate > (SELECT EarliestDate FROM DuplicateUsers WHERE Users.Email = DuplicateUsers.Email);",
    ruleDescription: "This approach identifies duplicates by email and uses a CTE to determine the earliest account creation date for duplicates. It then deletes newer duplicate accounts, preserving only the oldest account per email.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/statements/delete-transact-sql"
  },
  {
    id: 3,
    level: "apply",
    description: "Develop a system to rank posts within each category based on view count, using a window function for real-time analytics.",
    solution: "SELECT CategoryId, PostId, ViewCount, RANK() OVER (PARTITION BY CategoryId ORDER BY ViewCount DESC) AS ViewRank FROM Posts;",
    ruleDescription: "This task applies a window function to assign a rank to posts based on view count within each category, enabling analysis of post popularity and engagement in real-time by category.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/functions/rank-transact-sql"
  },
  {
    id: 4,
    level: "apply",
    description: "Create a dynamic query to list all tables and their row counts in the current database for audit purposes.",
    solution: "DECLARE @TableName VARCHAR(MAX); DECLARE @SQLCmd AS VARCHAR(MAX) = ''; SELECT @SQLCmd = @SQLCmd + 'SELECT ''' + TABLE_NAME + ''' AS TableName, COUNT(*) AS RowCount FROM ' + TABLE_NAME + ' UNION ALL ' FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE'; SET @SQLCmd = LEFT(@SQLCmd, LEN(@SQLCmd) - 10); EXEC(@SQLCmd);",
    ruleDescription: "Leveraging dynamic SQL, this task constructs and executes a command string that generates a unified report of table names and their corresponding row counts, aiding in database auditing and management.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/statements/execute-transact-sql"
  },
  {
    id: 5,
    level: "apply",
    description: "Optimize retrieval of the latest post for each user, ensuring the query is performant even on large datasets.",
    solution: "SELECT u.Id, u.DisplayName, p.Id AS LatestPostId, p.CreationDate FROM Users u CROSS APPLY (SELECT TOP 1 Id, CreationDate FROM Posts WHERE OwnerUserId = u.Id ORDER BY CreationDate DESC) p;",
    ruleDescription: "Using the CROSS APPLY operator, this task efficiently fetches the most recent post for each user by directly correlating the Users and Posts tables, optimizing for performance on large datasets by minimizing row scans.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/queries/from-transact-sql"
  }
  ]
  