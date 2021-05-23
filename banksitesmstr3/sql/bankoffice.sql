-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 26, 2021 at 06:56 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bankoffice`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `accountid` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `personalid` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`accountid`, `username`, `password`, `amount`, `personalid`) VALUES
(1016, 'ziki', '$2y$10$Uy6g7bH7X5/SrnDaj7Zj4uin3W/9sbe.wLl49V5/eAKp2WtiaSMo.', 635, 209400845),
(1017, 'amer', '$2y$10$iFd/hxeiwVhyMPGM45N10OpTeJTy5Z8iUD/COQfjUBWXzfm4zOKpy', 1750, 201544879),
(1018, 'evginia', '$2y$10$xV0U/U4b6um1IIyQtTVOS.5BBduOD5Auwi6JXUVl29w0L/dIok5kS', 650, 201544876),
(1019, 'admin', '$2y$10$rTpb.Cof5Ih8Yb.E099lpO5rOZBt42MsuWXYa7ggZ9bYxQ/Xrs1ii', 100000, 201544893);

-- --------------------------------------------------------

--
-- Table structure for table `person`
--

CREATE TABLE `person` (
  `personalid` int(9) NOT NULL,
  `firstname` varchar(20) NOT NULL,
  `lastname` varchar(20) NOT NULL,
  `city` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `phone` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `person`
--

INSERT INTO `person` (`personalid`, `firstname`, `lastname`, `city`, `email`, `phone`) VALUES
(201544876, 'evginia', 'evginia', 'haifa', 'evginia@gmail.com', '0522987548'),
(201544879, 'amer', 'ajbarye', 'haifa', 'ameer0233@gmail.com', '0523458784'),
(201544893, 'admin', 'admin', 'haifa', 'billy@gmail.com', '0529875845'),
(209400845, 'ziki', 'elias', 'haifa', 'siks.s@gmail.com', '0523241855');

-- --------------------------------------------------------

--
-- Table structure for table `transferation`
--

CREATE TABLE `transferation` (
  `transnum` int(11) NOT NULL,
  `accountnumsender` int(10) NOT NULL,
  `accountnumreciever` int(10) DEFAULT NULL,
  `amounttosend` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transferation`
--

INSERT INTO `transferation` (`transnum`, `accountnumsender`, `accountnumreciever`, `amounttosend`) VALUES
(29, 1019, 1019, 100000),
(30, 1019, 1016, 1000),
(31, 1019, 1017, 1000),
(32, 1019, 1017, 1000),
(33, 1016, 1018, 325),
(34, 1016, 1017, 250),
(35, 1017, 1018, 385),
(36, 1017, 1016, 150),
(37, 1018, 1016, 35),
(38, 1018, 1017, 25);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`accountid`),
  ADD UNIQUE KEY `personalid` (`personalid`);

--
-- Indexes for table `person`
--
ALTER TABLE `person`
  ADD PRIMARY KEY (`personalid`);

--
-- Indexes for table `transferation`
--
ALTER TABLE `transferation`
  ADD PRIMARY KEY (`transnum`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `accountid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1020;

--
-- AUTO_INCREMENT for table `transferation`
--
ALTER TABLE `transferation`
  MODIFY `transnum` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
