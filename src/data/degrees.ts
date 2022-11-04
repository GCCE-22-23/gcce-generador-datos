export interface Branch {
  RAMA:       string;
  TITULACION: Titulacion[];
}

export interface Titulacion {
  COD_PLAN:    number;
  COD_ISEC:    number;
  TITULACION: string;
  ASIGNATURA: string[];
}

export const degrees: Branch[] = [
    {
        "RAMA": "Artes y humanidades",
        "TITULACION": [
            {
                "COD_PLAN": 1,
                "COD_ISEC": 6,
                "TITULACION": "Filosofia",
                "ASIGNATURA": [
                    "Etica",
                    "Logica",
                    "Metafisica",
                    "Filosofia Politica",
                    "Teoria del Conocimiento",
                    "Estetica",
                    "Historia de la Filosofia I",
                    "Historia de la Filosofia II",
                    "Historia de la Filosofia III",
                    "Historia de la Filosofia IV"
                ]
            }
        ]
    },
    {
        "RAMA": "Ciencias",
        "TITULACION": [
            {
                "COD_PLAN": 2,
                "TITULACION": "Fisica",
                "COD_ISEC": 6,
                "ASIGNATURA": [
                    "Calculo I",
                    "Calculo II",
                    "Algrebra I",
                    "Algrebra II",
                    "Fisica I",
                    "Fisica II",
                    "Estadistica",
                    "Laboratorio I",
                    "Laboratorio II",
                    "Programacion I"
                ]
            }
        ]
    },
    {
        "RAMA": "Ciencias Sociales y Juridicas",
        "TITULACION": [
            {
                "COD_PLAN": 3,
                "TITULACION": "Derecho",
                "COD_ISEC": 6,
                "ASIGNATURA": [
                    "Derecho I",
                    "Derecho II",
                    "Derecho Romano",
                    "Derecho Constitucinal",
                    "Teoria del Derecho",
                    "Historia del derecho",
                    "Derecho Penal",
                    "Derecho Urbanistico",
                    "Geografica Juridica",
                    "Teoria del Derecho"
                ]
            }
        ]
    },
    {
        "RAMA": "Ingenieria y Arquitectura",
        "TITULACION": [
            {
                "COD_PLAN": 4,
                "TITULACION": "Ing_Informatica",
                "COD_ISEC": 6,
                "ASIGNATURA": [
                    "Calculo",
                    "Algreba",
                    "Fisica",
                    "Informatica I",
                    "Electronica",
                    "Informatica II",
                    "Empresariales",
                    "Ingles",
                    "Inteligencia Emocional",
                    "CyA"
                ]
            }
        ]
    },
    {
        "RAMA": "Ciencias de la Salud",
        "TITULACION": [
            {
                "COD_PLAN": 5,
                "TITULACION": "Medicina",
                "COD_ISEC": 6,
                "ASIGNATURA": [
                    "Anatomia",
                    "Bioestadistica",
                    "Biofisica",
                    "Laboratorio I",
                    "Laboratorio II",
                    "Fisiologia",
                    "Historia de la Medicina",
                    "Virologia",
                    "Ingles",
                    "Genetica"
                ]
            }
        ]
    }
]
