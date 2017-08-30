package com.ww.dao;

import com.ww.entity.Account;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by ww on 17/8/25.
 */
@Repository
@CacheConfig(cacheNames = "users")
public interface JpaDao extends JpaRepository<Account,String> {
@Cacheable
Account findById(String id);

//    @Query("from User u where u.name=:name")
//    User findUser(@Param("name") String name);


}
