import { useEffect, useState } from 'react';

const links = [['Услуги','services'],['Кейсы','cases'],['Процесс','process'],['Цены','pricing'],['FAQ','faq']];

export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => { const close = () => setOpen(false); window.addEventListener('resize', close); return () => window.removeEventListener('resize', close); }, []);
  return <header className="header"><div className="container nav">
    <a className="logo" href="#top" aria-label="NORTH, на главную">NORTH<span>/</span></a>
    <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Основная навигация">{links.map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-mobile-cta" href="#contact">Обсудить проект</a></nav>
    <a className="button button-small nav-cta" href="#contact">Обсудить проект <span>↗</span></a>
    <button className={open ? 'menu-button active' : 'menu-button'} onClick={() => setOpen(!open)} aria-label={open ? 'Закрыть меню' : 'Открыть меню'} aria-expanded={open}><i></i><i></i></button>
  </div></header>;
}
