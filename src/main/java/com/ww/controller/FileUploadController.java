/**
 *
 * @author : liuxiaoqiang
 * @date   :Mar 8, 2016 11:53:19 AM 
 * @version 1.0 
 *
 */
package com.ww.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;

@Controller
public class FileUploadController {

    private MultipartFile file;

    @RequestMapping(value="/upload", method= RequestMethod.GET)
    public @ResponseBody
    String provideUploadInfo() {
        return "111You can upload a file by posting to this same URL.";
    }
 
    /**
     * 上传文件
     */
    @RequestMapping(value="/uploadpost", method= RequestMethod.POST)
    public @ResponseBody
    String handleFileUpload(@RequestParam("file") MultipartFile file, MultipartHttpServletRequest request){

        MultipartFile file1 = request.getFile("file");
        String originalFilename = file1.getOriginalFilename();
        String name=originalFilename;
        if (!file.isEmpty()) {
            name=file.getOriginalFilename();

            try {
            	System.out.println(file.getOriginalFilename());
                byte[] bytes = file.getBytes();
                BufferedOutputStream stream =
                        new BufferedOutputStream(new FileOutputStream(new File(name)));
                stream.write(bytes);
                stream.close();
                return "成功上传 " + name +"保存在的目录是"+"当前jar包所在目录";
            } catch (Exception e) {
                return "失败上传 " + name + " =>异常信息为 " + e.getMessage();
            }
        } else {
            return "文件为空....请重新上传";
        }
    }
 
}

