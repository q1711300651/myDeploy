package com.ww.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

/**
 * Created by ww on 17/8/24.
 */
//@Entity
public class User implements Serializable {
//    @Id
//    @GeneratedValue
    private String id;
    private String name;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getHouse() {
        return house;
    }

    public void setHouse(String house) {
        this.house = house;
    }

    private String house;

    public User() {
    }

    public User(String id, String name, String house) {
        this.id = id;
        this.name = name;
        this.house = house;
    }
}
