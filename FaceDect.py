import cv2

face_cascade = cv2.CascadeClassifier("/home/pi/Desktop/FaceDect/haarcascade_frontalface_default.xml")

cap = cv2.VideoCapture(0)

while True:

    _, img = cap.read()

    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    faces = face_cascade.detectMultiScale(gray, 1.1, 4)

    for (x, y, w, h) in faces:
           cv2.rectangle(img, (x, y), (x+w, y+h), (255, 0, 0), 2)
           print(w*h)
           if w * h > 22500 :
                print("faceDetected " + "x: " + str(x) + " " + "y: "+ str(y) + " " + "w: " + str(w) + " " + "h: " + str(h))

    cv2.imshow('img', img)

    k = cv2.waitKey(30) & 0xff
    if k == 27:
        break


cap.release()