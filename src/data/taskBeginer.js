export const tasksBeginner = [
  {
    id: 1,
    level: "begin",
    description: "Query the `Posts` table to retrieve all details for questions posted on Stack Overflow. Identify these posts by filtering for entries where `PostTypeId` equals 1, which signifies a question. This initial task aims to familiarize you with basic data retrieval from a specific subset.",
    solution: "SELECT * FROM Posts WHERE PostTypeId = 1;",
    ruleDescription: "This task leverages the SELECT statement to fetch all columns from the `Posts` table, applying a WHERE clause to isolate questions. It's an essential skill for exploring specific types of data within a database.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/queries/select-transact-sql"
  },
  {
    id: 2,
    level: "begin",
    description: "From the `Posts` table, find all answers with a score greater than 100 to identify highly valued community contributions. Answers are distinguished by `PostTypeId` equal to 2. This task will teach you to filter data based on numerical criteria.",
    solution: "SELECT * FROM Posts WHERE PostTypeId = 2 AND Score > 100;",
    ruleDescription: "Here, the WHERE clause filters the dataset for answers based on their `Score`, demonstrating how to pinpoint records that meet specific numerical conditions.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/queries/where-transact-sql"
  },
  {
    id: 3,
    level: "begin",
    description: "List the top 10 most viewed questions in the `Posts` table, showing their titles and view counts. Sort the list by `ViewCount` in descending order to prioritize the most popular questions, introducing you to sorting and limiting results.",
    solution: "SELECT TOP 10 Title, ViewCount FROM Posts WHERE PostTypeId = 1 ORDER BY ViewCount DESC;",
    ruleDescription: "The combination of TOP and ORDER BY in this task is crucial for extracting a manageable list of top records based on a sorted attribute, facilitating easy identification of the most engaging questions.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/queries/top-transact-sql"
  },
  {
    id: 4,
    level: "begin",
    description: "Calculate the average score for all posts made in March 2013 by querying the `Posts` table. This task challenges you to use date ranges and aggregation functions to analyze specific periods.",
    solution: "SELECT AVG(Score) AS AverageScore FROM Posts WHERE CreationDate >= '2013-03-01' AND CreationDate < '2013-04-01';",
    ruleDescription: "Applying the AVG() function to a filtered date range within the WHERE clause provides insight into the performance or reception of content during that time frame, highlighting the utility of aggregate functions in temporal analysis.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/functions/avg-transact-sql"
  },
  {
    id: 5,
    level: "begin",
    description: "Use the `Comments` table to count the number of comments for each post. This task introduces you to grouping and counting in SQL, allowing you to gauge the level of engagement for various discussions.",
    solution: "SELECT PostId, COUNT(*) AS NumberOfComments FROM Comments GROUP BY PostId;",
    ruleDescription: "Grouping data with GROUP BY and counting instances with COUNT(*) provides a method to quantify engagement or occurrences, essential for summarizing and analyzing grouped datasets effectively.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/queries/select-group-by-transact-sql"
  },
  {
    id: 6,
    level: "begin",
    description: "From the `Posts` table, identify unique tags (using the `Tags` and `PostTags` tables) for questions with more than 10,000 views. This task requires joining the `Posts` table to `PostTags`, and then `PostTags` to `Tags`, to extract the tag names for popular questions.",
    solution: "SELECT DISTINCT t.TagName FROM Tags t JOIN PostTags pt ON t.Id = pt.TagId JOIN Posts p ON pt.PostId = p.Id WHERE p.ViewCount > 10000 AND p.PostTypeId = 1;",
    ruleDescription: "This task demonstrates how to use SQL JOINs to link multiple tables and the DISTINCT keyword to remove duplicate entries, focusing on data filtering with the WHERE clause to meet specific conditions.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/queries/joins-transact-sql"
  },
  {
    id: 7,
    level: "begin",
    description: "Using the `Posts` table, group answers by their parent questions (identified by `ParentId`) and count the total number of answers for each question. Then, filter to show only questions with more than 5 answers to identify highly discussed topics.",
    solution: "SELECT ParentId, COUNT(*) AS TotalAnswers FROM Posts WHERE PostTypeId = 2 GROUP BY ParentId HAVING COUNT(*) > 5;",
    ruleDescription: "This task introduces grouping data with GROUP BY and filtering groups with HAVING, allowing you to analyze data subsets based on aggregate values, like counting occurrences.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/queries/select-group-by-transact-sql"
  },
  {
    id: 8,
    level: "begin",
    description: "Find the most recent 5 questions added to the Stack Overflow database by querying the `Posts` table. Sort the questions by their `CreationDate` in descending order to ensure the latest discussions are listed first.",
    solution: "SELECT TOP 5 Id, Title FROM Posts WHERE PostTypeId = 1 ORDER BY CreationDate DESC;",
    ruleDescription: "Leveraging the TOP clause with ORDER BY provides a method to limit query results to a specified number of top entries, based on sorting criteria. This is ideal for tracking recent additions or changes.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/queries/top-transact-sql"
  },
  {
    id: 9,
    level: "begin",
    description: "Compute the average score of posts by each user to evaluate the community's reception of their content. Aggregate data from the `Posts` table by `OwnerUserId`, applying the AVG function to the `Score` column.",
    solution: "SELECT OwnerUserId, AVG(Score) AS AveragePostScore FROM Posts GROUP BY OwnerUserId;",
    ruleDescription: "Using AVG() with GROUP BY allows for the calculation of average values within each group defined by a common attribute, facilitating an understanding of trends or general performance within subsets of data.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/functions/avg-transact-sql"
  },
  {
    id: 10,
    level: "begin",
    description: "Identify users who have not posted since January 1, 2013. This task involves selecting from the `Users` table and excluding those who have related records in the `Posts` table after this date, showcasing the use of NOT EXISTS.",
    solution: "SELECT u.Id, u.DisplayName FROM Users u WHERE NOT EXISTS (SELECT 1 FROM Posts p WHERE p.OwnerUserId = u.Id AND p.CreationDate >= '2013-01-01');",
    ruleDescription: "The NOT EXISTS clause is used to find rows in a table that do not match conditions specified in a subquery. It's a powerful tool for exclusion-based filtering, useful for identifying gaps or absences in data relationships.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/queries/exists-transact-sql"
  },
  {
    id: 11,
    level: "begin",
    description: "Find the number of views for the most viewed question in the `Posts` table. This will help you understand how to identify record extremes in a dataset.",
    solution: "SELECT MAX(ViewCount) AS MaxViewCount FROM Posts WHERE PostTypeId = 1;",
    ruleDescription: "Using the MAX() function allows you to find the highest number in a numerical column, in this case, to determine the most viewed question. It's a crucial function for analyzing data ranges and extremes.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/functions/max-transact-sql"
  },
  {
    id: 12,
    level: "begin",
    description: "Retrieve the titles of all questions that have been closed, marked by a non-null `ClosedDate` in the `Posts` table. This task introduces working with NULL values to filter records.",
    solution: "SELECT Title FROM Posts WHERE PostTypeId = 1 AND ClosedDate IS NOT NULL;",
    ruleDescription: "Filtering with IS NOT NULL checks for non-empty values in a column, allowing you to isolate records that meet specific lifecycle criteria, such as being closed.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/queries/where-transact-sql"
  },
  {
    id: 13,
    level: "begin",
    description: "Calculate the total score accumulated by all answers on the site using the `Posts` table. This task will get you familiar with summing values across a large number of records.",
    solution: "SELECT SUM(Score) AS TotalAnswerScore FROM Posts WHERE PostTypeId = 2;",
    ruleDescription: "The SUM() function aggregates numerical data, providing the total sum of a column's values where the conditions are met, offering insight into cumulative metrics such as total score.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/functions/sum-transact-sql"
  },
  {
    id: 14,
    level: "begin",
    description: "List all users who have posted more than 10 answers, using the `Posts` table. Group the results by `OwnerUserId` and count the number of posts per user.",
    solution: "SELECT OwnerUserId, COUNT(*) AS NumberOfAnswers FROM Posts WHERE PostTypeId = 2 GROUP BY OwnerUserId HAVING COUNT(*) > 10;",
    ruleDescription: "This task teaches the application of GROUP BY in conjunction with HAVING for filtering groups based on a count condition, useful for identifying highly active contributors in specific areas.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/queries/select-group-by-transact-sql"
  },
  {
    id: 15,
    level: "begin",
    description: "Identify the first question ever asked on Stack Overflow by finding the minimum `CreationDate` in the `Posts` table for questions.",
    solution: "SELECT Id, Title, MIN(CreationDate) AS FirstQuestionDate FROM Posts WHERE PostTypeId = 1;",
    ruleDescription: "The MIN() function finds the earliest date in a dataset, which in this context helps pinpoint the inception of community interactions on the platform.",
    link: "https://docs.microsoft.com/en-us/sql/t-sql/functions/min-transact-sql"
  }

];
