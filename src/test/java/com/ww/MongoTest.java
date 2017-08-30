package com.ww;

import com.ww.dao.MongoUserDao;
import com.ww.entity.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * Created by ww on 17/8/25.
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class MongoTest {
    @Autowired
    MongoUserDao mongoUserDao;
    @Test
    public void test(){
        mongoUserDao.save(new User("","b","c"));
        mongoUserDao.findUserById("a");
        mongoUserDao.findUserByHouse("c");
    }
}
