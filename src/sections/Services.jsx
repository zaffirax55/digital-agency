import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';

const services = [
  ['01','Landing page','Сфокусированная посадочная страница для продукта, услуги или рекламной кампании.'],
  ['02','Корпоративные сайты','Системный сайт, который раскрывает компанию, услуги и формирует доверие.'],
  ['03','Редизайн','Обновляем устаревший интерфейс, структуру и визуальный язык без потери узнаваемости.'],
  ['04','SEO-продвижение','Техническая и контентная база для стабильного роста в Google.'],
  ['05','GEO / AI-поиск','Помогаем бренду быть понятным и заметным для ChatGPT, Gemini и AI Overviews.'],
  ['06','Техподдержка','Развиваем сайт после запуска: обновления, аналитика и улучшение конверсии.']
];

export default function Services() {
  return <section className="section services" id="services"><div className="container"><SectionTitle eyebrow="02 / Услуги" title={<>Всё необходимое,<br/><em>чтобы расти онлайн</em></>} text="Закрываем весь цикл создания сайтов для бизнеса — одной командой и с ответственностью за результат." /><div className="service-list">{services.map((s,i) => <Reveal key={s[0]} delay={i*50} className="service-row"><span>{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p><b>↗</b></Reveal>)}</div></div></section>;
}
