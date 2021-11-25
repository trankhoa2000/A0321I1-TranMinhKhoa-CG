package com.codegym.repository;

import com.codegym.model.Blog;
import com.codegym.model.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface BlogRepository extends PagingAndSortingRepository<Blog,Integer> {
    Iterable<Blog> findAllByCategory(Category category);
    Page<Blog> findAllByAuthorContaining(String author, Pageable pageable);
}
