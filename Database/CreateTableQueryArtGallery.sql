IF NOT EXISTS(SELECT * FROM sys.databases WHERE name = 'T2004E_React_ArtGallery')
BEGIN
CREATE DATABASE T2004E_React_ArtGallery


END
GO
    USE T2004E_React_ArtGallery

GO

-- USERS --
IF NOT EXISTS (SELECT * FROM sys.tables t join sys.schemas s ON (t.schema_id = s.schema_id) WHERE s.name='dbo' and t.name='user')
CREATE TABLE [dbo].[user]
(
 [id]               int IDENTITY NOT NULL ,
 [first_name]       nvarchar(max) NOT NULL ,
 [last_name]        nvarchar(max) NOT NULL ,
 [email]            nvarchar(max) NOT NULL ,
 [password]         nvarchar(max) NOT NULL ,
 [confirm_password] nvarchar(max) NOT NULL ,
 [role]             nvarchar(max) NOT NULL ,
 [deposit]          float NOT NULL ,
 [created_at]       datetime NOT NULL ,


 CONSTRAINT [PK_5] PRIMARY KEY CLUSTERED ([id] ASC)
);
GO

-- DEPOSIT LOG --
IF NOT EXISTS (SELECT * FROM sys.tables t join sys.schemas s ON (t.schema_id = s.schema_id) WHERE s.name='dbo' and t.name='deposit_log')
CREATE TABLE [dbo].[deposit_log]
(
 [id]         int IDENTITY NOT NULL ,
 [amount]     float NOT NULL ,
 [created_at] datetime NOT NULL ,
 [user_id]    int NOT NULL ,


 CONSTRAINT [PK_187] PRIMARY KEY CLUSTERED ([id] ASC),
 CONSTRAINT [FK_190] FOREIGN KEY ([user_id])  REFERENCES [dbo].[user]([id])
);
GO


CREATE NONCLUSTERED INDEX [fkIdx_192] ON [dbo].[deposit_log] 
 (
  [user_id] ASC
 )

GO

-- USER LOG --
IF NOT EXISTS (SELECT * FROM sys.tables t join sys.schemas s ON (t.schema_id = s.schema_id) WHERE s.name='dbo' and t.name='user_log')
CREATE TABLE [dbo].[user_log]
(
 [id]          int IDENTITY NOT NULL ,
 [ip]          nvarchar(max) NULL ,
 [last_online] datetime NULL ,
 [user_id]     int NULL ,


 CONSTRAINT [PK_148] PRIMARY KEY CLUSTERED ([id] ASC),
 CONSTRAINT [FK_25] FOREIGN KEY ([user_id])  REFERENCES [dbo].[user]([id])
);
GO


CREATE NONCLUSTERED INDEX [fkIdx_27] ON [dbo].[user_log] 
 (
  [user_id] ASC
 )

GO

-- CATEGORY --
IF NOT EXISTS (SELECT * FROM sys.tables t join sys.schemas s ON (t.schema_id = s.schema_id) WHERE s.name='dbo' and t.name='category')
CREATE TABLE [dbo].[category]
(
 [id]     int IDENTITY NOT NULL ,
 [name]   nvarchar(max) NOT NULL ,
 [images] nvarchar(max) NOT NULL ,


 CONSTRAINT [PK_35] PRIMARY KEY CLUSTERED ([id] ASC)
);
GO

-- ARTWORK --
IF NOT EXISTS (SELECT * FROM sys.tables t join sys.schemas s ON (t.schema_id = s.schema_id) WHERE s.name='dbo' and t.name='artwork')
CREATE TABLE [dbo].[artwork]
(
 [id]          int IDENTITY NOT NULL ,
 [name]        nvarchar(max) NOT NULL ,
 [description] nvarchar(max) NOT NULL ,
 [images]      nvarchar(max) NOT NULL ,
 [price]       float NOT NULL ,
 [year]        bigint NOT NULL ,
 [status]      nvarchar(max) NOT NULL ,
 [location]    nvarchar(max) NOT NULL ,
 [created_at]  datetime NOT NULL ,
 [category_id] int NOT NULL ,
 [user_id]     int NOT NULL ,


 CONSTRAINT [PK_149] PRIMARY KEY CLUSTERED ([id] ASC),
 CONSTRAINT [FK_39] FOREIGN KEY ([category_id])  REFERENCES [dbo].[category]([id]),
 CONSTRAINT [FK_42] FOREIGN KEY ([user_id])  REFERENCES [dbo].[user]([id])
);
GO


CREATE NONCLUSTERED INDEX [fkIdx_41] ON [dbo].[artwork] 
 (
  [category_id] ASC
 )

GO

CREATE NONCLUSTERED INDEX [fkIdx_44] ON [dbo].[artwork] 
 (
  [user_id] ASC
 )

GO

-- ARTWORK COMMENTS --
IF NOT EXISTS (SELECT * FROM sys.tables t join sys.schemas s ON (t.schema_id = s.schema_id) WHERE s.name='dbo' and t.name='artwork_comment')
CREATE TABLE [dbo].[artwork_comment]
(
 [id]         int IDENTITY NOT NULL ,
 [comment]    nvarchar(max) NOT NULL ,
 [created_at] datetime NOT NULL ,
 [artwork_id] int NOT NULL ,
 [user_id]    int NOT NULL ,


 CONSTRAINT [PK_207] PRIMARY KEY CLUSTERED ([id] ASC),
 CONSTRAINT [FK_196] FOREIGN KEY ([artwork_id])  REFERENCES [dbo].[artwork]([id]),
 CONSTRAINT [FK_199] FOREIGN KEY ([user_id])  REFERENCES [dbo].[user]([id])
);
GO


CREATE NONCLUSTERED INDEX [fkIdx_198] ON [dbo].[artwork_comment] 
 (
  [artwork_id] ASC
 )

GO

CREATE NONCLUSTERED INDEX [fkIdx_201] ON [dbo].[artwork_comment] 
 (
  [user_id] ASC
 )

GO

-- AUNCTIONS --
IF NOT EXISTS (SELECT * FROM sys.tables t join sys.schemas s ON (t.schema_id = s.schema_id) WHERE s.name='dbo' and t.name='aunction')
CREATE TABLE [dbo].[aunction]
(
 [id]                int IDENTITY NOT NULL ,
 [highest_money_bid] float NOT NULL ,
 [created_at]        datetime NOT NULL ,
 [finished_at]       datetime NOT NULL ,
 [artwork_id]        int NOT NULL ,
 [admin_id]          int NOT NULL ,
 [buyer_id]          int NOT NULL ,


 CONSTRAINT [PK_206] PRIMARY KEY CLUSTERED ([id] ASC),
 CONSTRAINT [FK_159] FOREIGN KEY ([buyer_id])  REFERENCES [dbo].[user]([id]),
 CONSTRAINT [FK_165] FOREIGN KEY ([admin_id])  REFERENCES [dbo].[user]([id]),
 CONSTRAINT [FK_98] FOREIGN KEY ([artwork_id])  REFERENCES [dbo].[artwork]([id])
);
GO


CREATE NONCLUSTERED INDEX [fkIdx_102] ON [dbo].[aunction] 
 (
  [artwork_id] ASC
 )

GO

CREATE NONCLUSTERED INDEX [fkIdx_161] ON [dbo].[aunction] 
 (
  [buyer_id] ASC
 )

GO

CREATE NONCLUSTERED INDEX [fkIdx_167] ON [dbo].[aunction] 
 (
  [admin_id] ASC
 )

GO

-- AUNCTION LOGS --
IF NOT EXISTS (SELECT * FROM sys.tables t join sys.schemas s ON (t.schema_id = s.schema_id) WHERE s.name='dbo' and t.name='aunction_log')
CREATE TABLE [dbo].[aunction_log]
(
 [id]          int IDENTITY NOT NULL ,
 [money_bid]   float NOT NULL ,
 [created_at]  datetime NOT NULL ,
 [aunction_id] int NOT NULL ,
 [buyer_id]    int NOT NULL ,


 CONSTRAINT [PK_169] PRIMARY KEY CLUSTERED ([id] ASC),
 CONSTRAINT [FK_173] FOREIGN KEY ([aunction_id])  REFERENCES [dbo].[aunction]([id]),
 CONSTRAINT [FK_176] FOREIGN KEY ([buyer_id])  REFERENCES [dbo].[user]([id])
);
GO


CREATE NONCLUSTERED INDEX [fkIdx_175] ON [dbo].[aunction_log] 
 (
  [aunction_id] ASC
 )

GO

CREATE NONCLUSTERED INDEX [fkIdx_178] ON [dbo].[aunction_log] 
 (
  [buyer_id] ASC
 )

GO