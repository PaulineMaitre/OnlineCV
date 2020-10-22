package io.takima.demo;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/skill")
@CrossOrigin
public class SkillsController {

    private final SkillDAO skillDAO;

    public SkillsController(SkillDAO skillDAO) {
        this.skillDAO = skillDAO;
    }


    @GetMapping("/{id}")
    public Skill getSkillById(@PathVariable Long id) {
        Skill skill = skillDAO.findById(id).get();
        return skill;
    }

    @PutMapping("/")
    public void updateSkill(@RequestBody Skill skill) {
        if (skillDAO.existsById(skill.getId())) {
            this.skillDAO.save(skill);
        }
    }

    @PostMapping("/create")
    public Skill addSkill(@RequestBody Skill skill) {
        return this.skillDAO.save(skill);
    }


    @DeleteMapping("/{id}")
    public void deleteSkill(@PathVariable Long id) {
        this.skillDAO.deleteById(id);
    }

}
