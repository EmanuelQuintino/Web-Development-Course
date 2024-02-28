-- [employees](0,N) <> (1,1)[department] 

DROP TABLE department;
CREATE TABLE department(
	cod_depart SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
	description_depart VARCHAR(40) NOT NULL
);

DESCRIBE department;

INSERT INTO department VALUES
(DEFAULT, "Administrativo"), 
(DEFAULT, "Financeiro"),
(DEFAULT, "Recursos Humanos"),
(DEFAULT, "Comercial"),
(DEFAULT, "Juríduco"),
(DEFAULT, "Operacional"),
(DEFAULT, "Marketing");

SELECT * FROM department 
ORDER BY cod_depart ASC
LIMIT 3;

DROP TABLE employees;
CREATE TABLE employees (
	registation SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name varchar(40) NOT NULL
);

DESCRIBE employees;

INSERT INTO employees VALUES
(DEFAULT, 'Maria'),
(DEFAULT, 'Pedro'),
(DEFAULT, 'Ana');

SELECT * FROM employees;

ALTER TABLE employees 
ADD COLUMN fk_cod_department TINYINT UNSIGNED;

ALTER TABLE employees
CHANGE COLUMN fk_cod_department
fk_cod_department SMALLINT UNSIGNED;

ALTER TABLE employees
ADD FOREIGN KEY (fk_cod_department)
REFERENCES department(cod_depart);

UPDATE employees 
SET fk_cod_department = 4 
WHERE registation = 3;

SELECT * FROM employees;

SELECT employees.name, department.description_depart
FROM employees INNER JOIN department
ON employees.fk_cod_department = department.cod_depart;
