CREATE TABLE [dbo].[product]
(
	[id] INT NOT NULL  PRIMARY KEY IDENTITY,
    [name] VARCHAR(MAX) NOT NULL, 
    [price] DECIMAL NOT NULL, 
    [image] NVARCHAR(MAX) NOT NULL
)
