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
        title: string;         // "Что вы хотите сделать?"
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
    originalPrice: "5980 ₽",               // Оригинальная цена
    discountedPrice: "2990 ₽",             // Цена со скидкой
    currency: "₽",                         // Валюта
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
      name: "Антон, 77",
      image: "/feedback_1.png",
      rating: 1,                           // 1 звезда
      text: "Счастливое утро ",
    },
    feedback2: {
      name: "Карлос, 45",
      image: "/feedback_2.png", 
      rating: 5,                           // 5 звезд
      text: "Всегда теперь ношу с собой и никто не догадывается, что у меня проблемы с потенцией были",
    },
    feedback3: {
      name: "Амалия, 53",
      image: "/feedback_3.png",
      rating: 5,
      text: "Всегда ношу для мужа 1 баночку в сумке",
    },
    feedback4: {
      name: "Алонсо, 51",
      image: "/feedback_4.png",
      rating: 5,
      text: "Всё пришло быстро и хорошая анонимная упавка! Очень нравится и удобно",
    },
    feedback5: {
      name: "Густаво, 51",
      image: "/feedback_5.png",
      rating: 5,
      text: "Всё идёт по плану, даже в дороге UROXEL со мной!",
    },
    feedback6: {
      name: "Игнасио, 68",
      image: "/feedback_6.png",
      rating: 5,
      text: "3 день приёма - член стоит каждое утро - приятные эффект",
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
      chatHeader: "ФОРМА Chat - You",      // Заголовок чата
      chatLabel: "Chat - You",             // Лейбл чата
      formHeader: "Официальная форма заказа UROXEL", // Заголовок формы
      domonetkaHeader: "Специальное предложение", // Заголовок домонетки
      bookCallTitle: "ЗАБРОНИРУЙТЕ",       // Заголовок бронирования
      bookCallSubtitle: "Выберите время для обратного звонка", // Подзаголовок
      managedBy: "Managed by LaLueur. Learn more", // Футер
    },
    
    // Сообщения в чате
    chatMessages: {
      welcomeMessage: "Привет! 👋 Я помогу тебе с заказом UROXEL. Это революционное средство для улучшения мужского здоровья.",
      productMessage: "Вот информация о продукте:",
      autoMessage: "UROXEL - это инновационное средство для улучшения мужского здоровья. Клинически доказанная эффективность, натуральный состав, быстрый результат.",
      urgentMessage: "СРОЧНОЕ СООБЩЕНИЕ ДЛЯ ВСЕХ МУЖЧИН МЕКСИКИ.",
      problemMessage: "ВАША СЛАБАЯ ЭРЕКЦИЯ ТЕПЕРЬ **АНОНИМНО** ИЗЛЕЧИМА ЗА 24 ЧАСА! СКОРЕЕ СМОТРИТЕ ВИДЕО НИЖЕ!",
      encryptionMessage: "Сообщения и звонки зашифрованы сквозным шифрованием",
      vslTitle: "Спасение вашей эрекции",
    },
    
    // Тексты кнопок
    buttons: {
      orderNow: "Заказать сейчас",
      getSpecialOffer: "Получить спец предложение",
      getWithoutDiscount: "Получить UROXEL без скидки",
      callRightNow: "Позвонить ПРЯМО СЕЙЧАС",
      goBack: "Вернутся назад",
      continueWatching: "Продолжить смотреть видео",
      fillForm: "Заполнить анкету",
      orderCall: "Заказать звонок",
      bookCall: "Забронировать звонок",
      getOffer: "Получить предложение",
      backToOrder: "Back",                 // Кнопка "Назад"
      closeForm: "✕",                      // Кнопка закрытия
      // Новые кнопки
      enableSound: "Включить звук",
      saveErection: "спасение вашей эрекции",
      continueWatchingChoice: "Продолжить смотреть",
      returnToChat: "Вернуться в чат",
      restartVideo: "Начать просмотр сначала",
    },
    
    // Тексты попапов
    popups: {
      // Попап при клике на VSL в чате
      returnPopup: {
        title: "Слабая эрекция?",
        subtitle: "Прямой путь к импотенции! Но мы знаем решение ОНО ПРЯМО В ЭТОМ ВИДЕО Спаси свою эрекцию за 24 часа!!",
        continueButton: "Продолжить смотреть видео",
        textVersionButton: "Перейти на текстовый вариант",
        // Детальные тексты для попапа возврата
        consequence: "Прямой путь к импотенции!",
        solution: "Но мы знаем решение",
        highlight: "ОНО ПРЯМО В ЭТОМ ВИДЕО",
        urgency: "Спаси свою эрекцию за 24 часа!!",
      },
      // Попап при попытке выйти со страницы
      vslExitPopup: {
        bannerText: "ВАМ ДОСТУПНО ЭКСКЛЮЗИВНОЕ ПРЕДЛОЖЕНИЕ ОСТАВЬТЕ ЗАЯВКУ ПРЯМО СЕЙЧАС! ВРЕМЯ ОГРАНИЧЕНО!",
        continueButton: "Продолжить смотреть видео",
        fillFormButton: "Заполнить анкету",
      },
      // Попап при попытке закрыть форму заказа
      formReturnPopup: {
        title: "Не уходите без заказа!",
        consequence: "Вы можете потерять специальное предложение",
        solution: "Выберите удобный для вас вариант",
        specialOfferButton: "Получить спец предложение",
        withoutDiscountButton: "Получить UROXEL без скидки",
      },
      // Попап выбора времени звонка
      timeSelectionPopup: {
        title: "Не уходите без выбора времени!",
        consequence: "Мы можем позвонить вам прямо сейчас",
        solution: "Или выберите удобное время",
        highlight: "ЗВОНОК БЕСПЛАТНЫЙ И КОНФИДЕНЦИАЛЬНЫЙ",
        callNowButton: "Позвонить ПРЯМО СЕЙЧАС",
        goBackButton: "Вернутся назад",
      },
      // Попап на определенной минуте VSL
      vslMidPopup: {
        title: "ВАМ ДОСТУПНО ЭКСКЛЮЗИВНОЕ ПРЕДЛОЖЕНИЕ",
        subtitle: "ОСТАВЬТЕ ЗАЯВКУ ПРЯМО СЕЙЧАС! ВРЕМЯ ОГРАНИЧЕНО!",
      },
      // Попап выбора при закрытии VSL
      vslCloseChoicePopup: {
        title: "Что вы хотите сделать?",
        continueButton: "Продолжить смотреть",
        returnToChatButton: "Вернуться в Чат",
      },
    },
    
    // Тексты форм
    forms: {
      // Основная форма заказа
      orderForm: {
        title: "Официальная форма заказа UROXEL",
        namePlaceholder: "Ваше имя",       // Лейбл и плейсхолдер для имени
        phonePlaceholder: "Ваш телефон",   // Лейбл и плейсхолдер для телефона
        submitButton: "Заказать UROXEL",
        disclaimer: "Отзывы мужчин, которые уже попробовали UROXEL и получили результат. Результаты могут отличаться в зависимости от индивидуальных особенностей организма.",
      },
      // Форма бронирования звонка
      callBookingForm: {
        title: "Выберите время звонка",
        timeOptions: ["Прямо сейчас", "5 минут", "15 минут", "30 минут"], // Варианты времени
        submitButton: "Забронировать звонок",
        backButton: "Back",
      },
      // Форма домонетки (специальное предложение)
      domonetkaForm: {
        title: "Специальное предложение",
        namePlaceholder: "Ваше имя",
        phonePlaceholder: "Ваш телефон",
        submitButton: "Получить предложение",
        disclaimer: "Ограниченное предложение. Количество товара ограничено.",
        // Результаты и преимущества
        resultsTitle: "Что получаете уже через 2-3 недели*",
        resultsDisclaimer: "Результаты научно доказаны IMSS. Перед приёмом ознакомьтесь с планом приёма.",
        // Карточки результатов
        resultCard1: {
          title: "Крепкая эрекция до 4 часов подряд",
          description: "Экстракты (EGCG) поддерживают прилив крови к члену.",
        },
        resultCard2: {
          title: "Больше энергии в постели - у вас больше не будет отдышки",
          description: "Сбалансированные адаптогены помогают устойчивости к утомлению.",
        },
        resultCard3: {
          title: "Поддержка восстановления простаты",
          description: "Комбинация полифенолов и минералов для ежедневного тонуса простаты.",
        },
        resultCard4: {
          title: "Комфорт давления",
          description: "Мягкие растительные компоненты для бережной кровяного давления.",
        },
        // Карточки преимуществ
        benefitCard1: {
          title: "Прозрачный состав",
          description: "Без химии, виагры, ГМО. Только то, что нужно — в грамотной дозировке.",
        },
        benefitCard2: {
          title: "Удобно и просто",
          description: "1-2 капсулы в день. Без сложных схем.",
        },
        benefitCard3: {
          title: "Без риска: гарантия возврата 14 дней",
          description: "Если продукт не подойдёт — вернём деньги. Без вопросов.",
        },
        // Научная секция
        scienceTitle: "Что говорит наука",
        scienceIntro: "Ниже — обзор исследований по уникальным компонентам UROXEL.",
        evidenceTag: "Научно доказано",
        // Ингредиенты
        ingredient1: {
          name: "Curcuma",
          description: "Поддержка регенерации простаты, увеличение прилива крови к половому члену.",
        },
        ingredient2: {
          name: "Arginina",
          description: "Стимулирует постоянную циркуляцию крови и уберегает от повторных воспалений простаты.",
        },
        ingredient3: {
          name: "Jengibre",
          description: "Связан с энергетическим обменом крови внутри полового члена.",
        },
        // Отзывы и безопасность
        reviewsTitle: "Отзывы",
        reviewsSubtitle: "Реальные истории клиентов*:",
        reviewsNote: "Полную информацию вы можете получить после оставления заявки.",
        // Отзывы клиентов
        review1: {
          name: "Juan, 54:",
          text: "«Перестал принимать виагру – давление нормализовалось и член стоит каждое утро и вечер!»",
        },
        review2: {
          name: "Alex, 61:",
          text: "«Бодрость в постели - жена довольна, а я стал сексуальным монстров!»",
        },
        review3: {
          name: "Emiliano, 49:",
          text: "«Удобный приём и анонимность, жена подумала что я вставил железную пластину в член.»",
        },
        // Безопасность
        safetyTitle: "Безопасность и прозрачность",
        safetyItem1: "Сертифицированное производство (GMP)",
        safetyItem2: "Прозрачный состав на упаковке",
        safetyItem3: "Проверка партии по QR-коду",
      },
    },
    
    // Тексты баннеров и плашек
    banners: {
      specialOffer: "СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ",
      limitedTime: "ВРЕМЯ ОГРАНИЧЕНО!",
      bottlesLeft: "Осталось банок",      // Текст счетчика банок
      exclusiveOffer: "ЭКСКЛЮЗИВНО!",
      actionPrice: "акционная цена на продукцию",
      leaveRequest: "Оставьте заявку по кнопке ниже!",
      reviewsBanner: "Отзывы мужчин, которые уже вернули крепкую эрекцию и спасли свою простату",
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
    specialPriceDisclaimer: "Специальная цена действует ограниченное количество времени.",
    timerDisclaimer: "Таймер указывает оставшееся время до конца акции.",
    mexicoOnly: "Акция применима только для жителей Мексики.",
    consultationDisclaimer: "Полная консультация происходит во обратного звонка нашего специалиста.",
    resultsDisclaimer: "Отзывы мужчин, которые уже попробовали UROXEL и получили результат. Результаты могут отличаться в зависимости от индивидуальных особенностей организма.",
    limitedOffer: "Ограниченное предложение. Количество товара ограничено.",
  },
  
  // ===== НАСТРОЙКИ ФУНКЦИОНАЛЬНОСТИ =====
  settings: {
    autoPlayVsl: false,                   // Автовоспроизведение VSL видео (false = выключено)
    enableExitIntent: false,              // Показ попапа при попытке выйти со страницы (false = отключено)
    enableFormPostback: true,             // Автоматическая отправка данных форм при закрытии (true = включено)
    vslPopupStartTime: 893,               // Начало диапазона времени для попапа (893 секунды)
    vslPopupEndTime: 1100,                // Конец диапазона времени для попапа (1100 секунд)
    vslMessageTime: 713,                  // Время показа сообщения с предложением (за 3 минуты до попапа)
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
