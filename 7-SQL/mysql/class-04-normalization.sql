-- NORMALIZATION

DROP TABLE studants;
CREATE TABLE studants (
	id SMALLINT UNSIGNED AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    id_course SMALLINT UNSIGNED NOT NULL,
    name_course VARCHAR(255) NOT NULL,
    hours TINYINT UNSIGNED NOT NULL,
    
    PRIMARY KEY(id)
);

DESCRIBE studants;

INSERT INTO studants(
	name, 
    phone, 
    address, 
    id_course, 
    name_course, hours) 
VALUES
('Emanuel', '(88) 8888-8888, (99) 9999-9999', 'Rua X, Bairro Y, Cidade Z', 1, 'Programador Web', 240),
('Thiago', '(88) 8888-8888, (99) 9999-9999', 'Rua X, Bairro Y, Cidade Z', 1, 'Programador Web', 240),
('Beatriz', '(88) 8888-8888, (99) 9999-9999', 'Rua X, Bairro Y, Cidade Z', 2, 'Ferramentas Digitais', 160);

SELECT * FROM studants;

DROP TABLE courses;
CREATE TABLE courses(
	id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    hours TINYINT UNSIGNED NOT NULL
);

DESCRIBE courses;

INSERT INTO courses (name, hours) VALUES
('Programador Web', 240),
('Informática para o mundo do trabalho', 160),
('Ferramentas Digitais', 60);

SELECT * FROM courses;

DROP TABLE studants;
CREATE TABLE studants (
	id SMALLINT UNSIGNED AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
    street VARCHAR(255) NOT NULL,
    neighborhood VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    course SMALLINT UNSIGNED,
    
    PRIMARY KEY(id),
    FOREIGN KEY(course) REFERENCES courses(id)
);

DESCRIBE studants;

INSERT INTO studants(
	name, 
    street, 
    neighborhood, 
    city, 
    course) 
VALUES
('Emanuel','Rua X', 'Bairro Y', 'Cidade Z', 1),
('Thiago','Rua X', 'Bairro Y', 'Cidade Z', 1),
('Beatriz','Rua X', 'Bairro Y', 'Cidade Z', 2);

SELECT * FROM studants;

SELECT studants.name, courses.name 
FROM studants INNER JOIN courses
ON studants.course = courses.id
ORDER BY studants.name;

DROP TABLE phones;
CREATE TABLE phones(
	id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    number VARCHAR(255) NOT NULL,
    studant SMALLINT UNSIGNED NOT NULL,
  
	PRIMARY KEY(id),
    FOREIGN KEY(studant) REFERENCES studants(id) ON DELETE CASCADE
);

DESCRIBE phones;

INSERT INTO phones (number, studant) VALUES
('(88) 8888-8888', 1),
('(99) 9999-9999', 1),
('(00) 0000-0000', 2),
('(77) 7777-7777', 3);

SELECT * FROM phones;

SELECT studants.name, phones.number
FROM phones INNER JOIN studants
ON phones.studant = studants.id
ORDER BY studants.name;

SELECT * FROM studants;
DELETE FROM studants WHERE id = 1;