-- NORMALIZATION

DROP TABLE IF EXISTS students;
CREATE TABLE students (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL,
    street TEXT NOT NULL,
    neighborhood TEXT NOT NULL,
    city TEXT NOT NULL,
    course INTEGER,
    
    FOREIGN KEY(course) REFERENCES courses(id)
);

INSERT INTO students(name, street, neighborhood, city, course) 
VALUES
('Emanuel','Rua X', 'Bairro Y', 'Cidade Z', 1),
('Thiago','Rua X', 'Bairro Y', 'Cidade Z', 1),
('Beatriz','Rua X', 'Bairro Y', 'Cidade Z', 2);

SELECT * FROM students;

DROP TABLE IF EXISTS courses;
CREATE TABLE courses(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    hours INTEGER NOT NULL
);

INSERT INTO courses (name, hours) VALUES
('Programador Web', 240),
('Informática para o mundo do trabalho', 160),
('Ferramentas Digitais', 60);

SELECT * FROM courses;

DROP TABLE IF EXISTS phones;
CREATE TABLE phones(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
    number TEXT NOT NULL,
    student INTEGER NOT NULL,
  
	FOREIGN KEY(student) REFERENCES students(id) ON DELETE CASCADE
);

INSERT INTO phones (number, student) VALUES
('(88) 8888-8888', 1),
('(99) 9999-9999', 1),
('(00) 0000-0000', 2),
('(77) 7777-7777', 3);

SELECT * FROM phones;

SELECT students.name, phones.number
FROM phones INNER JOIN students
ON phones.student = students.id
ORDER BY students.name;

SELECT * FROM students;
DELETE FROM students WHERE id = 1;
