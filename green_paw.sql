DROP SCHEMA IF EXISTS `green_paw`;
CREATE SCHEMA IF NOT EXISTS `green_paw`;
USE green_paw;

-- Tabla de Transacciones_Puntos
CREATE TABLE Transacciones_Puntos (
    ID_transaccion BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    ID_usuario BIGINT UNSIGNED NULL,
    ID_usercom BIGINT UNSIGNED NULL,
    Fecha_Transaccion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)ENGINE = InnoDB;

-- Tabla de Usuarios
CREATE TABLE Usuarios (
    ID_usuario BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    ID_rol BIGINT UNSIGNED NOT NULL,
    Nickname VARCHAR(100) NOT NULL,
    Contraseña VARCHAR(255) NOT NULL,
    Correo VARCHAR(100) NOT NULL,
    Cantidad_Puntos INT UNSIGNED NULL
)ENGINE = InnoDB;

-- Tabla de Rol
CREATE TABLE Rol (
    ID_rol BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    Tipo_rol VARCHAR(50) NOT NULL
)ENGINE = InnoDB;

-- Tabla de Usuarios_Comercio
CREATE TABLE Usuarios_Comercio (
    ID_usercom BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    ID_comercio BIGINT UNSIGNED NULL,
    Contraseña VARCHAR(100) NOT NULL,
    Puntos INT UNSIGNED NULL
)ENGINE = InnoDB;

-- Tabla de Comercios
CREATE TABLE Comercios (
    ID_comercio BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    Nombre_Comercio VARCHAR(100) NOT NULL,
    Direccion VARCHAR(100) NULL,
    Telefono DECIMAL(50) NOT NULL,
    Sector VARCHAR(50) NOT NULL
    )ENGINE = InnoDB;

-- Relaciones --
-- Rol (id_rol) ¬ Usuarios (id_rol) (1:N)--
ALTER TABLE Usuarios
	ADD CONSTRAINT FK_Usuarios_Rol
	FOREIGN KEY (ID_rol) REFERENCES Rol (ID_rol) 
    ON DELETE NO ACTION  -- NO permite eliminar registros en la tabla Rol si esta asociada a Usuarios
    ON UPDATE NO ACTION;  -- NO permite modificar registros si esta asociado a la tabla Usuarios

-- Usuarios (id_usuario) ¬ Transacciones_Puntos (id_usuario) (1:N) --
ALTER TABLE Transacciones_Puntos
    ADD CONSTRAINT FK_Transacciones_Puntos_Usuarios
    FOREIGN KEY (ID_usuario) REFERENCES Usuarios (ID_usuario)
    ON DELETE SET NULL -- NO se borrá la información asociada al usuario en la tabla de Transacciones si se decide borrar un ID de usuario
    ON UPDATE NO ACTION; -- NO se podra modificar los IDs de los usuarios si estan vinculados a la Tabla de Transacciones

-- Comercios (id_comercio) ¬ Usuario_Comercio (id_comercio) (1:N) --
ALTER TABLE Usuarios_Comercio
    ADD CONSTRAINT FK_Usuarios_Comercio_Comercios
    FOREIGN KEY (ID_comercio) REFERENCES Comercios (ID_comercio)
	ON DELETE SET NULL  -- NO se borran los IDs de Comercio al eliminar un usuario_comercio
    ON UPDATE NO ACTION;  -- NO se permite actualizar los IDs de los Comercios

-- Usuario_Comercio (id_usercom) ¬ Transacciones_Puntos (id_usercom) (1:N) --
ALTER TABLE Transacciones_Puntos
    ADD CONSTRAINT FK_Transacciones_Puntos_Usuario_Comercio
    FOREIGN KEY (ID_usercom) REFERENCES Usuarios_Comercio (ID_usercom)
    ON DELETE SET NULL -- NO se borrá la información asociada al usuario_comercio en la tabla de Transacciones si se decide borrar un ID de usuario_comercio
    ON UPDATE NO ACTION; -- NO se podra modificar los IDs de los usuarios:comercio si estan vinculados a la Tabla de Transacciones

-- Añadir Información --
/*Información Rol*/
INSERT INTO Rol(Tipo_rol) VALUES
('Usuario Normal'),
('Usuario Admin');

/*Información Comercios*/
INSERT INTO Comercios(Nombre_Comercio, Direccion, Telefono, Sector) VALUES
('Bershka', 'Carrer de les Moles, 86', '668751811', 'Textil'),
('El Corte Inglés', 'Passeig de Fabra i Puig, 43', '624175963', 'Textil y Alimentación'),
('Humana', 'Carrer de Cartagena, 63', '640777228', 'Textil'),
('Supermercado Dia', 'Carrer de la Cirera, 39', '678235624', 'Alimentación'),
('Teatro Nacional Catalan', 'Carrer de València, 92', '622107232', 'Ocio y Cultura'),
('Cosmo Caixa', 'Carrer de Peracamps, 20', '+34627705478', 'Ocio y Cultura'),
('Cine Comedia', 'Carrer de Blanes, 23', '614061282', 'Ocio y Cultura'),
('Restaurante EcoFood', 'La Rambla, 95', '669242220', 'Alimentación');

/*Información Uusarios*/
INSERT INTO Usuarios(ID_rol, Nickname, Contraseña, Correo, Cantidad_Puntos) VALUES
('1', 'Maribel', SHA2('HSUOnX9b8', 256), 'maribelecheverria@gmail.com', 400),
('1', 'Angeles', SHA2('TTNSzTdSJreeKUl', 256), 'angelesandren@gmail.com', 75),
('1', 'Adrian', SHA2('aRwfe7F', 256), 'adrianperis@gmail.com', 700),
('1', 'Rebeca', SHA2('rebecaverdugo@gmail.com', 256), 'rebecaverdugo@gmail.com', 30),
('1', 'Jesús', SHA2('jesúsrosa@gmail.com', 256), 'jesúsrosa@gmail.com', 10),
('1', 'Marina', SHA2('marinalloret@gmail.com', 256), 'marinalloret@gmail.com', 45),
('1', 'Paula', SHA2('paulahermol@gmail.com', 256), 'paulahermol@gmail.com', 0),
('1', 'Miquel', SHA2('miquelriera@gmail.com', 256), 'miquelriera@gmail.com', 10),
('1', 'Aitana', SHA2('aitanaperez@gmail.com', 256), 'aitanaperez@gmail.com', 751),
('2', 'Admin', SHA2('Admin', 256), 'admin@gmail.com', 0);

/*Información Usuarios_Comerio*/
INSERT INTO Usuarios_comercio(ID_comercio, Contraseña, Puntos) VALUES
('1', SHA2('AUnow2aks', 256), '10000'),
('3', SHA2('AdcCc3n', 256), '10000'),
('4', SHA2('OJiw2id3', 256), '10000'),
('2', SHA2('JP20naqL', 256), '10000'),
('5', SHA2('skPa2n34A', 256), '10000'),
('6', SHA2('0ju2AN13', 256), '10000'),
('1', SHA2('Pl92naQa', 256), '10000');


