create table news (
    id serial primary key,
    title text,
    body text,
    cover_image varchar(64),
    posted_at  timestamptz default current_timestamp
);
create table users (
    id serial primary key,
    email varchar(64) unique,
    password varchar(32),
    role varchar(32)
);

insert into news (title, body) values ('Welcome to our music school', 'lorem ipsum dol...');
insert into news (title, body) values ('2nd news:  ...', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem laborum quisquam aut eum ducimus maiores veritatis, inventore repellendus tempora minus soluta suscipit vel eaque aperiam voluptas, dolor in? Dolorem, nisi?');
insert into news (title, body) values ('3rd news: music school has hosted corporate event...', 'inventore repellendus tempora minus soluta suscipit vel eaque aperiam voluptas...');
insert into users (email, password, role) values ('uroljonkhidirboev@gmail.com', 'tel2913598', 'owner');

select * from news where id=1;