# JuegoContador — Challenge Técnico React

Juego web en React donde el usuario intenta clickear la mayor cantidad de veces posible un botón durante 5 segundos, compitiendo contra su propio récord.

---

## Estructura del proyecto

El repositorio contiene tres implementaciones del mismo juego: una desarrollada sin IA y dos generadas con modelos de IA distintos (ChatGPT y Claude). La configuración de Vite, TypeScript y dependencias es compartida en la raíz.

```
repo/
├── ConIA/
│   ├── ChatGPT/          ← Implementación generada con ChatGPT
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── main.tsx
│   │   └── Componentes/
│   └── Claude/           ← Implementación generada con Claude
│       ├── App.tsx
│       ├── index.css
│       ├── main.tsx
│       └── Componentes/
├── SinIA/
│   └── JuegoContador/    ← Implementación desarrollada manualmente
│       ├── App.tsx
│       ├── index.css
│       ├── main.tsx
│       └── Componentes/
├── index.html            ← HTML compartido (se modifica según el proyecto a correr)
├── vite.config.ts        ← Config compartida de Vite
├── package.json
├── tsconfig.json
├── tsconfig.app.json
└── tsconfig.node.json
```

---

## Cómo correr en entorno local

### Requisitos

- Node.js >= 18
- npm >= 9

### Instalación

Desde la raíz del repositorio:

```bash
npm install
```

### Correr cada proyecto

Como la configuración de Vite es compartida, para correr cada proyecto hay que modificar dos líneas en `index.html` según cuál se quiera ejecutar.

#### Sin IA

```html
<link rel="stylesheet" href="/SinIA/JuegoContador/index.css" />
<script type="module" src="/SinIA/JuegoContador/main.tsx"></script>
```

#### Con IA — ChatGPT

```html
<link rel="stylesheet" href="/ConIA/ChatGPT/index.css" />
<script type="module" src="/ConIA/ChatGPT/main.tsx"></script>
```

#### Con IA — Claude

```html
<link rel="stylesheet" href="/ConIA/Claude/index.css" />
<script type="module" src="/ConIA/Claude/main.tsx"></script>
```

Luego ejecutar:

```bash
npm run dev
```

La app estará disponible en `http://localhost:5173`.

---

## Flujo del juego

1. **Espera** — el botón INICIAR está habilitado, PRESIONAR deshabilitado.
2. **Cuenta regresiva** — se muestran "Preparados", "Listos" y "¡Ya!" con intervalos de 1 segundo. INICIAR se deshabilita.
3. **Jugando** — PRESIONAR se habilita durante 5 segundos. Se muestran el puntaje actual y el tiempo restante en tiempo real.
4. **Fin** — PRESIONAR se deshabilita, INICIAR se habilita. Si se superó el puntaje máximo, el valor se actualiza.

---

## Comparación entre enfoques

### Sin IA
El código fue desarrollado manualmente. La lógica de estados y el flujo del juego fueron pensados desde cero, definiendo la arquitectura de componentes y la distribución de responsabilidades de forma deliberada.

### Con IA — ChatGPT
ChatGPT generó una solución funcional con una estructura simple y directa. Los estilos son mínimos y genéricos (todos los botones con el mismo estilo, sin dark mode). El estado del juego se maneja de forma centralizada en `App.tsx`.

### Con IA — Claude
Claude generó una solución con mayor detalle visual: clases CSS específicas por componente, soporte de dark mode, animaciones en la cuenta regresiva y diferenciación visual entre los dos botones. La arquitectura de componentes es similar a la de ChatGPT pero con props más explícitas.

### Diferencias clave

| Aspecto | Sin IA | ChatGPT | Claude |
|---|---|---|---|
| Estilos | Propios | Mínimos y genéricos | Detallados con dark mode |
| Arquitectura | Manual | Centralizada en App | Centralizada en App |
| Componentes | Separados por función | Separados por función | Separados por función |
| Animaciones | No | No | Sí (cuenta regresiva) |
| Dark mode | Parcial | No | Sí |

---

## Supuestos y consideraciones

- El puntaje máximo persiste durante la sesión del navegador pero no se guarda en `localStorage`, ya que el alcance del ejercicio no lo requiere.
- La cuenta regresiva dura 3 segundos ("Preparados" → "Listos" → "¡Ya!") antes de habilitar el botón de juego.
- La configuración de Vite y TypeScript es compartida entre los tres proyectos para simplificar la estructura del repositorio. En un entorno de producción, cada proyecto tendría su propia configuración independiente.
- Se usó `useRef` para el callback del temporizador en la versión sin IA y Claude, evitando que los re-renders causados por los clicks interrumpan el intervalo.
