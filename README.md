# RawrBank - Maqueta del Sprint 1, Grupo 2, Comisión 3

## Consideraciones Técnicas:
### Distribución de contenido
El repo se encuentra seccionado por 4 carpetas principales: **Assets, Pages, Scripts y Styles**

#### Assets
Acá se encuentra todo el material gráfico que utilizamos para crear la página.

#### Pages
En esta sección se encuentran todos los archivos .html que componen la maqueta.

####  Scripts
Aquí está el apartado lógico de la página. Decidimos dividir los scripts por sus respectivas páginas, ya que cuando se conglomeraban los scripts dentro de un mismo archivo, empezaban a surgir errores por los imports (por ejemplo, el script podía estar buscando un input propio de "Pagos" dentro de la página de "Cuentas" y arrojar un error en la consola)
También van a encontrar un archivo main.js responsable del responsiveness de todas las páginas.

####  Styles
La sección de styles se conforma principalmente de un archivo .CSS y un .SCSS . Originalmente trabajamos en el SCSS y utilizamos un compilador en el IDE que traduce todo a CSS. Debido a esto, quizás el archivo .SCSS sea el más legible, ya que es en realidad el que estuvo pensado como original.
También decidimos, a consciencia del consejo que nos dió Nico en la muestra, de no separar todos los estilos en distintos archivos. 
Unificamos todo en uno; en la primera sección se encuentran los estilos globales (como el root con las variables de colores) y ciertos estilos que aplican universalmente a toda la página.
Encontramos ciertos conflictos estilizando la página ya que no tuvimos alternativa más que codear de forma asincrónica. Para solucionarlos, propusimos agregarle una clase a cada body en caso de querer hacer cambios específicos dentro de una página (por ejemplo, pagosBody) y de esta manera no afectar al código de los demás.


# Bienvenido a Rawrbank!
¡Gracias por visitar el repositorio de RawrBank! Aquí encontrarás información sobre la plataforma que hace que la gestión de tus finanzas sea más fácil que nunca. RawrBank se esfuerza por brindar una experiencia bancaria excepcional, combinando la última tecnología con un enfoque centrado en el cliente.

## Secciones:

### 1. Inicio de Sesión
La sección de inicio de sesion te permite acceder de manera segura a tu cuenta. Utilizamos las últimas medidas de seguridad para proteger tu información financiera y personal.

### 2. Registro
¿No tienes una cuenta en RawrBank? No hay problema. La sección de registro te guiará a través del proceso de creación de una cuenta, permitiéndote acceder a todos los beneficios que ofrecemos.

### 3. Menú lateral
El menú lateral es tu acceso rápido a las diversas funciones que RawrBank tiene para ofrecer. Desde consultas de saldo hasta transferencias y pagos, todo está a solo un clic de distancia.

### 4. Área Principal
Descubre la interfaz intuitiva y fácil de usar en el área principal de RawrBank. Accede a tus cuentas, realiza seguimiento de tus transacciones recientes y obtén una visión general clara de tus finanzas.

### 4. Pie
En el pie de la plataforma, encontrarás información adicional sobre RawrBank y cómo ponerte en contacto con nuestro equipo de soporte. Tu satisfacción es nuestra prioridad.

Estamos emocionados de que estés considerando unirte a RawrBank para tus necesidades financieras.
