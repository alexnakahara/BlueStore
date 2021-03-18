CREATE TABLE [dbo].[orderItems]
(
	[id] INT NOT NULL , 
    [code] NVARCHAR(50) NOT NULL, 
    [id_product] INT NOT NULL, 
    [quantity] INT NOT NULL,
    CONSTRAINT FK_OrderItens FOREIGN KEY (id_product)
    REFERENCES product(id), 
)
