Question 1.1 donner la liste des en-têtes de la réponse HTTP du serveur.
HTTP/1.1 200 OK
Date: Mon, 21 Sep 2026 02:39:34 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked

Question 1.2 donner la liste des en-têtes qui ont changé depuis la version précédente.
HTTP/1.1 200 OK
Content-Type: application/json
Date: Mon, 21 Sep 2026 02:46:44 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Content-Length: 20

Question 1.3 que contient la réponse reçue par le client ?
Le client ne reçoit rien. La requête reste en attente dans le navigateur (chargement infini) jusqu'au timeout.

Question 1.4 quelle est l’erreur affichée dans la console ? 
Error: ENOENT: no such file or directory, open 'C:\Users\ct_no\OneDrive\Documents\devweb-tp5\index.html' {
    errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'C:\\Users\\ct_no\\OneDrive\\Documents\\devweb-tp5\\index.html'
}

