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
SELECT * FROM [dbo].[deposit_log]
SELECT * FROM [dbo].[user_log]
SELECT * FROM [dbo].[category]
SELECT * FROM [dbo].[artwork]
SELECT * FROM [dbo].[artwork_comment]
SELECT * FROM [dbo].[aunction]
SELECT * FROM [dbo].[aunction_log]

DELETE FROM [dbo].Campaigns
DELETE FROM [dbo].Categories
DELETE FROM [dbo].Events
DELETE FROM [dbo].ConnectedBrands
DELETE FROM [dbo].[user] where [user].id = 1
DELETE FROM [dbo].Recipes
DELETE FROM [dbo].CampaignComments
DELETE FROM [dbo].EventComments


DELETE FROM dbo.CampaignComments WHERE Id = 1
DELETE FROM dbo.Events WHERE Id = 2 

SELECT Gender, MAX(age) FROM Users GROUP BY Gender Having MAX(age)>29  