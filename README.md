# pokemuch

Esse projeto lista as gerações de jogos Pokémon disponibilizadas pela API: https://pokeapi.co/

## Rodando o projeto

### Opção 1: Se você já possui o `docker` instalado basta usar dentro da pasta:
```
docker-compose up --build
```

### Opção 2: Se você já possui o `npm` instalado basta usar dentro da pasta:
```
sh post-up
```

## Rodando os testes

### Opção 1: Com docker
```
docker exec -it pokemuch npm run test
```

### Opção 1: Sem docker
```
npm run test
```
