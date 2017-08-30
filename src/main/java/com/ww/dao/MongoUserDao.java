package com.ww.dao;

import com.ww.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by ww on 17/8/25.
 */
public interface MongoUserDao extends MongoRepository<User,String> {
    User findUserById(String id);
    User findUserByHouse(String id);
}
