﻿CREATE TABLE [dbo].[client]
(
	[id] INT NOT NULL PRIMARY KEY IDENTITY,
    [name] VARCHAR(MAX) NOT NULL, 
    [email] NVARCHAR(50) NOT NULL, 
    [phone] VARCHAR(50) NOT NULL
)
