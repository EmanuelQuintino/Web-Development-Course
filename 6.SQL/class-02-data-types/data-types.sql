DROP TABLE studants;
CREATE TABLE studants(
	id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
	name VARCHAR(40) NOT NULL,
    cpf VARCHAR(11) UNIQUE NOT NULL,
    birth_year DATE NOT NULL,
    gender ENUM('M', 'F') NOT NULL,
    city VARCHAR(30) DEFAULT "Jucás",
    course VARCHAR(30) NOT NULL,
    c_performance DECIMAL(5, 2),
    subscription TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE studants;

INSERT INTO studants (name, cpf, birth_year, gender, course, c_performance)
VALUES ("João", "12345678900", "1989-12-25", "M", "Programador Web", 89.2);

INSERT INTO Studants VALUES 
(DEFAULT, "Pedro", "12345678901", "1998-02-12", "M", DEFAULT, "Ferramentas Digitais" , 90.75, DEFAULT),
(DEFAULT, "Maria", "12345678902", "1995-06-23", "F", DEFAULT, "Ferramentas Digitais" , 95, DEFAULT);

SELECT 
	id AS ID, 
    name AS Nome, 
    c_performance AS CR, 
    course AS Curso 
FROM studants 
ORDER BY CR 
DESC LIMIT 10;

DROP TABLE courses;
CREATE TABLE courses (
	id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name varchar(40) NOT NULL,
    hours TINYINT UNSIGNED
);

INSERT INTO courses VALUES
(DEFAULT, 'Programador Web', 240),
(DEFAULT, 'Ferramentas Digitais', 160),
(DEFAULT, 'Informática para o Mundo do Trabalho', 160);

SELECT * FROM courses;