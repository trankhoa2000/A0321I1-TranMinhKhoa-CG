package model.repositories;

import model.bean.Category;

import java.util.List;

public interface CategoryRepositories {
    List<Category> findAll();
}
