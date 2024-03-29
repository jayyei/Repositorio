USE [CentroMedico]
GO
/****** Object:  StoredProcedure [dbo].[SP_paciente]    Script Date: 7/7/2020 04:55:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- Store Procedure es un conjunto de instrucciones sql que estan almacenadas, es decir es un sql que puedes salvar
-- para asi poder ser reutilizado (procedimiento almacenado)
-- Debe de tener un objetivo, debe de realizar algo en especifico

ALTER PROCEDURE [dbo].[SP_paciente] (@idPaciente int)
AS
-- Declaracion de una variable
DECLARE @ordenamiento char(1); --Si no se inicializa, será null
-- SET @ordenamiento = 'A';
DECLARE @valorOrdenamiento char(1);
SET @valorOrdenamiento = ISNULL(@ordenamiento, ''); --Devuelve el segundo parametro si el primero es NULL 
PRINT @valorOrdenamiento;
SELECT nombre, apellido, idPais, observacion FROM Paciente WHERE idPaciente = @idPaciente
