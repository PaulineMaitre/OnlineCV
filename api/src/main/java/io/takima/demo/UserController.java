package io.takima.demo;

import io.takima.demo.config.EmailConfig;
import io.takima.demo.dao.UserDAO;
import io.takima.demo.models.User;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Properties;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController {

    private final UserDAO userDAO;
    private final EmailConfig emailConfig;


    public UserController(UserDAO userDAO, EmailConfig emailConfig) {
        this.userDAO = userDAO;
        this.emailConfig = emailConfig;
    }

    /*@GetMapping()
    public List<User> getUsers() {
        Iterable<User> it = this.userDAO.findAll();
        List<User> users = new ArrayList<>();
        it.forEach(e -> users.add(e));

        return users;
    }*/
    @GetMapping()
    public List<User> getUsers() {
        Iterable<User> it = this.userDAO.findAll();
        List<User> users = new ArrayList<>();
        it.forEach(e -> users.add(e));

        return users;
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        User user = userDAO.findById(id).get();
        return user;
    }

    @PutMapping()
    public void updateUser(@RequestBody User user) {
        if (userDAO.existsById(user.getId())) {
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

    @GetMapping("/mail")
    public String setMailSender() {
        // change get to put
        // @RequestBody String content,String contact
        String contact = "raphael.dellaseta@epfedu.fr";
        String content = "Bonjour j'ai vu votre CV sur CV builder, il est vraiment impressionant, ça vous dit un stage chez Takima ?";

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(Objects.requireNonNull(emailConfig.getUsername()));
        message.setTo(Objects.requireNonNull("pauline.maitre@epfedu.fr"));

        message.setSubject("Nouveau message OnlineCV de "+contact);
        message.setText("Le client : \n"+contact+"\n\n Vous a laissé le message suivant : \n"+content );


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
