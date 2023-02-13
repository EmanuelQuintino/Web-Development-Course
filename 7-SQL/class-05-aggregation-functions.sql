SELECT * FROM sales;
SELECT * FROM sales ORDER BY sale DESC;
SELECT DISTINCT city FROM sales ORDER BY city;
SELECT * FROM sales WHERE name LIKE '_a%';

SELECT * FROM sales 
WHERE month IN ('jan', 'jul','dez')
ORDER BY month, name;

SELECT * FROM sales 
WHERE sale >= 2000 AND sale <= 3000
ORDER BY sale;

SELECT * FROM sales 
WHERE sale BETWEEN 2000 AND 3000
ORDER BY sale;

SELECT COUNT(*) FROM sales;
SELECT COUNT(DISTINCT name) FROM sales;
SELECT COUNT(DISTINCT month) FROM sales;

SELECT
	COUNT(*),
	SUM(sale),
    MIN(sale),
    MAX(sale),
    AVG(sale),
    STD(sale)
FROM sales
WHERE city = 'jucas' AND sale > 3000;

SELECT city, SUM(sale) AS total 
FROM sales GROUP BY city
ORDER BY total DESC;

SELECT
	name,
	COUNT(sale),
    SUM(sale) AS total,
    AVG(sale),
	STD(sale)
FROM sales
GROUP BY name
HAVING total > 350000 
ORDER BY total DESC;