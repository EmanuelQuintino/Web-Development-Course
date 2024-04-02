module.exports = `
    CREATE TABLE IF NOT EXISTS courses(
        id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        hours TINYINT UNSIGNED NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        
        PRIMARY KEY(id)
    );
`;