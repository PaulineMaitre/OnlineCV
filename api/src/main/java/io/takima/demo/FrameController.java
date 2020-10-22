package io.takima.demo;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/frame")
@CrossOrigin
public class FrameController {

    private final FrameDAO frameDAO;

    public FrameController(FrameDAO frameDAO) {
        this.frameDAO = frameDAO;
    }


    @GetMapping("/{id}")
    public FrameContent getFrameById(@PathVariable Long id) {
        FrameContent frame = frameDAO.findById(id).get();
        return frame;
    }

    @PutMapping("/")
    public void updateFrame(@RequestBody FrameContent frame) {
        if (frameDAO.existsById(frame.getId())) {
            this.frameDAO.save(frame);
        }
    }

    @PostMapping("/create")
    public FrameContent addFrame(@RequestBody FrameContent frame) {
        return this.frameDAO.save(frame);
    }


    @DeleteMapping("/{id}")
    public void deleteFrame(@PathVariable Long id) {
        this.frameDAO.deleteById(id);
    }

}
