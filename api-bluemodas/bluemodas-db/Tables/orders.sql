CREATE TABLE [dbo].[orders]
(
	[id] INT NOT NULL  IDENTITY, 
    [code] NVARCHAR(50) NOT NULL, 
    [id_client] INT NOT NULL,
	[date] DATETIME NOT NULL, 
    CONSTRAINT FK_ClientOrder FOREIGN KEY (id_client)
    REFERENCES client(id), 
    CONSTRAINT [PK_orders] PRIMARY KEY ([id], [code]),
    
)
