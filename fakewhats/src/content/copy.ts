export const COPY = {
  app: {
    title: 'Chat – UROXEL',
    description: 'Los mensajes y las llamadas están cifrados de principio a fin. Nadie fuera de este chat, ni siquiera WhatsApp, puede leerlos ni escucharlos.'
  },
  header: {
    contactName: 'UROXEL',
    phone: '+52 55 5173 4167',
    status: 'En línea',
    verified: true
  },
  messages: {
    encryption: 'Los mensajes y llamadas están cifrados de extremo a extremo. Nadie fuera de este chat, ni siquiera WhatsApp, puede leerlos o escucharlos.',
    urgent: 'MENSAJE URGENTE PARA TODOS LOS HOMBRES DE MÉXICO.',
    problem: '¡TU DÉBIL ERECCIÓN AHORA ES **ANÓNIMAMENTE** CURABLE EN 24 HORAS! ¡MIRA EL VIDEO DE ABAJO RÁPIDAMENTE!',
    vslTitle: 'Salvación de tu erección',
    vslCta: 'Activar sonido',
    vslCloseHint: 'Cierra el video para volver al chat'
  },
  form: {
    title: 'Formulario oficial de pedido UROXEL',
    nameLabel: 'Nombre',
    phoneLabel: 'Teléfono',
    submit: 'Solicitar llamada',
    minimized: 'Dejar solicitud',
    legal: 'El precio especial es válido por tiempo limitado. El temporizador indica el tiempo restante hasta el final de la promoción. La promoción se aplica solo a residentes de México. La consulta completa ocurre durante la llamada de vuelta de nuestro especialista.',
    timerPrefix: 'Frascos restantes:',
    timerValue: '39/1500',
    callTimeLabel: 'Cuándo llamarte',
    callTimeOptions: [
      { value: 'now', label: 'Ahora mismo' },
      { value: '5m', label: '5 minutos' },
      { value: '15m', label: '15 minutos' },
      { value: '30m', label: '30 minutos' }
    ],
    autoPostbackSeconds: 180, // 3 минуты
    price: {
      original: '1390 MXN',
      current: '590 MXN'
    },
    product: {
      name: 'UROXEL',
      subtitle: 'TRIPLE ACCIÓN',
      caps: '21 CAPS'
    }
  },
  popup: {
    title: '¿Erección débil? ¡Camino directo a la impotencia!',
    subtitle: 'Pero conocemos la solución ESTÁ JUSTO EN ESTE VIDEO',
    cta: '¡Salva tu erección en 24 horas!!',
    continueBtn: 'Continuar viendo',
    restartBtn: 'Ver desde el principio'
  },
  testimonials: {
    title: 'Testimonios de hombres que ya recuperaron una erección firme y salvaron su próstata',
    items: [
      { name: 'Antonio, 58', text: 'Mañana feliz - mañana con UROXEL', rating: 5 },
      { name: 'Carlos, 45', text: 'Ahora siempre lo llevo conmigo y nadie se da cuenta de que tenía problemas de potencia', rating: 5 },
      { name: 'Amalia, 53', text: 'Siempre llevo 1 frasco en la bolsa para mi esposo', rating: 5 }
    ]
  }
} as const;

export type CallTimeValue = typeof COPY.form.callTimeOptions[number]['value'];


