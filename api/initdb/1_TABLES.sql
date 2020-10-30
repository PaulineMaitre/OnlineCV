create table users
(
    id              bigint auto_increment,
    constraint users_pk
        primary key (id),
    first_name      TEXT not null,
    last_name       TEXT not null,
    phone_number    TEXT not null,
    birth_date      DATE,
    address         TEXT,
    profile_picture TEXT,
    email           TEXT not null,
    bio             TEXT
);

create table socials
(
    id          bigint auto_increment,
    constraint socials_pk
        primary key (id),
    social_name TEXT   not null,
    social_link TEXT   not null,
    social_logo TEXT,
    user_id     bigint,
    FOREIGN KEY (user_id) REFERENCES users (id)
);

create table languages
(
    id             bigint auto_increment,
    constraint languages_pk
        primary key (id),
    language_name  TEXT   not null,
    language_level TEXT,
    language_flag  TEXT,
    user_id        bigint,
    FOREIGN KEY (user_id) REFERENCES users (id)
);
create table skill
(
    id              bigint auto_increment,
    constraint skill_pk
        primary key (id),
    skill_name      TEXT   not null,
    skill_logo_link TEXT,
    skill_level     INT,
    user_id         bigint,
    FOREIGN KEY (user_id) REFERENCES users (id)
);

create table frame_content
(
    id             bigint auto_increment,
    constraint frame_content_pk
        primary key (id),
    frame_title    TEXT   not null,
    frame_logo_url TEXT,
    frame_order    INT,
    user_id        bigint,
    FOREIGN KEY (user_id) REFERENCES users (id)
);

create table content_item
(
    id               bigint auto_increment,
    constraint content_item_pk
        primary key (id),
    item_title       TEXT   not null,
    item_logo_url    TEXT,
    item_content     TEXT   not null,
    item_order       INT,
    item_period      TEXT,
    item_location    TEXT,
    frame_content_id bigint ,
    FOREIGN KEY (frame_content_id) REFERENCES frame_content (id)
);


