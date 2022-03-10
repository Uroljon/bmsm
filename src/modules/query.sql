create table news (
    id serial primary key,
    title text,
    body text,
    posted_at  timestamptz default current_timestamp
);
create table users (
    id serial primary key,
    email varchar(64) unique,
    password varchar(32),
    role varchar(32)
);

insert into news (title, body) values ('Welcome to our music school', 'lorem ipsum dol...');
insert into users (email, password, role) values ('uroljonkhidirboev@gmail.com', 'tel2913598', 'owner');

select * from news where id=1;