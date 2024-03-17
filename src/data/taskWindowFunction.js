export const tasksWindowFunction = [
    {
      id: 1,
      level: "WindowFunctions",
      description: "Calculate the average salary within each department.",
      solution: "SELECT department, salary, AVG(salary) OVER (PARTITION BY department) AS avg_department_salary FROM employees;",
      ruleDescription: "This query uses the `AVG()` window function to calculate the average salary within each department, partitioned by the `department` column. Each row will include the average salary for its respective department alongside the individual salaries."
    },
    {
      id: 2,
      level: "WindowFunctions",
      description: "Rank employees within their department based on their salary in descending order.",
      solution: "SELECT department, salary, RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS salary_rank FROM employees;",
      ruleDescription: "The `RANK()` window function assigns a rank to each employee based on their salary within the same department, ordered in descending order. Employees with the same salary receive the same rank."
    },
    {
      id: 3,
      level: "WindowFunctions",
      description: "Get the cumulative sum of sales over time for each product.",
      solution: "SELECT product_id, sale_date, sales_amount, SUM(sales_amount) OVER (PARTITION BY product_id ORDER BY sale_date) AS cumulative_sales FROM sales;",
      ruleDescription: "This query calculates the cumulative sum of sales for each product over time using the `SUM()` window function, partitioned by `product_id` and ordered by `sale_date`."
    },
    {
      id: 4,
      level: "WindowFunctions",
      description: "Identify the first sale date for each product.",
      solution: "SELECT product_id, sale_date, FIRST_VALUE(sale_date) OVER (PARTITION BY product_id ORDER BY sale_date) AS first_sale_date FROM sales;",
      ruleDescription: "The `FIRST_VALUE()` window function is used to find the first sale date for each product, partitioned by `product_id` and ordered by `sale_date`."
    },
    {
      id: 5,
      level: "WindowFunctions",
      description: "Calculate the moving average of sales for the last 3 days for each product.",
      solution: "SELECT product_id, sale_date, sales_amount, AVG(sales_amount) OVER (PARTITION BY product_id ORDER BY sale_date ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS moving_avg_sales FROM sales;",
      ruleDescription: "This query computes the 3-day moving average of sales for each product using the `AVG()` window function, partitioned by `product_id` and ordered by `sale_date`, considering the current row and the two preceding rows."
    },
    {
      id: 6,
      level: "WindowFunctions",
      description: "Determine the percentage of total sales each product represents for each day.",
      solution: "SELECT sale_date, product_id, sales_amount, sales_amount / SUM(sales_amount) OVER (PARTITION BY sale_date) AS sales_percentage FROM sales;",
      ruleDescription: "This query calculates the percentage of total sales each product represents for each day using the `SUM()` window function, partitioned by `sale_date`."
    },
    {
      id: 7,
      level: "WindowFunctions",
      description: "Assign a sequential integer to each sale, starting with 1, for each product.",
      solution: "SELECT product_id, sale_date, ROW_NUMBER() OVER (PARTITION BY product_id ORDER BY sale_date) AS sale_sequence FROM sales;",
      ruleDescription: "The `ROW_NUMBER()` window function assigns a unique sequential integer to sales for each product, ordered by `sale_date`, starting from 1."
    },
    {
      id: 8,
      level: "WindowFunctions",
      description: "Find the difference in sales amount between each sale and the previous sale for each product.",
      solution: "SELECT product_id, sale_date, sales_amount, sales_amount - LAG(sales_amount, 1) OVER (PARTITION BY product_id ORDER BY sale_date) AS sales_diff FROM sales;",
      ruleDescription: "The `LAG()` window function is used to calculate the difference in sales amount between the current sale and the previous sale for each product, partitioned by `product_id` and ordered by `sale_date`."
    },
    {
      id: 9,
      level: "WindowFunctions",
      description: "List each employee's salary and the average salary of their department, excluding their own salary.",
      solution: "SELECT employee_id, department, salary, (SUM(salary) OVER (PARTITION BY department) - salary) / (COUNT(salary) OVER (PARTITION BY department) - 1) AS avg_department_salary_excl_self FROM employees;",
      ruleDescription: "This query calculates the average salary within each department, excluding the salary of the current employee, by subtracting the employee's salary from the total sum and adjusting the count accordingly."
    },
    {
      id: 10,
      level: "WindowFunctions",
      description: "Rank products by sales on their launch day compared to all products' launch day sales.",
      solution: "SELECT product_id, launch_date, sales_amount, RANK() OVER (ORDER BY sales_amount DESC) AS launch_day_sales_rank FROM product_launches;",
      ruleDescription: "This query ranks products based on their sales amount on the launch day, comparing them against the launch day sales of all products, without partitioning, to identify top performers."
    }
  ];
  