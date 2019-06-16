<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
</head>
<body>
	<p align="center"><img src="https://github.com/Luis-Aguila/Contenido/blob/master/assets/img-tecnology/auth0.png" alt="Logo/Imagen Proyecto" width="150px" height="150px"></p>
	<h1 align="center">AuthApp</h1>
  <table>
    <tbody>
      <tr>
        <td align="center" valign="middle">
          <img width="222px" src="https://github.com/Luis-Aguila/Contenido/blob/master/assets/img-tecnology/angular.png" alt="Imagen 1">
        </td>
        <td align="center" valign="middle">
          <img width="222px" src="https://github.com/Luis-Aguila/Contenido/blob/master/assets/img-tecnology/html5.png" alt="Imagen 2">
        </td>
        <td align="center" valign="middle">
          <img width="222px" src="https://github.com/Luis-Aguila/Contenido/blob/master/assets/img-tecnology/auth0.png" alt="Imagen 3">
        </td>
        <td align="center" valign="middle">
          <img width="222px" src="https://github.com/Luis-Aguila/Contenido/blob/master/assets/img-tecnology/bootstrap.png" alt="Imagen 4">
        </td>
      </tr><tr></tr>
    </tbody>
  </table>
	<h3>Introducción</h3>
  <p>AuthApp, es un sistema desarrollado para el aprendizaje de metodos de autentificación, utilizando un servicio externo llamado Auth0</p>
  <p>Al momento de ingresar al sistema, este cuenta con un navbar con opciones generales para todos los usuarios, sin embargo posee uns item protegidos y que solo son seran accesibles por usuarios que se hayan registrados e identificados mediante autentificación por google, una vez autentificados, se hara visible el item protegido dentro del navbar, el cual mostrara información relacionada con el usuario logeado (Foto de perfil de google, nombre usuario, correo, etc).</p>
  <p>Para este sistema, se ocupo el sevicio de Auth0 y se utilizaron las instrucciones de uso para implementar el sistema en angular desde su página oficial https://auth0.com/, una vez creado la aplicación en el dashboard de Auth0, es necesario crear un servicio en nuestra aplicación (de preferencia llamada auth.service.ts) y pegar el las lineas de código que nos facilita la página, posterior a esto se aconseja cambiar el puerto de servicio que recomienda Auth0, debido a que Angular trabaja con el puerto 4200 y no el puerto 3600 como predetermina Auth0 en su pagina oficial, luego  de realizar estos pasos, se configuran las diferentes funciones de autentificación y ya se puede utilizar Auth0 como servicio de autentificación en nuestro sistema.</p>
  <h3>Información del Proyecto</h3>
  <p>Proyecto desarrollado a modo de aprendizaje en cursos guiados.</p>
	<h3>Objetivo</h3>
  <ul>
    <li>Implementar un sistema de Autentificación utilizando Auth0</li>
    <li>Crear paginas protegidas utilizando metodos de autentificación</li>
  </ul>
	<h3>Tecnologías</h3>
  <ul>
    <li>Angular 2+</li>
    <li>Auth0 para autentificación</li>
    <li>Bootstrap</li>
  </ul>
	<h3>Componentes</h3>
  <ul>
    <li>Home</li>
    <li>Navbar</li>
    <li>Precio</li>
    <li>Protegida</li>
  </ul>
	<h3>Servicios</h3>
  <ul>
    <li>Auth-guard.services.ts</li>
    <li>Auth.services.ts</li>
  </ul>
  <p>Se utilizo para la autentificación el servicio de Auth0.</p>
	<h3>Vistas del sistema</h3>
  <table>
    <tbody>
      <tr>
        <td align="center" valign="middle">
          <img width="300px" src="https://github.com/Luis-Aguila/Contenido/blob/master/assets/img-proyect/AuthApp/index.PNG" alt="Imagen 1">
        </td>
        <td align="center" valign="middle">
          <img width="300px" src="https://github.com/Luis-Aguila/Contenido/blob/master/assets/img-proyect/AuthApp/loginacion.PNG" alt="Imagen 2">
        </td>
        <td align="center" valign="middle">
          <img width="300px" src="https://github.com/Luis-Aguila/Contenido/blob/master/assets/img-proyect/AuthApp/protegida.PNG" alt="Imagen 3">
        </td>
      </tr><tr></tr>
    </tbody>
  </table>

	




</body>
</html>

# Authapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
