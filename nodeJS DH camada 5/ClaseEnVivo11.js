/* 
  Creá un objeto con las propiedades que debe contener cada nuevo usuario que se registra en DH:
  
  Usuario
  Edad
  Dirección
  Fecha de nacimiento
  Contraseña
  */


  let registroDH = {
      usuario : "Hugo",
      edad : "30" ,
      direccion : "La Rioja",
      fecha_de_nacimiento : "1991-10-01",
      contrasenia : "123456"
  }

  /* 
  Modificar Objetos Vacíos
  Hasta ahora vimos que podemos crear Objetos escribiéndolos directamente. 
  También podemos inicializar un Objeto vacío y agregar nuevas Propiedades. Para eso, hay que:
  
  Crear una Variable (por ejemplo, let perro).
  Crear el Objeto vacío (a través de las llaves "{}") y asignarlo a la Variable recién creada.
  Agregar nuevas Propiedades.
  */

   let taza = {};

   taza.color = "amarillo";


   taza.color = "rojo";
   console.log(taza);


   /* 
Aumentar La Nota
Tenés una lista de estudiantes con su desempeño académico actual. Querés subirle 2 puntos a aquellos que su nota sea mayor a 5. Recordá que la nota tampoco puede superar al 10.

output:
*/
let alumnos = [
    { Alumno: "Juan", nota: 6 },
    { Alumno: "Mario", nota: 8 },
    { Alumno: "Julia", nota: 10 },
    { Alumno: "Sofia", nota: 2 },
  ];
  
  
