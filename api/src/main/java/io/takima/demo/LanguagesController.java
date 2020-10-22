package io.takima.demo;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/language")
@CrossOrigin
public class LanguagesController {

    private final LanguagesDAO languagesDAO;

    public LanguagesController(LanguagesDAO languagesDAO) {
        this.languagesDAO = languagesDAO;
    }


    @GetMapping("/{id}")
    public Languages getLanguageById(@PathVariable Long id) {
        Languages language = languagesDAO.findById(id).get();
        return language;
    }

    @PutMapping("/")
    public void updateLanguage(@RequestBody Languages language) {
        if (languagesDAO.existsById(language.getId())) {
            this.languagesDAO.save(language);
        }
    }

    @PostMapping("/create")
    public Languages addLanguage(@RequestBody Languages language) {
        return this.languagesDAO.save(language);
    }


    @DeleteMapping("/{id}")
    public void deleteLanguage(@PathVariable Long id) {
        this.languagesDAO.deleteById(id);
    }

}
