// Фурри словарь - данные
const furryTerms = [
    {
        id: 1,
        term: "Furry",
        translation: "Фурри",
        description: "Человек, который интересуется антропоморфными животными (животными с человеческими характеристиками).",
        category: "basic",
        example: "Я фурри уже 5 лет и очень люблю создавать арт с антропоморфными персонажами."
    },
    {
        id: 2,
        term: "Fursona",
        translation: "Фурсона",
        description: "Персональный антропоморфный персонаж, который представляет фурри в сообществе.",
        category: "basic",
        example: "Моя фурсона - лис по имени Алекс, он очень дружелюбный и любит музыку."
    },
    {
        id: 3,
        term: "Fursuit",
        translation: "Фурсьют",
        description: "Костюм, изображающий антропоморфное животное, обычно носится на фурри-мероприятиях.",
        category: "appearance",
        example: "Я сшил свой первый фурсьют в прошлом году, это был костюм волка."
    },
    {
        id: 4,
        term: "Fursuiting",
        translation: "Фурсьютинг",
        description: "Акт ношения фурсьюта, обычно включает в себя взаимодействие с другими людьми в костюме.",
        category: "behavior",
        example: "Фурсьютинг на конвенции был невероятно веселым - все были такими дружелюбными!"
    },
    {
        id: 5,
        term: "Anthro",
        translation: "Антро",
        description: "Сокращение от 'антропоморфный' - животное с человеческими характеристиками.",
        category: "basic",
        example: "Я предпочитаю антро арт, где животные ходят на двух ногах и носят одежду."
    },
    {
        id: 6,
        term: "Feral",
        translation: "Ферал",
        description: "Антропоморфное животное, которое ведет себя как обычное животное, а не как человек.",
        category: "behavior",
        example: "Мне нравится рисовать ферал персонажей - они такие милые, когда ведут себя как настоящие животные."
    },
    {
        id: 7,
        term: "Fursuit Friday",
        translation: "Пятница Фурсьютов",
        description: "Традиция в фурри сообществе, когда люди публикуют фотографии своих фурсьютов по пятницам.",
        category: "community",
        example: "Не забудь выложить фото своего фурсьюта в #FursuitFriday!"
    },
    {
        id: 8,
        term: "Murr",
        translation: "Мурр",
        description: "Звук, который издают фурри персонажи, особенно кошачьи, для выражения удовольствия или привязанности.",
        category: "behavior",
        example: "Когда я глажу свою кошачью фурсону, она всегда говорит 'мурр' от удовольствия."
    },
    {
        id: 9,
        term: "Headpat",
        translation: "Поглаживание по голове",
        description: "Нежное поглаживание по голове, популярный жест привязанности в фурри сообществе.",
        category: "behavior",
        example: "Моя фурсона обожает хедпаты - это заставляет ее мурчать от счастья."
    },
    {
        id: 10,
        term: "Scalie",
        translation: "Скали",
        description: "Фурри, чья фурсона основана на рептилии, амфибии или рыбе.",
        category: "appearance",
        example: "Я скали - моя фурсона дракон, и у меня есть чешуя и хвост."
    },
    {
        id: 11,
        term: "Floof",
        translation: "Флуф",
        description: "Термин для обозначения пушистых частей тела фурри персонажа, особенно хвоста или ушей.",
        category: "appearance",
        example: "Посмотри на этот пушистый хвост - какой же он флуф!"
    },
    {
        id: 12,
        term: "Fursuit Dance",
        translation: "Танец в фурсьюте",
        description: "Танцы в фурсьюте, популярное развлечение на фурри мероприятиях.",
        category: "behavior",
        example: "Фурсьют танцы на конвенции были невероятно зажигательными!"
    },
    {
        id: 13,
        term: "Fursuit Malfunction",
        translation: "Поломка фурсьюта",
        description: "Когда что-то идет не так с фурсьютом во время ношения.",
        category: "behavior",
        example: "У меня была поломка фурсьюта - застрял молния на спине!"
    },
    {
        id: 14,
        term: "Fursuit Hug",
        translation: "Объятие в фурсьюте",
        description: "Объятие, данное в фурсьюте, часто более теплое и уютное, чем обычное.",
        category: "behavior",
        example: "Фурсьют объятия самые лучшие - они такие мягкие и уютные!"
    },
    {
        id: 15,
        term: "Fursuit Photography",
        translation: "Фотосессия в фурсьюте",
        description: "Фотографирование в фурсьюте, популярное хобби в сообществе.",
        category: "community",
        example: "Мы устроили отличную фотосессию в фурсьютах в парке."
    },
    {
        id: 16,
        term: "Fursuit Parade",
        translation: "Парад фурсьютов",
        description: "Организованное шествие фурри в костюмах, обычно на конвенциях.",
        category: "community",
        example: "Парад фурсьютов был самым ярким событием конвенции!"
    },
    {
        id: 17,
        term: "Fursuit Meet",
        translation: "Встреча фурсьютов",
        description: "Неформальная встреча фурри в костюмах для общения и веселья.",
        category: "community",
        example: "Мы организовали встречу фурсьютов в местном парке."
    },
    {
        id: 18,
        term: "Fursuit Clean",
        translation: "Чистка фурсьюта",
        description: "Процесс очистки и ухода за фурсьютом после использования.",
        category: "behavior",
        example: "После конвенции нужно обязательно почистить фурсьют."
    },
    {
        id: 19,
        term: "Fursuit Storage",
        translation: "Хранение фурсьюта",
        description: "Правильное хранение фурсьюта для сохранения его качества.",
        category: "behavior",
        example: "Я храню свой фурсьют в специальном чехле, чтобы он не пылился."
    },
    {
        id: 20,
        term: "Fursuit Commission",
        translation: "Заказ фурсьюта",
        description: "Процесс заказа индивидуального фурсьюта у мастера.",
        category: "community",
        example: "Я заказал фурсьют у известного мастера, жду уже 6 месяцев."
    },
    {
        id: 21,
        term: "Fursuit Maker",
        translation: "Мастер фурсьютов",
        description: "Человек, который профессионально изготавливает фурсьюты.",
        category: "community",
        example: "Этот мастер фурсьютов известен своими качественными костюмами."
    },
    {
        id: 22,
        term: "Fursuit Head",
        translation: "Голова фурсьюта",
        description: "Часть фурсьюта, которая покрывает голову и лицо.",
        category: "appearance",
        example: "Голова моего фурсьюта имеет подвижную челюсть."
    },
    {
        id: 23,
        term: "Fursuit Paws",
        translation: "Лапы фурсьюта",
        description: "Перчатки в виде лап животного, часть фурсьюта.",
        category: "appearance",
        example: "Мои лапы фурсьюта очень мягкие и удобные."
    },
    {
        id: 24,
        term: "Fursuit Tail",
        translation: "Хвост фурсьюта",
        description: "Хвост, который является частью фурсьюта.",
        category: "appearance",
        example: "Хвост моего фурсьюта очень пушистый и длинный."
    },
    {
        id: 25,
        term: "Fursuit Bodysuit",
        translation: "Тело фурсьюта",
        description: "Основная часть фурсьюта, покрывающая тело.",
        category: "appearance",
        example: "Тело моего фурсьюта сделано из качественного меха."
    },
    {
        id: 26,
        term: "Fursuit Digigrade",
        translation: "Дигиград фурсьют",
        description: "Фурсьют с ногами, имитирующими строение лап животных.",
        category: "appearance",
        example: "Мой дигиград фурсьют позволяет ходить как настоящий волк."
    },
    {
        id: 27,
        term: "Fursuit Plantigrade",
        translation: "Плантиград фурсьют",
        description: "Фурсьют с обычными человеческими ногами.",
        category: "appearance",
        example: "Плантиград фурсьют удобнее для длительного ношения."
    },
    {
        id: 28,
        term: "Fursuit Partial",
        translation: "Частичный фурсьют",
        description: "Фурсьют, включающий только голову, лапы и хвост.",
        category: "appearance",
        example: "Частичный фурсьют идеален для жаркой погоды."
    },
    {
        id: 29,
        term: "Fursuit Fullsuit",
        translation: "Полный фурсьют",
        description: "Полный фурсьют, покрывающий все тело.",
        category: "appearance",
        example: "Полный фурсьют обеспечивает полное перевоплощение."
    },
    {
        id: 30,
        term: "Fursuit Character",
        translation: "Персонаж фурсьюта",
        description: "Уникальный персонаж, воплощенный в фурсьюте.",
        category: "basic",
        example: "Мой персонаж фурсьюта - дружелюбный лис-музыкант."
    },
    // NSFW Terms
    {
        id: 31,
        term: "Yiff",
        translation: "Йифф",
        description: "Эротический или порнографический контент с антропоморфными персонажами.",
        category: "nsfw",
        example: "Некоторые фурри интересуются йифф артом."
    },
    {
        id: 32,
        term: "Yiffing",
        translation: "Йиффинг",
        description: "Сексуальная активность в фурри сообществе.",
        category: "nsfw",
        example: "Йиффинг - это интимная часть некоторых фурри отношений."
    },
    {
        id: 33,
        term: "Furry Porn",
        translation: "Фурри порно",
        description: "Порнографический контент с антропоморфными персонажами.",
        category: "nsfw",
        example: "Фурри порно - это отдельная ниша в эротическом контенте."
    },
    {
        id: 34,
        term: "Furry Sex",
        translation: "Фурри секс",
        description: "Сексуальная активность в фурри костюмах или с фурри тематикой.",
        category: "nsfw",
        example: "Некоторые пары практикуют фурри секс в костюмах."
    },
    {
        id: 35,
        term: "Furry Fetish",
        translation: "Фурри фетиш",
        description: "Сексуальный фетиш, связанный с антропоморфными персонажами.",
        category: "nsfw",
        example: "Фурри фетиш может включать различные аспекты животной тематики."
    },
    {
        id: 36,
        term: "Furry Kink",
        translation: "Фурри кинк",
        description: "Сексуальные предпочтения, связанные с фурри тематикой.",
        category: "nsfw",
        example: "Фурри кинк может включать ролевые игры с животными персонажами."
    },
    {
        id: 37,
        term: "Furry Roleplay",
        translation: "Фурри ролевые игры",
        description: "Ролевые игры с антропоморфными персонажами, включая интимные.",
        category: "nsfw",
        example: "Фурри ролевые игры популярны в онлайн сообществах."
    },
    {
        id: 38,
        term: "Furry Dating",
        translation: "Фурри знакомства",
        description: "Поиск романтических или сексуальных партнеров в фурри сообществе.",
        category: "nsfw",
        example: "Фурри знакомства могут быть как платоническими, так и интимными."
    },
    {
        id: 39,
        term: "Furry Hookup",
        translation: "Фурри встречи",
        description: "Случайные сексуальные встречи в фурри сообществе.",
        category: "nsfw",
        example: "Некоторые фурри ищут случайные встречи на специальных сайтах."
    },
    {
        id: 40,
        term: "Furry Orgy",
        translation: "Фурри оргия",
        description: "Групповая сексуальная активность с фурри тематикой.",
        category: "nsfw",
        example: "Фурри оргии иногда проводятся на частных мероприятиях."
    },
    // More Basic Terms
    {
        id: 41,
        term: "Furry Art",
        translation: "Фурри арт",
        description: "Художественные произведения с антропоморфными персонажами.",
        category: "basic",
        example: "Фурри арт - это огромная часть фурри культуры."
    },
    {
        id: 42,
        term: "Furry Artist",
        translation: "Фурри художник",
        description: "Художник, специализирующийся на создании фурри арта.",
        category: "community",
        example: "Этот фурри художник известен своими реалистичными портретами."
    },
    {
        id: 43,
        term: "Furry Commission",
        translation: "Фурри комиссия",
        description: "Заказ индивидуального фурри арта у художника.",
        category: "community",
        example: "Я заказал фурри комиссию у своего любимого художника."
    },
    {
        id: 44,
        term: "Furry Reference",
        translation: "Фурри референс",
        description: "Справочный материал для создания фурри персонажа.",
        category: "basic",
        example: "Художнику нужен фурри референс для точного изображения персонажа."
    },
    {
        id: 45,
        term: "Furry Design",
        translation: "Фурри дизайн",
        description: "Процесс создания внешнего вида фурри персонажа.",
        category: "appearance",
        example: "Фурри дизайн моего персонажа включает уникальные цветовые схемы."
    },
    {
        id: 46,
        term: "Furry Species",
        translation: "Фурри вид",
        description: "Животный вид, выбранный для фурри персонажа.",
        category: "basic",
        example: "Мой фурри вид - волк, но я также люблю драконов."
    },
    {
        id: 47,
        term: "Furry Colors",
        translation: "Фурри цвета",
        description: "Цветовая схема фурри персонажа.",
        category: "appearance",
        example: "Фурри цвета моего персонажа - синий и белый."
    },
    {
        id: 48,
        term: "Furry Markings",
        translation: "Фурри отметины",
        description: "Уникальные отметины или узоры на фурри персонаже.",
        category: "appearance",
        example: "Фурри отметины моего персонажа включают полосы на хвосте."
    },
    {
        id: 49,
        term: "Furry Personality",
        translation: "Фурри личность",
        description: "Характер и черты личности фурри персонажа.",
        category: "behavior",
        example: "Фурри личность моего персонажа - дружелюбная и игривая."
    },
    {
        id: 50,
        term: "Furry Backstory",
        translation: "Фурри предыстория",
        description: "История происхождения и развития фурри персонажа.",
        category: "basic",
        example: "Фурри предыстория моего персонажа очень подробная и интересная."
    },
    // More Community Terms
    {
        id: 51,
        term: "Furry Convention",
        translation: "Фурри конвенция",
        description: "Мероприятие для фурри сообщества с различными активностями.",
        category: "community",
        example: "Фурри конвенция - это место встречи фурри со всего мира."
    },
    {
        id: 52,
        term: "Furry Meet",
        translation: "Фурри встреча",
        description: "Неформальная встреча фурри для общения и веселья.",
        category: "community",
        example: "Мы организовали фурри встречу в местном парке."
    },
    {
        id: 53,
        term: "Furry Group",
        translation: "Фурри группа",
        description: "Группа фурри, объединенных общими интересами.",
        category: "community",
        example: "Наша фурри группа встречается каждую неделю."
    },
    {
        id: 54,
        term: "Furry Chat",
        translation: "Фурри чат",
        description: "Онлайн чат для общения фурри.",
        category: "community",
        example: "Фурри чат - отличное место для знакомств."
    },
    {
        id: 55,
        term: "Furry Forum",
        translation: "Фурри форум",
        description: "Интернет-форум для обсуждения фурри тематики.",
        category: "community",
        example: "На фурри форуме можно найти много полезной информации."
    },
    {
        id: 56,
        term: "Furry Discord",
        translation: "Фурри дискорд",
        description: "Discord сервер для фурри сообщества.",
        category: "community",
        example: "Наш фурри дискорд очень активный и дружелюбный."
    },
    {
        id: 57,
        term: "Furry Telegram",
        translation: "Фурри телеграм",
        description: "Telegram канал или группа для фурри.",
        category: "community",
        example: "Фурри телеграм канал публикует ежедневные новости."
    },
    {
        id: 58,
        term: "Furry Twitter",
        translation: "Фурри твиттер",
        description: "Twitter аккаунты и хештеги, связанные с фурри тематикой.",
        category: "community",
        example: "Фурри твиттер очень популярен среди молодых фурри."
    },
    {
        id: 59,
        term: "Furry Instagram",
        translation: "Фурри инстаграм",
        description: "Instagram аккаунты с фурри контентом.",
        category: "community",
        example: "Фурри инстаграм полон красивых фотографий фурсьютов."
    },
    {
        id: 60,
        term: "Furry TikTok",
        translation: "Фурри тикток",
        description: "TikTok контент с фурри тематикой.",
        category: "community",
        example: "Фурри тикток видео становятся все более популярными."
    },
    // More Behavior Terms
    {
        id: 61,
        term: "Furry Hug",
        translation: "Фурри объятие",
        description: "Объятие между фурри, часто более теплое и уютное.",
        category: "behavior",
        example: "Фурри объятия самые лучшие - они такие мягкие!"
    },
    {
        id: 62,
        term: "Furry Cuddle",
        translation: "Фурри обнимашки",
        description: "Нежные объятия и прижимания между фурри.",
        category: "behavior",
        example: "Фурри обнимашки помогают расслабиться и почувствовать себя лучше."
    },
    {
        id: 63,
        term: "Furry Snuggle",
        translation: "Фурри прижимания",
        description: "Уютные прижимания и объятия в фурри стиле.",
        category: "behavior",
        example: "Фурри прижимания - это лучший способ провести вечер."
    },
    {
        id: 64,
        term: "Furry Nuzzle",
        translation: "Фурри потирание носа",
        description: "Нежное потирание носами, популярный жест привязанности.",
        category: "behavior",
        example: "Фурри потирание носа - это очень милый и нежный жест."
    },
    {
        id: 65,
        term: "Furry Lick",
        translation: "Фурри облизывание",
        description: "Облизывание как знак привязанности в фурри стиле.",
        category: "behavior",
        example: "Фурри облизывание - это способ показать заботу и любовь."
    },
    {
        id: 66,
        term: "Furry Purr",
        translation: "Фурри мурлыкание",
        description: "Мурлыкание как выражение удовольствия и удовлетворения.",
        category: "behavior",
        example: "Когда я счастлив, я начинаю фурри мурлыкать."
    },
    {
        id: 67,
        term: "Furry Growl",
        translation: "Фурри рычание",
        description: "Рычание как выражение различных эмоций.",
        category: "behavior",
        example: "Фурри рычание может выражать как игривость, так и недовольство."
    },
    {
        id: 68,
        term: "Furry Howl",
        translation: "Фурри вой",
        description: "Вой как выражение эмоций или призыв к другим.",
        category: "behavior",
        example: "Фурри вой под луной - это очень романтично."
    },
    {
        id: 69,
        term: "Furry Chirp",
        translation: "Фурри чирикание",
        description: "Чирикание как выражение радости или возбуждения.",
        category: "behavior",
        example: "Фурри чирикание - это милый способ выразить счастье."
    },
    {
        id: 70,
        term: "Furry Squeak",
        translation: "Фурри писк",
        description: "Писк как выражение удивления или возбуждения.",
        category: "behavior",
        example: "Фурри писк - это неожиданная реакция на сюрприз."
    },
    // More Appearance Terms
    {
        id: 71,
        term: "Furry Ears",
        translation: "Фурри уши",
        description: "Уши животного, важная часть фурри персонажа.",
        category: "appearance",
        example: "Фурри уши моего персонажа очень выразительные и подвижные."
    },
    {
        id: 72,
        term: "Furry Eyes",
        translation: "Фурри глаза",
        description: "Глаза с характеристиками животного.",
        category: "appearance",
        example: "Фурри глаза моего персонажа светятся в темноте."
    },
    {
        id: 73,
        term: "Furry Nose",
        translation: "Фурри нос",
        description: "Нос с характеристиками животного.",
        category: "appearance",
        example: "Фурри нос моего персонажа очень чувствительный."
    },
    {
        id: 74,
        term: "Furry Whiskers",
        translation: "Фурри усы",
        description: "Усы как часть фурри персонажа.",
        category: "appearance",
        example: "Фурри усы помогают моему персонажу ориентироваться в пространстве."
    },
    {
        id: 75,
        term: "Furry Claws",
        translation: "Фурри когти",
        description: "Когти как часть фурри персонажа.",
        category: "appearance",
        example: "Фурри когти моего персонажа острые и блестящие."
    },
    {
        id: 76,
        term: "Furry Paws",
        translation: "Фурри лапы",
        description: "Лапы как часть фурри персонажа.",
        category: "appearance",
        example: "Фурри лапы моего персонажа мягкие и пушистые."
    },
    {
        id: 77,
        term: "Furry Tail",
        translation: "Фурри хвост",
        description: "Хвост как важная часть фурри персонажа.",
        category: "appearance",
        example: "Фурри хвост моего персонажа очень выразительный."
    },
    {
        id: 78,
        term: "Furry Fur",
        translation: "Фурри мех",
        description: "Мех как покрытие фурри персонажа.",
        category: "appearance",
        example: "Фурри мех моего персонажа густой и мягкий."
    },
    {
        id: 79,
        term: "Furry Scales",
        translation: "Фурри чешуя",
        description: "Чешуя как покрытие для рептилий и драконов.",
        category: "appearance",
        example: "Фурри чешуя моего дракона переливается всеми цветами радуги."
    },
    {
        id: 80,
        term: "Furry Feathers",
        translation: "Фурри перья",
        description: "Перья как покрытие для птиц и птицеподобных персонажей.",
        category: "appearance",
        example: "Фурри перья моего орла очень красивые и блестящие."
    },
    // More NSFW Terms
    {
        id: 81,
        term: "Furry Erotica",
        translation: "Фурри эротика",
        description: "Эротический контент с фурри персонажами.",
        category: "nsfw",
        example: "Фурри эротика - это отдельный жанр в литературе и искусстве."
    },
    {
        id: 82,
        term: "Furry Porn Art",
        translation: "Фурри порно арт",
        description: "Порнографические художественные произведения с фурри персонажами.",
        category: "nsfw",
        example: "Фурри порно арт очень популярен в определенных кругах."
    },
    {
        id: 83,
        term: "Furry Hentai",
        translation: "Фурри хентай",
        description: "Японская порнографическая анимация с фурри персонажами.",
        category: "nsfw",
        example: "Фурри хентай - это ниша в аниме индустрии."
    },
    {
        id: 84,
        term: "Furry Doujin",
        translation: "Фурри додзин",
        description: "Любительские порнографические комиксы с фурри персонажами.",
        category: "nsfw",
        example: "Фурри додзин очень популярны на специальных сайтах."
    },
    {
        id: 85,
        term: "Furry R34",
        translation: "Фурри правило 34",
        description: "Порнографический контент с фурри персонажами по правилу 34.",
        category: "nsfw",
        example: "Фурри правило 34 гласит: если это существует, то есть и порно с этим."
    },
    {
        id: 86,
        term: "Furry Fetish Art",
        translation: "Фурри фетиш арт",
        description: "Художественные произведения с фурри фетишами.",
        category: "nsfw",
        example: "Фурри фетиш арт может включать различные сексуальные предпочтения."
    },
    {
        id: 87,
        term: "Furry BDSM",
        translation: "Фурри БДСМ",
        description: "БДСМ практики с фурри тематикой.",
        category: "nsfw",
        example: "Фурри БДСМ включает ролевые игры с доминированием и подчинением."
    },
    {
        id: 88,
        term: "Furry Kink Art",
        translation: "Фурри кинк арт",
        description: "Художественные произведения с фурри кинками.",
        category: "nsfw",
        example: "Фурри кинк арт может включать различные сексуальные предпочтения."
    },
    {
        id: 89,
        term: "Furry Furry Porn",
        translation: "Фурри порно",
        description: "Порнографический контент с фурри персонажами.",
        category: "nsfw",
        example: "Фурри порно - это отдельная индустрия в порно бизнесе."
    },
    {
        id: 90,
        term: "Furry Adult Content",
        translation: "Фурри взрослый контент",
        description: "Взрослый контент с фурри тематикой.",
        category: "nsfw",
        example: "Фурри взрослый контент доступен только для совершеннолетних."
    },
    // More Community Terms
    {
        id: 91,
        term: "Furry Fandom",
        translation: "Фурри фэндом",
        description: "Сообщество поклонников фурри культуры.",
        category: "community",
        example: "Фурри фэндом - это одно из самых дружелюбных сообществ."
    },
    {
        id: 92,
        term: "Furry Culture",
        translation: "Фурри культура",
        description: "Культурные аспекты фурри сообщества.",
        category: "community",
        example: "Фурри культура включает в себя искусство, музыку и литературу."
    },
    {
        id: 93,
        term: "Furry Lifestyle",
        translation: "Фурри образ жизни",
        description: "Образ жизни, связанный с фурри интересами.",
        category: "community",
        example: "Фурри образ жизни влияет на многие аспекты жизни человека."
    },
    {
        id: 94,
        term: "Furry Identity",
        translation: "Фурри идентичность",
        description: "Идентичность, связанная с фурри интересами.",
        category: "basic",
        example: "Фурри идентичность - это важная часть личности многих фурри."
    },
    {
        id: 95,
        term: "Furry Pride",
        translation: "Фурри гордость",
        description: "Гордость за принадлежность к фурри сообществу.",
        category: "community",
        example: "Фурри гордость помогает людям принимать себя такими, какие они есть."
    },
    {
        id: 96,
        term: "Furry Acceptance",
        translation: "Фурри принятие",
        description: "Принятие фурри сообществом различных людей.",
        category: "community",
        example: "Фурри принятие - это одна из главных ценностей сообщества."
    },
    {
        id: 97,
        term: "Furry Support",
        translation: "Фурри поддержка",
        description: "Поддержка, которую оказывает фурри сообщество.",
        category: "community",
        example: "Фурри поддержка помогает людям в трудные времена."
    },
    {
        id: 98,
        term: "Furry Friendship",
        translation: "Фурри дружба",
        description: "Дружба, основанная на общих фурри интересах.",
        category: "community",
        example: "Фурри дружба часто бывает очень крепкой и долгой."
    },
    {
        id: 99,
        term: "Furry Love",
        translation: "Фурри любовь",
        description: "Любовь между людьми в фурри сообществе.",
        category: "community",
        example: "Фурри любовь может быть очень глубокой и искренней."
    },
    {
        id: 100,
        term: "Furry Family",
        translation: "Фурри семья",
        description: "Семья, состоящая из фурри или поддерживающая фурри интересы.",
        category: "community",
        example: "Фурри семья - это место, где можно быть собой."
    }
];

// DOM элементы
const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const termsGrid = document.getElementById('termsGrid');
const loading = document.getElementById('loading');
const noResults = document.getElementById('noResults');
const termModal = document.getElementById('termModal');
const closeModal = document.querySelector('.close');
const themeToggle = document.getElementById('themeToggle');
const sortSelect = document.getElementById('sortSelect');
const viewBtns = document.querySelectorAll('.view-btn');
const termCount = document.getElementById('termCount');

// Переменные состояния
let currentFilter = 'all';
let filteredTerms = furryTerms;
let currentView = 'grid';
let currentSort = 'alphabetical';

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Загрузить сохраненную тему
    loadTheme();
    
    // Показать загрузку
    loading.style.display = 'block';
    termsGrid.style.display = 'none';
    noResults.style.display = 'none';
    
    // Симуляция загрузки
    setTimeout(() => {
        loading.style.display = 'none';
        applySorting();
        updateTermCount();
    }, 1500);
    
    // Настройка обработчиков событий
    setupEventListeners();
}

function setupEventListeners() {
    // Поиск
    searchInput.addEventListener('input', handleSearch);
    clearBtn.addEventListener('click', clearSearch);
    
    // Фильтры
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => handleFilter(btn.dataset.category));
    });
    
    // Переключение темы
    themeToggle.addEventListener('click', toggleTheme);
    
    // Сортировка
    sortSelect.addEventListener('change', handleSort);
    
    // Переключение вида
    viewBtns.forEach(btn => {
        btn.addEventListener('click', () => handleViewChange(btn.dataset.view));
    });
    
    // Модальное окно
    closeModal.addEventListener('click', closeModalWindow);
    window.addEventListener('click', (e) => {
        if (e.target === termModal) {
            closeModalWindow();
        }
    });
    
    // Закрытие модального окна по Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModalWindow();
        }
    });
}

function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    // Показать/скрыть кнопку очистки
    if (searchTerm) {
        clearBtn.classList.add('show');
    } else {
        clearBtn.classList.remove('show');
    }
    
    // Фильтрация терминов
    let filtered = furryTerms;
    
    if (currentFilter !== 'all') {
        filtered = filtered.filter(term => term.category === currentFilter);
    }
    
    if (searchTerm) {
        filtered = filtered.filter(term => 
            term.term.toLowerCase().includes(searchTerm) ||
            term.translation.toLowerCase().includes(searchTerm) ||
            term.description.toLowerCase().includes(searchTerm)
        );
    }
    
    filteredTerms = filtered;
    displayTerms(filteredTerms);
}

function clearSearch() {
    searchInput.value = '';
    clearBtn.classList.remove('show');
    handleSearch();
}

function handleFilter(category) {
    // Обновить активную кнопку
    filterBtns.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    
    currentFilter = category;
    
    // Применить фильтр
    let filtered = furryTerms;
    
    if (category !== 'all') {
        filtered = filtered.filter(term => term.category === category);
    }
    
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm) {
        filtered = filtered.filter(term => 
            term.term.toLowerCase().includes(searchTerm) ||
            term.translation.toLowerCase().includes(searchTerm) ||
            term.description.toLowerCase().includes(searchTerm)
        );
    }
    
    filteredTerms = filtered;
    displayTerms(filteredTerms);
}

function displayTerms(terms) {
    if (terms.length === 0) {
        termsGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    termsGrid.style.display = currentView === 'list' ? 'flex' : 'grid';
    
    termsGrid.innerHTML = terms.map(term => `
        <div class="term-card" onclick="openModal(${term.id})">
            <div class="term-title">
                <i class="fas fa-paw"></i>
                ${term.term}
            </div>
            <span class="term-category">${getCategoryName(term.category)}</span>
            <div class="term-translation">${term.translation}</div>
            <div class="term-description">${term.description}</div>
        </div>
    `).join('');
    
    // Применить текущий вид
    if (currentView === 'list') {
        termsGrid.classList.add('list-view');
    } else {
        termsGrid.classList.remove('list-view');
    }
}

function getCategoryName(category) {
    const categories = {
        'basic': 'Основные',
        'behavior': 'Поведение',
        'appearance': 'Внешность',
        'community': 'Сообщество'
    };
    return categories[category] || category;
}

function openModal(termId) {
    const term = furryTerms.find(t => t.id === termId);
    if (!term) return;
    
    // Заполнить модальное окно
    document.getElementById('modalTitle').textContent = term.term;
    document.getElementById('modalCategory').textContent = getCategoryName(term.category);
    document.getElementById('modalTranslation').textContent = term.translation;
    document.getElementById('modalDescription').textContent = term.description;
    
    // Показать пример, если есть
    const exampleDiv = document.getElementById('modalExample');
    const exampleText = document.getElementById('modalExampleText');
    if (term.example) {
        exampleDiv.style.display = 'block';
        exampleText.textContent = term.example;
    } else {
        exampleDiv.style.display = 'none';
    }
    
    // Показать модальное окно
    termModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModalWindow() {
    termModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Переключение темы
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Обновить иконку
    const icon = themeToggle.querySelector('i');
    icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Загрузка сохраненной темы
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    const icon = themeToggle.querySelector('i');
    icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Обработка сортировки
function handleSort() {
    currentSort = sortSelect.value;
    applySorting();
}

// Применение сортировки
function applySorting() {
    let sortedTerms = [...filteredTerms];
    
    switch(currentSort) {
        case 'alphabetical':
            sortedTerms.sort((a, b) => a.term.localeCompare(b.term));
            break;
        case 'category':
            sortedTerms.sort((a, b) => {
                if (a.category === b.category) {
                    return a.term.localeCompare(b.term);
                }
                return a.category.localeCompare(b.category);
            });
            break;
        case 'random':
            sortedTerms = sortedTerms.sort(() => Math.random() - 0.5);
            break;
    }
    
    displayTerms(sortedTerms);
}

// Переключение вида
function handleViewChange(view) {
    currentView = view;
    
    // Обновить активную кнопку
    viewBtns.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-view="${view}"]`).classList.add('active');
    
    // Применить вид
    if (view === 'list') {
        termsGrid.classList.add('list-view');
    } else {
        termsGrid.classList.remove('list-view');
    }
    
    // Перерисовать термины
    displayTerms(filteredTerms);
}

// Обновление счетчика терминов
function updateTermCount() {
    const count = filteredTerms.length;
    termCount.textContent = `${count} терминов`;
}

// Анимации при загрузке
function addLoadingAnimations() {
    const cards = document.querySelectorAll('.term-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Добавить анимации после отображения терминов
const originalDisplayTerms = displayTerms;
displayTerms = function(terms) {
    originalDisplayTerms(terms);
    if (terms.length > 0) {
        setTimeout(addLoadingAnimations, 100);
    }
};

// Добавить случайные анимированные элементы
function addFloatingElements() {
    const container = document.querySelector('.container');
    
    setInterval(() => {
        if (Math.random() < 0.3) { // 30% вероятность
            const paw = document.createElement('div');
            paw.innerHTML = '🐾';
            paw.style.position = 'fixed';
            paw.style.left = Math.random() * window.innerWidth + 'px';
            paw.style.top = '100vh';
            paw.style.fontSize = '2rem';
            paw.style.opacity = '0.6';
            paw.style.pointerEvents = 'none';
            paw.style.zIndex = '1';
            paw.style.transition = 'all 3s ease-out';
            
            container.appendChild(paw);
            
            setTimeout(() => {
                paw.style.top = '-100px';
                paw.style.opacity = '0';
            }, 100);
            
            setTimeout(() => {
                container.removeChild(paw);
            }, 3000);
        }
    }, 2000);
}

// Запустить плавающие элементы
addFloatingElements();

// Добавить анимированные частицы
function addParticles() {
    const particles = ['🐾', '✨', '🌟', '💫', '⭐'];
    
    setInterval(() => {
        if (Math.random() < 0.4) { // 40% вероятность
            const particle = document.createElement('div');
            particle.innerHTML = particles[Math.floor(Math.random() * particles.length)];
            particle.className = 'particle';
            particle.style.position = 'fixed';
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.top = '100vh';
            particle.style.fontSize = (Math.random() * 20 + 15) + 'px';
            particle.style.opacity = '0.8';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '1';
            particle.style.transition = 'all 4s ease-out';
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.style.top = '-100px';
                particle.style.opacity = '0';
                particle.style.transform = 'rotate(360deg)';
            }, 100);
            
            setTimeout(() => {
                if (document.body.contains(particle)) {
                    document.body.removeChild(particle);
                }
            }, 4000);
        }
    }, 3000);
}

// Добавить интерактивные эффекты при наведении
function addInteractiveEffects() {
    const cards = document.querySelectorAll('.term-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.25)';
            
            // Добавить пульсацию к иконке
            const icon = this.querySelector('.term-title i');
            if (icon) {
                icon.classList.add('pulse');
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            
            // Убрать пульсацию
            const icon = this.querySelector('.term-title i');
            if (icon) {
                icon.classList.remove('pulse');
            }
        });
    });
}

// Добавить эффект печатания для поиска
function addTypingEffect() {
    const searchInput = document.getElementById('searchInput');
    const placeholder = 'Поиск фурри терминов...';
    let i = 0;
    
    function typePlaceholder() {
        if (i < placeholder.length) {
            searchInput.placeholder = placeholder.substring(0, i + 1);
            i++;
            setTimeout(typePlaceholder, 100);
        } else {
            setTimeout(() => {
                i = 0;
                searchInput.placeholder = '';
                setTimeout(typePlaceholder, 2000);
            }, 2000);
        }
    }
    
    // Запустить эффект печатания только если поле пустое
    if (!searchInput.value) {
        typePlaceholder();
    }
}

// Добавить звуковые эффекты (опционально)
function addSoundEffects() {
    // Создать аудио контекст для звуковых эффектов
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    function playClickSound() {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    }
    
    // Добавить звук к кнопкам
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('filter-btn') || 
            e.target.classList.contains('term-card') ||
            e.target.closest('.term-card')) {
            playClickSound();
        }
    });
}

// Добавить эффект конфетти при открытии модального окна
function addConfettiEffect() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];
    
    function createConfetti() {
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-10px';
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '1000';
            confetti.style.transition = 'all 3s ease-out';
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.style.top = '100vh';
                confetti.style.transform = 'rotate(720deg)';
                confetti.style.opacity = '0';
            }, 100);
            
            setTimeout(() => {
                if (document.body.contains(confetti)) {
                    document.body.removeChild(confetti);
                }
            }, 3000);
        }
    }
    
    // Добавить конфетти к открытию модального окна
    const originalOpenModal = openModal;
    openModal = function(termId) {
        createConfetti();
        originalOpenModal(termId);
    };
}

// Инициализировать все эффекты
function initializeEffects() {
    addParticles();
    addInteractiveEffects();
    addTypingEffect();
    // addSoundEffects(); // Раскомментировать если нужны звуки
    addConfettiEffect();
}

// Запустить эффекты после загрузки
setTimeout(initializeEffects, 2000);
