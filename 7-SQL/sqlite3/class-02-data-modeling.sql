CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    id_course INTEGER REFERENCES courses(id) ON DELETE CASCADE
);


DROP TABLE students;

CREATE TABLE IF NOT EXISTS courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    workload INTEGER NOT NULL
);

DROP TABLE courses;

INSERT INTO students (id, name, email, id_course) VALUES 
    (1, "Erick", "erick@gmail.com", "1"),
    (2, "Pedro", "pedro@gmail.com", "1"),
    (3, "Neemias", "neemias@gmail.com", "2");
    
INSERT INTO courses (name, workload) VALUES 
    ("Web Developement Course", 360),
    ("Data Analysis Course", 240),
    ("Cyber Security Course", 240);

SELECT * FROM students;
SELECT * FROM courses;

-- INNER, RIGHT, LEFT, FULL
SELECT students.name as aluno, courses.name as curso
FROM students
INNER JOIN courses ON students.id_course = courses.id;

DELETE FROM students WHERE id = 1;
DELETE FROM courses WHERE id = 1;
