package io.takima.demo.dao;

import io.takima.demo.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 *
 */
@Repository
public interface ContentDAO extends CrudRepository<User, Long> {

}
