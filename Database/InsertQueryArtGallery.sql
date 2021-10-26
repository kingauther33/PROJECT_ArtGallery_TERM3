GO
    USE T2004E_React_ArtGallery

GO

-- INSERT USERS --
INSERT INTO [dbo].[user]([first_name], [last_name], [email],[password], [confirm_password], [role], [deposit], [created_at]) values 
	('Gav', 'Arnal', 'admin1@gmail.com', '123456a@', '123456a@', 'Admin', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Ollie', 'Hasnip', 'admin2@gmail.com', '123456a@', '123456a@', 'Admin', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Gannon', 'Oxer', 'admin3@gmail.com', '123456a@', '123456a@', 'Admin', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Martainn', 'Whyffen', 'customer1@gmail.com', '123456a@', '123456a@', 'Customer', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Sheffy', 'Kerford', 'customer2@gmail.com', '123456a@', '123456a@', 'Customer', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Ignace', 'Pieroni', 'customer3@gmail.com', '123456a@', '123456a@', 'Customer', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Ilyse', 'Arsey', 'customer4@gmail.com', '123456a@', '123456a@', 'Customer', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Warren', 'Kinchley', 'artist1@gmail.com', '123456a@', '123456a@', 'Artist', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Aprilette', 'Sandeman', 'artist2@gmail.com', '123456a@', '123456a@', 'Artist', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Amye', 'McCambrois', 'artist3@gmail.com', '123456a@', '123456a@', 'Artist', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Keefer', 'de Clercq', 'artist4@gmail.com', '123456a@', '123456a@', 'Artist', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102))

	--11 ban ghi

-- INSERT DEPOSIT LOG --
INSERT INTO dbo.[deposit_log]([amount], [created_at], [user_id]) values 
	(10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 1),
	(10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 2),
	(10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 3),
	(10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 4),
	(10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 5),
	(10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 6),
	(10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 7),
	(10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 8),
	(10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 9),
	(10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 10),
	(10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 11)


-- INSERT USER LOG --
INSERT INTO dbo.[user_log]([ip], [last_online], [user_id]) values 
	('192.168.1.1', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 1),
	('192.168.1.1', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 2),
	('192.168.1.1', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 3),
	('192.168.1.1', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 4),
	('192.168.1.1', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 5),
	('192.168.1.1', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 6),
	('192.168.1.1', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 7),
	('192.168.1.1', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 8),
	('192.168.1.1', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 9),
	('192.168.1.1', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 10),
	('192.168.1.1', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 11)

-- INSERT CATEGORY --
INSERT INTO dbo.[category]([name], [images]) values 
	('Statue', 'https://i.pinimg.com/originals/9d/43/c8/9d43c822f11d22eb7b3ce32682ce1291.png'),
	('Contemporary', 'https://ik.imagekit.io/theartling/prod/original_images/soyoung.jpeg'),
	('Modern', 'https://www.byhien.com/wp-content/uploads/2020/03/modern-paintings-art-4.jpg'),
	('Abstrait', 'https://mamsieutuong.files.wordpress.com/2018/04/untitled-first-abstract-watercolor-1910.jpg?w=640'),
	('Cubism', 'https://thing.vn/wp-content/uploads/2020/06/truong-phai-lap-the-9.jpg')

-- INSERT ARTWORK --
INSERT INTO dbo.[artwork]([name], [description], [images], [year], [status], [author], [location], [created_at], [category_id], [user_id]) values 
	('Mona Lisa', 'It has been described as "the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world".', 
		'https://www.bitgab.com/uploads/1488843872-mona-lisa-leonardo-da-vinci-rosto-1488843872.jpg',
		 1506, 'Leonardo da vinci', 'Standby', 'Paris', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 2, 8),
	('The Last Supper', 'It is one of the Western world''s most recognizable paintings', 
		'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/The-Last-Supper-Restored-Da-Vinci_32x16.jpg/2560px-The-Last-Supper-Restored-Da-Vinci_32x16.jpg',
		 1498, 'Leonardo da vinci', 'Standby', 'Santa Maria delle Grazie in Milan', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 2, 8),
	('Marilyn Monroe', ' Famous American actress, sex symbol and pop icon of the 20th century', 
		'https://designs.vn/wp-content/images/24-08-2014/phong-trao-nghe-thuat-pop-art-la-gi3(1).jpg',
		 2000, 'Mark Ashkenazi', 'Sold', 'USA', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 2, 8),
	('Pin Girl', 'Pop Art Pin Girl by KarmenSanda on deviantart.com', 
		'https://designs.vn/wp-content/images/31-08-2014/phong-trao-nghe-thuat-pop-art-la-gi9.jpg',
		 2000, 'KarmenSanda ', 'Selling', 'USA', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 2, 8)

-- INSERT ARTWORK COMMENTS --
INSERT INTO dbo.[artwork_comment]([comment], [created_at], [artwork_id], [user_id]) values 
	('This is pretty good art', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 1, 4),
	('This is pretty good art', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 2, 5),
	('This is pretty good art', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 2, 6),
	('This is pretty good art', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 3, 7),
	('This is pretty good art', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 3, 8)

-- INSERT AUNCTIONS --
INSERT INTO dbo.[aunction]([highest_money_bid], [created_at], [finished_at], [artwork_id], [admin_id], [buyer_id]) values 
	(1000000, CONVERT(datetime, CURRENT_TIMESTAMP, 102), CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102), 1,1, 6),
	(500000, CONVERT(datetime, CURRENT_TIMESTAMP, 102), CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102), 2, 1, 7),
	(1500000, CONVERT(datetime, CURRENT_TIMESTAMP, 102), CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102), 1, 2, 5),
	(500000, CONVERT(datetime, CURRENT_TIMESTAMP, 102), CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102), 3, 2, 7)

-- INSERT AUNCTION LOGS --
INSERT INTO dbo.[aunction_log]([money_bid], [created_at], [aunction_id], [buyer_id]) values 
	(100000, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 1, 6),
	(200000, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 1, 7),
	(300000, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 1, 5),
	(400000, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 1, 4)