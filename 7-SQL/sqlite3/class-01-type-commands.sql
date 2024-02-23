-- DDL
CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT NOT NULL,
    age NUMERIC
);

DROP TABLE students;

-- DML
INSERT INTO students (name, age) VALUES 
    ("Wellington", 18),
    ("Emanuel", 18), 
    ("Maurício", 21);

-- DQL
SELECT * FROM students;

SELECT name, age 
FROM students 
WHERE id = 7;

SELECT * FROM students 
WHERE id = 6 OR id = 8;

SELECT * 
FROM students 
WHERE age > 18 
ORDER BY age DESC;

-- DML
UPDATE students 
SET age = 99
WHERE name = "Pedrinho";

UPDATE students 
SET age = 17 
WHERE id = 3;

UPDATE students 
SET name = "Pedro", age = 17 
WHERE id = 3;

DELETE FROM students;
DELETE FROM students WHERE id = 4;

-- DDL
ALTER TABLE students 
ADD COLUMN city TEXT;

ALTER TABLE students 
DROP COLUMN city;

ALTER TABLE students 
RENAME COLUMN city TO test;

-- challenge DML
UPDATE students 
SET city = "Jucás";

UPDATE students 
SET city = "Saboeiro" 
WHERE id = 6;
