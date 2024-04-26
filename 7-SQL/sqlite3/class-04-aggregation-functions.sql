SELECT * FROM orders;
SELECT * FROM orders ORDER BY pais DESC;

SELECT DISTINCT pais FROM orders ORDER BY pais;
SELECT DISTINCT categoria FROM orders ORDER BY categoria;

SELECT * FROM orders WHERE regiao = 'Bra';

SELECT DISTINCT regiao FROM orders WHERE regiao LIKE 'cal%';
SELECT DISTINCT regiao FROM orders WHERE regiao LIKE '%nia';
SELECT DISTINCT regiao FROM orders WHERE regiao LIKE '%ia%';
SELECT DISTINCT regiao FROM orders WHERE regiao LIKE '_a%';

SELECT * FROM orders 
WHERE regiao IN ('Bahia', 'Ceará')
ORDER BY regiao;

SELECT * FROM orders 
WHERE total_vendas >= 2000 AND total_vendas <= 3000 
ORDER BY total_vendas;

SELECT 
    id_pedido, 
    total_vendas,
    quantidade,
    total_vendas / quantidade AS média
FROM orders
WHERE total_vendas <= 2000;

SELECT * FROM orders 
WHERE quantidade BETWEEN 10 AND 20 
ORDER BY quantidade;

-- aggregation-functions

SELECT 
    COUNT(*) AS QTD, 
    TOTAL(total_vendas),
    ROUND(SUM(total_vendas), 2) AS Total, 
    MIN(total_vendas) AS MIN, 
    MAX(total_vendas) AS MAX, 
    AVG(total_vendas) AS AVG, 
    SQRT(SUM((total_vendas - (SELECT AVG(total_vendas) FROM orders)) * 
             (total_vendas - (SELECT AVG(total_vendas) FROM orders))) / 
              COUNT(total_vendas)) 
              AS Desvio_Padrao_Total_Vendas

FROM orders 
WHERE pais = 'Brazil' 
AND total_vendas > 3000;

SELECT COUNT(*) FROM orders;
SELECT COUNT(DISTINCT pais) FROM orders;
SELECT COUNT(DISTINCT regiao) FROM orders;

SELECT pais, ROUND(SUM(total_vendas)) AS total 
FROM orders 
GROUP BY pais 
ORDER BY total DESC
LIMIT 10;

SELECT 
    pais, 
    SUM(quantidade), 
    SUM(total_vendas) AS total,  
    AVG(total_vendas) AS AVG
    
FROM orders 
GROUP BY pais 
HAVING total > 700000 
ORDER BY total DESC;

SELECT id_pedido, COUNT(id_pedido) 
FROM orders GROUP BY id_pedido;

SELECT * FROM orders WHERE id_pedido = 'AE-2011-9160';
