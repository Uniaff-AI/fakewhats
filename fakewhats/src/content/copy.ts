export const COPY = {
  app: {
    title: 'Chat – UROXEL',
    description: 'Имитация WhatsApp с VSL и формой заявки для лидов.'
  },
  header: {
    contactName: 'UROXEL',
    phone: '+52 55 123 45 07',
    status: 'Online',
    verified: true
  },
  messages: {
    intro: 'Официальный чат консультации. Посмотрите короткое видео ниже и оставьте заявку — перезвоним быстро.',
    vslTitle: 'ОСНОВНОЕ: смотрите видео прямо сейчас',
    vslCta: 'СМОТРЕТЬ VSL',
    vslCloseHint: 'Закройте видео, чтобы вернуться к чату'
  },
  form: {
    title: 'Официальная форма заказа UROXEL',
    nameLabel: 'Имя',
    phoneLabel: 'Телефон',
    submit: 'Заказать звонок',
    minimized: 'Оставить заявку',
    legal: 'Маркетинг и доставка. Льготная цена.',
    timerPrefix: 'Осталось:',
    callTimeLabel: 'Когда вам позвонить',
    callTimeOptions: [
      { value: 'now', label: 'сейчас' },
      { value: '5m', label: '5 минут' },
      { value: '15m', label: '15 минут' },
      { value: '30m', label: '30 минут' },
      { value: '1h', label: 'час' }
    ],
    autoPostbackSeconds: 0
  }
} as const;

export type CallTimeValue = typeof COPY.form.callTimeOptions[number]['value'];


