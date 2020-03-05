DROP DATABASE IF EXISTS alsignos;
CREATE DATABASE alsignos;
USE alsignos;

 CREATE TABLE `dic_cat` (
    `wordID` INT NOT NULL AUTO_INCREMENT,
    `name` varchar(64) NOT NULL,
    `type` INT NOT NULL,
	`signURL` varchar(512) NULL,
    `imageURL` varchar(512) NULL,
    PRIMARY KEY (`wordID`)
);

CREATE TABLE IF NOT EXISTS `category` (
    `categID` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(64) NOT NULL,
    `descripcion` VARCHAR(512) NOT NULL,
    `difficulty` VARCHAR(64) NOT NULL,
    `desctime` VARCHAR(64) NOT NULL,
    `image` VARCHAR(64)  NOT NULL,
    PRIMARY KEY (`categID`)
);

CREATE TABLE `test_exc_cat` (
    `testID` INT NOT NULL AUTO_INCREMENT,
    `option1ID` INT NOT NULL,
    `option2ID` INT NOT NULL,
    `answerID` INT NOT NULL,
    `exam` INT NOT NULL,
    PRIMARY KEY (`testID`)
);

CREATE TABLE `ahorcado_cat` (
    `ahorcID` INT NOT NULL AUTO_INCREMENT,
    `answerID` INT NOT NULL,
    `difficulty` INT NOT NULL,
    `helpClue` varchar(1024) NOT NULL,
    PRIMARY KEY (`ahorcID`)
);

CREATE TABLE `memory_cat` (
    `memoryID` INT NOT NULL AUTO_INCREMENT,
    `pairID_1` INT NOT NULL UNIQUE,
    `pairID_2` INT NOT NULL,
    `pairID_3` INT NOT NULL,
    `pairID_4` INT NOT NULL,
    `pairID_5` INT NOT NULL,
    `pairID_6` INT NOT NULL,
    `pairID_7` INT NOT NULL,
    `pairID_8` INT NOT NULL,
    PRIMARY KEY (`memoryID`)
);

CREATE TABLE IF NOT EXISTS `users` (
    `userID` INT NOT NULL AUTO_INCREMENT,
    `username` varchar(128) NOT NULL,
    `password` varchar(128) NOT NULL,
    `userRank` INT NOT NULL,
	`email`    varchar(128) NOT NULL,
	`prevExp`  boolean NOT NULL,
    PRIMARY KEY (`userID`)
);

CREATE TABLE `exam_done_cat` (
    `userID` INT NOT NULL,
    `examID` INT NOT NULL,
    `completed` BOOLEAN NOT NULL,
    `mark` FLOAT,
    PRIMARY KEY (`userID`,`examID`)
);

CREATE TABLE `exam_cat` (
    `examID` INT NOT NULL AUTO_INCREMENT,
    `name` varchar(64) NOT NULL,
    `difficulty` INT NOT NULL,
    PRIMARY KEY (`examID`)
);

ALTER TABLE `users` ADD UNIQUE (`username`);

ALTER TABLE `dic_cat` ADD CONSTRAINT `DIC_CAT_fk0` FOREIGN KEY (`type`) REFERENCES `category`(`categID`);

ALTER TABLE `test_exc_cat` ADD CONSTRAINT `TEST_EXC_CAT_fk0` FOREIGN KEY (`option1ID`) REFERENCES `dic_cat`(`wordID`);

ALTER TABLE `test_exc_cat` ADD CONSTRAINT `TEST_EXC_CAT_fk1` FOREIGN KEY (`option2ID`) REFERENCES `dic_cat`(`wordID`);

ALTER TABLE `test_exc_cat` ADD CONSTRAINT `TEST_EXC_CAT_fk2` FOREIGN KEY (`answerID`) REFERENCES `dic_cat`(`wordID`);

ALTER TABLE `test_exc_cat` ADD CONSTRAINT `TEST_EXC_CAT_fk3` FOREIGN KEY (`exam`) REFERENCES `exam_cat`(`examID`);

ALTER TABLE `ahorcado_cat` ADD CONSTRAINT `AHORCADO_CAT_fk0` FOREIGN KEY (`answerID`) REFERENCES `dic_cat`(`wordID`);

ALTER TABLE `memory_cat` ADD CONSTRAINT `MEMORY_CAT_fk0` FOREIGN KEY (`pairID_1`) REFERENCES `dic_cat`(`wordID`);

ALTER TABLE `memory_cat` ADD CONSTRAINT `MEMORY_CAT_fk1` FOREIGN KEY (`pairID_2`) REFERENCES `dic_cat`(`wordID`);

ALTER TABLE `memory_cat` ADD CONSTRAINT `MEMORY_CAT_fk2` FOREIGN KEY (`pairID_3`) REFERENCES `dic_cat`(`wordID`);

ALTER TABLE `memory_cat` ADD CONSTRAINT `MEMORY_CAT_fk3` FOREIGN KEY (`pairID_4`) REFERENCES `dic_cat`(`wordID`);

ALTER TABLE `memory_cat` ADD CONSTRAINT `MEMORY_CAT_fk4` FOREIGN KEY (`pairID_5`) REFERENCES `dic_cat`(`wordID`);

ALTER TABLE `memory_cat` ADD CONSTRAINT `MEMORY_CAT_fk5` FOREIGN KEY (`pairID_6`) REFERENCES `dic_cat`(`wordID`);

ALTER TABLE `memory_cat` ADD CONSTRAINT `MEMORY_CAT_fk6` FOREIGN KEY (`pairID_7`) REFERENCES `dic_cat`(`wordID`);

ALTER TABLE `memory_cat` ADD CONSTRAINT `MEMORY_CAT_fk7` FOREIGN KEY (`pairID_8`) REFERENCES `dic_cat`(`wordID`);

ALTER TABLE `exam_done_cat` ADD CONSTRAINT `EXAM_DONE_CAT_fk0` FOREIGN KEY (`userID`) REFERENCES `users`(`userID`);

ALTER TABLE `exam_done_cat` ADD CONSTRAINT `EXAM_DONE_CAT_fk1` FOREIGN KEY (`examID`) REFERENCES `exam_cat`(`examID`);


INSERT INTO alsignos.category(categID, NAME, descripcion,difficulty,desctime,image) VALUES(1, 'Colors','En aquest tema veurem els colors basics en llenguatge de signes.','Facil','5-10 min','lliconsColors');
INSERT INTO alsignos.category(categID, NAME, descripcion,difficulty,desctime,image) VALUES(2, 'Cultura','En aquest tema veurem algunes paraules en llenguatge de signes de cultura popular.','Mitjana','10-15 min','lliconsCultura');
INSERT INTO alsignos.category(categID, NAME, descripcion,difficulty,desctime,image) VALUES(3, 'Formes','En aquest tema veurem els colors bàsics en llenguatge de signes.','Facil','5-10 min','lliconsFormes');
INSERT INTO alsignos.category(categID, NAME,descripcion,difficulty,desctime,image) VALUES(4, 'Lletres','En aquest tema veurem les lletres en llenguatge de signes (alfabet).','Facil','5-10 min','lliconsLletres');
INSERT INTO alsignos.category(categID, NAME,descripcion,difficulty,desctime,image) VALUES(5, 'Numeros','En aquest tema veurem els numeros en llenguatge de signes.','Facil','5-10 min','lliconsNumeros');
INSERT INTO alsignos.category(categID, NAME,descripcion,difficulty,desctime,image) VALUES(6, 'Test','En aquest tema veurem els TEST','TEST','5-10 min','');

INSERT INTO `dic_cat` (`wordID`, `name`, `type`, `signURL`, `imageURL`) VALUES
	(77, 'Beix', 1, '/videos/cat/Colors/Beix.mp4', NULL),
	(78, 'Blanc', 1, '/videos/cat/Colors/Blanc.mp4', NULL),
	(79, 'Blau', 1, '/videos/cat/Colors/Blau.mp4', NULL),
	(80, 'Color', 1, '/videos/cat/Colors/Color.mp4', NULL),
	(81, 'Gris', 1, '/videos/cat/Colors/Gris.mp4', NULL),
	(82, 'Groc', 1, '/videos/cat/Colors/Groc.mp4', NULL),
	(83, 'Lila', 1, '/videos/cat/Colors/Lila.mp4', NULL),
	(84, 'Marro', 1, '/videos/cat/Colors/Marro.mp4', NULL),
	(85, 'Negre', 1, '/videos/cat/Colors/Negre.mp4', NULL),
	(86, 'Ros', 1, '/videos/cat/Colors/Ros.mp4', NULL),
	(87, 'Rosa', 1, '/videos/cat/Colors/Rosa.mp4', NULL),
	(88, 'Taronja', 1, '/videos/cat/Colors/Taronja.mp4', NULL),
	(89, 'Verd', 1, '/videos/cat/Colors/Verd.mp4', NULL),
	(90, 'Vermell', 1, '/videos/cat/Colors/Vermell.mp4', NULL),
	(91, 'Alberg', 2, '/videos/cat/Cultura/Alberg.mp4', NULL),
	(92, 'Arquitectura', 2, '/videos/cat/Cultura/Arquitectura.mp4', NULL),
	(93, 'Art', 2, '/videos/cat/Cultura/Art.mp4', NULL),
	(94, 'Artista', 2, '/videos/cat/Cultura/Artista.mp4', NULL),
	(95, 'Ciencia', 2, '/videos/cat/Cultura/Ciencia.mp4', NULL),
	(96, 'Cinema', 2, '/videos/cat/Cultura/Cinema.mp4', NULL),
	(97, 'Cultura', 2, '/videos/cat/Cultura/Cultura.mp4', NULL),
	(98, 'Diari', 2, '/videos/cat/Cultura/Diari.mp4', NULL),
	(99, 'Diccionari', 2, '/videos/cat/Cultura/Diccionari.mp4', NULL),
	(100, 'Escultura', 2, '/videos/cat/Cultura/Escultura.mp4', NULL),
	(101, 'Festa', 2, '/videos/cat/Cultura/Festa.mp4', NULL),
	(102, 'Fotografia', 2, '/videos/cat/Cultura/Fotografia.mp4', NULL),
	(103, 'Gramatica', 2, '/videos/cat/Cultura/Gramatica.mp4', NULL),
	(104, 'Guia', 2, '/videos/cat/Cultura/Guia.mp4', NULL),
	(105, 'Historia', 2, '/videos/cat/Cultura/Historia.mp4', NULL),
	(106, 'Literatura', 2, '/videos/cat/Cultura/Literatura.mp4', NULL),
	(107, 'Llibre', 2, '/videos/cat/Cultura/Llibre.mp4', NULL),
	(108, 'Llibreria', 2, '/videos/cat/Cultura/Llibreria.mp4', NULL),
	(109, 'Monument', 2, '/videos/cat/Cultura/Monument.mp4', NULL),
	(110, 'Museu', 2, '/videos/cat/Cultura/Museu.mp4', NULL),
	(111, 'Musica', 2, '/videos/cat/Cultura/Musica.mp4', NULL),
	(112, 'Pintura', 2, '/videos/cat/Cultura/Pintura.mp4', NULL),
	(113, 'Teatre', 2, '/videos/cat/Cultura/Teatre.mp4', NULL),
	(114, 'Tradicio', 2, '/videos/cat/Cultura/Tradicio.mp4', NULL),
	(115, 'Turisme', 2, '/videos/cat/Cultura/Turisme.mp4', NULL),
	(116, 'Cercle', 3, '/videos/cat/Formes/Cercle.mp4', NULL),
	(117, 'Cor', 3, '/videos/cat/Formes/Cor.mp4', NULL),
	(118, 'Estrella', 3, '/videos/cat/Formes/Estrella.mp4', NULL),
	(119, 'Forma', 3, '/videos/cat/Formes/Forma.mp4', NULL),
	(120, 'Mitja lluna', 3, '/videos/cat/Formes/Mitja lluna.mp4', NULL),
	(121, 'Oval', 3, '/videos/cat/Formes/Oval.mp4', NULL),
	(122, 'Quadrat', 3, '/videos/cat/Formes/Quadrat.mp4', NULL),
	(123, 'Rectangle', 3, '/videos/cat/Formes/Rectangle.mp4', NULL),
	(124, 'Rombe', 3, '/videos/cat/Formes/Rombe.mp4', NULL),
	(125, 'Triangle', 3, '/videos/cat/Formes/Triangle.mp4', NULL),
	(126, 'Catorze', 5, '/videos/cat/Numeros/Catorze.mp4', NULL),
	(127, 'Cent', 5, '/videos/cat/Numeros/Cent.mp4', NULL),
	(128, 'Cinc', 5, '/videos/cat/Numeros/Cinc.mp4', NULL),
	(129, 'Cinc-cents', 5, '/videos/cat/Numeros/Cinc-cents.mp4', NULL),
	(130, 'Cinquanta', 5, '/videos/cat/Numeros/Cinquanta.mp4', NULL),
	(131, 'Deu', 5, '/videos/cat/Numeros/Deu.mp4', NULL),
	(132, 'Dinou', 5, '/videos/cat/Numeros/Dinou.mp4', NULL),
	(133, 'Disset', 5, '/videos/cat/Numeros/Disset.mp4', NULL),
	(134, 'Divuit', 5, '/videos/cat/Numeros/Divuit.mp4', NULL),
	(135, 'Dos', 5, '/videos/cat/Numeros/Dos.mp4', NULL),
	(136, 'Dotze', 5, '/videos/cat/Numeros/Dotze.mp4', NULL),
	(137, 'Mil', 5, '/videos/cat/Numeros/Mil.mp4', NULL),
	(138, 'Milio', 5, '/videos/cat/Numeros/Milio.mp4', NULL),
	(139, 'Nou', 5, '/videos/cat/Numeros/Nou.mp4', NULL),
	(140, 'Onze', 5, '/videos/cat/Numeros/Onze.mp4', NULL),
	(141, 'Quatre', 5, '/videos/cat/Numeros/Quatre.mp4', NULL),
	(142, 'Quinze', 5, '/videos/cat/Numeros/Quinze.mp4', NULL),
	(143, 'Set', 5, '/videos/cat/Numeros/Set.mp4', NULL),
	(144, 'Setze', 5, '/videos/cat/Numeros/Setze.mp4', NULL),
	(145, 'Sis', 5, '/videos/cat/Numeros/Sis.mp4', NULL),
	(146, 'Tres', 5, '/videos/cat/Numeros/Tres.mp4', NULL),
	(147, 'Tretze', 5, '/videos/cat/Numeros/Tretze.mp4', NULL),
	(148, 'Un', 5, '/videos/cat/Numeros/Un.mp4', NULL),
	(149, 'Vint', 5, '/videos/cat/Numeros/Vint.mp4', NULL),
	(150, 'Vuit', 5, '/videos/cat/Numeros/Vuit.mp4', NULL),
	(151, 'Zero', 5, '/videos/cat/Numeros/Zero.mp4', NULL),
	(152, 'A', 4, '/videos/cat/Lletres/A.mp4', '/videos/cat/LletresIMG/A.JPG'),
	(153, 'B', 4, '/videos/cat/Lletres/B.mp4', '/videos/cat/LletresIMG/B.JPG'),
	(154, 'C', 4, '/videos/cat/Lletres/C.mp4', '/videos/cat/LletresIMG/C.JPG'),
	(155, 'G', 4, '/videos/cat/Lletres/Ç.mp4', NULL),
	(156, 'D', 4, '/videos/cat/Lletres/D.mp4', '/videos/cat/LletresIMG/D.JPG'),
	(157, 'E', 4, '/videos/cat/Lletres/E.mp4', '/videos/cat/LletresIMG/E.JPG'),
	(158, 'F', 4, '/videos/cat/Lletres/F.mp4', '/videos/cat/LletresIMG/F.JPG'),
	(159, 'G', 4, '/videos/cat/Lletres/G.mp4', '/videos/cat/LletresIMG/G.JPG'),
	(160, 'H', 4, '/videos/cat/Lletres/H.mp4', '/videos/cat/LletresIMG/H.JPG'),
	(161, 'I', 4, '/videos/cat/Lletres/I.mp4', '/videos/cat/LletresIMG/I.JPG'),
	(162, 'J', 4, '/videos/cat/Lletres/J.mp4', '/videos/cat/LletresIMG/J.JPG'),
	(163, 'K', 4, '/videos/cat/Lletres/K.mp4', '/videos/cat/LletresIMG/K.JPG'),
	(164, 'L', 4, '/videos/cat/Lletres/L.mp4', '/videos/cat/LletresIMG/L.JPG'),
	(165, 'L·L', 4, '/videos/cat/Lletres/L·L.mp4', NULL),
	(166, 'LL', 4, '/videos/cat/Lletres/LL.mp4', NULL),
	(167, 'M', 4, '/videos/cat/Lletres/M.mp4', '/videos/cat/LletresIMG/M.JPG'),
	(168, 'N', 4, '/videos/cat/Lletres/N.mp4', '/videos/cat/LletresIMG/N.JPG'),
	(169, 'NY', 4, '/videos/cat/Lletres/NY.mp4', NULL),
	(170, 'O', 4, '/videos/cat/Lletres/O.mp4', '/videos/cat/LletresIMG/O.JPG'),
	(171, 'P', 4, '/videos/cat/Lletres/P.mp4', '/videos/cat/LletresIMG/P.JPG'),
	(172, 'Q', 4, '/videos/cat/Lletres/Q.mp4', '/videos/cat/LletresIMG/Q.JPG'),
	(173, 'R', 4, '/videos/cat/Lletres/R.mp4', '/videos/cat/LletresIMG/R.JPG'),
	(174, 'RR', 4, '/videos/cat/Lletres/RR.mp4', NULL),
	(175, 'S', 4, '/videos/cat/Lletres/S.mp4', '/videos/cat/LletresIMG/S.JPG'),
	(176, 'SS', 4, '/videos/cat/Lletres/SS.mp4', NULL),
	(177, 'T', 4, '/videos/cat/Lletres/T.mp4', '/videos/cat/LletresIMG/T.JPG'),
	(178, 'TX', 4, '/videos/cat/Lletres/TX.mp4', NULL),
	(179, 'U', 4, '/videos/cat/Lletres/U.mp4', '/videos/cat/LletresIMG/U.JPG'),
	(180, 'V', 4, '/videos/cat/Lletres/V.mp4', '/videos/cat/LletresIMG/V.JPG'),
	(181, 'W', 4, '/videos/cat/Lletres/W.mp4', '/videos/cat/LletresIMG/W.JPG'),
	(182, 'X', 4, '/videos/cat/Lletres/X.mp4', '/videos/cat/LletresIMG/X.JPG'),
	(183, 'Y', 4, '/videos/cat/Lletres/Y.mp4', '/videos/cat/LletresIMG/Y.JPG'),
	(184, 'Z', 4, '/videos/cat/Lletres/Z.mp4', '/videos/cat/LletresIMG/Z.JPG');
    