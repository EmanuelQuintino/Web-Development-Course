-- DDL
CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT NOT NULL,
    age INT
);

DROP TABLE students;

-- DML
INSERT INTO students (name, age) VALUES 
    ("Pedrinho", 20), 
    ("Luíza", 19);

UPDATE students SET age = 21 WHERE name = "Pedrinho";
UPDATE students SET age = 19 WHERE id = 2;
UPDATE students SET name = "Dudu", age = 20 WHERE id = 4;

DELETE FROM students;
DELETE FROM students WHERE id = 6; 

-- *DQL
SELECT * FROM students;
SELECT * FROM students WHERE name = "Pedrinho";
SELECT * FROM students WHERE id = 2;

-- DDL
ALTER TABLE students ADD COLUMN city TEXT;
ALTER TABLE students DROP COLUMN city;

-- Challenge DML
UPDATE students SET city = "Jucás" WHERE id = 9;
