-- NORMALIZATION

DROP TABLE IF EXISTS clients;
CREATE TABLE IF NOT EXISTS clients (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  street TEXT NOT NULL,
  neighborhood TEXT NOT NULL,
  city TEXT NOT NULL
);

DROP TABLE IF EXISTS products;
CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  price INTEGER NOT NULL
);

DROP TABLE IF EXISTS sales;
CREATE TABLE IF NOT EXISTS sales (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  id_client INTEGER NOT NULL,
  id_product INTEGER NOT NULL,
  amount INTEGER NOT NULL,
  Date DATE DEFAULT CURRENT_DATE,
  FOREIGN KEY(id_client) REFERENCES clients(id) ON DELETE CASCADE
  FOREIGN KEY(id_product) REFERENCES products(id)
);

DROP TABLE IF EXISTS phones;
CREATE TABLE IF NOT EXISTS phones (
  number TEXT NOT NULL,
  client_id INTEGER NOT NULL,
  PRIMARY KEY(number, client_id),
  FOREIGN KEY(client_id) REFERENCES clients(id) ON DELETE CASCADE
);

INSERT INTO clients (name, street, neighborhood, city) VALUES
  ("Jonatan","Rua X", "Bairro Y", "Cidade Z"),
  ("Daniel","Rua X", "Bairro Y", "Cidade Z"),
  ("Natan","Rua X", "Bairro Y", "Cidade Z");

SELECT * FROM clients;

INSERT INTO products (name, price) VALUES 
  ("Arroz", 120), 
  ("Feijão", 20.75),
  ("Macarrão", 47),
  ("Leite", 140.5);

SELECT * FROM products;

INSERT INTO sales (id_client, id_product, amount) VALUES 
  (1, 1, 2), 
  (2, 1, 4),
  (2, 2, 1),
  (3, 2, 10);
    
SELECT * FROM sales;

INSERT INTO phones (number, client_id) VALUES
  ("(88) 8888-8888", 1),
  ("(99) 9999-9999", 1),
  ("(00) 0000-0000", 2),
  ("(77) 7777-7777", 3);

SELECT * FROM phones;

SELECT clients.name, phones.number
FROM clients
INNER JOIN phones
ON clients.id = phones.client_id
ORDER BY clients.name;

SELECT clients.name AS Nome_Cliente, 
       products.name AS Produto, 
       sales.amount, 
       sales.amount * products.price AS Total_Vendido

FROM clients
INNER JOIN sales ON clients.id = sales.id_client
INNER JOIN products ON sales.id_product = products.id
ORDER BY clients.name;

SELECT * FROM clients;
DELETE FROM clients WHERE id = 2;
