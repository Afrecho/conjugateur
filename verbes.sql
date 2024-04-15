-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 22-03-2024 a las 18:31:03
-- Versión del servidor: 10.5.20-MariaDB
-- Versión de PHP: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `id20925312_forovilla`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `verbes`
--

CREATE TABLE `verbes` (
  `id` int(3) NOT NULL,
  `le_verve` varchar(250) NOT NULL,
  `present` varchar(250) NOT NULL,
  `passe_compose` varchar(250) NOT NULL,
  `futur` varchar(250) NOT NULL,
  `imparfaite` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `verbes`
--

INSERT INTO `verbes` (`id`, `le_verve`, `present`, `passe_compose`, `futur`, `imparfaite`) VALUES
(1, 'jhk', 'jkh', 'jkhjkh', 'ghfghfghff', 'fhfghf'),
(2, 'payer', 'fgh<br />\r\nfg<br />\r\nfg', 'uu<br />\r\nuu<br />\r\nuu', 'Oioui<br />\r\npoipi<br />\r\niopi<br />\r\niopi', 'po<br />\r\ngjh<br />\r\nssdfsdfs<br />\r\nsdf<br />\r\nsdf');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `verbes`
--
ALTER TABLE `verbes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `verbes`
--
ALTER TABLE `verbes`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
