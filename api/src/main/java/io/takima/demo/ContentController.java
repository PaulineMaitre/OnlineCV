package io.takima.demo;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/item")
@CrossOrigin
public class ContentController {

    private final ContentDAO contentDAO;

    public ContentController(ContentDAO contentDAO) {
        this.contentDAO = contentDAO;
    }


    @GetMapping("/{id}")
    public ContentItem getItemById(@PathVariable Long id) {
        ContentItem item = contentDAO.findById(id).get();
        return item;
    }

    @PutMapping("/")
    public void updateFrame(@RequestBody ContentItem item) {
        if (contentDAO.existsById(item.getId())) {
            this.contentDAO.save(item);
        }
    }

    @PostMapping("/create")
    public ContentItem addItem(@RequestBody ContentItem item) {

        return this.contentDAO.save(item);
    }


    @DeleteMapping("/{id}")
    public void deleteItem(@PathVariable Long id) {
        this.contentDAO.deleteById(id);
    }

}
