# JOBS

Application de gestion d'offres avec NodeJs , ExpressJs et MySql

## Installation


```bash
npm install
```

## Usage

```bash
npm start OU nodemon "nom_projet"
```

## APIS
Liste des offres : GET - localhost:3000/api/jobs/

Offre par Id : GET - localhost:3000/api/jobs/{id}

Supprimer offre: DELETE - localhost:3000/api/jobs/{id}

Ajouter offre : POST - localhost:3000/api/jobs/

Modifier offre : PUT - localhost:3000/api/jobs/{id}

Liste des offre par utilisateur: GET - localhost:3000/api/jobs/user/{id}

Affecter offre à un utilisateur : PUT - localhost:3000/api/jobs/user/{id}

Supprimer offre à un utilisateur : DELETE - localhost:3000/api/jobs/user/{id}

## License
[MIT](https://choosealicense.com/licenses/mit/)
