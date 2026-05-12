import { Cpu, Settings, Zap, Car, Wind } from 'lucide-react';
import React from 'react';

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  content: {
    subtitle?: string;
    sections: {
      title: string;
      text: string | string[];
    }[];
  };
}

export const servicesData: ServiceDetail[] = [
  {
    id: 'reprogramaciones',
    title: 'Reprogramaciones',
    description: 'Optimización de software para mejorar potencia y reducir consumo.',
    icon: React.createElement(Cpu, { className: "w-12 h-12" }),
    content: {
      subtitle: '¿Estás pensando reprogramar tu vehículo?',
      sections: [
        {
          title: 'Beneficios',
          text: [
            'Con la reprogramación de la centralita aumentamos la potencia y el par motor de tu vehículo, al mismo tiempo que mejoramos el consumo de combustible.',
            'Conseguimos una respuesta más rápida de la aceleración y de los adelantamientos.'
          ]
        },
        {
          title: '¿Qué reprogramación necesita mi vehículo?',
          text: [
            'Analizamos tu petición y la ajustamos a las características de tu vehículo, consiguiendo el resultado más óptimo en cada caso.',
            '- MOTORSAG RACE: Aumento del 30% de potencia optimizando la electrónica, sin ninguna modificación mecánica.',
            '- STAGE II: Modificación de componentes mecánicos y optimización de la electrónica a medida.',
            '- STAGE III: Preparación extrema de vehículos y electrónica a medida.',
            '- ECOLINE: Diseñada para vehículo industrial, mejorando potencia para reducir al máximo el consumo de combustible.'
          ]
        },
        {
          title: '¿Perjudica a mi vehículo?',
          text: 'Antes de realizar cualquier reprogramación, diagnosticamos tu vehículo y te asesoramos del estado. Ofrecemos reprogramaciones 100% seguras para tu motor, aumentamos la potencia siempre manteniendo la seguridad de los componentes mecánicos.'
        },
        {
          title: '¿Puedo volver a la electrónica original?',
          text: 'Tenemos guardadas en nuestra base de datos todas las cartografías originales, podemos volver a la cartografía original cuando el cliente quiera. Si la reprogramación es nuestra, el coste del servicio es gratuito.'
        },
        {
          title: '¿Es detectable?',
          text: [
            'Toda modificación electrónica o mecánica es detectable. En el caso de ITV no es necesario poner la original ya que no supone ningún riesgo.',
            'Si al vehículo se le realiza una reprogramación o actualización de software posterior a la nuestra, es posible que se elimine nuestra reprogramación, pero siempre podemos volver a introducirla.'
          ]
        }
      ]
    }
  },
  {
    id: 'mantenimiento-itv',
    title: 'Mantenimiento / ITV',
    description: 'Revisiones preventivas y preparación completa para pasar la inspección.',
    icon: React.createElement(Settings, { className: "w-12 h-12" }),
    content: {
      sections: [
        {
          title: 'Mantenimiento Completo',
          text: [
            'Realizamos el mantenimiento completo de cualquier marca y vehículo.',
            'En nuestros mantenimientos, revisamos todos los elementos de seguridad, asegurando un estado óptimo de tu vehículo para avanzarnos a futuras averías.',
            'Al ser taller autorizado, podemos sellar el mantenimiento oficial sin perder la garantía de tu vehículo nuevo.'
          ]
        },
        {
          title: 'Preparación ITV',
          text: [
            'Verificamos tu vehículo para que puedas pasar sin problemas la inspección técnica de vehículos "ITV" sin ningún inconveniente.',
            'Disponemos del servicio ITV en el que nos encargamos de pedir cita y llevar el vehículo por ti a la ITV.'
          ]
        }
      ]
    }
  },
  {
    id: 'electromecanica',
    title: 'Electromecánica',
    description: 'Diagnosis avanzada y reparación de sistemas eléctricos complejos.',
    icon: React.createElement(Zap, { className: "w-12 h-12" }),
    content: {
      sections: [
        {
          title: 'Diagnosis y Reparación',
          text: 'Disponemos de todos los equipos de diagnóstico necesarios para realizar cualquier reparación electrónica del vehículo.'
        },
        {
          title: 'Clonación de Centralitas',
          text: 'Tenemos equipos con software específico para la reparación y clonación de centralitas, así pudiendo reparar la misma sin que el cliente tenga que desembolsar el coste de una nueva.'
        },
        {
          title: 'Formación Constante',
          text: 'La formación es imprescindible para afrontar las averías eléctricas en los vehículos actuales, por eso nuestros técnicos están en constante formación de las novedades en diagnosis.'
        }
      ]
    }
  },
  {
    id: 'vehiculo-cortesia',
    title: 'Vehículo Cortesía',
    description: 'No te detengas. Disponemos de coches de sustitución para nuestros clientes.',
    icon: React.createElement(Car, { className: "w-12 h-12" }),
    content: {
      sections: [
        {
          title: 'Movilidad Garantizada',
          text: [
            'Disponemos de vehículos de cortesía para cualquier mantenimiento o reparación que realices en tu vehículo.',
            'Al reservar tu cita, solicítanos vehículo de cortesía, te agendaremos para que al dejarnos tu vehículo, te facilitemos coche de sustitución para que puedas seguir con la misma movilidad.'
          ]
        },
        {
          title: 'Gratuito y Seguro',
          text: 'El vehículo de cortesía es gratuito y cumple la normativa de limpieza y desinfección actual.'
        }
      ]
    }
  },
  {
    id: 'climatizacion',
    title: 'Climatización',
    description: 'Carga de aire y mantenimiento de sistemas de calefacción y refrigeración.',
    icon: React.createElement(Wind, { className: "w-12 h-12" }),
    content: {
      sections: [
        {
          title: 'Reparación de Sistemas',
          text: 'Diagnosticamos y reparamos cualquier sistema de climatización, ya sea el R134 o el R1234yf.'
        },
        {
          title: 'Equipamiento Especializado',
          text: 'Disponemos de toda la maquinaria necesaria para la carga de gas de los equipos, la verificación de los componentes y la detección de fugas en el circuito.'
        }
      ]
    }
  }
];
