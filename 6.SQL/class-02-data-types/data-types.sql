DROP TABLE studants;

CREATE TABLE studants(
	id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
	name VARCHAR(40) NOT NULL,
    c_performance DECIMAL(5, 2),
    cpf VARCHAR(11) UNIQUE NOT NULL,
    birth_year DATE NOT NULL,
    gender ENUM('M', 'F') NOT NULL,
    city VARCHAR(30) DEFAULT "Jucás"
);

DESCRIBE studants;

INSERT INTO studants (name, c_performance, cpf, birth_year, gender)
VALUES ("João", 89.2, "12345678900", "1989-12-25", "M");

INSERT INTO Studants VALUES 
(DEFAULT, "Pedro", 90.75, "12345678901", "1998-02-12", "M", DEFAULT),
(DEFAULT, "Maria", 95, "12345678902", "1995-11-23", "F", "Iguatu");

SELECT id, name, c_performance AS CR, City 
FROM studants ORDER BY CR DESC LIMIT 10;