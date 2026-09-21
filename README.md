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

Question 1.5 donner le code de requestListener() modifié avec gestion d’erreur en async/await.
async function requestListener(_request, response) {
  try {
    const contents = await fs.readFile("index.html", "utf8");
    response.setHeader("Content-Type", "text/html");
    response.writeHead(200);
    return response.end(contents);
  } catch (error) {
    console.error(error);
    response.writeHead(500);
    return response.end("<html><p>500: INTERNAL SERVER ERROR</p></html>");
  }
}

Question 1.6 indiquer ce que cette commande a modifié dans votre projet.
Les deux commandes modifient le projet de trois façons :
- package.json est modifié. cross-env est ajouté dans dependencies (option --save) et nodemon dans devDependencies (option --save-dev), avec leur version.
- Le fichier package-lock.json est créé. Il fige les versions exactes de toutes les dépendances.
- Le dossier node_modules/ est créé. Il contient les paquets installés et leurs dépendances.

Question 1.7 quelles sont les différences entre les scripts http-dev et http-prod ?
http-dev définit NODE_ENV=development et lance le serveur avec nodemon, qui le redémarre automatiquement à chaque modification d'un fichier.
http-prod définit NODE_ENV=production et lance le serveur avec node, sans rechargement automatique.

Question 1.8 donner les codes HTTP reçus par votre navigateur pour chacune des quatre pages précédentes.
http://localhost:8000/index.html : 200 OK
http://localhost:8000/random.html : 200 OK
http://localhost:8000/ : 404 Not Found
http://localhost:8000/dont-exist : 404 Not Found

Question 2.1 donner les URL des documentations de chacun des modules installés par la commande précédente.
Express : https://expressjs.com/
http-errors : https://github.com/jshttp/http-errors
loglevel : https://github.com/pimterry/loglevel
Morgan : https://github.com/expressjs/morgan

Question 2.2  vérifier que les trois routes fonctionnent.
Les trois routes fonctionnent :
/ et /index.html renvoient le fichier index.html (code 200)
/random/10, par exemple, renvoie une liste <ul> de 10 nombres aléatoires entre 0 et 99 (code 200)

Question 2.3 lister les en-têtes des réponses fournies par Express. Lesquelles sont nouvelles par rapport au serveur HTTP ?
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 81
ETag: W/"51-iCTj4Cq2h+N6mYRWxqGU5V+Mf2I"
Date: Mon, 21 Sep 2026 04:26:26 GMT
Connection: keep-alive
Keep-Alive: timeout=5

 Nouveau par rapport au server http : X-Powered-By: Express, ETag, le charset=utf-8 dans Content-Type, Content-Length (à la place de Transfer-Encoding: chunked) et, pour les fichiers, Accept-Ranges, Cache-Control et Last-Modified.

Question 2.4 quand l’événement listening est-il déclenché ?
L'événement listening est déclenché quand le serveur a fini de s'attacher à l'adresse et au port, c'est-à-dire quand il est prêt à accepter des connexions
listen() est asynchrone, donc dans la console le message File ... executed. s'affiche avant HTTP listening on http://::1:8000 with mode 'development'








