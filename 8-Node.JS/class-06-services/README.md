# Class 06 Services

The practice of using a folder called "repositories" and "services" to projects that follow the Dependency Inversion pattern is a common convention in many applications, especially those that follow a Clean Architecture or Layered Architecture.

## Here are some reasons why this convention is often adopted

- `Separation of Responsibilities`  
  The "repositories" folder is used to encapsulate the data access logic, isolating it from the rest of the application. This helps maintain a clear separation between data access concerns and the business logic of the application.

- `Ease of Maintenance`  
  Grouping all data access operations into a single folder makes these files easier to find and manage. This is especially useful in large projects where there may be a large number of SQL queries or database operations spread across multiple files.

- `Database Abstraction`  
  Repositories serve as an abstraction layer on top of the underlying database. This means that other parts of the application do not need to worry about database-specific details, such as SQL syntax or the type of database used. These details are encapsulated in the repositories, which makes it easier to replace or change the database in the future.

- `Testability`  
  Separating data access logic into repositories makes it easier to write unit tests for the rest of the application. Because repositories can be easily replaced with mock or stub versions during testing, this helps to isolate test units and ensure that they are not directly dependent on the real database.

- `Compliance with Software Design Principles`  
  This practice is aligned with SOLID principles, especially the Dependency Inversion Principle, which suggests that high-level modules should not depend on low-level modules, but rather both should depend on abstractions. Repositories, in this case, serve as abstractions for data access.
