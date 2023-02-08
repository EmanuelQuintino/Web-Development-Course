-- 1FN, 2FN, 3FN

DROP TABLE users;
CREATE TABLE users (
	id SMALLINT UNSIGNED AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    
    PRIMARY KEY(id)
);

DESCRIBE users;

INSERT INTO users(name, phone, address) VALUES
('Emanuel', '(88) 8888-8888, (99) 9999-9999', 'Rua X, Bairro Y, Cidade Z'),
('Thiago', '(88) 8888-8888, (99) 9999-9999', 'Rua X, Bairro Y, Cidade Z'),
('Beatriz', '(88) 8888-8888, (99) 9999-9999', 'Rua X, Bairro Y, Cidade Z');

SELECT * FROM users;
DROP TABLE users;

CREATE TABLE users (
	id SMALLINT UNSIGNED AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
    street VARCHAR(255) NOT NULL,
    neighborhood VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO users(name, street, neighborhood, city) VALUES
('Emanuel','Rua X', 'Bairro Y', 'Cidade Z'),
('Thiago','Rua X', 'Bairro Y', 'Cidade Z'),
('Beatriz','Rua X', 'Bairro Y', 'Cidade Z');

DROP TABLE phones;
CREATE TABLE phones(
	id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    number VARCHAR(255) NOT NULL,
    user SMALLINT UNSIGNED NOT NULL,
  
	PRIMARY KEY(id),
    FOREIGN KEY(user) REFERENCES users(id) ON DELETE CASCADE
);

DESCRIBE phones;

INSERT INTO phones (number, user) VALUES
('(88) 8888-8888', 1),
('(99) 9999-9999', 1),
('(00) 0000-0000', 2),
('(77) 7777-7777', 3);

SELECT * FROM phones;

DELETE FROM users WHERE id = 1;

SELECT users.name, phones.number
FROM phones INNER JOIN users
ON phones.user = users.id
ORDER BY users.name;