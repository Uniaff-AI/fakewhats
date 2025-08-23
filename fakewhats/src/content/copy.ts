export const COPY = {
  app: {
    title: 'Chat – UROXEL',
    description: 'Имитация WhatsApp с VSL и формой заявки для лидов UROXEL.'
  },
  header: {
    contactName: 'UROXEL',
    phone: '+52 55 5173 4167',
    status: 'Online',
    verified: true
  },
  messages: {
    encryption: 'Сообщения и звонки зашифрованы от начала до конца. Никто за пределами этого чата, даже WhatsApp, не может их прочитать или прослушать.',
    urgent: 'СРОЧНОЕ СООБЩЕНИЕ ДЛЯ ВСЕХ МУЖЧИН МЕКСИКИ.',
    problem: 'ВАША СЛАБАЯ ЭРЕКЦИЯ ТЕПЕРЬ **АНОНИМНО** ИЗЛЕЧИМА ЗА 24 ЧАСА! СКОРЕЕ СМОТРИТЕ ВИДЕО НИЖЕ!',
    vslTitle: 'Спасение вашей эрекции',
    vslCta: 'Включить звук',
    vslCloseHint: 'Закройте видео, чтобы вернуться к чату'
  },
  form: {
    title: 'Официальная форма заказа UROXEL',
    nameLabel: 'Имя',
    phoneLabel: 'Телефон',
    submit: 'Заказать звонок',
    minimized: 'Оставить заявку',
    legal: 'Специальная цена действует ограниченное количество времени. Таймер указывает оставшееся время до конца акции. Акция применима только для жителей Мексики. Полная консультация происходит во обратного звонка нашего специалиста.',
    timerPrefix: 'Осталось банок:',
    timerValue: '39/1500',
    callTimeLabel: 'Когда вам позвонить',
    callTimeOptions: [
      { value: 'now', label: 'Прямо сейчас' },
      { value: '5m', label: '5 минут' },
      { value: '15m', label: '15 минут' },
      { value: '30m', label: '30 минут' }
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
    title: 'Слабая эрекция? Прямой путь к импотенции!',
    subtitle: 'Но мы знаем решение ОНО ПРЯМО В ЭТОМ ВИДЕО',
    cta: 'Спаси свою эрекцию за 24 часа!!',
    continueBtn: 'Продолжить смотреть',
    restartBtn: 'Смотреть сначала'
  },
  testimonials: {
    title: 'Отзывы мужчин, которые уже вернули крепкую эрекцию и спасли свою простату',
    items: [
      { name: 'Антонио, 58', text: 'Счастливое утро - утро с UROXEL', rating: 5 },
      { name: 'Карлос, 45', text: 'Всегда теперь ношу с собой и никто не догадывается, что у меня проблемы с потенцией были', rating: 5 },
      { name: 'Амалия, 53', text: 'Всегда ношу для мужа 1 баночку в сумке', rating: 5 }
    ]
  }
} as const;

export type CallTimeValue = typeof COPY.form.callTimeOptions[number]['value'];


