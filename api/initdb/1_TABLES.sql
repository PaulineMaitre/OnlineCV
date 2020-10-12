create table users
(
    id           bigint auto_increment,
    constraint users_pk
        primary key (id),
    first_name   TEXT not null,
    last_name    TEXT not null,
    phone_number TEXT not null,
    birth_date   DATE not null,
    address      TEXT not null,
    email        TEXT not null,
    bio          TEXT not null
);

create table socials
(
    id          bigint auto_increment,
    constraint socials_pk
        primary key (id),
    social_name TEXT   not null,
    social_link TEXT   not null,
    social_logo TEXT   not null,
    user_id     bigint not null,
    FOREIGN KEY (user_id) REFERENCES users (id)
);

create table languages
(
    id             bigint auto_increment,
    constraint languages_pk
        primary key (id),
    language_name  TEXT   not null,
    language_level TEXT    not null,
    language_flag  TEXT   not null,
    user_id        bigint not null,
    FOREIGN KEY (user_id) REFERENCES users (id)
);
create table competences
(
    id                    bigint auto_increment,
    constraint competences_pk
        primary key (id),
    competences_name      TEXT   not null,
    competences_logo_link TEXT   not null,
    competences_level     TEXT   not null,
    user_id               bigint not null,
    FOREIGN KEY (user_id) REFERENCES users (id)
);

create table frame_content
(
    id                 bigint auto_increment,
    constraint frame_content_pk
        primary key (id),
    frame_title        TEXT   not null,
    frame_logo_url     TEXT   not null,
    user_id            bigint not null,
    FOREIGN KEY (user_id) REFERENCES users (id)
);

create table content_item
(
    id            bigint auto_increment,
    constraint content_item_pk
        primary key (id),
    item_title    TEXT   not null,
    item_logo_url TEXT   not null,
    item_content  TEXT   not null,
    frame_content_id       bigint not null,
    FOREIGN KEY (frame_content_id) REFERENCES frame_content (id)
);


