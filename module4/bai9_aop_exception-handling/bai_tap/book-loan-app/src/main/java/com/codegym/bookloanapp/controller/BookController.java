package com.codegym.bookloanapp.controller;

import com.codegym.bookloanapp.service.BookService;
import com.codegym.bookloanapp.model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;

@Controller
public class BookController {
    @Autowired
    private BookService bookService;

    @GetMapping("/")
    public ModelAndView showHomePage() {
        return new ModelAndView("index");
    }

    @GetMapping("/books")
    public ModelAndView showBookList() {
        return new ModelAndView("book/book-list", "books", bookService.findAll());
    }

    @GetMapping("/book/new")
    public ModelAndView showBookForm() {
        return new ModelAndView("book/new-book", "book", new Book());
    }
    @PostMapping("/book/save")
    public String addNewBook(@Valid @ModelAttribute("book") Book book,
                             BindingResult bindingResult,
                             RedirectAttributes redirectAttributes) {
        if (bindingResult.hasErrors()) {
            return "book/new-book";
        }
        bookService.save(book);
        redirectAttributes.addFlashAttribute("message", "Thêm " + book.getName() + " thành công");
        return "redirect:/books";
    }
}
