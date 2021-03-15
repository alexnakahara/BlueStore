CREATE TABLE [dbo].[order]
(
	[id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [id_client] INT NOT NULL,
	[id_product] INT NOT NULL, 
    CONSTRAINT FK_ClientOrder FOREIGN KEY (id_client)
    REFERENCES client(id),
    CONSTRAINT FK_ProductOrder FOREIGN KEY (id_product)
    REFERENCES product(id)
)
