GO
    USE T2004E_React_ArtGallery

GO

-- INSERT USERS --
INSERT INTO dbo.Users([first_name], [last_name], [email],[password], [confirm_password], [role], [deposit], [created_at]) values 
	('Gav', 'Arnal', 'admin1@gmail.com', '123456a@', '123456a@', 'Admin', 10000, CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102)),
	('Ollie', 'Hasnip', 'admin2@gmail.com', '123456a@', '123456a@', 'Admin', 10000, CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102)),
	('Gannon', 'Oxer', 'admin3@gmail.com', '123456a@', '123456a@', 'Admin', 10000, CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102)),
	('Martainn', 'Whyffen', 'customer1@gmail.com', '123456a@', '123456a@', 'Customer', 10000, CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102)),
	('Sheffy', 'Kerford', 'customer2@gmail.com', '123456a@', '123456a@', 'Customer', 10000, CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102)),
	('Ignace', 'Pieroni', 'customer3@gmail.com', '123456a@', '123456a@', 'Customer', 10000, CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102)),
	('Ilyse', 'Arsey', 'customer4@gmail.com', '123456a@', '123456a@', 'Customer', 10000, CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102)),
	('Warren', 'Kinchley', 'artist1@gmail.com', '123456a@', '123456a@', 'Artist', 10000, CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102)),
	('Aprilette', 'Sandeman', 'artist2@gmail.com', '123456a@', '123456a@', 'Artist', 10000, CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102)),
	('Amye', 'McCambrois', 'artist3@gmail.com', '123456a@', '123456a@', 'Artist', 10000, CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102)),
	('Keefer', 'de Clercq', 'artist4@gmail.com', '123456a@', '123456a@', 'Artist', 10000, CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102))

	--11 ban ghi

-- INSERT DEPOSIT LOG --
INSERT INTO dbo.[deposit_log]([amount], [created_at], [user_id]) values 
	(10000, CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102), 1),
	(10000, CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102), 2),
	(10000, CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102), 3),
	(10000, CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102), 4),
	(10000, CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102), 5),
	(10000, CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102), 6),
	(10000, CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102), 7),
	(10000, CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102), 8),
	(10000, CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102), 9),
	(10000, CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102), 10),
	(10000, CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102), 11)


-- INSERT USER LOG --
INSERT INTO dbo.[user_log]([ip], [last_online], [user_id]) values 
	(10000, CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102), 1),
	(10000, CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102), 2),
	(10000, CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102), 3),
	(10000, CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102), 4),
	(10000, CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102), 5),
	(10000, CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102), 6),
	(10000, CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102), 7),
	(10000, CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102), 8),
	(10000, CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102), 9),
	(10000, CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102), 10),
	(10000, CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102), 11)

-- INSERT CATEGORY --
INSERT INTO dbo.[category]([name], [images]) values 
	('Statue', 'https://i.pinimg.com/originals/9d/43/c8/9d43c822f11d22eb7b3ce32682ce1291.png'),
	('Contemporary', 'https://ik.imagekit.io/theartling/prod/original_images/soyoung.jpeg'),
	('Modern', 'https://www.byhien.com/wp-content/uploads/2020/03/modern-paintings-art-4.jpg'),
	('Abstrait', 'https://mamsieutuong.files.wordpress.com/2018/04/untitled-first-abstract-watercolor-1910.jpg?w=640'),
	('Cubism', 'https://thing.vn/wp-content/uploads/2020/06/truong-phai-lap-the-9.jpg')

-- INSERT ARTWORK --
INSERT INTO dbo.[artwork]([name], [description], [images], [price], [year], [status], [location], [created_at], [category_id], [user_id]) values 
	('Statue', 'https://i.pinimg.com/originals/9d/43/c8/9d43c822f11d22eb7b3ce32682ce1291.png'),
	('Contemporary', 'https://ik.imagekit.io/theartling/prod/original_images/soyoung.jpeg'),
	('Modern', 'https://www.byhien.com/wp-content/uploads/2020/03/modern-paintings-art-4.jpg'),
	('Abstrait', 'https://mamsieutuong.files.wordpress.com/2018/04/untitled-first-abstract-watercolor-1910.jpg?w=640'),
	('Cubism', 'https://thing.vn/wp-content/uploads/2020/06/truong-phai-lap-the-9.jpg')