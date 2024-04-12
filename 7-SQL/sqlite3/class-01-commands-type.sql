-- DDL
DROP TABLE students;
CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT NOT NULL,
    cpf TEXT NOT NULL UNIQUE,
    age NUMERIC
);

-- DML
INSERT INTO students (name, cpf, age) VALUES 
    ('Wellington', '123.123.123-01', 18),
    ('Emanuel','123.123.123-02', 18), 
    ('Maurício', '123.123.123-03', 21);

-- DQL
SELECT * FROM students;

SELECT name, age FROM students;

SELECT name, age 
FROM students 
WHERE id = 7;

SELECT * FROM students 
WHERE id = 6 OR id = 8;

SELECT * 
FROM students 
WHERE age > 18 
ORDER BY age DESC;

-- TCL
BEGIN TRANSACTION;
COMMIT;
ROLLBACK;

-- DML
UPDATE students 
SET age = 99
WHERE name = 'Pedrinho';

UPDATE students 
SET age = 17 
WHERE id = 3;

UPDATE students 
SET name = 'Pedro', age = 17 
WHERE id = 3;

DELETE FROM students;
DELETE FROM students WHERE id = 4;

-- DDL
ALTER TABLE students 
ADD COLUMN city TEXT 
NOT NULL DEFAULT 'Jucás';

ALTER TABLE students 
DROP COLUMN city;

ALTER TABLE students 
RENAME COLUMN city TO test;

-- challenge DML
UPDATE students 
SET city = 'Jucás';

UPDATE students 
SET city = 'Saboeiro' 
WHERE id = 6;
