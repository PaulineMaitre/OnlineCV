package io.takima.demo;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController {

    private final UserDAO userDAO;

    public UserController(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    @GetMapping()
    public List<User> getUsers() {
        Iterable<User> it = this.userDAO.findAll();
        List<User> users = new ArrayList<>();
        it.forEach(users::add);

        return users;
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        return userDAO.findById(id).get();
    }

    @PutMapping("/")
    public void updateUser(@RequestBody User user) {
        if (userDAO.existsById(Objects.requireNonNull(user.getId()))) {
            // TODO : demander Lucas
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

    @PostMapping("/create")
    public User addUser(@RequestBody User user) {
        return this.userDAO.save(user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        this.userDAO.deleteById(id);
    }

}
