import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';

const groups=[
  ['Стратегия',['Аудит текущего сайта','Анализ конкурентов','Интервью и позиционирование','Карта пути клиента']],
  ['Дизайн',['Прототипирование','Визуальная концепция','UI-kit и дизайн-система','Микроанимации']],
  ['Технологии',['React / Vite','CMS и API-интеграции','CRM и Telegram','Оптимизация Core Web Vitals']],
  ['Маркетинг',['SEO и GEO','Google Analytics 4','Конверсионные сценарии','Контент-рекомендации']],
];

export default function Expertise(){return <section className="section expertise"><div className="container"><SectionTitle eyebrow="09 / Компетенции" title={<>Одна команда.<br/><em>Все точки роста.</em></>} text="Не перекладываем ответственность между подрядчиками: стратегия, дизайн, код и продвижение работают как одна система."/><div className="expertise-grid">{groups.map((g,i)=><Reveal className="expertise-card" delay={i*70} key={g[0]}><span>0{i+1}</span><h3>{g[0]}</h3><ul>{g[1].map(x=><li key={x}>{x}<b>↗</b></li>)}</ul></Reveal>)}</div></div></section>}