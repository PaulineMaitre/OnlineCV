/* DEFAULT ENTRIES RAPHAEL */
INSERT INTO defaultdb.users (id, first_name, last_name, phone_number, birth_date, address, email, picture, bio)
VALUES (1, 'Raphaël', 'Della Seta', '+33 7 88 15 26 20', '1997-02-05', '7 rue lakanal 92330 Sceaux france',
        'raphael.dellaseta@epfedu.fr', '../assets/profile_picture_Raphael.jpg', 'Cherche PFE ');

INSERT INTO defaultdb.skill (id, skill_name, skill_logo_link, skill_level, user_id)
VALUES (1, 'HTML', '../assets/logo_html.png', 5, 1);
INSERT INTO defaultdb.skill (id, skill_name, skill_logo_link, skill_level, user_id)
VALUES (2, 'CSS', '../assets/logo_css.png', 4, 1);
INSERT INTO defaultdb.skill (id, skill_name, skill_logo_link, skill_level, user_id)
VALUES (3, 'JS', '../assets/logo_javascript.png', 3, 1);
INSERT INTO defaultdb.skill (id, skill_name, skill_logo_link, skill_level, user_id)
VALUES (4, 'Angular', '../assets/logo_angular.png', 2, 1);
INSERT INTO defaultdb.skill (id, skill_name, skill_logo_link, skill_level, user_id)
VALUES (5, 'Spring', '../assets/logo_spring.png', 1, 1);


INSERT INTO defaultdb.socials (id, social_name, social_link, social_logo, user_id)
VALUES (1, 'Facebook', 'https://www.facebook.com/', '../assets/logo_facebook.png', 1);
INSERT INTO defaultdb.socials (id, social_name, social_link, social_logo, user_id)
VALUES (2, 'Twitter','https://www.linkedin.com/in/rapha%C3%ABl-della-seta-1690a3171/', '../assets/logo_linkedin.png', 1);
INSERT INTO defaultdb.socials (id, social_name, social_link, social_logo, user_id)
VALUES (3, 'Github','https://github.com/Raphael-D-S', '../assets/logo_github.png', 1);


INSERT INTO defaultdb.language (id, language_name, language_flag,language_level, user_id)
VALUES (1, 'Français', '../assets/french_flag.png', 'Native speaker', 1);
INSERT INTO defaultdb.language (id, language_name, language_flag,language_level, user_id)
VALUES (2, 'Anglais', '../assets/english_flag.png', 'B2', 1);

INSERT INTO defaultdb.hobby (id, hobby_name, user_id)
VALUES (1, 'Football', 1);
INSERT INTO defaultdb.hobby (id, hobby_name, user_id)
VALUES (2, 'AWS', 1);

INSERT INTO defaultdb.frame_content (id, frame_title, frame_logo_url, user_id)
VALUES (1, 'Education','https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages4.fanpop.com%2Fimage%2Fphotos%2F19500000%2FEPF-Logo-elite-penguin-force-19521086-144-158.jpg&f=1&nofb=1', 1);
INSERT INTO defaultdb.frame_content (id, frame_title, frame_logo_url, user_id)
VALUES (2, 'Professional experience','https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages4.fanpop.com%2Fimage%2Fphotos%2F19500000%2FEPF-Logo-elite-penguin-force-19521086-144-158.jpg&f=1&nofb=1', 1);

INSERT INTO defaultdb.content_item (id, item_title, item_logo_url, item_period, item_content, frame_content_id)
VALUES (1, 'EPF', '../assets/logo_epf.png', '2016-2021 : ',
        'French Engineering school major in Digital Engineering', 1);
INSERT INTO defaultdb.content_item (id, item_title, item_logo_url, item_period, item_content, frame_content_id)
VALUES (2, 'Lycée Bleu','https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages4.fanpop.com%2Fimage%2Fphotos%2F19500000%2FEPF-Logo-elite-penguin-force-19521086-144-158.jpg&f=1&nofb=1', '2016 : ',
        'Baccalauréat High School graduation diploma', 1);

INSERT INTO defaultdb.content_item (id, item_title, item_logo_url, item_period, item_content, frame_content_id)
VALUES (3, 'capico kids','https://static-s.aa-cdn.net/img/amazon/30600000408083/24b98ac34a3a44c75578306779b0624d?v=1', '2020-2020 : ',
        'CTO at capico Kids', 2);
INSERT INTO defaultdb.content_item (id, item_title, item_logo_url, item_period, item_content, frame_content_id)
VALUES (4, 'Takima','https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/ankkyzex0g15tfskvz9p', '2021-2021 : ',
        'Intern at takima 6 month (maybe)', 2);
