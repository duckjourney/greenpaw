DROP SCHEMA IF EXISTS `green_paw`;
CREATE SCHEMA IF NOT EXISTS `green_paw`;
USE green_paw;

-- Tabla de Transacciones_Puntos
CREATE TABLE Transacciones_Puntos (
    ID_transaccion BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_usuario BIGINT UNSIGNED NOT NULL,
    ID_usercom BIGINT UNSIGNED NOT NULL,
    Fecha_Transaccion DATE NOT NULL
);

-- Tabla de Usuarios
CREATE TABLE Usuarios (
    id_usuario BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_rol BIGINT UNSIGNED NOT NULL,
    Nickname CHAR(50) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Email CHAR(100) NOT NULL,
    Cantidad_Puntos BIGINT NULL CHECK (Cantidad_Puntos >= 0 AND Cantidad_Puntos <= 1000)
);

-- Tabla de Rol
CREATE TABLE Rol (
    id_rol BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    Tipo_rol CHAR(50) NOT NULL
);

-- Tabla de Usuarios_Comercio
CREATE TABLE Usuarios_Comercio (
    ID_usercom BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    ID_comercio BIGINT UNSIGNED NOT NULL,
    Password CHAR(100) NOT NULL,
    Puntos BIGINT NOT NULL
);

-- Tabla de Comercios
CREATE TABLE Comercios (
    ID_comercio BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    Nombre_Comercio CHAR(100) NOT NULL,
    Direccion CHAR(100) NULL,
    Telefono DECIMAL(50) NOT NULL,
    Sector CHAR(50) NOT NULL
    );

-- Relaciones --
-- Rol (id_rol) ¬ Usuarios (id_rol) (1:N)--
ALTER TABLE Usuarios
    ADD CONSTRAINT FK_Usuarios_Rol
    FOREIGN KEY (id_rol) REFERENCES Rol (id_rol);

-- Usuarios (id_usuario) ¬ Transacciones_Puntos (id_usuario) (1:N) --
ALTER TABLE Transacciones_Puntos
    ADD CONSTRAINT FK_Transacciones_Puntos_Usuarios
    FOREIGN KEY (id_usuario) REFERENCES Usuarios (id_usuario);

-- Comercios (id_comercio) ¬ Usuario_Comercio (id_comercio) (1:N) --
ALTER TABLE Usuarios_Comercio
    ADD CONSTRAINT FK_Usuarios_Comercio_Comercios
    FOREIGN KEY (ID_comercio) REFERENCES Comercios (ID_comercio);

-- Usuario_Comercio (id_usercom) ¬ Transacciones_Puntos (id_usercom) (1:N) --
ALTER TABLE Transacciones_Puntos
    ADD CONSTRAINT FK_Transacciones_Puntos_Usuario_Comercio
    FOREIGN KEY (ID_usercom) REFERENCES Usuarios_Comercio (ID_usercom);

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
INSERT INTO Usuarios(id_rol, Nickname, Password, Email, Cantidad_Puntos) VALUES
('1', 'Maribel', SHA2('HSUOnX9b8', 256), 'maribelecheverria@gmail.com', 400),
('1', 'Aitana', SHA2('aitanaperez@gmail.com', 256), 'aitanaperez@gmail.com', 751),
('1', 'Angeles', SHA2('TTNSzTdSJreeKUl', 256), 'angelesandren@gmail.com', 75),
('1', 'Adrian', SHA2('aRwfe7F', 256), 'adrianperis@gmail.com', 700),
('1', 'Rebeca', SHA2('rebecaverdugo@gmail.com', 256), 'rebecaverdugo@gmail.com', 30),
('1', 'Jesús', SHA2('jesúsrosa@gmail.com', 256), 'jesúsrosa@gmail.com', 10),
('1', 'Marina', SHA2('marinalloret@gmail.com', 256), 'marinalloret@gmail.com', 45),
('1', 'Paula', SHA2('paulahermol@gmail.com', 256), 'paulahermol@gmail.com', 0),
('1', 'Miquel', SHA2('miquelriera@gmail.com', 256), 'miquelriera@gmail.com', 10),
('2', 'Admin', SHA2('Admin', 256), 'admin@gmail.com', 0);

/*Información Usuarios_Comerio*/
INSERT INTO Usuarios_comercio(ID_comercio, Password, Puntos) VALUES
('1', SHA2('AUnow2aks', 256), '1000'),
('3', SHA2('AdcCc3n', 256), '1000'),
('4', SHA2('OJiw2id3', 256), '1000'),
('2', SHA2('JP20naqL', 256), '1000'),
('5', SHA2('skPa2n34A', 256), '1000'),
('6', SHA2('0ju2AN13', 256), '1000'),
('1', SHA2('Pl92naQa', 256), '1000');

SELECT * FROM usuarios;