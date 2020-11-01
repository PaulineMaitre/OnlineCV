package io.takima.demo;

import io.takima.demo.config.EmailConfig;
import io.takima.demo.config.Mail;
import io.takima.demo.dao.UserDAO;
import io.takima.demo.models.*;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Properties;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    private final UserDAO userDAO;
    private final EmailConfig emailConfig;

    private final Mail mailConfig;

    public UserController(UserDAO userDAO, EmailConfig emailConfig, Mail mailConfig) {
        this.userDAO = userDAO;
        this.emailConfig = emailConfig;
        this.mailConfig = mailConfig;
    }

    @GetMapping()
    public List<User> getUsers() {
        Iterable<User> it = this.userDAO.findAll();
        List<User> users = new ArrayList<>();
        it.forEach(e -> users.add(e));

        return users;
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        return userDAO.findById(id).get();
    }

    @PutMapping()
    public void updateUser(@RequestBody User user) {
        if (userDAO.existsById(Objects.requireNonNull(user.getId()))) {
            List<Skill> skillList = user.getSkills();
            assert skillList != null;
            skillList.forEach(skill -> skill.setUser(user));

            List<Socials> socialsList = user.getSocialLink();
            assert socialsList != null;
            socialsList.forEach(social -> social.setUser(user));

            List<Languages> languagesList = user.getLanguages();
            assert languagesList != null;
            languagesList.forEach(language -> language.setUser(user));

            List<FrameContent> frameContentList = user.getFrame();
            assert frameContentList != null;
            frameContentList.forEach(frameContent -> {
                frameContent.setUser(user);
                if (frameContent.getFrameItem() != null){
                    List<ContentItem> contentItemList = frameContent.getFrameItem();
                    contentItemList.forEach(contentItem -> contentItem.setFrameContent(frameContent));
                }
            });
            this.userDAO.save(user);
        }
    }

    @PostMapping()
    public User addUser(@RequestBody User user) {
        return this.userDAO.save(user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        this.userDAO.deleteById(id);
    }

    @PutMapping("/mail")
    public String setMailSender(@RequestBody Mail mail) {

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(Objects.requireNonNull(emailConfig.getUsername()));
        message.setTo(Objects.requireNonNull("raphael.dellaseta@epfedu.fr"));

        message.setSubject("Nouveau message OnlineCV de " + mail.contact);
        message.setText("Le client : \n"+mail.contact+"\n\n Vous a laissé le message suivant : \n\n"+mail.content );


        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        mailSender.setHost(emailConfig.getHost());
        mailSender.setPort(emailConfig.getPort());
        mailSender.setUsername(emailConfig.getUsername());
        mailSender.setPassword(emailConfig.getPassword());

        Properties props = mailSender.getJavaMailProperties();
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.debug", "true");

        mailSender.send(message);
        return "succes";
    }
}
