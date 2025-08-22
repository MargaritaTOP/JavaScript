import type { NewsPost } from './types';

import Img1 from '../assets/images/1_6.png';
import Img2 from '../assets/images/2_5.png';
import Img3 from '../assets/images/3_4.png';
import Img4 from '../assets/images/4_3.png';
import Img5 from '../assets/images/5_2.png';
import Img6 from '../assets/images/6_1.png';

export const mockNews: NewsPost[] = [
    {
        id: 1,
        title: "Новая технология 5G меняет мир",
        body: "В России началось тестирование сетей 5G, которые обещают революцию в скорости интернета и новые возможности для умных городов.",
        category: 'technology',
        author: 'Алексей Петров',
        image: Img1,
        date: new Date().toLocaleDateString('ru-RU'),
        likes: 42,
        shares: 15
    },
    {
        id: 2,
        title: "Прорыв в лечении рака",
        body: "Учёные из Москвы разработали новый метод иммунотерапии, который показал высокую эффективность на ранних стадиях.",
        category: 'health',
        author: 'Мария Иванова',
        image: Img2,
        date: new Date(Date.now() - 86400000).toLocaleDateString('ru-RU'),
        likes: 78,
        shares: 23
    },
    {
        id: 3,
        title: "Искры гениальности: новые открытия в физике",
        body: "Российские физики обнаружили новый тип квантовых частиц, который может изменить наше понимание вселенной.",
        category: 'science',
        author: 'Иван Сидоров',
        image: Img3,
        date: new Date(Date.now() - 2 * 86400000).toLocaleDateString('ru-RU'),
        likes: 56,
        shares: 10
    },
    {
        id: 4,
        title: "Рост экономики в 2025 году",
        body: "Аналитики прогнозируют рост ВВП России благодаря новым инвестициям в технологический сектор.",
        category: 'business',
        author: 'Ольга Козлова',
        image: Img4,
        date: new Date(Date.now() - 3 * 86400000).toLocaleDateString('ru-RU'),
        likes: 34,
        shares: 19
    },
    {
        id: 5,
        title: "ИИ помогает врачам",
        body: "В больницах Санкт-Петербурга внедряют искусственный интеллект для диагностики заболеваний.",
        category: 'technology',
        author: 'Алексей Петров',
        image: Img5,
        date: new Date(Date.now() - 4 * 86400000).toLocaleDateString('ru-RU'),
        likes: 65,
        shares: 12
    },
    {
        id: 6,
        title: "Космические исследования России",
        body: "Роскосмос объявил о запуске новой миссии на Луну в 2026 году.",
        category: 'science',
        author: 'Мария Иванова',
        image: Img6,
        date: new Date(Date.now() - 5 * 86400000).toLocaleDateString('ru-RU'),
        likes: 89,
        shares: 25
    }
];