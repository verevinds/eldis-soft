# Testing task for company the Eldis-Soft

## Сontents

1. [:package: Installation](#package-installation)
2. [:scroll: Scripts](#scroll-scripts)
   1. [:straight_ruler: Launch for development](#straight_ruler-launch-for-development)
   2. [:dollar: Production](#dollar-production)

## :package: Installation

Downloading

```cmd
  git clone https://github.com/verevinds/eldis-soft.git
```

Go to the folder

```cmd
  cd eldis-soft
```

Install all packages from dependencies

```cmd
  npm install
```

## :scroll: Scripts

### :straight_ruler: Launch for development

```cmd
  npm run start
```

Webpack compiles the code, starts the server. After that, this code opens in a new tab of yours.
After saving the edited code, recompiles the code and refresh the page.

### :dollar: Production

```cmd
npm run build
```

Webpack builds production code. The process is long. After the build, the dist folder will appear, and it will contain the index.html file and other files with the js, css extensions. These files can be uploaded to your server.
