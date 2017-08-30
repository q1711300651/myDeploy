package com.ww.service.impl;

import com.ww.dao.UserDao;
import com.ww.entity.User;
import com.ww.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by ww on 17/8/25.
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Override
    @Transactional
    public User selectUserById(String id) {
        return userDao.selectUserById(id);
    }
}
