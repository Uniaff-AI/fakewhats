/**
 * КОНФИГУРАЦИЯ САЙТА UROXEL
 * 
 * Этот файл содержит все настраиваемые элементы сайта:
 * - Тексты, заголовки, кнопки
 * - Цены и скидки
 * - Изображения и видео
 * - Отзывы клиентов
 * - Контактная информация
 * - Юридические тексты
 * - Настройки функциональности
 * 
 * КАК ИЗМЕНИТЬ ЭЛЕМЕНТЫ САЙТА:
 * 1. Найдите нужный раздел в этом файле
 * 2. Измените значение справа от знака "="
 * 3. Сохраните файл (Ctrl+S или Cmd+S)
 * 4. Сервер разработки автоматически перезагрузит страницу
 * 5. Изменения появятся на сайте
 * 
 * ПРИМЕРЫ ИЗМЕНЕНИЙ:
 * - Цена: "5980 ₽" → "7980 ₽"
 * - Текст кнопки: "Заказать сейчас" → "Купить сейчас"
 * - Номер телефона: "+52 55 5173 4167" → "+7 900 000-00-00"
 * - Рейтинг отзыва: rating: 5 → rating: 4
 * 
 * ВАЖНО: Не изменяйте названия полей слева от "=", только значения справа!
 */

export interface SiteConfig {
  // ===== ОСНОВНАЯ ИНФОРМАЦИЯ =====
  siteName: string;        // Название сайта (используется в заголовках)
  productName: string;     // Название продукта (используется в текстах)
  
  // ===== ИЗОБРАЖЕНИЯ И МЕДИА =====
  images: {
    // Изображения в чате (отображаются в сообщениях)
    chatImages: {
      productImage: string;    // Главное изображение продукта в чате
      feedback1: string;       // Фото к отзыву Антонио
      feedback2: string;       // Фото к отзыву Карлоса
      feedback3: string;       // Фото к отзыву Амалии
      feedback4: string;       // Фото к отзыву Алонсо
      feedback5: string;       // Фото к отзыву Густаво
      feedback6: string;       // Фото к отзыву Игнасио
    };
    
    // Изображения в формах заказа
    formImages: {
      uroxleOffForm: string;   // Изображение продукта в форме домонетки
    };
    
    // Видео файлы
    videos: {
      chatVsl: string;         // VSL видео в чате (показывается при клике на кнопку play)
    };
  };
  
  // ===== ЦЕНЫ И СКИДКИ =====
  pricing: {
    originalPrice: string;     // Оригинальная цена (перечеркнутая)
    discountedPrice: string;   // Цена со скидкой (актуальная)
    currency: string;          // Валюта (₽, $, € и т.д.)
    discountPercentage: string; // Процент скидки (для отображения)
  };
  
  // ===== ТАЙМЕРЫ И СЧЕТЧИКИ =====
  timers: {
    countdownMinutes: number;  // Минуты в таймере обратного отсчета
    countdownSeconds: number;  // Секунды в таймере обратного отсчета
    bottlesDecreaseInterval: number; // Интервал уменьшения счетчика банок (в миллисекундах)
    initialBottles: number;    // Начальное количество банок в наличии
  };
  
  // ===== ОТЗЫВЫ С ФОТОГРАФИЯМИ =====
  reviews: {
    feedback1: {
      name: string;            // Имя клиента
      image: string;           // Путь к фото клиента
      rating: number;          // Рейтинг от 1 до 5 звезд
      text: string;            // Текст отзыва
    };
    feedback2: {
      name: string;
      image: string;
      rating: number;
      text: string;
    };
    feedback3: {
      name: string;
      image: string;
      rating: number;
      text: string;
    };
    feedback4: {
      name: string;
      image: string;
      rating: number;
      text: string;
    };
    feedback5: {
      name: string;
      image: string;
      rating: number;
      text: string;
    };
    feedback6: {
      name: string;
      image: string;
      rating: number;
      text: string;
    };
  };
  
  // ===== ТЕКСТОВЫЕ ОТЗЫВЫ (БЕЗ ФОТО) =====
  textReviews: {
    review1: {
      name: string;            // Имя клиента
      rating: number;          // Рейтинг от 1 до 5 звезд
      title: string;           // Заголовок отзыва
      date: string;            // Дата отзыва
      text: string;            // Текст отзыва
      helpful?: string;        // Количество "полезно" (опционально)
    };
    review2: {
      name: string;
      rating: number;
      title: string;
      date: string;
      text: string;
      helpful?: string;
    };
    review3: {
      name: string;
      rating: number;
      title: string;
      date: string;
      text: string;
      helpful?: string;
    };
    review4: {
      name: string;
      rating: number;
      title: string;
      date: string;
      text: string;
      helpful?: string;
    };
    review5: {
      name: string;
      rating: number;
      title: string;
      date: string;
      text: string;
      helpful?: string;
    };
    review6: {
      name: string;
      rating: number;
      title: string;
      date: string;
      text: string;
      helpful?: string;
    };
    review7: {
      name: string;
      rating: number;
      title: string;
      date: string;
      text: string;
      helpful?: string;
    };
    review8: {
      name: string;
      rating: number;
      title: string;
      date: string;
      text: string;
      helpful?: string;
    };
  };
  
  // ===== ВСЕ ТЕКСТЫ САЙТА =====
  texts: {
    // Заголовки страниц и форм
    headers: {
      chatHeader: string;      // Заголовок чата ("ФОРМА Chat - You")
      chatLabel: string;       // Лейбл чата ("Chat - You")
      formHeader: string;      // Заголовок основной формы заказа
      domonetkaHeader: string; // Заголовок формы домонетки
      bookCallTitle: string;   // Заголовок формы бронирования звонка
      bookCallSubtitle: string; // Подзаголовок формы бронирования
      managedBy: string;       // Текст "Managed by" в футере
    };
    
    // Сообщения в чате
    chatMessages: {
      welcomeMessage: string;  // Приветственное сообщение
      productMessage: string;  // Сообщение о продукте
      autoMessage: string;     // Автоматическое сообщение
      urgentMessage: string;   // Срочное сообщение
      problemMessage: string;  // Сообщение о проблеме
      encryptionMessage: string; // Сообщение о шифровании
      vslTitle: string;        // Заголовок VSL видео
      successMessage: string;  // Сообщение об успешном заказе
    };
    
    // Тексты кнопок
    buttons: {
      orderNow: string;        // "Заказать сейчас"
      getSpecialOffer: string; // "Получить спец предложение"
      getWithoutDiscount: string; // "Получить UROXEL без скидки"
      callRightNow: string;    // "Позвонить ПРЯМО СЕЙЧАС"
      goBack: string;          // "Вернутся назад"
      continueWatching: string; // "Продолжить смотреть видео"
      fillForm: string;        // "Заполнить анкету"
      orderCall: string;       // "Заказать звонок"
      bookCall: string;        // "Забронировать звонок"
      getOffer: string;        // "Получить предложение"
      backToOrder: string;     // "Back" (кнопка назад)
      closeForm: string;       // "✕" (кнопка закрытия)
      // Новые кнопки
      enableSound: string;     // "Включить звук"
      saveErection: string;    // "спасение вашей эрекции"
      continueWatchingChoice: string; // "Продолжить смотреть"
      returnToChat: string;    // "Вернуться в чат"
      restartVideo: string;    // "Начать просмотр сначала"
    };
    
    // Тексты попапов
    popups: {
      // Попап при клике на VSL в чате
      returnPopup: {
        title: string;         // "Слабая эрекция?"
        subtitle: string;      // Полный текст подзаголовка
        continueButton: string; // "Продолжить смотреть видео"
        textVersionButton: string; // "Перейти на текстовый вариант"
        // Детальные тексты для попапа возврата
        consequence: string;   // "Прямой путь к импотенции!"
        solution: string;      // "Но мы знаем решение"
        highlight: string;     // "ОНО ПРЯМО В ЭТОМ ВИДЕО"
        urgency: string;       // "Спаси свою эрекцию за 24 часа!!"
      };
      // Попап при попытке выйти со страницы
      vslExitPopup: {
        bannerText: string;    // Текст в зеленой плашке сверху
        continueButton: string; // "Продолжить смотреть видео"
        fillFormButton: string; // "Заполнить анкету"
      };
      // Попап при попытке закрыть форму заказа
      formReturnPopup: {
        title: string;         // "Не уходите без заказа!"
        consequence: string;   // "Вы можете потерять специальное предложение"
        solution: string;      // "Выберите удобный для вас вариант"
        specialOfferButton: string; // "Получить спец предложение"
        withoutDiscountButton: string; // "Получить UROXEL без скидки"
      };
      // Попап выбора времени звонка
      timeSelectionPopup: {
        title: string;         // "Не уходите без выбора времени!"
        consequence: string;   // "Мы можем позвонить вам прямо сейчас"
        solution: string;      // "Или выберите удобное время"
        highlight: string;     // "ЗВОНОК БЕСПЛАТНЫЙ И КОНФИДЕНЦИАЛЬНЫЙ"
        callNowButton: string; // "Позвонить ПРЯМО СЕЙЧАС"
        goBackButton: string;  // "Вернутся назад"
      };
      vslMidPopup: {
        title: string;
        subtitle: string;
      };
      // Попап выбора при закрытии VSL
      vslCloseChoicePopup: {
        title: string;         // "Стой!"
        subtitle: string;      // "Через 60 сек — метод, меняющий весь подход к лечению слабой эрекции!"
        continueButton: string; // "Продолжить смотреть"
        returnToChatButton: string; // "Вернуться в чат"
      };
    };
    
    // Тексты форм
    forms: {
      // Основная форма заказа
      orderForm: {
        title: string;         // "Официальная форма заказа UROXEL"
        namePlaceholder: string; // "Ваше имя" (лейбл и плейсхолдер)
        phonePlaceholder: string; // "Ваш телефон" (лейбл и плейсхолдер)
        submitButton: string;  // "Заказать UROXEL"
        disclaimer: string;    // Юридический текст под формой
      };
      // Форма бронирования звонка
      callBookingForm: {
        title: string;         // "Выберите время звонка"
        timeOptions: string[]; // Варианты времени ["Прямо сейчас", "5 минут", ...]
        submitButton: string;  // "Забронировать звонок"
        backButton: string;    // "Back"
      };
      // Форма домонетки (специальное предложение)
      domonetkaForm: {
        title: string;         // "Специальное предложение"
        namePlaceholder: string; // "Ваше имя"
        phonePlaceholder: string; // "Ваш телефон"
        submitButton: string;  // "Получить предложение"
        disclaimer: string;    // Юридический текст
        // Результаты и преимущества
        resultsTitle: string;  // "Что получаете уже через 2-3 недели*"
        resultsDisclaimer: string; // "Результаты научно доказаны IMSS..."
        // Карточки результатов
        resultCard1: {
          title: string;       // "Крепкая эрекция до 4 часов подряд"
          description: string; // "Экстракты (EGCG) поддерживают..."
        };
        resultCard2: {
          title: string;       // "Больше энергии в постели..."
          description: string; // "Сбалансированные адаптогены..."
        };
        resultCard3: {
          title: string;       // "Поддержка восстановления простаты"
          description: string; // "Комбинация полифенолов..."
        };
        resultCard4: {
          title: string;       // "Комфорт давления"
          description: string; // "Мягкие растительные компоненты..."
        };
        // Карточки преимуществ
        benefitCard1: {
          title: string;       // "Прозрачный состав"
          description: string; // "Без химии, виагры, ГМО..."
        };
        benefitCard2: {
          title: string;       // "Удобно и просто"
          description: string; // "1-2 капсулы в день..."
        };
        benefitCard3: {
          title: string;       // "Без риска: гарантия возврата 14 дней"
          description: string; // "Если продукт не подойдёт..."
        };
        // Научная секция
        scienceTitle: string;  // "Что говорит наука"
        scienceIntro: string;  // "Ниже — обзор исследований..."
        evidenceTag: string;   // "Научно доказано"
        // Ингредиенты
        ingredient1: {
          name: string;        // "Curcuma"
          description: string; // "Поддержка регенерации простаты..."
        };
        ingredient2: {
          name: string;        // "Arginina"
          description: string; // "Стимулирует постоянную циркуляцию..."
        };
        ingredient3: {
          name: string;        // "Jengibre"
          description: string; // "Связан с энергетическим обменом..."
        };
        // Отзывы и безопасность
        reviewsTitle: string;  // "Отзывы"
        reviewsSubtitle: string; // "Реальные истории клиентов*:"
        reviewsNote: string;   // "Полную информацию вы можете получить..."
        // Отзывы клиентов
        review1: {
          name: string;        // "Juan, 54:"
          text: string;        // "«Перестал принимать виагру...»"
        };
        review2: {
          name: string;        // "Alex, 61:"
          text: string;        // "«Бодрость в постели...»"
        };
        review3: {
          name: string;        // "Emiliano, 49:"
          text: string;        // "«Удобный приём и анонимность...»"
        };
        // Безопасность
        safetyTitle: string;   // "Безопасность и прозрачность"
        safetyItem1: string;   // "Сертифицированное производство (GMP)"
        safetyItem2: string;   // "Прозрачный состав на упаковке"
        safetyItem3: string;   // "Проверка партии по QR-коду"
      };
    };
    
    // Тексты баннеров и плашек
    banners: {
      specialOffer: string;    // "СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ"
      limitedTime: string;     // "ВРЕМЯ ОГРАНИЧЕНО!"
      bottlesLeft: string;     // "Осталось банок"
      exclusiveOffer: string;  // "ЭКСКЛЮЗИВНО!"
      actionPrice: string;     // "акционная цена на продукцию"
      leaveRequest: string;    // "Оставьте заявку по кнопке ниже!"
      reviewsBanner: string;   // Заголовок секции отзывов
    };
  };
  
  // ===== КОНТАКТНАЯ ИНФОРМАЦИЯ =====
  contact: {
    phone: string;             // Номер телефона (+52 55 5173 4167)
    country: string;           // Страна (México)
    flag: string;              // Путь к изображению флага (/mexico-flag.svg)
    status: string;            // Статус (✓ Online)
  };
  
  // ===== ЮРИДИЧЕСКИЕ ТЕКСТЫ И ДИСКЛЕЙМЕРЫ =====
  legal: {
    specialPriceDisclaimer: string; // "Специальная цена действует ограниченное количество времени."
    timerDisclaimer: string;        // "Таймер указывает оставшееся время до конца акции."
    mexicoOnly: string;             // "Акция применима только для жителей Мексики."
    consultationDisclaimer: string; // "Полная консультация происходит во обратного звонка нашего специалиста."
    resultsDisclaimer: string;      // Дисклеймер о результатах
    limitedOffer: string;           // "Ограниченное предложение. Количество товара ограничено."
  };
  
  // ===== НАСТРОЙКИ ФУНКЦИОНАЛЬНОСТИ =====
  settings: {
    autoPlayVsl: boolean;      // Автовоспроизведение VSL видео (false = выключено)
    enableExitIntent: boolean; // Показ попапа при попытке выйти (true = включено)
    enableFormPostback: boolean; // Автоматическая отправка данных форм (true = включено)
    vslPopupStartTime: number; // Начало диапазона времени для попапа в секундах (например, 893)
    vslPopupEndTime: number;   // Конец диапазона времени для попапа в секундах (например, 1100)
    vslMessageTime: number;    // Время показа сообщения с предложением в секундах (за 3 минуты до попапа)
    // Настройки VSL
    vslButtonBlink: boolean;   // Мигание кнопки включения звука
    vslShowCloseButton: boolean; // Показывать крестик в плеере
    vslAutoOpenForm: boolean;  // Автоматически открывать форму при окончании видео
  };
  
  // ===== НАСТРОЙКИ API =====
  api: {
    ktDomain: string;          // Домен для API (например, "uniaffshark.com")
    ktCampaignId: number;      // ID кампании (например, 10314)
    apiUrl: string;            // URL API для отправки данных
  };
}

// ===== ОСНОВНАЯ КОНФИГУРАЦИЯ САЙТА =====
export const siteConfig: SiteConfig = {
  // Основная информация о сайте
  siteName: "UROXEL",
  productName: "UROXEL",
  
  // Пути к изображениям и видео
  images: {
    chatImages: {
      productImage: "/Uroxel_ex.png",      // Главное изображение продукта
      feedback1: "/feedback_1.png",        // Фото Антонио
      feedback2: "/feedback_2.png",        // Фото Карлоса
      feedback3: "/feedback_3.png",        // Фото Амалии
      feedback4: "/feedback_4.png",        // Фото Алонсо
      feedback5: "/feedback_5.png",        // Фото Густаво
      feedback6: "/feedback_6.png",        // Фото Игнасио
    },
    formImages: {
      uroxleOffForm: "/Uroxel_off_form.png", // Изображение в форме домонетки
    },
          videos: {
        chatVsl: "/начало 1.mp4",            // VSL в чате
      },
  },
  
  // Цены и скидки
  pricing: {
    originalPrice: "1390 MXN",               // Оригинальная цена
    discountedPrice: "590 MXN",             // Цена со скидкой
    currency: "MXN",                         // Валюта
    discountPercentage: "50%",             // Процент скидки
  },
  
  // Настройки таймеров
  timers: {
    countdownMinutes: 15,                  // Минуты в таймере
    countdownSeconds: 0,                   // Секунды в таймере
    bottlesDecreaseInterval: 30000,        // Интервал уменьшения банок (30 сек)
    initialBottles: 47,                    // Начальное количество банок
  },
  
  // Отзывы с фотографиями
  reviews: {
    feedback1: {
      name: "Antonio, 58",
      image: "/feedback_1.png",
      rating: 5,                           // 1 звезда
      text: "Feliz mañana-mañana con UROXEL",
    },
    feedback2: {
      name: "Carlos, 45",
      image: "/feedback_2.png", 
      rating: 5,                           // 5 звезд
      text: "Ahora siempre lo llevo conmigo y nadie se da cuenta de que tenía problemas de potencia",
    },
    feedback3: {
      name: "Amalia, 53",
      image: "/feedback_3.png",
      rating: 5,
      text: "Siempre llevo 1 frasco en la bolsa para mi esposo",
    },
    feedback4: {
      name: "Alonso, 51",
      image: "/feedback_4.png",
      rating: 5,
      text: "¡Todo llegó rápido y con buen empaque anónimo! Me gusta mucho y es cómodo",
    },
    feedback5: {
      name: "Gustavo, 51",
      image: "/feedback_5.png",
      rating: 5,
      text: "¡Todo va según el plan, incluso en el camino UROXEL está conmigo!",
    },
    feedback6: {
      name: "Ignacio, 68",
      image: "/feedback_6.png",
      rating: 5,
      text: "Día 3 de toma - el pene se mantiene firme cada mañana - efecto agradable",
    },
  },
  
  // Текстовые отзывы (без фото)
  textReviews: {
    review1: {
      name: "Fernando C",
      rating: 5,
      title: "Calidad y precio",
      date: "Comentado en México el 7 de agosto de 2025",
      text: "Buena calidad y excelente precio",
    },
    review2: {
      name: "Carlos",
      rating: 5,
      title: "Buen producto",
      date: "Comentado en México el 21 de abril de 2025",
      text: "Estoy muy conforme con el producto",
    },
    review3: {
      name: "Elmer HRmo",
      rating: 4,
      title: "Buen producto",
      date: "Comentado en México el 11 de agosto de 2025",
      text: "Buen producto",
    },
    review4: {
      name: "Roberto Soriano Dávila",
      rating: 5,
      title: "Seriedad del proveedor.",
      date: "Comentado en México el 9 de noviembre de 2024",
      text: "Muy buen producto, empezó a actuar desde la primera toma, contiene elementos muy valiosos como el zinc, ya que la próstata es el órgano que contiene 10 veces más Zinc que cualquier otro órgano, también el licopeno que se usa para combatir el cáncer, así como otros productos valiosos como el ciruelo africano y la ortiga que han sido probados para desinflamar la próstata. Lo recomiendo ampliamente.",
      helpful: "A 4 personas les resultó útil",
    },
    review5: {
      name: "Gerardo ponce lopez",
      rating: 5,
      title: "MUY BIEN",
      date: "Comentado en México el 20 de junio de 2025",
      text: "LLEGÓ BIEN GRACIAS",
      helpful: "A 2 personas les resultó útil",
    },
    review6: {
      name: "Cliente de Kindle",
      rating: 4,
      title: "Excelente",
      date: "Comentado en México el 4 de mayo de 2025",
      text: "Ya voy por la quinta lata. ¡El efecto es mejor de lo prometido!",
    },
    review7: {
      name: "Cliente de Kindle",
      rating: 5,
      title: "Excelente producto",
      date: "Comentado en México el 16 de abril de 2025",
      text: "Es un buen producto como se nos había anunciado.",
    },
    review8: {
      name: "Cliente de Kindle",
      rating: 5,
      title: "Excelente producto",
      date: "Comentado en México el 16 de abril de 2025",
      text: "Es un buen producto como se nos había anunciado.",
    },
  },
  
  // Все тексты сайта
  texts: {
    // Заголовки страниц и форм
    headers: {
      chatHeader: "FORMULARIO Chat - Tú",      // Заголовок чата
      chatLabel: "Chat - Tú",             // Лейбл чата
      formHeader: "Formulario oficial de pedido UROXEL", // Заголовок формы
      domonetkaHeader: "Oferta especial", // Заголовок домонетки
      bookCallTitle: "RESERVA",       // Заголовок бронирования
      bookCallSubtitle: "Selecciona la hora para la llamada de vuelta", // Подзаголовок
      managedBy: "Gestionado por LaLueur. Saber más", // Футер
    },
    
    // Сообщения в чате
    chatMessages: {
      welcomeMessage: "¡Hola! 👋 Te ayudo con tu pedido de UROXEL. Es un producto revolucionario para mejorar la salud masculina.",
      productMessage: "Aquí tienes información sobre el producto:",
      autoMessage: "UROXEL es un producto innovador para mejorar la salud masculina. Eficacia clínicamente probada, composición natural, resultado rápido.",
      urgentMessage: "MENSAJE URGENTE PARA TODOS LOS HOMBRES DE MÉXICO.",
      problemMessage: "¡TU DÉBIL ERECCIÓN AHORA ES **ANÓNIMAMENTE** CURABLE EN 24 HORAS! ¡MIRA EL VIDEO DE ABAJO RÁPIDAMENTE!",
      encryptionMessage: "Los mensajes y llamadas están cifrados de extremo a extremo",
      vslTitle: "Salvación de tu erección",
      successMessage: "¡solicitud aceptada! Espera la llamada del especialista en",
    },
    
    // Тексты кнопок
    buttons: {
      orderNow: "Pedir ahora",
      getSpecialOffer: "Obtener oferta especial",
      getWithoutDiscount: "Obtener UROXEL sin descuento",
      callRightNow: "Llamar AHORA MISMO",
      goBack: "Volver atrás",
      continueWatching: "Continuar viendo el video",
      fillForm: "Llenar formulario",
      orderCall: "Solicitar llamada",
      bookCall: "Reservar llamada",
      getOffer: "Obtener oferta",
      backToOrder: "Atrás",                 // Кнопка "Назад"
      closeForm: "✕",                      // Кнопка закрытия
      // Новые кнопки
      enableSound: "Activar sonido",
      saveErection: "salvación de tu erección",
      continueWatchingChoice: "Continuar viendo",
      returnToChat: "Volver al chat",
      restartVideo: "Comenzar a ver desde el principio",
    },
    
    // Тексты попапов
    popups: {
      // Попап при клике на VSL в чате
      returnPopup: {
        title: "¿Erección débil?",
        subtitle: "¡Camino directo a la impotencia! Pero conocemos la solución ESTÁ JUSTO EN ESTE VIDEO ¡Salva tu erección en 24 horas!!",
        continueButton: "Continuar viendo el video",
        textVersionButton: "Ir a la versión de texto",
        // Детальные тексты для попапа возврата
        consequence: "¡Camino directo a la impotencia!",
        solution: "Pero conocemos la solución",
        highlight: "ESTÁ JUSTO EN ESTE VIDEO",
        urgency: "¡Salva tu erección en 24 horas!!",
      },
      // Попап при попытке выйти со страницы
      vslExitPopup: {
        bannerText: "¡TIENES DISPONIBLE UNA OFERTA EXCLUSIVA DEJA TU SOLICITUD AHORA MISMO! ¡TIEMPO LIMITADO!",
        continueButton: "Continuar viendo el video",
        fillFormButton: "Llenar formulario",
      },
      // Попап при попытке закрыть форму заказа
      formReturnPopup: {
        title: "¡No te vayas sin pedir!",
        consequence: "Puedes perder la oferta especial",
        solution: "Elige la opción que te convenga",
        specialOfferButton: "Obtener oferta especial",
        withoutDiscountButton: "Obtener UROXEL sin descuento",
      },
      // Попап выбора времени звонка
      timeSelectionPopup: {
        title: "¡No te vayas sin elegir hora!",
        consequence: "Podemos llamarte ahora mismo",
        solution: "O elige una hora conveniente",
        highlight: "LLAMADA GRATUITA Y CONFIDENCIAL",
        callNowButton: "Llamar AHORA MISMO",
        goBackButton: "Volver atrás",
      },
      // Попап на определенной минуте VSL
      vslMidPopup: {
        title: "TIENES DISPONIBLE UNA OFERTA EXCLUSIVA",
        subtitle: "¡DEJA TU SOLICITUD AHORA MISMO! ¡TIEMPO LIMITADO!",
      },
      // Попап выбора при закрытии VSL
      vslCloseChoicePopup: {
        title: "¡Espera!",
        subtitle: "En 60 segundos — método que cambia todo el enfoque del tratamiento de la erección débil!",
        continueButton: "Continuar viendo",
        returnToChatButton: "Volver al Chat",
      },
    },
    
    // Тексты форм
    forms: {
      // Основная форма заказа
      orderForm: {
        title: "Formulario oficial de pedido UROXEL",
        namePlaceholder: "Tu nombre",       // Лейбл и плейсхолдер для имени
        phonePlaceholder: "Tu teléfono",   // Лейбл и плейсхолдер для телефона
        submitButton: "Pedir UROXEL",
        disclaimer: "Testimonios de hombres que ya probaron UROXEL y obtuvieron resultados. Los resultados pueden variar según las características individuales del organismo.",
      },
      // Форма бронирования звонка
      callBookingForm: {
        title: "Elige la hora de la llamada",
        timeOptions: ["Ahora mismo", "5 minutos", "15 minutos", "30 minutos"], // Варианты времени
        submitButton: "Reservar llamada",
        backButton: "Atrás",
      },
      // Форма домонетки (специальное предложение)
      domonetkaForm: {
        title: "Oferta especial",
        namePlaceholder: "Tu nombre",
        phonePlaceholder: "Tu teléfono",
        submitButton: "Obtener oferta",
        disclaimer: "Oferta limitada. Cantidad de producto limitada.",
        // Результаты и преимущества
        resultsTitle: "Lo que obtienes en 2-3 semanas*",
        resultsDisclaimer: "Los resultados están científicamente probados por IMSS. Antes de tomar, familiarízate con el plan de toma.",
        // Карточки результатов
        resultCard1: {
          title: "Erección firme hasta 4 horas seguidas",
          description: "Los extractos (EGCG) mantienen el flujo de sangre al pene.",
        },
        resultCard2: {
          title: "Más energía en la cama - ya no tendrás falta de aliento",
          description: "Los adaptógenos balanceados ayudan a la resistencia a la fatiga.",
        },
        resultCard3: {
          title: "Apoyo para la recuperación de la próstata",
          description: "Combinación de polifenoles y minerales para el tono diario de la próstata.",
        },
        resultCard4: {
          title: "Comodidad de presión",
          description: "Componentes vegetales suaves para el cuidado de la presión arterial.",
        },
        // Карточки преимуществ
        benefitCard1: {
          title: "Composición transparente",
          description: "Sin química, viagra, OGM. Solo lo que necesitas — en dosis inteligente.",
        },
        benefitCard2: {
          title: "Cómodo y simple",
          description: "1-2 cápsulas al día. Sin esquemas complicados.",
        },
        benefitCard3: {
          title: "Sin riesgo: garantía de devolución 14 días",
          description: "Si el producto no te conviene — devolvemos el dinero. Sin preguntas.",
        },
        // Научная секция
        scienceTitle: "Lo que dice la ciencia",
        scienceIntro: "A continuación — revisión de investigaciones sobre los componentes únicos de UROXEL.",
        evidenceTag: "Científicamente probado",
        // Ингредиенты
        ingredient1: {
          name: "Curcuma",
          description: "Apoyo a la regeneración de la próstata, aumento del flujo de sangre al pene.",
        },
        ingredient2: {
          name: "Arginina",
          description: "Estimula la circulación constante de sangre y protege de inflamaciones repetidas de la próstata.",
        },
        ingredient3: {
          name: "Jengibre",
          description: "Relacionado con el intercambio energético de sangre dentro del pene.",
        },
        // Отзывы и безопасность
        reviewsTitle: "Testimonios",
        reviewsSubtitle: "Historias reales de clientes*:",
        reviewsNote: "Puedes obtener información completa después de dejar tu solicitud.",
        // Отзывы клиентов
        review1: {
          name: "Juan, 54:",
          text: "«Dejé de tomar viagra – la presión se normalizó y el pene se mantiene firme cada mañana y noche!»",
        },
        review2: {
          name: "Alex, 61:",
          text: "«Vigor en la cama - mi esposa está contenta, ¡y yo me convertí en un monstruo sexual!»",
        },
        review3: {
          name: "Emiliano, 49:",
          text: "«Toma conveniente y anonimato, mi esposa pensó que me puse una placa de hierro en el pene.»",
        },
        // Безопасность
        safetyTitle: "Seguridad y transparencia",
        safetyItem1: "Producción certificada (GMP)",
        safetyItem2: "Composición transparente en el empaque",
        safetyItem3: "Verificación del lote por código QR",
      },
    },
    
    // Тексты баннеров и плашек
    banners: {
      specialOffer: "OFERTA ESPECIAL",
      limitedTime: "¡TIEMPO LIMITADO!",
      bottlesLeft: "Frascos restantes",      // Текст счетчика банок
      exclusiveOffer: "¡EXCLUSIVO!",
      actionPrice: "precio promocional del producto",
      leaveRequest: "¡Deja tu solicitud con el botón de abajo!",
      reviewsBanner: "Testimonios de hombres que ya recuperaron una erección firme y salvaron su próstata",
    },
  },
  
  // Контактная информация
  contact: {
    phone: "+52 55 5173 4167",            // Номер телефона
    country: "México",                    // Страна
    flag: "/mexico-flag.svg",             // Путь к изображению флага
    status: "✓ Online",                   // Статус онлайн
  },
  
  // Юридические тексты и дисклеймеры
  legal: {
    specialPriceDisclaimer: "El precio especial es válido por tiempo limitado.",
    timerDisclaimer: "El temporizador indica el tiempo restante hasta el final de la promoción.",
    mexicoOnly: "La promoción se aplica solo a residentes de México.",
    consultationDisclaimer: "La consulta completa ocurre durante la llamada de vuelta de nuestro especialista.",
    resultsDisclaimer: "Testimonios de hombres que ya probaron UROXEL y obtuvieron resultados. Los resultados pueden variar según las características individuales del organismo.",
    limitedOffer: "Oferta limitada. Cantidad de producto limitada.",
  },
  
  // ===== НАСТРОЙКИ ФУНКЦИОНАЛЬНОСТИ =====
  settings: {
    autoPlayVsl: false,                   // Автовоспроизведение VSL видео (false = выключено)
    enableExitIntent: false,              // Показ попапа при попытке выйти со страницы (false = отключено)
    enableFormPostback: true,             // Автоматическая отправка данных форм при закрытии (true = включено)
    vslPopupStartTime: 773,               // Начало диапазона времени для попапа (773 секунды = 12:53)
    vslPopupEndTime: 1100,                // Конец диапазона времени для попапа (1100 секунд = 18:20)
    vslMessageTime: 593,                  // Время показа сообщения с предложением (за 3 минуты до попапа = 9:53)
    // Настройки VSL
    vslButtonBlink: true,                 // Мигание кнопки включения звука
    vslShowCloseButton: true,             // Показывать крестик в плеере
    vslAutoOpenForm: true,                // Автоматически открывать форму при окончании видео
  },
  
  // ===== НАСТРОЙКИ API =====
  api: {
    ktDomain: "uniaffshark.com",          // Домен для API
    ktCampaignId: 10314,                  // ID кампании
    apiUrl: "https://api.pwa.uniaffcrm.com/v1/add_lead", // URL API для отправки данных
  },
};
