package com.ww.controller;

import com.ww.properties.HomeProperties;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by ww on 17/7/29.
 */
@Controller
public class HelloController {
    @Autowired
    private HomeProperties homeProperties;
    @RequestMapping(value = "/",method = RequestMethod.GET)
    public String index() {
        return "index";
    }


    @ApiOperation(value="删除用户", notes="hello")
    @RequestMapping(value = "/hello",method = RequestMethod.GET)
    @ResponseBody
    public String hello(@RequestParam String id) {
        System.out.println(homeProperties);
        return "Hello"+id;
    }
}
