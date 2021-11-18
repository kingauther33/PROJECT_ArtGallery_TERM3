GO
    USE T2004E_React_ArtGallery

GO

-- INSERT USERS --
INSERT INTO [dbo].[user]([first_name], [last_name], [email],[password], [confirm_password], [role], [deposit], [created_at]) values 
	('Gav1', 'Arnal1', 'admin1@gmail.com', '123456a@', '123456a@', 'Admin', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Ollie1', 'Hasnip1', 'admin2@gmail.com', '123456a@', '123456a@', 'Admin', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Gannon1', 'Oxer1', 'admin3@gmail.com', '123456a@', '123456a@', 'Admin', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Martainn1', 'Whyffen1', 'customer1@gmail.com', '123456a@', '123456a@', 'Customer', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Sheffy1', 'Kerford1', 'customer2@gmail.com', '123456a@', '123456a@', 'Customer', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Ignace1', 'Pieroni1', 'customer3@gmail.com', '123456a@', '123456a@', 'Customer', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Ilyse1', 'Arsey1', 'customer4@gmail.com', '123456a@', '123456a@', 'Customer', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Warren1', 'Kinchley1', 'artist1@gmail.com', '123456a@', '123456a@', 'Artist', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Aprilette1', 'Sandeman1', 'artist2@gmail.com', '123456a@', '123456a@', 'Artist', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Amye1', 'McCambrois1', 'artist3@gmail.com', '123456a@', '123456a@', 'Artist', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Keefer1', 'de Clercq1', 'artist4@gmail.com', '123456a@', '123456a@', 'Artist', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),

	('Gav2', 'Arnal2', 'admin4@gmail.com', '123456a@', '123456a@', 'Admin', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Ollie2', 'Hasnip2', 'admin5@gmail.com', '123456a@', '123456a@', 'Admin', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Gannon2', 'Oxer2', 'admin6@gmail.com', '123456a@', '123456a@', 'Admin', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Martainn2', 'Whyffen2', 'customer5@gmail.com', '123456a@', '123456a@', 'Customer', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Sheffy2', 'Kerford2', 'customer6@gmail.com', '123456a@', '123456a@', 'Customer', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Ignace2', 'Pieroni2', 'customer7@gmail.com', '123456a@', '123456a@', 'Customer', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Ilyse2', 'Arsey2', 'customer8@gmail.com', '123456a@', '123456a@', 'Customer', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Warren2', 'Kinchley2', 'artist5@gmail.com', '123456a@', '123456a@', 'Artist', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Aprilette2', 'Sandeman2', 'artist6@gmail.com', '123456a@', '123456a@', 'Artist', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Amye2', 'McCambrois2', 'artist7@gmail.com', '123456a@', '123456a@', 'Artist', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Keefer2', 'de Clercq2', 'artist8@gmail.com', '123456a@', '123456a@', 'Artist', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),

--INSERT INTO [dbo].[user]([first_name], [last_name], [email],[password], [confirm_password], [role], [deposit], [created_at]) values 

	('Gav3', 'Arnal3', 'admin7@gmail.com', '123456a@', '123456a@', 'Admin', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Ollie3', 'Hasnip3', 'admin8@gmail.com', '123456a@', '123456a@', 'Admin', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Gannon3', 'Oxer3', 'admin9@gmail.com', '123456a@', '123456a@', 'Admin', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Martainn3', 'Whyffen3', 'customer9@gmail.com', '123456a@', '123456a@', 'Customer', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Sheffy3', 'Kerford3', 'customer10@gmail.com', '123456a@', '123456a@', 'Customer', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Ignace3', 'Pieroni3', 'customer11@gmail.com', '123456a@', '123456a@', 'Customer', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Ilyse3', 'Arsey3', 'customer12@gmail.com', '123456a@', '123456a@', 'Customer', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Warren3', 'Kinchley3', 'artist9@gmail.com', '123456a@', '123456a@', 'Artist', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Aprilette3', 'Sandeman3', 'artist10@gmail.com', '123456a@', '123456a@', 'Artist', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Amye3', 'McCambrois3', 'artist11@gmail.com', '123456a@', '123456a@', 'Artist', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102)),
	('Keefer3', 'de Clercq3', 'artist12@gmail.com', '123456a@', '123456a@', 'Artist', 10000, CONVERT(datetime, CURRENT_TIMESTAMP, 102))

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
INSERT INTO dbo.[artwork]([name], [description], [current_price], [images], [year], [author], [status], [location], [created_at], [category_id], [user_id]) values 
	('Mona Lisa', 'It has been described as "the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world".', 
		null,
		'https://www.bitgab.com/uploads/1488843872-mona-lisa-leonardo-da-vinci-rosto-1488843872.jpg',
		 1506, 'Leonardo da vinci', 1, 'Paris', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 2, 8),
	('The Last Supper', 'It is one of the Western world''s most recognizable paintings', 
		null,
		'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/The-Last-Supper-Restored-Da-Vinci_32x16.jpg/2560px-The-Last-Supper-Restored-Da-Vinci_32x16.jpg',
		 1498, 'Leonardo da vinci', 1, 'Santa Maria delle Grazie in Milan', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 2, 8),
	('Marilyn Monroe', ' Famous American actress, sex symbol and pop icon of the 20th century', 
		null,
		'https://designs.vn/wp-content/images/24-08-2014/phong-trao-nghe-thuat-pop-art-la-gi3(1).jpg',
		 2000, 'Mark Ashkenazi', 1, 'USA', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 2, 8),
	('Pin Girl', 'Pop Art Pin Girl by KarmenSanda on deviantart.com', 
		null,
		'https://designs.vn/wp-content/images/31-08-2014/phong-trao-nghe-thuat-pop-art-la-gi9.jpg',
		 2000, 'KarmenSanda ', 1, 'USA', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 2, 9),
	('GreenTD', 'Brown Wood Plank', 
		200000,
		'https://firebasestorage.googleapis.com/v0/b/fir-artgallery-storage.appspot.com/o/files%2Fart10.jpg?alt=media&token=8c5990d5-4c91-4d9a-8309-e21ab4566aac',
		 2000, 'NatGeo', 2, 'USA', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 3, 9),
	('Waller', 'Decorative Gray Metallic Cubes', 
		150000,
		'https://firebasestorage.googleapis.com/v0/b/fir-artgallery-storage.appspot.com/o/files%2Fart11.jpg?alt=media&token=d133f9e0-5410-43c2-b6b6-513af8403fc0',
		 1999, 'Akira Takaue', 2, 'USA', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 3, 8),
	('Eyer', 'People With Full Body Picture', 
		250000,
		'https://firebasestorage.googleapis.com/v0/b/fir-artgallery-storage.appspot.com/o/files%2Fart12.jpg?alt=media&token=0af14e0d-aaee-44fd-9d86-8d1962611633',
		 1985, 'Tsukuba', 2, 'Japan', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 3, 8),
	('Lakehome', 'Ma In Black Aviator Sunglasses With Purple Smoke', 
		30000,
		'https://firebasestorage.googleapis.com/v0/b/fir-artgallery-storage.appspot.com/o/files%2Fart13.jpg?alt=media&token=91c2a1b6-c482-4c90-a2da-fa1007ba7ace',
		 2005, 'Jovian', 2, 'England', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 3, 9),
	('Painer', 'Shallow Focus Photography of Brushes', 
		215000,
		'https://firebasestorage.googleapis.com/v0/b/fir-artgallery-storage.appspot.com/o/files%2Fart14.jpg?alt=media&token=aa0e809e-8e77-497c-a4bd-2e01ac5c8575',
		 2008, 'Lights', 2, 'USA', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 3, 9),
	('Colorful', 'Shallow Focus Photography Geographic', 
		400000,
		'https://firebasestorage.googleapis.com/v0/b/fir-artgallery-storage.appspot.com/o/files%2Fart3.jpg?alt=media&token=c6fffa23-7876-4b53-a86b-4f3a152cf08c',
		 2015, 'Geographic', 2, 'Pari', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 3, 10),
	('Roader', 'Worms Perspective Looking At Stained Glass Decorations Spiral Through The Roof-Elon', 
		null,
		'https://firebasestorage.googleapis.com/v0/b/fir-artgallery-storage.appspot.com/o/files%2Fart4.jpg?alt=media&token=313a3ee2-33b4-4778-ba85-6f7538007035',
		 1984, 'Elon', 0, 'Germany', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 4, 10),
	('Lightroom', 'Blue, Red And White Abstract Painting Glass Decorations Spiral Through The Roof', 
		null,
		'https://firebasestorage.googleapis.com/v0/b/fir-artgallery-storage.appspot.com/o/files%2Fart5.jpg?alt=media&token=dc2a6875-6540-49e0-837a-ae323db5a61a',
		 1999, 'Steve Johnson', 0, 'USA', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 4, 10),
	('Blueroom', 'Colorful Abstract Painting', 
		null,
		'https://firebasestorage.googleapis.com/v0/b/fir-artgallery-storage.appspot.com/o/files%2Fart6.jpg?alt=media&token=cfa850c4-404d-4681-9d55-31f34f4c6ad7',
		 1999, 'Steve Johnson', 0, 'USA', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 4, 10),
	('Redroom', 'Colorful Abstract Painting', 
		null,
		'https://firebasestorage.googleapis.com/v0/b/fir-artgallery-storage.appspot.com/o/files%2Fart7.jpg?alt=media&token=c0c3bfcd-7c22-45a2-bf8d-0cfbf6884550',
		 1999, 'Kane', 0, 'USA', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 4, 8),
	('Pallet', 'Colorful Abstract Painting', 
		450000,
		'https://firebasestorage.googleapis.com/v0/b/fir-artgallery-storage.appspot.com/o/files%2Fart8.jpg?alt=media&token=18cac149-5365-4b6f-b221-63f8f2f3792c',
		 1999, 'Leo Johnson', 3, 'USA', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 4, 8),
	('Golden', 'Colorful Abstract Painting', 
		500000,
		'https://firebasestorage.googleapis.com/v0/b/fir-artgallery-storage.appspot.com/o/files%2Fart9.jpg?alt=media&token=800a12fa-dfcb-4913-959d-e65dda4313f7',
		 2005, 'Rock Jonathan', 3, 'USA', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 4, 8)

-- INSERT ARTWORK COMMENTS --
INSERT INTO dbo.[artwork_comment]([comment], [created_at], [artwork_id], [user_id]) values 
	('This is pretty good art', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 1, 4),
	('This is pretty good art', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 2, 5),
	('This is pretty good art', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 2, 6),
	('This is pretty good art', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 3, 7),
	('This is pretty good art', CONVERT(datetime, CURRENT_TIMESTAMP, 102), 3, 8)

-- INSERT AUNCTIONS --
INSERT INTO dbo.[aunction]([starting_price], [highest_money_bid], [created_at], [finished_at], [artwork_id], [admin_id], [buyer_id]) values 

	(200000, 200000, CONVERT(datetime, CURRENT_TIMESTAMP, 102), CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102), 5, 2, 15),
	(150000, 150000, CONVERT(datetime, CURRENT_TIMESTAMP, 102), CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102), 6, 2, 16),
	(250000, 250000, CONVERT(datetime, CURRENT_TIMESTAMP, 102), CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102), 7, 1, 26),
	(30000, 30000, CONVERT(datetime, CURRENT_TIMESTAMP, 102), CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102), 8, 1, 7),
	(215000, 215000, CONVERT(datetime, CURRENT_TIMESTAMP, 102), CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102), 9, 2, 6),
	(400000, 400000, CONVERT(datetime, CURRENT_TIMESTAMP, 102), CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102), 10, 2, 4),
	(450000, 450000, CONVERT(datetime, CURRENT_TIMESTAMP, 102), CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102), 15, 1, 11),
	(500000, 500000, CONVERT(datetime, CURRENT_TIMESTAMP, 102), CONVERT(datetime, DATEADD(day, 7, CURRENT_TIMESTAMP), 102), 16, 2, 5)

-- INSERT AUNCTION LOGS --
INSERT INTO dbo.[aunction_log]([money_bid], [created_at], [aunction_id], [buyer_id]) values 
	(100000, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 1, 6),
	(200000, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 1, 7),
	(300000, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 1, 5),
	(400000, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 1, 4)


-- INSERT CUSTOMER FEEDBACK --
INSERT INTO dbo.[customer_feedback]([title], [description], [answer], [status], [created_at], [customer_id], [admin_id]) values 
	('Change artwork', 'Please make this artwork available in my country', 'Yes, I have updated it! Thank for your feedback!', 1, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 7, 2),
	('Add artwork', 'Please add this artwork to the list!', 'Yes, I have updated it! Thank for your feedback!', 1, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 8, 2),
	('Remove artwork', 'This artwork is disgusting!!!', 'Yes, I have updated it! Thank for your feedback!', 1, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 8, 2)

-- INSERT CUSTOMER REQUEST --
INSERT INTO dbo.[customer_request]([status], [response], [created_at], [customer_id], [admin_id]) values 
	(0, null, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 26, 1),
	(0, null, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 27, 1),
	(0, null, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 28, 1),
	(0, null, CONVERT(datetime, CURRENT_TIMESTAMP, 102), 29, 1)
