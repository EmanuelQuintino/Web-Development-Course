CREATE DATABASE school;
DROP DATABASE school;

USE school;

CREATE TABLE students(
	named VARCHAR(50) NOT NULL,
    age INT NOT NULL
);

DROP TABLE students;

SELECT * FROM students;
DESCRIBE students;

INSERT INTO students(named, age) VALUES("Samila", 18);
INSERT INTO students VALUES('Emanuel', 30, DEFAULT);
INSERT INTO students(age, named) VALUES(16, 'Murilo');

SET SQL_SAFE_UPDATES = 1;

UPDATE students SET age = 30 WHERE named = 'Emanuel';
DELETE FROM students WHERE named = 'Emanuel';
-- DELETE FROM students;

TRUNCATE students;

ALTER TABLE students 
ADD COLUMN city VARCHAR(20) NOT NULL DEFAULT 'Jucás'
AFTER age;

ALTER TABLE students 
ADD COLUMN id INT
FIRST;

ALTER TABLE students DROP COLUMN id;

ALTER TABLE students 
MODIFY COLUMN named VARCHAR(30) NOT NULL;

ALTER TABLE estudantes RENAME TO students;
ALTER TABLE students RENAME COLUMN named TO nome;

ALTER TABLE students 
CHANGE COLUMN nome named VARCHAR(30) NOT NULL;
