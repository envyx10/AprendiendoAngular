# 01-typescript-intro

Este repositorio reúne ejemplos y apuntes de la introducción a TypeScript mientras sigo el curso "De cero a experto en Angular moderno" de Fernando Herrera.

Contenido principal
- Ejemplos y apuntes en `src/topics/`:
  - `01-basic-type.ts` — tipos básicos y union types.
  - `02-object-interface.ts` — arrays tipados e interfaces para objetos.
  - `03-functions.ts` — funciones tipadas, arrow functions y parámetros opcionales.
  - `04-homework-types.ts` — interfaces anidadas y métodos en interfaces.

Requisitos mínimos
- Node.js (12+ recomendado)
- npm (o yarn)

Instalación rápida de TypeScript (PowerShell)
- Instalar TypeScript localmente en el proyecto (recomendado como dependencia de desarrollo):

```powershell
npm install --save-dev typescript
```

- (Opcional) Instalar TypeScript globalmente:

```powershell
npm install -g typescript
```

- Inicializar un `tsconfig.json` si aún no existe:

```powershell
npx tsc --init
```

Compilar y ejecutar
- Compilar todos los archivos TypeScript:

```powershell
npx tsc
```

- Compilar en modo watch (recompila automáticamente):

```powershell
npx tsc --watch
```

- Si prefieres un bundle rápido con `esbuild` (ejemplo):

```powershell
npx esbuild src/main.ts --bundle --outfile=public/bundle.js --format=esm
```

Ver en el navegador
- Abrir `index.html` en `public/` o servir `public/` con un servidor estático:

```powershell
npx http-server public -p 8080
# luego abrir http://localhost:8080
```

Notas y buenas prácticas (resumen)
- Uso de `const` cuando no se reasigna una variable.
- Definir interfaces para objetos complejos en lugar de tiparlos inline.
- Tipar parámetros y tipos de retorno de funciones cuando no sea obvio.
- Usar `this` dentro de métodos de objetos para referenciar sus propiedades.
- Usar template strings para concatenaciones: `` `${this.name}, ${this.address.city}, ${this.address.country}` ``.

¿Quieres que guarde los apuntes extraídos en `NOTES.md` o que genere un `.docx` listo para descargar? Dime y lo creo.

---
Archivo generado para indicar que sigo el curso de Fernando Herrera y añadir instrucciones básicas de instalación de TypeScript.
