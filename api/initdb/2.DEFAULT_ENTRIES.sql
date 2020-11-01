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
VALUES (2, 'Experience','https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages4.fanpop.com%2Fimage%2Fphotos%2F19500000%2FEPF-Logo-elite-penguin-force-19521086-144-158.jpg&f=1&nofb=1', 1);

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

/* DEFAULT ENTRIES FABIEN */
INSERT INTO defaultdb.users (id, first_name, last_name, phone_number, birth_date, address, email, picture, bio)
VALUES (2, 'Fabien', 'SOLDE', '+33 7 88 15 26 20','1997-02-05','7 rue lakanal 92330 Sceaux france', 'fabien.solde@epfedu.fr',
        '../assets/profile_picture_Fabien.jpg', 'Bonjour je suis fabien, un élève sympathique de l\'epf qui cherche un stage dans le numérique à l\'étranger en période de covid. Je sais que c\'est pas la meilleure période mais bon, il faut bien s\'amuser des fois! ');

INSERT INTO defaultdb.skill (id, skill_name, skill_logo_link, skill_level, user_id)
VALUES (6, 'HTML', '../assets/logo_html.png', 5, 2);
INSERT INTO defaultdb.skill (id, skill_name, skill_logo_link, skill_level, user_id)
VALUES (7, 'CSS', '../assets/logo_css.png', 4, 2);
INSERT INTO defaultdb.skill (id, skill_name, skill_logo_link, skill_level, user_id)
VALUES (8, 'JS', '../assets/logo_javascript.png', 3, 2);
INSERT INTO defaultdb.skill (id, skill_name, skill_logo_link, skill_level, user_id)
VALUES (9, 'Angular', '../assets/logo_angular.png', 2, 2);
INSERT INTO defaultdb.skill (id, skill_name, skill_logo_link, skill_level, user_id)
VALUES (10, 'Spring', '../assets/logo_spring.png', 1, 2);


INSERT INTO defaultdb.socials (id, social_name, social_link, social_logo, user_id)
VALUES (4, 'Facebook', 'https://www.facebook.com/', '../assets/logo_facebook.png', 2);
INSERT INTO defaultdb.socials (id, social_name, social_link, social_logo, user_id)
VALUES (5, 'LinkedIn', 'https://www.linkedin.com/in/fabien-solde-5101a8187/', '../assets/logo_linkedin.png', 2);
INSERT INTO defaultdb.socials (id, social_name, social_link, social_logo, user_id)
VALUES (6, 'Github', 'https://github.com/Chamalomg', '../assets/logo_github.png', 2);


INSERT INTO defaultdb.language (id, language_name, language_flag,language_level, user_id)
VALUES (3, 'Français', '../assets/french_flag.png', 'Native speaker', 2);
INSERT INTO defaultdb.language (id, language_name, language_flag,language_level, user_id)
VALUES (4, 'Anglais', '../assets/english_flag.png', 'B2', 2);

INSERT INTO defaultdb.hobby (id, hobby_name, user_id)
VALUES (3, 'La quiche aux poireaux croquants', 2);
INSERT INTO defaultdb.hobby (id, hobby_name, user_id)
VALUES (4, 'Angular ma vie', 2);

INSERT INTO defaultdb.frame_content (id, frame_title, frame_logo_url, user_id)
VALUES (3, 'Education','https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages4.fanpop.com%2Fimage%2Fphotos%2F19500000%2FEPF-Logo-elite-penguin-force-19521086-144-158.jpg&f=1&nofb=1', 2);
INSERT INTO defaultdb.frame_content (id, frame_title, frame_logo_url, user_id)
VALUES (4, 'Experience','https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages4.fanpop.com%2Fimage%2Fphotos%2F19500000%2FEPF-Logo-elite-penguin-force-19521086-144-158.jpg&f=1&nofb=1', 2);

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

/* DEFAULT ENTRIES PAULINE */
INSERT INTO defaultdb.users (id, first_name, last_name, phone_number, birth_date, address, email, picture, bio)
VALUES (3, 'Pauline', 'Maitre', '+33 6 15 11 44 71','1998-03-13','20 allée des ifs, 78510 Triel Sur Seine, France',
        'pauline.maitre@epfedu.fr', '../assets/profile_picture_Pauline.png', 'French engineering student looking for a final year internship');

INSERT INTO defaultdb.skill (id, skill_name, skill_logo_link, skill_level, user_id)
VALUES (11, 'HTML', '../assets/logo_html.png', 5, 3);
INSERT INTO defaultdb.skill (id, skill_name, skill_logo_link, skill_level, user_id)
VALUES (12, 'CSS', '../assets/logo_css.png', 4, 3);
INSERT INTO defaultdb.skill (id, skill_name, skill_logo_link, skill_level, user_id)
VALUES (13, 'Java', '../assets/logo_java.png', 4, 3);
INSERT INTO defaultdb.skill (id, skill_name, skill_logo_link, skill_level, user_id)
VALUES (14, 'Kotlin', '../assets/logo_kotlin.png', 4, 3);
INSERT INTO defaultdb.skill (id, skill_name, skill_logo_link, skill_level, user_id)
VALUES (15, 'Python', '../assets/logo_python.png', 3, 3);
INSERT INTO defaultdb.skill (id, skill_name, skill_logo_link, skill_level, user_id)
VALUES (16, 'Angular', '../assets/logo_angular.png', 3, 3);
INSERT INTO defaultdb.skill (id, skill_name, skill_logo_link, skill_level, user_id)
VALUES (17, 'Javascript', '../assets/logo_javascript.png', 3, 3);
INSERT INTO defaultdb.skill (id, skill_name, skill_logo_link, skill_level, user_id)
VALUES (18, 'Git', '../assets/logo_git.png', 3, 3);
INSERT INTO defaultdb.skill (id, skill_name, skill_logo_link, skill_level, user_id)
VALUES (19, 'PHP', '../assets/logo_php.png', 2, 3);

INSERT INTO defaultdb.socials (id, social_name, social_link, social_logo, user_id)
VALUES (7, 'LinkedIn', 'https://www.linkedin.com/in/paulinemaitre/', '../assets/logo_linkedin.png', 3);
INSERT INTO defaultdb.socials (id, social_name, social_link, social_logo, user_id)
VALUES (8, 'Github', 'https://www.github.com/PaulineMaitre', '../assets/logo_github.png', 3);
INSERT INTO defaultdb.socials (id, social_name, social_link, social_logo, user_id)
VALUES (9, 'GitLab', 'https://gitlab.com/PaulineMaitre', '../assets/logo_gitlab.png', 3);
INSERT INTO defaultdb.socials (id, social_name, social_link, social_logo, user_id)
VALUES (10, 'Instagram', 'https://www.instagram.com/_pauline_m_', '../assets/logo_instagram.png', 3);
INSERT INTO defaultdb.socials (id, social_name, social_link, social_logo, user_id)
VALUES (11, 'Discord', 'https://discord.com/channels/@Pauline#6669', '../assets/logo_discord.png', 3);

INSERT INTO defaultdb.language (id, language_name, language_flag, language_level, user_id)
VALUES (5, 'French', '../assets/french_flag.png', 'Native speaker', 3);
INSERT INTO defaultdb.language (id, language_name, language_flag, language_level, user_id)
VALUES (6, 'English','../assets/english_flag.png', 'TOEIC 930 2020', 3);
INSERT INTO defaultdb.language (id, language_name, language_flag, language_level, user_id)
VALUES (7, 'Spanish','./assets/spanish_flag.png', 'B2', 3);

INSERT INTO defaultdb.hobby (id, hobby_name, hobby_logo, user_id)
VALUES (5, 'Horseriding', './assets/horseriding.png', 3);
INSERT INTO defaultdb.hobby (id, hobby_name, hobby_logo, user_id)
VALUES (6, 'Swimming', './assets/swimming.png', 3);
INSERT INTO defaultdb.hobby (id, hobby_name, hobby_logo, user_id)
VALUES (7, 'Cooking', './assets/cooking.png', 3);
INSERT INTO defaultdb.hobby (id, hobby_name, hobby_logo, user_id)
VALUES (8, 'Reading', './assets/reading.png', 3);

INSERT INTO defaultdb.frame_content (id, frame_title, frame_logo_url, frame_order, user_id)
VALUES (5, 'Education','../assets/diploma.png', 1, 3);
INSERT INTO defaultdb.frame_content (id, frame_title, frame_logo_url, frame_order, user_id)
VALUES (6, 'Experience','../assets/handshake.png', 2, 3);
INSERT INTO defaultdb.frame_content (id, frame_title, frame_logo_url, frame_order, user_id)
VALUES (7, 'Projects','../assets/handshake.png', 3, 3);

INSERT INTO defaultdb.content_item (id, item_title, item_logo_url, item_period, item_order, item_location, item_content, frame_content_id)
VALUES (9, 'EPF Ecole d\'ingénieurs', '../assets/logo_epf.png', 'Since september 2016', 1, 'Sceaux - France',
        'Majoring in Engineering and Digital Technologies', 5);
INSERT INTO defaultdb.content_item (id, item_title, item_logo_url, item_period, item_order, item_location, item_content, frame_content_id)
VALUES (10, 'Universidad Pontificia Comillas', './assets/logo_comillas.png', 'September to December 2019', 2, 'Madrid - Spain',
        'Erasmus semester studying IT', 5);

INSERT INTO defaultdb.content_item (id, item_title, item_logo_url, item_period, item_order, item_location, item_content, frame_content_id)
VALUES (12, 'Junior Entreprise EPF Projets', '../assets/logo_epf_projets.png', 'Since January 2019', 2, 'Sceaux - France',
        'Member of the IT division and project manager', 6);
INSERT INTO defaultdb.content_item (id, item_title, item_logo_url, item_period, item_order, item_location, item_content, frame_content_id)
VALUES (13, 'Servier', '../assets/logo_servier.png', 'June & July 2018', 3, 'Suresnes - France',
        'CSR Reporting', 6);
INSERT INTO defaultdb.content_item (id, item_title, item_logo_url, item_period, item_location, item_content, frame_content_id)
VALUES (14, 'Amazon', '../assets/logo_amazon.png', 'July 2017', 'Douai - France','Order picking', 6);

INSERT INTO defaultdb.content_item (id, item_title, item_logo_url, item_period, item_order, item_location, item_content, frame_content_id)
VALUES (11, 'Deloitte', '../assets/logo_deloitte.png', 'September 2020 to January 2021 ', 1, 'La Défense - France',
        'Development of a Smart Dashboard to gather HR KPI related to homeworking', 7);
INSERT INTO defaultdb.content_item (id, item_title, item_period, item_order, item_content, frame_content_id)
VALUES (15, 'Android app', '2020', 3, 'Development of a mobile app in Kotlin', 7);
INSERT INTO defaultdb.content_item (id, item_title, item_period, item_order, item_content, frame_content_id)
VALUES (16, 'Online CV', 'October 2020', 2, 'Development of a website to create, edit and display a resume, using Spring and Angular', 7);
