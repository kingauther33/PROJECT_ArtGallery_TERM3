GO
    USE T2004E_React_ArtGallery

GO

GO
    USE master

GO
ALTER DATABASE T2004E_React_ArtGallery
SET SINGLE_USER --or RESTRICTED_USER
WITH ROLLBACK IMMEDIATE;
GO
DROP DATABASE T2004E_React_ArtGallery;
GO

SELECT * FROM [dbo].[user]
SELECT * FROM [dbo].[customer_request]
SELECT * FROM [dbo].[deposit_log]
SELECT * FROM [dbo].[user_log]
SELECT * FROM [dbo].[category]
SELECT * FROM [dbo].[artwork]
SELECT * FROM [dbo].[aunction]
SELECT * FROM [dbo].[artwork_comment]
SELECT * FROM [dbo].[aunction_log]
SELECT * FROM [dbo].[customer_feedback]

UPDATE [dbo].[customer_request] SET [customer_request].status = 0, [customer_request].response = NULL;



DELETE FROM [dbo].Campaigns
DELETE FROM [dbo].Categories
DELETE FROM [dbo].Events
DELETE FROM [dbo].ConnectedBrands
DELETE FROM [dbo].[user] where [user].id = 1
DELETE FROM [dbo].Recipes
DELETE FROM [dbo].CampaignComments
DELETE FROM [dbo].EventComments

UPDATE [dbo].[user] SET [user].is_deleted = 0;
UPDATE [dbo].[deposit_log] SET [deposit_log].is_deleted = 0;
UPDATE [dbo].[user_log] SET [user_log].is_deleted = 0;
UPDATE [dbo].[category] SET [category].is_deleted = 0;
UPDATE [dbo].[artwork] SET [artwork].is_deleted = 0;
UPDATE [dbo].[artwork_comment] SET [artwork_comment].is_deleted = 0;
UPDATE [dbo].[aunction] SET [aunction].is_deleted = 0;
UPDATE [dbo].[aunction_log] SET [aunction_log].is_deleted = 0;
UPDATE [dbo].[customer_feedback] SET [customer_feedback].is_deleted = 0;
UPDATE [dbo].[customer_request] SET [customer_request].is_deleted = 0;

UPDATE [dbo].[artwork] SET [artwork].status = 1 WHERE [artwork].id = 1;



DELETE FROM dbo.CampaignComments WHERE Id = 1
DELETE FROM dbo.Events WHERE Id = 2 

SELECT Gender, MAX(age) FROM Users GROUP BY Gender Having MAX(age)>29  
