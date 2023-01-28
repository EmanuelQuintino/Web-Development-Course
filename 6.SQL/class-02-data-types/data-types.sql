drop table studants;

create table studants(
	id smallint unsigned primary key auto_increment, 
	name varchar(40) not null,
    c_performance decimal(5, 2),
    cpf varchar(11) unique not null,
    birth_year date not null,
    age tinyint unsigned not null,
    gender enum('M', 'F') not null,
    city varchar(30) default "Jucás"
);

describe studants;

insert into studants (name, c_performance, cpf, birth_year, age, gender)
values ("João", 89.2, "12345678900", "1989-12-25", "25", "M");

insert into studants values 
(default, "Pedro", 90.75, "12345678901", "1998-02-12", "30", "M", default),
(default, "Maria", 95, "12345678902", "1995-11-23", "50", "F", "Iguatu");

select name, c_performance as cr, city 
from studants order by cr desc limit 10;