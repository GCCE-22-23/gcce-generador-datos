const titles = [
    "Ingenieria informatica", 
    "Ingenieria nautica", 
    "Fisica",
    "Filosofia", 
    "Matematicas",
    "Derecho",
    "Biologia", 
    "Economia",
    "Filologia",
    "Arte",
]

const lastnames = [
    "Garcia", 
    "Gonzalez", 
    "Rodriguez", 
    "Fernandez", 
    "Lopez", 
    "Martinez", 
    "Sanchez", 
    "Perez", 
    "Gomez", 
    "Martin", 
    "Jimenez", 
    "Ruiz", 
    "Hernandez", 
    "Diaz", 
    "Moreno", 
    "Alvarez", 
    "Muñoz", 
    "Romero", 
    "Alonso", 
    "Gutierrez", 
    "Navarro", 
    "Torres", 
    "Dominguez",
    "Vazquez", 
    "Ramos", 
    "Gil", 
    "Ramirez", 
    "Serrano", 
    "Blanco", 
    "Suarez", 
    "Molina", 
    "Morales", 
    "Ortega", 
    "Delgado", 
    "Castro", 
    "Ortiz", 
    "Rubio", 
    "Marin", 
    "Sanz", 
    "Nuñez", 
    "Iglesias", 
    "Medina", 
    "Garrido", 
    "Santos", 
    "Castillo", 
    "Cortes", 
    "Lozano", 
    "Guerrero", 
    "Cano", 
    "Prieto", 
    "Mendez", 
    "Calvo", 
    "Cruz", 
    "Gallego", 
    "Vidal", 
    "Leon", 
    "Herrera", 
    "Marquez", 
    "Peña", 
    "Cabrera", 
    "Flores", 
    "Campos", 
    "Vega", 
    "Diez", 
    "Fuentes", 
    "Carrasco", 
    "Caballero", 
    "Nieto", 
    "Reyes", 
    "Aguilar", 
    "Pascual", 
    "Herrero", 
    "Santana", 
    "Lorenzo", 
    "Hidalgo", 
    "Montero", 
    "Ibañez", 
    "Gimenez", 
    "Ferrer", 
    "Duran", 
    "Vicente", 
    "Benitez",
    "Mora", 
    "Santiago", 
    "Arias", 
    "Vargas", 
    "Carmona", 
    "Crespo", 
    "Roman", 
    "Pastor", 
    "Soto", 
    "Saez", 
    "Velasco",
    "Soler", 
    "Moya", 
    "Esteban", 
    "Parra", 
    "Bravo", 
    "Gallardo", 
    "Rojas", 
    "Pardo", 
    "Merino",
    "Franco", 
    "Espinosa", 
    "Izquierdo", 
    "Lara", 
    "Rivas", 
    "Silva", 
    "Rivera", 
    "Casado", 
    "Arroyo", 
    "Redondo", 
    "Camacho", 
    "Rey", 
    "Vera", 
    "Otero", 
    "Luque", 
    "Galan", 
    "Montes", 
    "Rios", 
    "Sierra", 
    "Segura", 
    "Carrillo", 
    "Marcos", 
    "Marti", 
    "Soriano", 
    "Mendoza"
]

const names = [
    "Paco", 
    "Maria", 
    "Lucia", 
    "Roberto", 
    "Lucas", 
    "Pepe"
];

const academicYear = [
    '2010-11',
    '2011-12',
    '2013-14',
    '2014-15',
    '2015-16',
    '2016-17',
    '2017-18',
    '2018-19',
    '2019-20',
    '2020-21'
]

const categories = [
    "Letras", 
    "Ciencias sociales",
    "Humanidades", 
    "Ingenieria", 
    "Ciencias",
    "Artes"
]

const curriculumCode = [
    "curriculum1",
    "curriculum2",
    "curriculum3"
]

const titleStatus = [
    "activo", 
    "pausado", 
    "graduado", 
    "abandono"
];

const educationalLevel = [
    "analfabeto", 
    "primaria", 
    "eso/egb", 
    "bachillerato", 
    "ciclo medio", 
    "ciclo superior", 
    "universitario"
];

const gender = [
    "masculino", 
    "femenino", 
    "otro", 
    "no binario"
];

const townships = [
    {
        town: "La Orotava", 
        zone: "Pueblo",
        provinces: "Santa Cruz de Tenerife",
    },
    {
        town: "La Laguna", 
        zone: "Ciudad",
        provinces: "Santa Cruz de Tenerife",
    },
    {
        town: "La Victoria", 
        zone: "Pueblo",
        provinces: "Santa Cruz de Tenerife",
    },
    {
        town: "Garachico", 
        zone: "Pueblo",
        provinces: "Santa Cruz de Tenerife",
    },
    {
        town: "Santa Cruz", 
        zone: "Ciudad",
        provinces: "Santa Cruz de Tenerife",
    },
    {
        town: "La Palmas", 
        zone: "Ciudad",
        provinces: "Las Palmas de Gran Canaria",
    },
    {
        town: "Santa Maria de Guia", 
        zone: "Pueblo",
        provinces: "Las Palmas de Gran Canaria",
    },
]

const rentLevel = [
    "bajo", 
    "medio", 
    "alto"
];

const accessType = [
    "EBAU", 
    "FP", 
    "Otra carrera"
];

const asigType = [
    "Obligatoria", 
    "Optativa", 
    "Practicas Externas", 
    "Trabajo Final"
];

const asigDifficulty = [
    "Fácil", 
    "Medio", 
    "Difícil", 
    "Muy difícil"
];


const asigMark = [
    "No presentado",
    "Insuficiente",
    "Suficiente", 
    "Notable", 
    "Sobresaliente",
    "Matricula de Honor"
];

const subject = [
    "Álgebra",
    "Cálculo",
    "Fundamentos Físicos para la Ingeniería",
    "Informática Básica",
    "Cálculo Diferencial de una variable real",
    "Estadística"
];


module.exports = {
    academicYear,
    subject,
    curriculumCode,
    titles,
    lastnames,
    names,
    categories,
    titleStatus,
    educationalLevel,
    gender,
    townships,
    rentLevel,
    accessType,
    asigType,
    asigDifficulty,
    asigMark,
}