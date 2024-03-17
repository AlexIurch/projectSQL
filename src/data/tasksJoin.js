export const tasksJoins = [
  {
    id: 1,
    level: "joins",
    description: "Retrieve a list of users along with any posts they’ve commented on, but not authored.",
    solution: "SELECT DISTINCT u.DisplayName, p.Title FROM Users u JOIN Comments c ON u.Id = c.UserId JOIN Posts p ON c.PostId = p.Id WHERE u.Id != p.OwnerUserId;",
    ruleDescription: "This task uses a combination of JOIN operations to connect users to comments and then to the posts those comments are on, filtering out instances where the user is also the post author.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/queries/from-transact-sql"
  },
  {
    id: 2,
    level: "joins",
    description: "List all tags along with their associated posts, but only for posts that have been viewed more than 1000 times.",
    solution: "SELECT t.TagName, p.Title FROM Tags t JOIN PostTags pt ON t.Id = pt.TagId JOIN Posts p ON pt.PostId = p.Id WHERE p.ViewCount > 1000;",
    ruleDescription: "By joining the Tags, PostTags, and Posts tables, this query filters to include only those posts with over 1000 views, showcasing how to use multiple joins to narrow down data based on specific criteria.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/queries/from-transact-sql"
  },
  {
    id: 3,
    level: "joins",
    description: "Find users who have never posted an answer or comment on their own question.",
    solution: "SELECT u.DisplayName FROM Users u JOIN Posts q ON u.Id = q.OwnerUserId LEFT JOIN Comments c ON q.Id = c.PostId AND c.UserId = q.OwnerUserId LEFT JOIN Posts a ON q.Id = a.ParentId AND a.OwnerUserId = q.OwnerUserId WHERE q.PostTypeId = 1 AND c.Id IS NULL AND a.Id IS NULL;",
    ruleDescription: "This advanced join setup identifies users who only ask questions without directly engaging with their own posts through comments or answers, illustrating the use of LEFT JOIN and IS NULL to filter for lack of activity.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/queries/from-transact-sql"
  },
  {
    id: 4,
    level: "joins",
    description: "Aggregate the total score for all answers to each question, displaying the question title and total answer score.",
    solution: "SELECT q.Title, SUM(a.Score) AS TotalAnswerScore FROM Posts q LEFT JOIN Posts a ON q.Id = a.ParentId WHERE q.PostTypeId = 1 GROUP BY q.Title;",
    ruleDescription: "This task uses a LEFT JOIN to associate questions with their answers, then aggregates the scores of the answers per question, demonstrating how to combine aggregation with joins for insightful data summaries.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/queries/select-group-by-transact-sql"
  },
  {
    id: 5,
    level: "joins",
    description: "Show a list of questions tagged with 'SQL' that have no answers.",
    solution: "SELECT p.Title FROM Posts p JOIN PostTags pt ON p.Id = pt.PostId JOIN Tags t ON pt.TagId = t.Id LEFT JOIN Posts a ON p.Id = a.ParentId WHERE t.TagName = 'SQL' AND p.PostTypeId = 1 AND a.Id IS NULL;",
    ruleDescription: "Combining JOINs with a LEFT JOIN to identify questions (tagged 'SQL') without any answers by checking for NULL in the left-joined table of answers, this task leverages multiple types of joins to filter specific data relationships.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/queries/from-transact-sql"
  },
  ];
  