-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 13 fév. 2023 à 09:58
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `cogip`

--

-- --------------------------------------------------------

--
-- Structure de la table `companies`
--

CREATE TABLE `companies` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `type_id` int(11) NOT NULL,
  `country` varchar(50) NOT NULL,
  `tva` varchar(50) NOT NULL,
  `create_dat` datetime NOT NULL,
  `update_dat` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `companies`
--

INSERT INTO `companies` (`id`, `name`, `type_id`, `country`, `tva`, `create_dat`, `update_dat`) VALUES
(1, 'Raviga', 1, 'United States', 'US456 654 321', '2023-02-02 08:12:32', '2023-02-02 08:12:32'),
(3, 'Dunder Mifflin', 2, 'United States', 'US676 787 767', '2023-02-02 09:07:00', '2023-02-02 09:07:00'),
(4, 'Pierre Cailloux', 1, 'France', 'FR 676 676 676', '2023-02-02 09:10:00', '2023-02-02 09:10:00'),
(5, 'Belgalol', 1, 'Belgium', 'BE0987 876 787', '2023-02-02 09:11:03', '2023-02-02 09:11:03'),
(6, 'Jouet Jean-Michel', 2, 'France', 'FR 787 776 999', '2023-02-02 09:11:43', '2023-02-02 09:11:43'),
(7, 'Mutiny', 1, 'United States', 'US256 336 777', '2023-02-02 09:12:32', '2023-02-02 09:12:32'),
(8, 'Becode', 2, 'Belgium', 'BE499 458 585', '2023-02-02 09:13:11', '2023-02-02 09:13:11'),
(9, 'Alain Parfait', 1, 'France', 'FR 123 456 789', '2023-02-02 09:14:32', '2023-02-02 09:14:32'),
(10, 'CodeBE', 2, 'Belgium', 'BE0456 323 999', '2023-02-02 09:11:03', '2023-02-02 09:11:03'),
(11, 'Pneu Gustave', 2, 'France', 'FR 888 456 256', '2023-02-02 09:11:43', '2023-02-02 09:11:43'),
(12, 'Pier Pipper', 1, 'Belgium', 'BE87 876 767', '2023-02-02 09:27:41', '2023-02-02 09:27:41');

-- --------------------------------------------------------

--
-- Structure de la table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `company_id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `create_dat` datetime NOT NULL,
  `update_dat` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `company_id`, `email`, `phone`, `create_dat`, `update_dat`) VALUES
(1, 'Peter Gregory', 1, 'peter.gregory@raviga.com', '555-4567', '2023-02-02 09:36:15', '2023-02-02 09:36:15'),
(2, 'Cameron How', 7, 'cam.how@mutiny.net', '555-8765', '2023-02-02 09:37:09', '2023-02-02 09:37:09'),
(3, 'Galvin Belson', 9, 'gavin@parfait.com', '555-6354', '2023-02-02 09:37:55', '2023-02-02 09:37:55'),
(4, 'Jian Yang', 8, 'jian.yang@becode.org', '555-8765', '2023-02-02 09:38:44', '2023-02-02 09:38:44'),
(5, 'Bertram Gilfoyle', 12, 'gilfoy@piedpiper.com', '555-5434', '2023-02-02 09:41:05', '2023-02-02 09:41:05'),
(6, 'Ahmad Bonner', 5, 'bonner.ahmad@belgalol.net', '555-1234', '2023-02-02 09:42:57', '2023-02-02 09:42:57'),
(7, 'Lily-Mae Slater', 10, 'lily_58@codebe.com', '555-7589', '2023-02-02 09:44:28', '2023-02-02 09:44:28'),
(8, 'Rachel Mcclain', 6, 'mcclain@jouet.com', '555-4565', '2023-02-02 09:45:07', '2023-02-02 09:45:07'),
(9, 'Lulu Horne', 4, 'home.lulu@cailloux.com', '555-4522', '2023-02-02 09:45:55', '2023-02-02 09:45:55'),
(10, 'Arjan Price', 11, 'price@pneugustave.com', '555-7777', '2023-02-02 09:46:39', '2023-02-02 09:46:39'),
(11, 'Keith Wagner', 3, 'Wagner@mifflin.com', '555-0493', '2023-02-02 09:48:52', '2023-02-02 09:48:52');

-- --------------------------------------------------------

--
-- Structure de la table `invoices`
--

CREATE TABLE `invoices` (
  `id` int(11) NOT NULL,
  `ref` varchar(50) NOT NULL,
  `id_company` int(11) NOT NULL,
  `create_dat` datetime NOT NULL,
  `update_dat` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `invoices`
--

INSERT INTO `invoices` (`id`, `ref`, `id_company`, `create_dat`, `update_dat`) VALUES
(1, 'F20220915-001 ', 6, '2023-02-02 09:17:07', '2023-02-23 10:17:07'),
(2, 'F20220915-002', 3, '2023-02-02 09:20:21', '2023-02-22 10:20:21'),
(3, 'F20220915-003', 4, '2023-02-02 09:20:57', '2023-02-27 10:20:57'),
(4, 'F20220915-004', 12, '2023-02-02 09:28:37', '2023-02-24 10:28:37'),
(5, 'F20220915-005', 1, '2023-02-02 09:30:07', '2023-03-02 10:30:07'),
(6, 'F20220915-006', 7, '2023-02-02 09:31:20', '2023-02-18 10:31:20'),
(7, 'F20220915-007', 8, '2023-02-02 09:32:02', '2023-02-15 10:32:02'),
(8, 'F20220915-008', 5, '2023-02-02 09:32:35', '2023-02-03 10:32:35'),
(9, 'F20220915-009', 9, '2023-02-02 09:33:02', '2023-02-28 10:33:02'),
(10, 'F20220915-010', 10, '2023-02-02 09:33:22', '2023-04-14 10:33:22'),
(11, 'F20220915-011', 11, '2023-02-02 09:33:41', '2023-03-01 10:33:41');

-- --------------------------------------------------------

--
-- Structure de la table `permissions`
--

CREATE TABLE `permissions` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `create_dat` datetime NOT NULL,
  `update_dat` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `create_dat`, `update_dat`) VALUES
(1, 'Complete_access', '2023-02-02 09:57:22', '2023-02-02 09:57:22'),
(2, 'restricted_access', '2023-02-02 09:59:04', '2023-02-02 09:59:04'),
(3, 'view_acces', '2023-02-02 10:17:41', '2023-02-02 10:17:41');

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `create_dat` datetime NOT NULL,
  `update_dat` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `roles`
--

INSERT INTO `roles` (`id`, `name`, `create_dat`, `update_dat`) VALUES
(1, 'connected', '2023-02-02 09:51:58', '2023-02-02 09:51:58'),
(2, 'Moderator', '2023-02-02 09:52:31', '2023-02-02 09:52:31'),
(3, 'administrator', '2023-02-02 09:53:04', '2023-02-02 09:53:04');

-- --------------------------------------------------------

--
-- Structure de la table `roles_permission`
--

CREATE TABLE `roles_permission` (
  `id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `roles_permission`
--

INSERT INTO `roles_permission` (`id`, `permission_id`, `role_id`) VALUES
(1, 1, 3),
(2, 2, 2),
(3, 3, 1);

-- --------------------------------------------------------

--
-- Structure de la table `types`
--

CREATE TABLE `types` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `create_dat` datetime NOT NULL,
  `update_dat` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `types`
--

INSERT INTO `types` (`id`, `name`, `create_dat`, `update_dat`) VALUES
(1, 'Supplier', '2023-02-01 15:09:40', '2023-02-01 15:09:40'),
(2, 'Client', '2023-02-01 15:09:40', '2023-02-01 15:09:40');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `role_id` int(11) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `create_dat` datetime NOT NULL,
  `update_dat` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `first_name`, `role_id`, `last_name`, `email`, `password`, `create_dat`, `update_dat`) VALUES
(1, 'Jean-Christian', 3, 'Ranu', 'ranu.jean-christian@gmail.com', 'Ranu', '2023-02-02 10:19:11', '2023-02-02 10:19:11'),
(2, 'Muriel', 2, 'Roulin', 'Muriel.roulin@gmail.com', 'Roulin', '2023-02-02 10:20:43', '2023-02-02 10:20:43'),
(3, 'Peter', 1, 'Gregory', 'peter.gregory@raviga.com', 'Gregory', '2023-02-02 10:22:02', '2023-02-02 10:22:02');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `type_id` (`type_id`);

--
-- Index pour la table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `company_id` (`company_id`);

--
-- Index pour la table `invoices`
--
ALTER TABLE `invoices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_company` (`id_company`);

--
-- Index pour la table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `roles_permission`
--
ALTER TABLE `roles_permission`
  ADD PRIMARY KEY (`id`),
  ADD KEY `permission_id` (`permission_id`),
  ADD KEY `role_id` (`role_id`);

--
-- Index pour la table `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `companies`
--
ALTER TABLE `companies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT pour la table `invoices`
--
ALTER TABLE `invoices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `roles_permission`
--
ALTER TABLE `roles_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `types`
--
ALTER TABLE `types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `companies`
--
ALTER TABLE `companies`
  ADD CONSTRAINT `companies_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `types` (`id`);

--
-- Contraintes pour la table `contacts`
--
ALTER TABLE `contacts`
  ADD CONSTRAINT `contacts_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`);

--
-- Contraintes pour la table `invoices`
--
ALTER TABLE `invoices`
  ADD CONSTRAINT `invoices_ibfk_1` FOREIGN KEY (`id_company`) REFERENCES `companies` (`id`);

--
-- Contraintes pour la table `roles_permission`
--
ALTER TABLE `roles_permission`
  ADD CONSTRAINT `roles_permission_ibfk_1` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`),
  ADD CONSTRAINT `roles_permission_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);

--
-- Contraintes pour la table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
