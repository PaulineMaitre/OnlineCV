INSERT INTO defaultdb.users
    (id, first_name, last_name, phone_number, birth_date, address, email, bio)
    VALUES (1, 'Pauline', 'Maitre', '+33 6 15 11 44 71','1998-03-13','20 allée des ifs, 78510 Triel Sur Seine, France', 'pauline.maitre@epfedu.fr','French engineering student looking for a final year internship');

INSERT INTO defaultdb.skill (id, skill_name, skill_logo_link, skill_level, user_id)
VALUES (1, 'Python', '../assets/logo_python.png', 3, 1);
INSERT INTO defaultdb.skill (id, skill_name, skill_logo_link, skill_level, user_id)
VALUES (2, 'PHP', '../assets/logo_php.png', 2, 1);
INSERT INTO defaultdb.skill (id, skill_name, skill_logo_link, skill_level, user_id)
VALUES (3, 'HTML', '../assets/logo_html.png', 4, 1);
INSERT INTO defaultdb.skill (id, skill_name, skill_logo_link, skill_level, user_id)
VALUES (4, 'CSS', '../assets/logo_css.png', 4, 1);
INSERT INTO defaultdb.skill (id, skill_name, skill_logo_link, skill_level, user_id)
VALUES (5, 'Java', '../assets/logo_java.png', 4, 1);

INSERT INTO defaultdb.socials (id, social_name, social_link, social_logo, user_id)
VALUES (1, 'LinkedIn','https://www.linkedin.com/in/paulinemaitre/','../assets/logo_linkedin.png', 1);
INSERT INTO defaultdb.socials (id, social_name, social_link, social_logo, user_id)
VALUES (2, 'Github','https://www.github.com/PaulineMaitre','../assets/logo_github.png', 1);
INSERT INTO defaultdb.socials (id, social_name, social_link, social_logo, user_id)
VALUES (3, 'GitLab','https://gitlab.com/PaulineMaitre','../assets/logo_gitlab.png', 1);
INSERT INTO defaultdb.socials (id, social_name, social_link, social_logo, user_id)
VALUES (4, 'Instagram','https://www.instagram.com/_pauline_m_','../assets/logo_instagram.png', 1);

INSERT INTO defaultdb.languages (id, language_name, language_flag, language_level, user_id)
VALUES (1, 'French', '../assets/french_flag.png', 5, 1);
INSERT INTO defaultdb.languages (id, language_name, language_flag, language_level, user_id)
VALUES (2, 'English','../assets/english_flag.png', 4, 1);
INSERT INTO defaultdb.languages (id, language_name, language_flag, language_level, user_id)
VALUES (3, 'Spanish','./assets/spanish_flag.png', 3, 1);

INSERT INTO defaultdb.frame_content (id, frame_title, frame_logo_url, frame_order, user_id)
VALUES (1, 'Education','../assets/diploma.png', 1, 1);
INSERT INTO defaultdb.frame_content (id, frame_title, frame_logo_url, frame_order, user_id)
VALUES (2, 'Experience','../assets/handshake.png', 2, 1);

INSERT INTO defaultdb.content_item (id, item_title, item_logo_url, item_period, item_location, item_content, frame_content_id)
VALUES (1, 'EPF Ecole d\'ingénieurs', '../assets/logo_epf.png', 'Since september 2016', 'Sceaux - France',
        'Majoring in Engineering and Digital Technologies', 1);
INSERT INTO defaultdb.content_item (id, item_title, item_logo_url, item_period, item_location, item_content, frame_content_id)
VALUES (2, 'Universidad Pontificia Comillas', './assets/logo_comillas.png', 'September to December 2019', 'Madrid - Spain',
        'Erasmus semester studying IT', 1);

INSERT INTO defaultdb.content_item (id, item_title, item_logo_url, item_period, item_location, item_content, frame_content_id)
VALUES (3, 'Deloitte', '../assets/logo_deloitte.png', 'September 2020 to January 2021 ', 'La Défense - France',
        'Development of a Smart Dashboard to gather HR KPI related to homeworking', 2);
INSERT INTO defaultdb.content_item (id, item_title, item_logo_url, item_period, item_location, item_content, frame_content_id)
VALUES (4, 'Junior Entreprise EPF Projets', '../assets/logo_epf_projets.png', 'Since January 2019', 'Sceaux - France',
        'Member of the IT division and project manager', 2);
INSERT INTO defaultdb.content_item (id, item_title, item_logo_url, item_period, item_location, item_content, frame_content_id)
VALUES (5, 'Servier', '../assets/logo_servier.png', 'June & July 2018', 'Suresnes - France',
        'CSR Reporting', 2);
