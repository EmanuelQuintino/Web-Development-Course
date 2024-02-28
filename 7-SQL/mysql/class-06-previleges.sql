SELECT * FROM MYSQL.USER;
SELECT * FROM MYSQL.DB;
SELECT USER();

CREATE USER 'admin'@'localhost' IDENTIFIED BY 'admin';
DROP USER 'admin'@'localhost';

SHOW GRANTS FOR 'admin'@'localhost';

GRANT SELECT ON school.* TO 'admin'@'localhost';
REVOKE SELECT ON school.* FROM 'admin'@'localhost';

GRANT SELECT, INSERT, UPDATE, DELETE 
ON school.* 
TO 'admin'@'localhost';

REVOKE SELECT, INSERT, UPDATE, DELETE
ON school.* 
FROM 'admin'@'localhost';

GRANT CREATE, DROP 
ON school.* 
TO 'admin'@'localhost';

REVOKE CREATE, DROP 
ON school.* 
FROM 'admin'@'localhost';

FLUSH PRIVILEGES;
