1.Crear cuenta en MongoDB Atlas y un cluster

Ingresar a MongoDB Atlas
 y crear una cuenta.

Crear un cluster (generalmente se llama Cluster0).

2. Crear archivo .env

En la carpeta backend crear un archivo llamado .env.

Importante: Este archivo contiene información sensible (usuario y contraseña de la base de datos). No se debe subir a GitHub.
3. Configurar variables en .env
MONGO_URI=mongodb+srv://USUARIOMONGODB:CONTRASEÑAMONGODB@cluster0.umm1zsm.mongodb.net/proyecto1?retryWrites=true&w=majority&appName=Cluster0
PORT=5000
Reemplazar USUARIOMONGODB y CONTRASEÑAMONGODB con el usuario y contraseña que crearon para la base de datos (no es el mismo con el que inician sesión en Atlas).
Para crear este usuario: ir a Security → Database Access → Add New Database User.

4. Usuarios de prueba (opcional)

En server.js hay un método para crear usuarios de prueba.

Completar los campos username, email y password.

5.Instalar dependencias e iniciar el servidor
cd backend
npm install
npm run dev
Si no se usarán usuarios de prueba, eliminar las líneas correspondientes (desde la línea 20 a la 33).
