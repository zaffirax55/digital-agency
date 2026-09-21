import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';

const industries = [
  { icon: '✦', title: 'Стоматологии', text: 'Показываем экспертизу врачей, оборудование и реальные преимущества клиники. Упрощаем запись на консультацию.', tags: ['Услуги и цены', 'Врачи', 'Онлайн-запись'] },
  { icon: '＋', title: 'Клиники', text: 'Создаём понятную навигацию по направлениям и специалистам, усиливаем доверие и соблюдаем требования к медицинскому контенту.', tags: ['Каталог услуг', 'Филиалы', 'SEO-структура'] },
  { icon: '◌', title: 'Beauty-бизнес', text: 'Передаём атмосферу бренда, красиво упаковываем услуги и превращаем мобильный трафик в записи.', tags: ['Портфолио', 'Мастера', 'Мессенджеры'] },
  { icon: '↗', title: 'Локальные компании', text: 'Помогаем выделиться среди конкурентов в городе, собирать обращения и измерять эффективность рекламы.', tags: ['Локальное SEO', 'Отзывы', 'Аналитика'] },
];

export default function Industries() {
  return <section className="section industries" id="industries"><div className="container"><SectionTitle eyebrow="03 / Специализация" title={<>Понимаем бизнес,<br/><em>где доверие решает</em></>} text="Глубоко знаем путь клиента в медицине, красоте и локальных услугах — от первого поиска до записи."/><div className="industry-grid">{industries.map((item,index)=><Reveal className="industry-card" delay={index*70} key={item.title}><div className="industry-top"><span>{item.icon}</span><small>0{index+1}</small></div><h3>{item.title}</h3><p>{item.text}</p><div className="tag-list">{item.tags.map(tag=><i key={tag}>{tag}</i>)}</div></Reveal>)}</div></div></section>;
}