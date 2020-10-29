/* DEFAULT ENTRIES FABIEN */
INSERT INTO defaultdb.users (id, first_name, last_name, phone_number, birth_date, address, email, bio)
VALUES (2, 'Fabien', 'SOLDE', '+33 7 88 15 26 20','1997-02-05','7 rue lakanal 92330 Sceaux france', 'fabien.solde@epfedu.fr','Bonjour je suis fabien, un élève sympathique de l\'epf qui cherche un stage dans le numérique à l\'étranger en période de covid. Je sais que c\'est pas la meilleure période mais bon, il faut bien s\'amuser des fois! ');

INSERT INTO defaultdb.skill (id, skill_name, skill_logo_link, skill_level, user_id)
VALUES (6, 'HTML', '../assets/logo_html.png', 5, 2);
INSERT INTO defaultdb.skill (id, skill_name, skill_logo_link, skill_level, user_id)
VALUES (7, 'CSS', '../assets/logo_css.png', 4, 2);
INSERT INTO defaultdb.skill (id, skill_name, skill_logo_link, skill_level, user_id)
VALUES (8, 'JS', '../assets/logo_css.png', 3, 2);
INSERT INTO defaultdb.skill (id, skill_name, skill_logo_link, skill_level, user_id)
VALUES (9, 'Angular', '../assets/logo_css.png', 2, 2);
INSERT INTO defaultdb.skill (id, skill_name, skill_logo_link, skill_level, user_id)
VALUES (10, 'Spring', '../assets/logo_spring.png', 1, 2);


INSERT INTO defaultdb.socials (id, social_name, social_link, social_logo, user_id)
VALUES (4, 'Facebook', 'https://www.facebook.com/', '../assets/logo_facebook.png', 2);
INSERT INTO defaultdb.socials (id, social_name, social_link, social_logo, user_id)
VALUES (5, 'LinkedIn', 'https://www.linkedin.com/in/fabien-solde-5101a8187/', '../assets/logo_linkedin.png', 2);
INSERT INTO defaultdb.socials (id, social_name, social_link, social_logo, user_id)
VALUES (6, 'Github', 'https://github.com/Chamalomg', '../assets/logo_github.png', 2);


INSERT INTO defaultdb.languages (id, language_name, language_flag,language_level, user_id)
VALUES (3, 'Français', '../assets/french_flag.png', 5, 2);
INSERT INTO defaultdb.languages (id, language_name, language_flag,language_level, user_id)
VALUES (4, 'Anglais', '../assets/english_flag.png', 4, 2);

INSERT INTO defaultdb.frame_content (id, frame_title, frame_logo_url, user_id)
VALUES (3, 'Education','https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages4.fanpop.com%2Fimage%2Fphotos%2F19500000%2FEPF-Logo-elite-penguin-force-19521086-144-158.jpg&f=1&nofb=1', 2);
INSERT INTO defaultdb.frame_content (id, frame_title, frame_logo_url, user_id)
VALUES (4, 'Professional experience','https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages4.fanpop.com%2Fimage%2Fphotos%2F19500000%2FEPF-Logo-elite-penguin-force-19521086-144-158.jpg&f=1&nofb=1', 2);

INSERT INTO defaultdb.content_item (id, item_title, item_logo_url, item_period, item_content, frame_content_id)
VALUES (5, 'EPF', '../assets/logo_epf.png', '2016-2021 : ',
        'French Engineering school major in Digital Engineering', 3);
INSERT INTO defaultdb.content_item (id, item_title, item_logo_url, item_period, item_content, frame_content_id)
VALUES (6, 'Lycée Bleu','https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages4.fanpop.com%2Fimage%2Fphotos%2F19500000%2FEPF-Logo-elite-penguin-force-19521086-144-158.jpg&f=1&nofb=1', '2016 : ',
        'Baccalauréat High School graduation diploma', 3);

INSERT INTO defaultdb.content_item (id, item_title, item_logo_url, item_period, item_content, frame_content_id)
VALUES (7, 'capico kids','https://static-s.aa-cdn.net/img/amazon/30600000408083/24b98ac34a3a44c75578306779b0624d?v=1', '2020-2020 : ',
        'CTO at capico Kids', 4);
INSERT INTO defaultdb.content_item (id, item_title, item_logo_url, item_period, item_content, frame_content_id)
VALUES (8, 'Takima','https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/ankkyzex0g15tfskvz9p', '2021-2021 : ',
        'Intern at takima 6 month (maybe)', 4);
