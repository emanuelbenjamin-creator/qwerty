import { BookEdition, Testimonial, FaqItem } from '../types';

export const IMAGES = {
  heroBook: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKVI3tO8VSPSCvuBkml6MmYREbdJsXDPM2XkU7agX7nlR7gijcIzVb_GkPqXAt4cP-Oh6jQy-yVpxxfTWpHYuVUGJPYpVmqHfA8vmt87haL33sk3McvRE0jSUbUFiPnhDGM8YUDahM9lP69AyDtKdFAAVhpgAh9g6_qfQyAkFABW_pfGhJg2AaG11uuoVS7d1Lg3Ve2B--3Kq6tIAuLxtwbLuXadeCAnGbWsJu0fgZlvIfR6LGliot',
  deskBook: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfUyYeC6qXj0aA3NOCbx1YwY5CGnlCOkAawR8NIuagQEknp2Nm9GAVTO-tt4LaZFmUrMkZl2eQsAqg7vb9dXVOUu-NPlDjCZoWCcFoqbGSFQ4LClKJceYiFvQk3udqUyNkK9W9meFcLqQCKKykRBpHbvWRniPvMDQt_soUpEoP3uqMRZOOWUddygHxsWL-Aaf4VxL3rbAOUksp_haTqfiFbmARPsgmZaEG6qhtNdW58XIHoVe65S5x',
  author: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbuCbdZ49f29MYkqJ1rqy4eSlA9-AQ2ckoJ7dQNfil5y5Ba_nnftaHBdkwYfdPKaZkbd8Ysp0H8sepOWaMiXp0k6PYxUpEPlVOkv2G8b5POwyGtvUdC8PZr2K9zPt5uZxVsM8PXik3GP7D9TmeG78hruorPJMWxszlEDkHj1bp3mW_SkTiLOn1QXAJoWnpEGHtnA3iAhd4p-Uu9Fso-1JjeOmLqaQn8zcMTCf2P9WvywCON60bz7cij-vavTeZjCNOwA',
  ctaBook: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQRC0EBf0_zvl32Agxx9v0Q8bBjd9fAtMsiZvU64K98Myeg6JMvT3b2-cD4SZ4y2SVm9SpXL10bsGlbhuhOK9Z2vDf2lnJ6xEUfBt-xiCtuKByVkbT-n9InaCPj_LLEoqymChhtaIYZo7Rk2kzXgDjz4r_0aqPG0aZtg53_wZ-lMaAvk6gDcZxBbbZOyYiKWl0RIZBM6088qDvrOlou8EHfg2_t59eit3kpoLW9Y0p2nA8LLJ5oTT9'
};

export const EDITIONS: BookEdition[] = [
  {
    id: 'digital',
    name: 'Edición Digital (eBook)',
    subtitle: 'Descarga inmediata en todos tus dispositivos',
    price: '$9.99 USD',
    originalPrice: '$14.99 USD',
    badge: 'Acceso Inmediato',
    description: 'Formatos PDF, EPUB y MOBI (Kindle). Compatible con smartphones, tablets, lectores electrónicos y computadoras.',
    features: [
      'Descarga directa instantánea (sin esperas)',
      'Formatos PDF de alta calidad, EPUB y MOBI',
      'Guía complementaria en PDF: "Cuaderno de Sanación"',
      'Lectura cómoda en modo claro y oscuro'
    ],
    ctaText: 'Comprar Versión Digital'
  },
  {
    id: 'print',
    name: 'Edición Impresa',
    subtitle: 'Libro físico con encuadernación premium',
    price: '$19.99 USD',
    originalPrice: '$25.99 USD',
    badge: 'Más Vendido',
    popular: true,
    description: 'Edición en tapa blanda con acabado mate aterciopelado, papel libre de ácido de alto gramaje y marcapáginas exclusivo de regalo.',
    features: [
      'Envío a domicilio nacional e internacional',
      'Incluye versión digital completa de regalo',
      'Marcapáginas conmemorativo de colección',
      'Garantía de satisfacción de 30 días'
    ],
    ctaText: 'Pedir Copia Impresa'
  },
  {
    id: 'audio',
    name: 'Audiolibro',
    subtitle: 'Narrado con la voz del propio Ricardo Madrid',
    price: '$14.99 USD',
    originalPrice: '$19.99 USD',
    badge: 'Experiencia Inmersiva',
    description: 'Más de 7 horas de narración íntima y reflexiones exclusivas para acompañar tus viajes, caminatas y momentos de calma.',
    features: [
      'Audio en alta fidelidad (MP3 / M4B)',
      'Capítulos divididos y notas sonoras del autor',
      'Escucha offline desde cualquier reproductor',
      'Acceso de por vida a futuras actualizaciones de audio'
    ],
    ctaText: 'Obtener Audiolibro'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Carmen Ruiz',
    role: 'Lectora verificada',
    avatarLetter: 'C',
    rating: 5,
    text: '"Un libro que me confrontó y me abrazó al mismo tiempo. Me dio las herramientas precisas para dejar ir un dolor que llevaba cargando por años. Lectura obligatoria."'
  },
  {
    id: '2',
    name: 'Alejandro V.',
    role: 'Lector verificado',
    avatarLetter: 'A',
    rating: 5,
    text: '"Ricardo escribe con una claridad asombrosa. Sentí que alguien por fin entendía el proceso por el que estaba pasando. Las prácticas recomendadas realmente funcionan."'
  },
  {
    id: '3',
    name: 'María José L.',
    role: 'Lectora verificada',
    avatarLetter: 'M',
    rating: 5,
    text: '"El título lo dice todo. Este no es un libro de autoayuda superficial, es un manual de supervivencia para el alma rota. Lo recomiendo a cualquiera en proceso de duelo."'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: '1',
    question: '¿Cómo recibo mi copia digital tras la compra?',
    answer: 'La entrega de la copia digital es instantánea. Una vez confirmado tu pago, serás redirigido a una página de descarga segura y recibirás un enlace de acceso ilimitado en tu correo electrónico con los archivos en formato PDF, EPUB y MOBI.'
  },
  {
    id: '2',
    question: '¿Hacen envíos de la edición física a mi país?',
    answer: 'Sí. Realizamos envíos a toda América Latina, España, Estados Unidos y el resto del mundo a través de servicios de mensajería con seguimiento en tiempo real. Los plazos habituales son de 3 a 7 días hábiles.'
  },
  {
    id: '3',
    question: '¿En qué se diferencia este libro de otros de superación personal?',
    answer: 'A diferencia de los libros tradicionales de positivismo forzado, "Heridas que se convirtieron en alas" no niega el dolor ni promete soluciones mágicas. Ofrece un marco estructurado de psicología aplicada y resiliencia real para metabolizar el sufrimiento y convertirlo en un catalizador de fuerza vital.'
  },
  {
    id: '4',
    question: '¿Qué incluye la garantía de satisfacción?',
    answer: 'Confiamos plenamente en el impacto transformador de este libro. Si durante los primeros 30 días sientes que el contenido no cumplió tus expectativas, puedes solicitar el reembolso del 100% de tu dinero sin preguntas incómodas.'
  }
];

export const SAMPLE_CHAPTER = {
  title: 'Prólogo: Cuando las alas se rompen',
  author: 'Ricardo Madrid Mendoza',
  paragraphs: [
    'Hay momentos en la vida en los que el suelo parece disolverse bajo nuestros pies. No es una metáfora poética; es una sensación física, un frío en el esternón que te paraliza y te hace dudar de si alguna vez volverás a respirar sin que duela.',
    'Durante mucho tiempo creí que la madurez consistía en disimular las cicatrices, en colocarse una armadura impecable y sonreír ante el mundo mientras por dentro te desangras en silencio. Qué error tan devastador.',
    'Este libro no nació en un escritorio tranquilo rodeado de certezas. Nació en las madrugadas en vela, en las salas de espera, en las conversaciones desgarradoras frente al espejo cuando ya no quedaba nada que perder salvo el propio miedo.',
    'Las heridas no son el final de tu historia. Son el mapa exacto de dónde aprendiste a ser invencible. No viniste a este mundo a arrastrarte pidiendo disculpas por haber sufrido; viniste a extender las alas y enseñar a otros cómo se vuela después de la tormenta.',
    'Pasa la página. Es hora de empezar.'
  ]
};
