package io.takima.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

import java.util.ArrayList;
import java.util.List;

@RequestMapping("/")
@Controller
public class BddController {


    private final UserDAO userDAO;

    public BddController(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    /**
     * Manage and Access to différent account
     *
     */
    @GetMapping()
    public List<User> getUsers() {
        Iterable<User> it = this.userDAO.findAll();
        List<User> users = new ArrayList<>();
        it.forEach(e -> users.add(e));

        return users;
    }

    @PostMapping()
    public User addUser(@RequestBody User user) {
        return this.userDAO.save(user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        this.userDAO.deleteById(id);
    }

    /**
     * Specific User
     */
    //@GetMapping()
    // TODO

    /**
     * Archi rest
     *
     * Put -> object en entier pour le modifier (conseil laisser un pour tout modifier
     *
     * patch -> (modifier juste un champ)
     *
     *
     */
}
