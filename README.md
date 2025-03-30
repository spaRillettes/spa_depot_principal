# spa_depot_principal
container des depots spa_front et spa_back

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

### Mise à Jour des Subtrees

**Pour Mettre à Jour le Contenu de `spa_front` :**

```bash
git subtree pull --prefix=spa_front spa_front main --squash
```

**Pour push les modif de `spa_front` vers le depot distant :**

```bash
git subtree push --prefix=spa_front spa_front main
```


