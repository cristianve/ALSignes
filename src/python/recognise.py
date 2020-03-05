#!/usr/bin/env python2
#-*- coding:utf-8 -*-


#hacemos todos los imports necesarios
import sys
import cv2
import numpy as np
from tensorflow.keras.models import load_model
from keras.preprocessing import image


#definimos variables que nos haran falta, incluyendo el nombre del usuario que dara nombre a la imagen
image_x, image_y = 64, 64
path = "/home/isanchez/Escritorio/SERN24_final/src/python/"
classifier = load_model(path+'Trained_model.h5')


#creamos la variable que contiene el nombre del usuario
user = sys.argv[1]
for i in sys.argv[2:]:
	user  = user  + " " + i


#creamos las variables que almacenar�n los nombres de los paths
pathFoto = path +'fotos/' + user + '.png'
pathFotoBinarizada = path + 'fotos binarizadas/' + user + 'Binarizada.png'


#función del predictor
def predictor():

    #cargamos la image y la llevamos al clasificador
    test_image = image.load_img(pathFotoBinarizada, target_size=(64, 64))
    test_image = image.img_to_array(test_image)
    test_image = np.expand_dims(test_image, axis=0)
    result = classifier.predict(test_image)

    #según el resultado que obtengamos imprimiremos una cosa u otra
    if result[0][0] == 1:
        return 'A'
    elif result[0][1] == 1:
        return 'B'
    elif result[0][2] == 1:
        return 'C'
    elif result[0][3] == 1:
        return 'D'
    elif result[0][4] == 1:
        return 'E'
    elif result[0][5] == 1:
        return 'F'
    elif result[0][6] == 1:
        return 'G'
    elif result[0][7] == 1:
        return 'H'
    elif result[0][8] == 1:
        return 'I'
    elif result[0][9] == 1:
        return 'J'
    elif result[0][10] == 1:
        return 'K'
    elif result[0][11] == 1:
        return 'L'
    elif result[0][12] == 1:
        return 'M'
    elif result[0][13] == 1:
        return 'N'
    elif result[0][14] == 1:
        return 'O'
    elif result[0][15] == 1:
        return 'P'
    elif result[0][16] == 1:
        return 'Q'
    elif result[0][17] == 1:
        return 'R'
    elif result[0][18] == 1:
        return 'S'
    elif result[0][19] == 1:
        return 'T'
    elif result[0][20] == 1:
        return 'U'
    elif result[0][21] == 1:
        return 'V'
    elif result[0][22] == 1:
        return 'W'
    elif result[0][23] == 1:
        return 'X'
    elif result[0][24] == 1:
        return 'Y'
    elif result[0][25] == 1:
        return 'Z'
    else:
        return 'No s\'ha pogut reconèixer'


#cargamos la imagen
frame = cv2.imread(pathFoto)


#giramos la imagen
frame = cv2.flip(frame, 1)


#guardamos las dimensiones de la imagen
width, height =frame.shape[:2]


#definimos los colores entre los que queremos buscar de cara a la máscara
#estos funcionan bien si tenemos buena iluminación
lower_blue = np.array([2, 0, 0],np.uint8)
upper_blue = np.array([20, 255, 255],np.uint8)


#cuadriculamos las coordenadas de la imagen para que se coja el centro de esta
if height > width:
	aux1 = (height - width)/2
	aux2 = 0
	height = width
else:
	aux1 = 0
	aux2 = (width - height)/2
	width = height


#definimos el las coordenadas en las que queremos cortar
low1 = aux1 + (height * 0.15)
low2 = aux1 + (height * 0.85)
high1 = aux2 + (width * 0.15)
high2 = aux2 + (width * 0.85)


#cortamos un recuadro de 300x300 en el centro de la imagen
imcrop = frame[int(high1):int(high2), int(low1):int(low2)]


#pasamos la image de rgb a hsv
hsv = cv2.cvtColor(imcrop, cv2.COLOR_BGR2HSV)


#creamos la máscara que cogerá los colores de la imagen en el rango que hemos dado
mask = cv2.inRange(hsv, lower_blue, upper_blue)


#hacemos diferentes transformaciones para tratar de dar más definición a nuestro recorte
kernel = np.ones((5, 5))
dilationcilla = cv2.dilate(mask, kernel, iterations=1)
erosioncilla = cv2.erode(dilationcilla, kernel, iterations=1)
filtrao = cv2.GaussianBlur(erosioncilla, (3, 3), 0)
ret, thresholdaken = cv2.threshold(filtrao, 127, 255, 0)


#guardamos la image con el tamaño 64x64 (definido por image x image y creadas al principio)
save_img = cv2.resize(thresholdaken, (image_x, image_y))
cv2.imwrite(pathFotoBinarizada, save_img)


#llamamos a la función del predictor
img_text = predictor()


#imprimimos el resultado
print(img_text)
sys.stdout.flush()