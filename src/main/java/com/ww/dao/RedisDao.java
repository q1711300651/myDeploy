package com.ww.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Repository;

import java.util.concurrent.TimeUnit;

/**
 * Created by ww on 17/8/25.
 */
@Repository
public class RedisDao {
    @Autowired
    StringRedisTemplate template;

    public void setValue(String key, String value) {
        ValueOperations<String, String> stringStringValueOperations = template.opsForValue();
        stringStringValueOperations.set(key, value, 1, TimeUnit.DAYS);
    }

    public String getValue(String key) {
        ValueOperations<String, String> stringStringValueOperations = template.opsForValue();
        return stringStringValueOperations.get(key);
    }
}
