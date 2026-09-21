import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';

export default function About() {
  return <section className="section about" id="about"><div className="container"><SectionTitle eyebrow="01 / О нас" title={<>Не просто красиво.<br/><em>Убедительно для клиента.</em></>} /><div className="about-grid"><Reveal><p className="about-lead">Мы — компактная команда стратегии, дизайна и разработки. Погружаемся в бизнес, чтобы сайт отвечал на реальные вопросы клиента и помогал принять решение.</p></Reveal><Reveal delay={100}><p>Создаём не цифровую визитку, а рабочий инструмент: усиливаем доверие, упрощаем путь до заявки и закладываем основу для SEO‑продвижения.</p><a className="text-link" href="#process">Как мы работаем <span>↘</span></a></Reveal></div><div className="ticker" aria-label="Ключевые компетенции"><span>СТРАТЕГИЯ</span><i>✦</i><span>ДИЗАЙН</span><i>✦</i><span>РАЗРАБОТКА</span><i>✦</i><span>РОСТ</span></div></div></section>;
}
