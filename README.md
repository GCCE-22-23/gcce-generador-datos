<br />
<p align="center">

  <h3 align="center"> README </h3>
  <h3 align="center"> Proyecto Final </h3>
  <h3 align="center"> GCCE </h3>

  <p align="center">
    <br />
    <a href="https://github.com/PaulaExposito/GCCE"><strong>Documentación »</strong></a>
    <br />
    <br />
    <a href="https://github.com/PaulaExposito/GCCE/issues">Reportar fallos</a>
    ·
    <a href="https://github.com/PaulaExposito/GCCE/issues">Pedir funcionalidades</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Índice</summary>
  <ol>
    <li><a href="#introduccion">Introduccion</a></li>
    <li><a href="#uso">Uso</a></li>
    <li><a href="#reglas-de-generacion">Reglas de generacion</a></li>
</details>

  ## Introduccion
  Este trabajo ha sido realizado para la asigatura de Gestión de Comunicación y Conocimiento Empresarial del Máster de Ingeniería Informática de la ULL. Los alumnos que han desarrollado este proyecto son Carlos Díaz, Paula Expósito y Nicolás Hernández.
  
  ## Uso
  Para poder ejecutar este código es necesario tener node instalado y realizar lo siguiente:
  ```
    npm install
    npm run gen
  ```

  ## Reglas de generacion

  ### Condiciones para continuidad del alumno

  - Si asignaturas aprobadas >= PORCENTAJE_EXITO asignaturas aprobadas, hay un PORCENTAJE_AVANCE de matricularse el proximo año, si no hay un PORCENTAJE_RETIRADA de no matricularse el proximo año.
  - Si sale que se retira tiene 2 intento mas:

    1. El primer año PORCENTAJE_REINTENTO_1
    2. El segundo año (dejando un año "sabatico" de por medio) PORCENTAJE_REINTENTO_2 

  Porcentajes de ejemplo:

  ```bash
  PORCENTAJE_EXITO=0,6
  PORCENTAJE_RETIRADA=0,75
  PORCENTAJE_AVANCE=0,8
  PORCENTAJE_REINTENTO_1=0,1
  PORCENTAJE_REINTENTO_2=0,05
  ```
