-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 18, 2022 at 09:01 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `edatalogs_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `plan` varchar(50) DEFAULT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `imagene` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `apellido` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `email`, `password`) VALUES
(1, 'juan', 'berrios', 'juancruzberrios2003@gmail.com', '123456'),
(2, 'prueba', 'prueba', 'prueba@gmail.com', '123456');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`id`) REFERENCES `productos` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
