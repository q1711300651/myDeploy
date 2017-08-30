package com.ww.dao;

import com.ww.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

/**
 * Created by ww on 17/8/25.
 */
@Mapper
@Repository
public interface UserDao {
    User selectUserById(@Param("id") String id);
}
