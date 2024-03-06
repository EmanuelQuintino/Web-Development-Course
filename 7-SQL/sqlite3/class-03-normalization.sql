-- NORMALIZATION

DROP TABLE IF EXISTS students;
CREATE TABLE IF NOT EXISTS students (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL,
  street TEXT NOT NULL,
  neighborhood TEXT NOT NULL,
  city TEXT NOT NULL,
  course_id INTEGER,  
  FOREIGN KEY(course_id) REFERENCES courses(id)
);

DROP TABLE IF EXISTS courses;
CREATE TABLE IF NOT EXISTS courses(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  hours INTEGER NOT NULL
);

SELECT * FROM courses;
INSERT INTO courses (name, hours) VALUES
  ("Programador Web", 240),
  ("Informática para o mundo do trabalho", 160),
  ("Ferramentas Digitais", 60);

SELECT * FROM students;
INSERT INTO students(name, street, neighborhood, city, course_id) VALUES
  ("Emanuel","Rua X", "Bairro Y", "Cidade Z", 1),
  ("Thiago","Rua X", "Bairro Y", "Cidade Z", 1),
  ("Beatriz","Rua X", "Bairro Y", "Cidade Z", 2);

DROP TABLE IF EXISTS phones;
CREATE TABLE IF NOT EXISTS phones(
  number TEXT NOT NULL,
  student_id INTEGER NOT NULL,
  PRIMARY KEY(number, student_id),
  FOREIGN KEY(student_id) REFERENCES students(id) ON DELETE CASCADE
);

SELECT * FROM phones;
INSERT INTO phones (number, student_id) VALUES
  ("(88) 8888-8888", 1),
  ("(99) 9999-9999", 1),
  ("(00) 0000-0000", 2),
  ("(77) 7777-7777", 3);

SELECT students.name, phones.number
FROM phones INNER JOIN students
ON phones.student_id = students.id
ORDER BY students.name;

SELECT students.name, courses.name
FROM students INNER JOIN courses
ON students.course_id = courses.id
ORDER BY students.name;

SELECT * FROM students;
DELETE FROM students WHERE id = 1;
