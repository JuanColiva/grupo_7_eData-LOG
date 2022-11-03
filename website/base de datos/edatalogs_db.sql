DROP DATABASE IF EXISTS edatalogs_db;

CREATE DATABASE edatalogs_db;

USE edatalogs_db;

--
-- Table structure for table `productos`
--

CREATE TABLE `productos` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `plan` varchar(50) DEFAULT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `imagene` varchar(50) DEFAULT NULL
);

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`id`, `name`, `plan`, `descripcion`, `imagene`) VALUES
(1, 'aeropuerto', 'multiespacio', 'Nuestros servicios mejoraran su base de datos sobre sus clientes para hacer sus estrategias de marketing más certeras.', 'airport.jpg'),
(2, 'Gimnasios y centros deportivos', 'basico', 'Nuestros servicios mejoraran su base de datos sobre sus clientes para hacer sus estrategias de marketing más certeras.', 'gimnasio.jpg'),
(3, 'Restaurantes, cafeterias, bares y discotecas', 'premium', 'Nuestros servicios mejoraran su base de datos sobre sus clientes para hacer sus estrategias de marketing más certeras.', 'restaurante.jpg'),
(4, 'Tiendas de moda, retail y centros comerciales', 'multiespacio', 'Nuestros servicios mejoraran su base de datos sobre sus clientes para hacer sus estrategias de marketing más certeras.', 'centros-comerciales.jpg'),
(5, 'Peluquerías, barberías y centros de esteticas', 'basico', 'Nuestros servicios mejoraran su base de datos sobre sus clientes para hacer sus estrategias de marketing más certeras.', 'peluquerias.jpg'),
(6, 'Hoteles', 'multiespacio', 'Nuestros servicios mejoraran su base de datos sobre sus clientes para hacer sus estrategias de marketing más certeras.', 'hoteles.jpg'),
(7, 'Eventos y conciertos', 'multizonal', 'Nuestros servicios mejoraran su base de datos sobre sus clientes para hacer sus estrategias de marketing más certeras.', 'eventos.jpg'),
(8, 'Centros medicos y salas de espera', 'premium', 'Nuestros servicios mejoraran su base de datos sobre sus clientes para hacer sus estrategias de marketing más certeras.', 'centro-medico.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `apellido` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` text DEFAULT NULL,
  `imagene` varchar(50) DEFAULT NULL
);

-- --------------------------------------------------------

--
-- Table structure for table `pedidos`
--

CREATE TABLE `pedidos`(
	`id` integer PRIMARY KEY AUTO_INCREMENT,
    `id_producto` integer,
    `id_usuario` integer
);

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `email`, `password`) VALUES
(1, 'juan', 'berrios', 'juancruzberrios2003@gmail.com', '123456'),
(2, 'prueba', 'prueba', 'prueba@gmail.com', '123456');

alter table pedidos add foreign key (id_producto) references productos(id);
alter table pedidos add foreign key (id_usuario) references usuarios(id);
