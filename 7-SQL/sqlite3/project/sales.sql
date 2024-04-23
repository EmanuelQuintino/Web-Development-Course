DROP TABLE IF EXISTS clients;
CREATE TABLE IF NOT EXISTS clients (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR NOT NULL,
  cpf VARCHAR UNIQUE NOT NULL,
  street VARCHAR,
  neighborhood VARCHAR,
  city VARCHAR
);

DROP TABLE IF EXISTS phones;
CREATE TABLE IF NOT EXISTS phones (
  number VARCHAR NOT NULL,
  id_client INTEGER NOT NULL,
  PRIMARY KEY (number, id_client),
  FOREIGN KEY (id_client) REFERENCES clients(id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS products;
CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR NOT NULL,
  price INTEGER NOT NULL,
  description VARCHAR
);

DROP TABLE IF EXISTS sales;
CREATE TABLE IF NOT EXISTS sales (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  id_client INTEGER NOT NULL,
  id_product INTEGER NOT NULL,
  amount INTEGER NOT NULL,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_client) REFERENCES clients(id) ON DELETE CASCADE
  FOREIGN KEY (id_product) REFERENCES products(id)
);

SELECT * FROM clients;
INSERT INTO clients(name, cpf) VALUES
  ("Jonatan","123.123.123-00"),
  ("Daniel","123.123.123-01"),
  ("Natan","123.123.123-02");

SELECT * FROM phones;
INSERT INTO phones(number, id_client) VALUES
  ("(88) 8888-8888", 1),
  ("(99) 9999-9999", 1),
  ("(00) 0000-0000", 2),
  ("(77) 7777-7777", 3);

SELECT * FROM products;
INSERT INTO products(name, price) VALUES 
  ("Smartwatche", 450), 
  ("Samsumg M54", 1800),
  ("Acer Aspire 5", 2830.75),
  ("Lenovo IdeaPad", 2602.25);

SELECT * FROM sales;
INSERT INTO sales(id_client, id_product, amount) VALUES 
  (1, 1, 2), 
  (2, 2, 4),
  (2, 4, 2),
  (3, 3, 5);
    
SELECT clients.name, phones.number
FROM clients
INNER JOIN phones
ON clients.id = phones.id_client
ORDER BY clients.name DESC;

SELECT clients.name AS Nome_Cliente, 
       products.name AS Produto, 
       sales.amount, 
       sales.amount * products.price AS Total_Vendido

FROM clients
INNER JOIN sales ON sales.id_client = clients.id
INNER JOIN products ON sales.id_product = products.id
ORDER BY clients.name;

SELECT * FROM clients;
DELETE FROM clients WHERE id = 1;
