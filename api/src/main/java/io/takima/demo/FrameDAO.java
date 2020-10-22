package io.takima.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 *
 */
@Repository
public interface FrameDAO extends CrudRepository<FrameContent, Long> {

}
