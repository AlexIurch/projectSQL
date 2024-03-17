export const tasksIntermediate = [
  {
    id: 1,
    level: "intermediate",
    description: "Join the `Users` table with the `Posts` table to display all users along with the titles of their posts.",
    solution: "SELECT u.DisplayName, p.Title FROM Users u JOIN Posts p ON u.Id = p.OwnerUserId;",
    ruleDescription: "This task uses an INNER JOIN to combine rows from the Users table with those from the Posts table where the user ID matches the post's owner ID, illustrating how to associate related data across tables.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/queries/from-transact-sql"
  },
  {
    id: 2,
    level: "intermediate",
    description: "Use a subquery to find all posts that have a higher score than the average score of all posts.",
    solution: "SELECT Title, Score FROM Posts WHERE Score > (SELECT AVG(Score) FROM Posts);",
    ruleDescription: "This task demonstrates the use of a subquery to calculate the average score of all posts. The main query then filters to select only those posts with scores higher than this average.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/language-elements/subqueries-transact-sql"
  },
  {
    id: 3,
    level: "intermediate",
    description: "Create a CTE that selects all users with more than 100 posts, and then list these users by their post count.",
    solution: "WITH UserPostCounts AS (SELECT OwnerUserId, COUNT(*) AS PostCount FROM Posts GROUP BY OwnerUserId HAVING COUNT(*) > 100) SELECT u.DisplayName, upc.PostCount FROM UserPostCounts upc JOIN Users u ON upc.OwnerUserId = u.Id ORDER BY upc.PostCount DESC;",
    ruleDescription: "The CTE UserPostCounts aggregates the number of posts per user and filters for those with more than 100 posts. The final SELECT statement then joins this CTE with the Users table to display user names and post counts.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/queries/with-common-table-expression-transact-sql"
  },
  {
    id: 4,
    level: "intermediate",
    description: "Implement a query to list the top 5 tags by their number of associated posts using a GROUP BY clause.",
    solution: "SELECT TOP 5 t.TagName, COUNT(pt.PostId) AS NumberOfPosts FROM Tags t JOIN PostTags pt ON t.Id = pt.TagId GROUP BY t.TagName ORDER BY NumberOfPosts DESC;",
    ruleDescription: "This task uses a JOIN between the Tags and PostTags tables to count the number of posts associated with each tag. The GROUP BY clause organizes the results by tag name, and the ORDER BY clause sorts the tags by their post count in descending order.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/queries/select-group-by-transact-sql"
  },
  {
    id: 5,
    level: "intermediate",
    description: "Calculate the month-over-month percentage growth in new user signups.",
    solution: "WITH MonthlySignups AS (SELECT YEAR(CreationDate) AS Year, MONTH(CreationDate) AS Month, COUNT(*) AS Signups FROM Users GROUP BY YEAR(CreationDate), MONTH(CreationDate)) SELECT Year, Month, Signups, LAG(Signups) OVER (ORDER BY Year, Month) AS PreviousMonthSignups, ((Signups - LAG(Signups) OVER (ORDER BY Year, Month)) / LAG(Signups) OVER (ORDER BY Year, Month)) * 100 AS GrowthPercentage FROM MonthlySignups;",
    ruleDescription: "This complex query uses a CTE to calculate the number of user signups for each month. It then employs the LAG window function to compare signups month-over-month and calculates the percentage growth rate.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/queries/select-transact-sql"
  },
  {
    id: 6,
    level: "intermediate",
    description: "Identify posts with the 'CommunityWiki' flag that have received more than 50 upvotes.",
    solution: "SELECT Id, Title FROM Posts WHERE CommunityOwnedDate IS NOT NULL AND Score > 50;",
    ruleDescription: "This query filters for posts marked as Community Wiki (indicated by a non-null 'CommunityOwnedDate') and having more than 50 upvotes ('Score' > 50), demonstrating how to use multiple conditions in the WHERE clause for specific selections.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/queries/where-transact-sql"
  },
  {
    id: 7,
    level: "intermediate",
    description: "Use a window function to calculate the running total of upvotes for posts over time.",
    solution: "SELECT Id, CreationDate, Score, SUM(Score) OVER (ORDER BY CreationDate) AS RunningTotalScore FROM Posts WHERE PostTypeId = 1;",
    ruleDescription: "Applying the SUM() window function with an ORDER BY clause in the OVER() partition allows for the calculation of a cumulative sum of scores (upvotes) as you progress through the dataset chronologically.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/functions/sum-transact-sql"
  },
  {
    id: 8,
    level: "intermediate",
    description: "List all users and the count of their posts, including those who have not posted yet, by utilizing a LEFT JOIN.",
    solution: "SELECT u.DisplayName, COUNT(p.Id) AS PostCount FROM Users u LEFT JOIN Posts p ON u.Id = p.OwnerUserId GROUP BY u.DisplayName;",
    ruleDescription: "This query demonstrates the use of LEFT JOIN to include all users in the result set, even those without posts, and uses GROUP BY to aggregate the total count of posts for each user.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/queries/from-transact-sql"
  },
  {
    id: 9,
    level: "intermediate",
    description: "For each tag, show the most recent post using a window function.",
    solution: "SELECT DISTINCT TagId, FIRST_VALUE(PostId) OVER (PARTITION BY TagId ORDER BY CreationDate DESC) AS MostRecentPostId FROM PostTags;",
    ruleDescription: "The FIRST_VALUE() window function is used here within each partition of tags (TagId) to pick the first PostId in descending order by CreationDate, effectively selecting the most recent post for each tag.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/functions/first-value-transact-sql"
  },
  {
    id: 10,
    level: "intermediate",
    description: "Generate a list of the first posting date for every user, indicating their first interaction with the platform.",
    solution: "WITH FirstPosts AS (SELECT OwnerUserId, MIN(CreationDate) AS FirstPostDate FROM Posts GROUP BY OwnerUserId) SELECT u.DisplayName, fp.FirstPostDate FROM Users u JOIN FirstPosts fp ON u.Id = fp.OwnerUserId;",
    ruleDescription: "This CTE, 'FirstPosts', captures the earliest posting date for each user. Joining this CTE with the Users table allows matching users with their first post dates, illustrating how users began interacting with the platform.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/queries/with-common-table-expression-transact-sql"
  }
];
