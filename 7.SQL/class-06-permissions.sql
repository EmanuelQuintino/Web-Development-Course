SELECT * FROM MYSQL.USER;
SELECT * FROM MYSQL.DB;
SELECT USER();

CREATE USER 'admin'@'localhost' IDENTIFIED BY 'admin';
DROP USER 'admin'@'localhost';

SHOW GRANTS FOR 'admin'@'localhost';

GRANT SELECT ON school.* TO 'admin'@'localhost';
REVOKE SELECT ON school.* FROM 'admin'@'localhost';

GRANT SELECT, UPDATE, DELETE 
ON school.users 
TO 'admin'@'localhost';

REVOKE SELECT, UPDATE, DELETE
ON school.users 
FROM 'admin'@'localhost';

FLUSH PRIVILEGES;