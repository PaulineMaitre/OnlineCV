INSERT INTO defaultdb.users
    (id, first_name, last_name, phone_number,birth_date,address,email,bio, profile_picture)
    VALUES (1, 'Fabien', 'SOLDE', '+7 88 15 26 20','1997-02-05','7 rue lakanal 92330 Sceaux france', 'fabien.solde@epfedu.fr',
            'Bonjour je suis fabien, un élève sympathique de l\'epf qui cherche un stage dans le numérique à l\'étranger en période de covid. Je sais que c\'est pas la meilleure période mais bon, il faut bien s\'amuser des fois! ', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQr4WyNFRSi6oK0DnMMkrLsGeBLzIAtmHHsVg&usqp=CAU');

INSERT INTO defaultdb.skill (id, skill_name, skill_logo_link,skill_level, user_id)
VALUES (1, 'Web : HTML','google.fr', 5, 1);
INSERT INTO defaultdb.skill (id, skill_name, skill_logo_link,skill_level, user_id)
VALUES (2, 'Web : CSS','google.fr',3, 1);
INSERT INTO defaultdb.skill (id, skill_name, skill_logo_link,skill_level, user_id)
VALUES (3, 'Web : JS','google.fr',5, 1);
INSERT INTO defaultdb.skill (id, skill_name, skill_logo_link,skill_level, user_id)
VALUES (4, 'Web : Angular','google.fr',4, 1);
INSERT INTO defaultdb.skill (id, skill_name, skill_logo_link,skill_level, user_id)
VALUES (5, 'Web : Spring','google.fr',2, 1);


INSERT INTO defaultdb.socials (id, social_name,social_link,social_logo, user_id)
VALUES (1, 'Facebook','google.fr','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.i8KIBvwV6Bpaj-HKozREfAHaII%26pid%3DApi&f=1', 1);
INSERT INTO defaultdb.socials (id, social_name,social_link,social_logo, user_id)
VALUES (2, 'Twitter','google.fr','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.i8KIBvwV6Bpaj-HKozREfAHaII%26pid%3DApi&f=1', 1);
INSERT INTO defaultdb.socials (id, social_name,social_link,social_logo, user_id)
VALUES (3, 'Github','google.fr','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.i8KIBvwV6Bpaj-HKozREfAHaII%26pid%3DApi&f=1', 1);


INSERT INTO defaultdb.languages (id, language_name,language_flag,language_level, user_id)
VALUES (1, 'Français','https://icons.iconarchive.com/icons/wikipedia/flags/256/FR-France-Flag-icon.png','langue maternelle', 1);
INSERT INTO defaultdb.languages (id, language_name,language_flag,language_level, user_id)
VALUES (2, 'Anglais','https://icons.iconarchive.com/icons/icons-land/vista-flags/256/English-Language-Flag-1-icon.png','toeic 950 inchallah', 1);

INSERT INTO defaultdb.frame_content (id, frame_title,frame_logo_url, frame_order, user_id)
VALUES (1, 'Education','https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages4.fanpop.com%2Fimage%2Fphotos%2F19500000%2FEPF-Logo-elite-penguin-force-19521086-144-158.jpg&f=1&nofb=1', 1, 1);
INSERT INTO defaultdb.frame_content (id, frame_title,frame_logo_url, frame_order, user_id)
VALUES (2, 'Professional experience','https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages4.fanpop.com%2Fimage%2Fphotos%2F19500000%2FEPF-Logo-elite-penguin-force-19521086-144-158.jpg&f=1&nofb=1', 2, 1);

INSERT INTO defaultdb.content_item (id, item_title,item_logo_url,item_content, item_order, frame_content_id)
VALUES (1, 'EPF','https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages4.fanpop.com%2Fimage%2Fphotos%2F19500000%2FEPF-Logo-elite-penguin-force-19521086-144-158.jpg&f=1&nofb=1',
        '2016-2021 : French Engineering school major in DIgital Ingineering', 1, 1);
INSERT INTO defaultdb.content_item (id, item_title,item_logo_url,item_content, item_order, frame_content_id)
VALUES (2, 'Lycée Bleu','https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages4.fanpop.com%2Fimage%2Fphotos%2F19500000%2FEPF-Logo-elite-penguin-force-19521086-144-158.jpg&f=1&nofb=1',
        '2016 : Baccalauréat High School graduation diploma', 1, 1);

INSERT INTO defaultdb.content_item (id, item_title,item_logo_url,item_content, frame_content_id)
VALUES (3, 'capico kids','https://static-s.aa-cdn.net/img/amazon/30600000408083/24b98ac34a3a44c75578306779b0624d?v=1',
        '2020-2020 : CTO at capico Kids',2);
INSERT INTO defaultdb.content_item (id, item_title,item_logo_url,item_content, frame_content_id)
VALUES (4, 'Takima','https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/ankkyzex0g15tfskvz9p',
        '2021-2021 : Intern at takima 6 month (maybe)',2);
