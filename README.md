# spa_depot_principal
Est le dossier qui sert à centraliser les depots de l'application (**spa_front** et **spa_back**).<br>
C'est d'ici que vous allez instancier vos conteneurs si vous travaillez sour **Docker.**
## Ajout de la remote front
```bash
git remote add spa_front https://github.com/Cleopatatras/spa_front.git
```

## Ajout du contenu front en tant que Subtree
```bash
git subtree add --prefix=spa_front spa_front main --squash
```
prefix=spa_front specifie le sous repertoire ou le contenu sera ajouté

spa_front : c'est le nom de la remote

main : la branche du depot distant qu'on ajoute

--squash : pour fusionner les commits en 1 seul dans le depot principal

## Ajout de la remote back
```bash
git remote add spa_back https://github.com/Cleopatatras/spa_back.git
```

## Ajout du contenu back en tant que Subtree
```bash
git subtree add --prefix=spa_back spa_back main --squash
```
<br><br>

## Pour la mise mise à Jour des Subtrees (_exemple spa_front_)

**Pour Mettre à Jour le Contenu de `spa_front` :**

```bash
git subtree pull --prefix=spa_front spa_front main --squash
```

**Pour push les modif de `spa_front` vers le depot distant :**

```bash
git subtree push --prefix=spa_front spa_front main
```
<br><br>

## Pour utilisez Docker :
- Après avoir cloné le projet positionnez vous dans le dossier **spa_depot_principal**<br>
    - ```cd spa_depot_principal```
- Basculez vers la branche **develop**
    - ```git checkout develop```
- Assurez vous que **Docker desktop** ou **docker daemon** (_en fonction de l'OS_) est en cours d'exécution.
    - ```docker ps```
- Lancez la création des conteneurs avec les privilèges administrateur :
    - ```sudo docker compose up --build``` (_sur Mac et Linux_)
    - ```docker-compose up --build``` (_sur Windows_)
    - ```docker compose up --build``` (_aussi sur Windows_)

