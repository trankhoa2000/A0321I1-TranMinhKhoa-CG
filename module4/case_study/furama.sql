-- create database furama_module4;
-- drop database furama_module4;
-- SET SQL_SAFE_UPDATES = 0;
-- update user set password='$2a$10$cejOX4094YUqZLIFQXg0meLO7/TQqnxJqPcZNeHim0G..M0t2/WhS';


insert into `position`(position_name) values
('Lễ Tân'),
('Phục Vụ'),
('Chuyên Viên'),
('Giám Sát'),
('Quản Lý'),
('Giám Đốc');

insert into education_degree(education_degree_name) values
('Trung Cấp'),
('Cao Đẳng'),
('Đại Học'),
('Sau Đại Học');

insert into division(division_name) values
('Sale – Marketing'),
('Hành Chính'),
('Phục Vụ'),
('Quản Lý');

insert into `role`(role_name) values
('ROLE_ADMIN'),
('ROLE_USER'),
('ROLE_MEMBER');

insert into `user`(user_name,`password`) values
('Khoa','12345'),
('Tuan','12345'),
('Minh','12345'),
('Tam','12345'),
('An','12345'),
('Hoa','12345'),
('Ly','12345');

insert into user_role(user_name,role_id) values
('Khoa',1),
('Tuan',2),
('Minh',3),
('Tam',3),
('An',3),
('Hoa',3),
('Ly',3);

insert into employee
(employee_name,employee_birthday,employee_id_card,employee_salary,employee_phone,employee_email,
employee_address,position_id,education_degree_id,division_id,user_name) 
values
('Võ Phi Dương','2000-12-06','123123123456',10000000,'0357740063','trankhoadev06@gmail.com','Đà Nẵng',1,1,1,'Khoa'),
('Nguyễn Hoài Bão','2000-12-06','123123123458',10000000,'0357740063','khoa4335@gmail.com','Đà Nẵng',2,2,2,'Tuan'),
('Sùng Hạo','2000-12-06','123123123457',10000000,'0357740022','khoa4325@gmail.com','Đà Nẵng',2,2,2,'Minh'),
('Lạc Nam','2000-12-06','123123123455',10000000,'0357740033','khoa4135@gmail.com','Đà Nẵng',2,2,2,'An'),
('Diệp Tử Yên','2000-12-06','123123123459',10000000,'0357740093','khoa4365@gmail.com','Đà Nẵng',2,2,2,'Tam'),
('Long Ngạo','2000-12-06','123123123451',10000000,'0357740098','khoa3435@gmail.com','Đà Nẵng',2,2,2,'Ly'),
('Hoàng Phi Long','2000-12-06','123123123452',10000000,'0357740063','khoa455@gmail.com','Đà Nẵng',3,3,3,'Hoa');

insert into customer_type(customer_type_name) values
('Diamond'),
('Platinium'),
('Gold'),
('Silver'),
('Member');

insert into customer
(customer_type_id,customer_name,customer_birthday,customer_gender,customer_id_card,customer_phone,customer_email,customer_address) 
values
(1,'TrƯơng Tấn Hải','1998-02-02',1,'123123123477','0957740069','hai@gmail.com','Đà Nẵng'),
(2,'Trần Minh Chiến','1998-02-02',1,'923123123479','0997740069','hai1@gmail.com','Quảng Ngãi'),
(2,'Trần Minh Khoa','1998-02-02',1,'923123123470','0997740060','hai0@gmail.com','Quảng Ngãi'),
(1,'Võ Phi Dương','1998-02-02',0,'723123123437','0657740059','hai2@gmail.com','Đà Nẵng');

insert into service_type(service_type_name) values 
('Villa'), 
('House'), 
('Room');

insert into rent_type(rent_type_name, rent_type_cost) values
('Year', 105000), 
('Month', 35000), 
('Day', 25000),
('Hour', 7984);

insert into 
service(service_name,service_area,service_cost,service_max_people,rent_type_id,service_type_id,
standard_room,description_other_convenience,pool_area,number_of_floor) 
values 
('Villa',50,100000,5,1,1,"Vip1","Good",100,5),
('House',50,100000,5,2,2,"Vip3","Good",50,5),
('House',50,100000,5,3,2,"Vip2","Good",50,4),
('Room',50,100000,5,4,3,"Vip4","Good",10,3);

insert into contract(contract_start_date,contract_end_date,contract_deposit,contract_total_money,employee_id, customer_id,service_id) 
values
('2021-02-06', '2021-02-24', 5000000,10000000,1, 2, 1),
('2021-02-06', '2021-02-24', 5000000,10000000,2, 1, 2),
('2020-02-06', '2020-02-24', 5000000,10000000,3, 3, 3);

insert into attach_service(attach_service_name, attach_service_cost, attach_service_unit, attach_service_status) values
('Massage', 500000, 1000, 'full'),
('Karaoke', 500000, 1000, 'full'),
('Thức Ăn', 500000, 1000, 'full'),
('Nước Uống', 500000, 1000, 'full'),
('Thuê Xe', 500000, 1000, 'still');

insert into contract_detail(contract_id,attach_service_id,quantity) values
(1,3,2),
(2,3,3);