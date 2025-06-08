# 🧮 Calculadora React

Una calculadora moderna y funcional construida con React, Vite y componentes reutilizables. Incluye testing completo, documentación con Storybook y un diseño elegante y responsivo.

## ✨ Características

- **Operaciones básicas**: Suma, resta, multiplicación, división y módulo
- **Funciones adicionales**: 
  - Cambio de signo (+/-)
  - Números decimales
  - Operaciones encadenadas
  - Manejo de errores (overflow, división por cero)
- **Límites de seguridad**: Máximo 9 dígitos en pantalla
- **Interfaz moderna**: Diseño dark mode con efectos hover
- **Componentes reutilizables**: Arquitectura modular y escalable

## 🚀 Tecnologías utilizadas

- **React 19.1.0** - Framework principal
- **Vite** - Build tool y dev server
- **Vitest** - Testing framework
- **Storybook** - Documentación de componentes
- **ESLint** - Linting y formateo de código
- **CSS3** - Estilos con Grid Layout
- **Bun** - Runtime y package manager ultra-rápido

## 📁 Estructura del proyecto

```
calculadora/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Calculator.jsx   # Componente principal
│   │   ├── Display.jsx      # Pantalla de la calculadora
│   │   ├── Keypad.jsx       # Teclado numérico
│   │   └── Button.jsx       # Botón reutilizable
│   ├── hooks/
│   │   └── useCalculator.jsx # Lógica de la calculadora
│   ├── utils/
│   │   └── operations.js     # Operaciones matemáticas
│   ├── stories/             # Documentación Storybook
│   └── App.jsx              # Componente raíz
├── tests/                   # Tests unitarios
├── .storybook/             # Configuración Storybook
└── public/                 # Archivos estáticos
```

## 🛠️ Instalación y uso

### Prerrequisitos
- **Bun 1.0+** - [Instalar Bun](https://bun.sh/docs/installation)

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/MiltonPolanco/Proyecto-1-Sistemas-Web-Calculadora

# Navegar al directorio
cd Proyecto-1-Sistemas-Web-Calculadora/calculadora

# Instalar dependencias con Bun (ultra-rápido)
bun install
```

### Scripts disponibles

```bash
# Desarrollo
bun run dev              # Servidor de desarrollo
bun dev                  # Alias corto

# Testing
bun run test            # Ejecutar tests unitarios
bun run test:watch      # Tests en modo watch
bun test                # Alias corto

# Linting
bun run lint            # Verificar código con ESLint

# Storybook
bun run storybook       # Documentación de componentes
bun run build-storybook # Build de Storybook

# Producción
bun run build           # Build para producción
bun run preview         # Preview del build
```


## 🧪 Testing

El proyecto incluye tests completos para:

- **Operaciones matemáticas**: Suma, resta, multiplicación, división, módulo
- **Funcionalidades**: Números decimales, cambio de signo, operaciones encadenadas
- **Manejo de errores**: Overflow, división por cero
- **Validaciones**: Límite de 9 dígitos

### Cobertura de tests

Los tests cubren escenarios como:
- ✅ Entrada de números decimales (`0.12`)
- ✅ Operación módulo (`7 % 4 = 3`)
- ✅ Cambio de signo (`5` → `-5` → `5`)
- ✅ Detección de overflow (`999999999 + 1 = ERROR`)
- ✅ Operaciones encadenadas (`2 + 3 × 4 = 20`)

## 📚 Documentación con Storybook

El proyecto incluye documentación interactiva de componentes:

```bash
bun run storybook
```

Visita `http://localhost:6006` para explorar:
- **Button**: Estados y variantes de botones
- **Display**: Diferentes estados de la pantalla
- **Keypad**: Teclado interactivo
- **Calculator**: Calculadora completa

## 🏗️ Arquitectura

### Componentes principales

- **[`Calculator`](calculadora/src/components/Calculator.jsx)**: Componente contenedor principal
- **[`Display`](calculadora/src/components/Display.jsx)**: Muestra el valor actual
- **[`Keypad`](calculadora/src/components/Keypad.jsx)**: Grid de botones 4x5
- **[`Button`](calculadora/src/components/Button.jsx)**: Botón reutilizable con clases dinámicas

### Hook personalizado

- **[`useCalculator`](calculadora/src/hooks/useCalculator.jsx)**: Maneja toda la lógica de estado:
  - `display`: Valor mostrado en pantalla
  - `acc`: Acumulador para operaciones
  - `op`: Operación actual
  - `overwrite`: Flag para sobrescribir display

### Utilidades

- **[`operations.js`](calculadora/src/utils/operations.js)**: Operaciones matemáticas y formateo
  - [`OPERATIONS`](src/utils/operations.js): Objeto con todas las operaciones
  - [`formatResult`](src/utils/operations.js): Validación y formateo de resultados

## 🎨 Diseño

- **Dark mode**: Tema oscuro moderno
- **Grid responsive**: Layout adaptable con CSS Grid
- **Efectos hover**: Retroalimentación visual en botones
- **Tipografía**: Courier New para números, Segoe UI para interfaz
- **Colores distintivos**: 
  - Operaciones: Naranja (`#ff9500`)
  - Clear: Rojo (`#d32f2f`)
  - Números: Gris (`#3a3a3a`)

## 👨‍💻 Autor

**Milton Polanco**
- GitHub: [@MiltonPolanco](https://github.com/MiltonPolanco)
- Email: miltonpolanco00@gmail.com
