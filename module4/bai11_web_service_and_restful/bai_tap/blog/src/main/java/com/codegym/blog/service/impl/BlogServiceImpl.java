package com.codegym.blog.service.impl;


import com.codegym.blog.model.Blog;
import com.codegym.blog.model.Category;
import com.codegym.blog.repository.BlogRepository;
import com.codegym.blog.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogServiceImpl implements BlogService {
    @Autowired
    private BlogRepository blogRepository;

    //    @Override
//    public Iterable<Blog> findAll() {
//        return blogRepository.findAll();
//    }


    @Override
    public List<Blog> findAll() {
        return blogRepository.findAll();
    }

    @Override
    public Page<Blog> findAll(Pageable pageable) {
        return blogRepository.findAll(pageable);
    }

    @Override
    public Blog findById(Integer id) {
        return blogRepository.findById(id).orElse(null);
    }

    @Override
    public void save(Blog blog) {
        blogRepository.save(blog);
    }

    @Override
    public void remove(Integer id) {
        blogRepository.deleteById(id);
    }

//    @Override
//    public Iterable<Blog> findAllByCategory(Category category) {
//        return blogRepository.findAllByCategory(category);
//    }
@Override
public List<Blog> findAllByCategory(Category category) {
    return blogRepository.findAllByCategory(category);
}

    @Override
    public Page<Blog> findAllByAuthorContaining(String author, Pageable pageable) {
        return blogRepository.findAllByAuthorContaining(author,pageable);
    }
}
