{
    "compilerOptions": {
      "target": "es6",
      "lib": [
        "dom",
        "dom.iterable",
        "esnext"
      ],
      "esModuleInterop": true,
      "module": "esnext",
      "moduleResolution": "node",
      "jsx": "react",
      "rootDirs": ["src", "tests"],
      "baseUrl": "src",
      "paths": {
        "@/*": ["*"],
        "@/tests/*": ["../tests/*"]
      },
      "allowJs": true,
      "resolveJsonModule": true
    },
    "include": ["src", "tests"],
    "exclude": ["tests/e2e/cypress"]
  }
  