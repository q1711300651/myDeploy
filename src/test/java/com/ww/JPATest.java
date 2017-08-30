package com.ww;

import com.ww.dao.AccountDao;
import com.ww.dao.JpaDao;
import com.ww.entity.Account;
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
public class JPATest {

    @Autowired
    private JpaDao jpaDao;

    @Autowired
    private AccountDao accountDao;

    @Test
    public void test(){
        Account account = new Account();
        account.setMoney(11);
        account.setName("wang");
        accountDao.save(account);
        User user=new User();
        user.setHouse("2");
        user.setName("test");
        user.setId("aa");
//        jpaDao.saveAndFlush(user);
        User a = jpaDao.findById("a");
        System.out.println("aaa");
        User b = jpaDao.findById("a");
        System.out.println("bbb");



    }
}
