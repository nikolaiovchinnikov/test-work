
# Vue 3 + Vite Project Rick and Morty

Этот шаблон поможет вам начать а так же поддерживать разработку с Vue 3 в Vite.

## Рекомендуемая настройка IDE

- **VSCode** + **Volar** (и отключите Vetur).

## Поддержка типов для импорта `.vue` в TypeScript

TypeScript не может обрабатывать информацию о типах для импорта `.vue` по умолчанию, поэтому мы заменяем CLI `tsc` на `vue-tsc` для проверки типов. В редакторах нам нужен Volar, чтобы сделать службу языка TypeScript осведомленной о типах `.vue`.


## Project Setup

```sh
npm install
```

### Запускает сервер разработки Vite.

```sh
npm run dev
```

### Запускает проверку типов и сборку проекта.

```sh
npm run build
```

### Запускает ESLint для проверки и исправления кода, игнорируя файлы, указанные в .gitignore.

```sh
npm run lint
```

### Запускает юнит-тесты с использованием Vitest.

```sh
npm run test:unit
```

### Выполняет сборку проекта с использованием Vite.

```sh
npm run build-only
```

### Форматирует файлы в папке src с использованием Prettier.

```sh
npm run format
```

### Запускает предварительный просмотр собранного проекта с использованием Vite.

```sh
npm run preview
```

### Выполняет проверку типов с использованием Vue TypeScript Compiler.

```sh
npm run type-check
```

### Запускает сборку докерконтейнера.

```sh
docker build -t vue-project .
```

### Запускает докер контейнер.

```sh
docker run -p 80:80 vue-project
```