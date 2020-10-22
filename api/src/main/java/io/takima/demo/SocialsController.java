package io.takima.demo;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/social")
public class SocialsController {

    private final SocialsDAO socialsDAO;

    public SocialsController(SocialsDAO socialsDAO) {
        this.socialsDAO = socialsDAO;
    }


    @GetMapping("/{id}")
    public Socials getSocialsById(@PathVariable Long id) {
        Socials socials = socialsDAO.findById(id).get();
        return socials;
    }

    @PutMapping("/")
    public void updateSocial(@RequestBody Socials socials) {
        if (socialsDAO.existsById(socials.getId())) {
            this.socialsDAO.save(socials);
        }
    }

    @PostMapping("/create")
    public Socials addSocial(@RequestBody Socials socials) {
        return this.socialsDAO.save(socials);
    }


    @DeleteMapping("/{id}")
    public void deleteSocial(@PathVariable Long id) {
        this.socialsDAO.deleteById(id);
    }

}
