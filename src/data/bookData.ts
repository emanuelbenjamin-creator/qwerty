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
      'Marcapáginas conmemorativo de colección',
      'Garantía de satisfacción'
    ],
    ctaText: 'Pedir Copia Impresa'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Hernando Aparicio',
    role: 'Pastor de la Iglesia Casa de Vida · Autor de Semillas de fe · Trujillo, Perú',
    avatarLetter: 'H',
    rating: 5,
    text: '"Con una honestidad que conmueve y una fe que inspira, Ricardo Madrid nos recuerda que las heridas no tienen por qué definir nuestro destino. Cada capítulo transforma el dolor en esperanza y las cicatrices en testimonios de la gracia de Dios. Este libro no solo se lee; también confronta, fortalece e inspira a creer que, en las manos del Señor, aun las experiencias más difíciles pueden convertirse en alas para volver a volar."'
  },
  {
    id: '2',
    name: 'Ricardo Musse Carrasco',
    role: 'Escritor',
    avatarLetter: 'R',
    rating: 5,
    text: '"El libro Heridas que se convirtieron en alas, de Ricardo Madrid Mendoza, constituye un testimonio del poder restaurador del espíritu humano. El autor vuelca experiencias íntimas para ofrendar un acompañamiento reconfortante y cercano. Su objetivo primordial radica en demostrar cómo la tribulación puede transformarse en una vía de redención. A lo largo de sus páginas, la obra resalta valores perpetuos como la fe inquebrantable, la resiliencia, el perdón y la empatía. Además, la lectura ofrece la inconmensurable enseñanza concerniente a que las heridas no determinan nuestro destino, sino que impulsan la humanizadora restauración."'
  },
  {
    id: '3',
    name: 'Helio Bohórquez',
    role: 'Coach',
    avatarLetter: 'H',
    rating: 5,
    text: '"Me gusta el énfasis que hace el autor cuando se refiere a los principios, la fe y el propósito. Promueve la importancia del carácter con coherencia. Nos recuerda que el Éxito es cuesta arriba y debemos abrazarlo con valores para, a pesar de las circunstancias, convertirnos en persona, Liderando de manera intencional."'
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
