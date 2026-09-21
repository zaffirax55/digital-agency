import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';

const cases=[
  {type:'Стоматология',name:'Denta Forma',task:'Усилить доверие к новой клинике',solution:'Редакционный дизайн и запись в 2 клика',result:'+62% заявок',cls:'mint'},
  {type:'Салон красоты',name:'Élan Studio',task:'Запустить премиальный бренд онлайн',solution:'Имиджевый сайт с каталогом услуг',result:'×2.1 конверсия',cls:'sand'},
  {type:'Медицинская клиника',name:'Medspace',task:'Упростить выбор врача и услуги',solution:'Новая структура и умный поиск',result:'−34% отказов',cls:'blue'},
  {type:'Локальный бизнес',name:'Forma Kitchen',task:'Получать заявки из района',solution:'Лендинг и локальное SEO',result:'ТОП-5 Google',cls:'coral'}
];
export default function Cases(){return <section className="section cases" id="cases"><div className="container"><SectionTitle eyebrow="04 / Кейсы" title={<>Задачи бизнеса.<br/><em>Решённые дизайном.</em></>} text="Демонстрационные концепции показывают наш подход к структуре, визуалу и конверсии."/><div className="case-grid">{cases.map((c,i)=><Reveal className={`case-card ${c.cls}`} delay={i*80} key={c.name}><div className="case-art" role="img" aria-label={`Концепт сайта ${c.name}`}><span className="mock-brand">{c.name}</span><div className="mock-window"><i></i><i></i><i></i><b>{c.name.charAt(0)}</b></div><em>{c.result}</em></div><div className="case-meta"><span>{c.type}</span><h3>{c.name}</h3><dl><div><dt>Задача</dt><dd>{c.task}</dd></div><div><dt>Решение</dt><dd>{c.solution}</dd></div><div><dt>Результат</dt><dd>{c.result}</dd></div></dl><button type="button" aria-label={`Посмотреть проект ${c.name}`}>Посмотреть проект <b>↗</b></button></div></Reveal>)}</div></div></section>}
