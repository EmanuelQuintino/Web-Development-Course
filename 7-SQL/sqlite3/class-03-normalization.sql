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

INSERT INTO students(name, street, neighborhood, city, course) VALUES
  ("Emanuel","Rua X", "Bairro Y", "Cidade Z", 1),
  ("Thiago","Rua X", "Bairro Y", "Cidade Z", 1),
  ("Beatriz","Rua X", "Bairro Y", "Cidade Z", 2);

SELECT * FROM students;

DROP TABLE IF EXISTS courses;
CREATE TABLE courses(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  hours INTEGER NOT NULL
);

INSERT INTO courses (name, hours) VALUES
  ("Programador Web", 240),
  ("Informática para o mundo do trabalho", 160),
  ("Ferramentas Digitais", 60);

SELECT * FROM courses;

DROP TABLE IF EXISTS phones;
CREATE TABLE phones(
    number TEXT NOT NULL,
    student_id INTEGER NOT NULL,
    PRIMARY KEY(number, student_id),
    FOREIGN KEY(student_id) REFERENCES students(id) ON DELETE CASCADE
);

INSERT INTO phones (number, student_id) VALUES
  ("(88) 8888-8888", 1),
  ("(99) 9999-9999", 1),
  ("(00) 0000-0000", 2),
  ("(77) 7777-7777", 3);

SELECT * FROM phones;

SELECT students.name, phones.number
FROM phones INNER JOIN students
ON phones.student_id = students.id
ORDER BY students.name;

SELECT * FROM students;
DELETE FROM students WHERE id = 1;

-- 

CREATE TABLE students (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    id_course INTEGER REFERENCES courses(id)
);

DROP TABLE students;

CREATE TABLE courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    workload INTEGER NOT NULL
);

DROP TABLE courses;

INSERT INTO students (name, email, id_course)VALUES
    ("Erick", "erick@gmail.com", 3),
    ("Jorge", "jorge@gmail.com", 2),
    ("Daniel", "daniel@gmail.com", 2);
    
INSERT INTO courses (name, workload) VALUES
    ("Web Development", 360),
    ("Data Analysis", 240),
    ("Cyber Security", 240);
    
SELECT * FROM students;
SELECT * FROM courses;
