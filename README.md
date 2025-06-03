# Ionic Firebase Login (Migrado a Supabase)

Este proyecto es una aplicación Ionic + Angular que originalmente usaba Firebase, pero ahora utiliza **Supabase** para autenticación, base de datos y almacenamiento de imágenes de perfil.

---

## 🚀 Tecnologías usadas

- [Ionic Framework](https://ionicframework.com/)
- [Angular](https://angular.io/)
- [Supabase](https://supabase.com/)
- [Capacitor Camera](https://capacitorjs.com/docs/apis/camera) (para tomar/subir fotos de perfil)

---

## ⚙️ Configuración del proyecto

### 1. Clona el repositorio

```sh
git clone <URL_DEL_REPO>
cd ionic-firebase-login
```

### 2. Instala dependencias

```sh
npm install
```

### 3. Configura Supabase

Edita el archivo `src/app/supabaseClient.ts` con tu URL y Public Anon Key de Supabase:

```typescript
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://TU-PROYECTO.supabase.co', // Tu URL de Supabase
  'TU_PUBLIC_ANON_KEY'               // Tu Public Anon Key
);
```

### 4. Estructura de Supabase

- **Tabla `profiles`**  
  Debe tener al menos:  
  - `id` (UUID, primary key, igual al user id de Supabase Auth)
  - `displayName` (text)
  - `photoURL` (text)
  - `email` (text)

- **Bucket de Storage `avatars`**  
  Para almacenar las imágenes de perfil.

---

## 🏗️ Estructura principal del código

- `src/app/supabaseClient.ts`: Configuración del cliente Supabase.
- `src/app/services/auth.service.ts`: Registro, login y logout usando Supabase Auth.
- `src/app/services/avatar.service.ts`: Subida de imágenes y gestión de perfil usando Supabase Storage y la tabla `profiles`.
- `src/app/home/home.page.ts`: Página principal, muestra el perfil y permite cambiar la imagen.
- `src/app/app-routing.module.ts`: Rutas principales (`/` para login, `/home` para el home).

---

## 🖼️ Subida y visualización de imágenes

- Usa el plugin de cámara de Capacitor para tomar o seleccionar una foto.
- Convierte la imagen a `File` y la sube a Supabase Storage.
- Guarda la URL pública en la tabla `profiles`.
- Muestra la imagen de perfil en la app.

---

## 🛠️ Comandos útiles

- **Iniciar la app en desarrollo:**
  ```sh
  ionic serve
  ```

- **Limpiar dependencias (si tienes errores):**
  ```sh
  rmdir /s /q node_modules
  del package-lock.json
  npm install
  ```

---

## 📝 Notas importantes

- Si usas Angular 13, asegúrate de tener:
  - `typescript@4.4.4`
  - `@supabase/supabase-js@2.39.7`
- Si quieres usar la última versión de Supabase, actualiza Angular a v15+ y TypeScript a 4.7+.
- Elimina cualquier referencia a Firebase/AngularFire si ya migraste a Supabase.

---

## 📂 Estructura de carpetas relevante

```
src/
  app/
    services/
      auth.service.ts
      avatar.service.ts
    home/
      home.page.ts
    supabaseClient.ts
    app.module.ts
    app-routing.module.ts
```

---
