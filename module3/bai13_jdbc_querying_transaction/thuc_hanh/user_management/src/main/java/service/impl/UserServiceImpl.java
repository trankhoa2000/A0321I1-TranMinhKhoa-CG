package service.impl;

import bean.User;
import reponsitory.UserRepo;
import reponsitory.impl.UserRepoImpl;
import service.UserService;

import java.sql.SQLException;
import java.util.List;

public class UserServiceImpl implements UserService {
    private UserRepo userRepo = new UserRepoImpl();
    @Override
    public List<User> selectAllUsers() {
        return userRepo.selectAllUsers();
    }

    @Override
    public boolean insertUser(User user) throws SQLException {
        return userRepo.insertUser(user);
    }

    @Override
    public User selectUser(int id) {
        return userRepo.selectUser(id);
    }

    @Override
    public boolean updateUser(User user) throws SQLException {
        return userRepo.updateUser(user);
    }

    @Override
    public boolean deleteUser(int id) throws SQLException {
        return userRepo.deleteUser(id);
    }

    @Override
    public List<User> findUser(String country) {
        return userRepo.findUser(country);
    }

    @Override
    public List<User> sortName() {
        return userRepo.sortName();
    }
}
