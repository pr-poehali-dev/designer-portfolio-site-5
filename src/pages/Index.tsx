import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const smoothScroll = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 72;
  const start = window.scrollY;
  const dist = top - start;
  const duration = 300;
  let startTime: number | null = null;
  const ease = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const step = (ts: number) => {
    if (!startTime) startTime = ts;
    const p = Math.min((ts - startTime) / duration, 1);
    window.scrollTo(0, start + dist * ease(p));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

const PHOTO =
  'https://cdn.poehali.dev/projects/d62806fd-b968-4116-8c13-a842d132dc5f/files/e10a4c04-197a-4964-9c4d-ba03ca29dad0.jpg';

const cases = [
  {
    img: 'https://cdn.poehali.dev/projects/d62806fd-b968-4116-8c13-a842d132dc5f/files/be6ae6f0-8973-4422-aeab-e01bc3eb6d0e.jpg',
    title: 'B2B SaaS платформа',
    tag: 'Веб-сервис · Дашборд',
    desc: 'Полный редизайн интерфейса аналитики. Сократили время на ключевые сценарии на 40%.',
    metric: '−40% времени',
  },
  {
    img: 'https://cdn.poehali.dev/projects/d62806fd-b968-4116-8c13-a842d132dc5f/files/164f2efb-f4df-4cc9-bf09-9027afb5b339.jpg',
    title: 'Финтех-приложение',
    tag: 'Мобильный продукт',
    desc: 'Дизайн-система и UX для мобильного банка. Конверсия в регистрацию выросла в 1.8 раза.',
    metric: '×1.8 конверсия',
  },
  {
    img: 'https://cdn.poehali.dev/projects/d62806fd-b968-4116-8c13-a842d132dc5f/files/b728ae0b-e516-4bf8-8389-b2890421a8c6.jpg',
    title: 'E-commerce магазин',
    tag: 'Интернет-магазин',
    desc: 'Переработали путь покупателя и карточку товара. Средний чек увеличился на 22%.',
    metric: '+22% чек',
  },
];

const services = [
  { icon: 'Search', title: 'UX-исследования', desc: 'Интервью, CJM, тестирование гипотез и поиск точек роста.' },
  { icon: 'Layout', title: 'UI-дизайн', desc: 'Чистые, продающие интерфейсы для сайтов и приложений.' },
  { icon: 'Component', title: 'Дизайн-системы', desc: 'Масштабируемые библиотеки компонентов в Figma.' },
  { icon: 'TrendingUp', title: 'Продуктовый подход', desc: 'Решения, которые работают на метрики бизнеса.' },
];

const experience = [
  { company: 'GlowByte', role: 'Product Designer', period: '2023 — н.в.' },
  { company: 'Uplab', role: 'UX/UI дизайнер', period: '2021 — 2023' },
  { company: 'MAX Agency', role: 'Веб-дизайнер', period: '2020 — 2021' },
];

const education = [
  { title: 'Школа дизайна НИУ ВШЭ', sub: 'Коммуникационный дизайн', year: '2020' },
  { title: 'Bang Bang Education', sub: 'UX/UI продвинутый курс', year: '2021' },
  { title: 'Skillbox', sub: 'Профессия Product Designer', year: '2022' },
];

const useReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal');
    if (!els) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
};

const bg = 'hsl(var(--bg))';
const surface = 'hsl(var(--surface))';
const cardBg = 'hsl(var(--card-bg))';
const accent = 'hsl(var(--accent))';
const borderC = 'hsl(var(--border-c))';
const muted = 'hsl(var(--muted-ink))';

const Index = () => {
  const ref = useReveal();

  return (
    <div ref={ref} className="relative min-h-screen overflow-x-hidden" style={{ background: bg, color: 'hsl(var(--ink))' }}>
      {/* Фоновые эффекты */}
      <div className="bg-grid" />
      <div className="bg-glow-1" />
      <div className="bg-glow-2" />

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b backdrop-blur-xl" style={{ borderColor: borderC, background: 'hsl(var(--bg) / 0.8)' }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <span className="font-display text-base font-extrabold tracking-tight">
            Анна<span style={{ color: accent }}>.</span>
          </span>
          <nav className="hidden gap-8 text-sm font-medium md:flex" style={{ color: muted }}>
            {[['about','Обо мне'],['cases','Кейсы'],['education','Образование'],['contacts','Контакты']].map(([id, label]) => (
              <button key={id} onClick={() => smoothScroll(id)} className="link-underline cursor-pointer bg-transparent border-none p-0 text-inherit">{label}</button>
            ))}
          </nav>
          <button
            onClick={() => smoothScroll('contacts')}
            className="cursor-pointer border rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:scale-105"
            style={{ borderColor: 'hsl(var(--accent) / 0.5)', color: accent, background: 'hsl(var(--accent) / 0.08)' }}
          >
            Написать
          </button>
        </div>
      </header>

      <div className="relative z-10">

        {/* HERO */}
        <section className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_420px]">
            <div className="reveal">
              <div className="mb-8 inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest" style={{ border: `1px solid hsl(var(--accent) / 0.3)`, color: accent, background: 'hsl(var(--accent) / 0.08)' }}>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping" style={{ background: accent }} />
                  <span className="relative h-2 w-2 rounded-full" style={{ background: accent }} />
                </span>
                Открыта для проектов
              </div>
              <h1 className="font-display font-black leading-[0.98] tracking-tight" style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}>
                UX/UI<br />
                дизайнер<br />
                <span style={{ background: 'linear-gradient(135deg, hsl(var(--accent)), hsl(var(--accent2)))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>с продуктовым</span><br />
                подходом
              </h1>
              <p className="mt-7 max-w-lg text-lg leading-relaxed" style={{ color: muted }}>
                Работала с IT-консалтингом GlowByte, агентствами Uplab и MAX.
                4+ года делаю сайты и приложения для B2B и B2C.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <button
                  onClick={() => smoothScroll('cases')}
                  className="cursor-pointer rounded-full border-none px-8 py-4 text-sm font-bold text-white transition-all hover:scale-105 hover:shadow-lg"
                  style={{ background: `linear-gradient(135deg, hsl(var(--accent)), hsl(var(--accent2)))`, boxShadow: `0 0 0 0 hsl(var(--accent) / 0)` }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 8px 32px hsl(var(--accent) / 0.4)')}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
                >
                  Смотреть кейсы
                </button>
                <button
                  onClick={() => smoothScroll('contacts')}
                  className="cursor-pointer rounded-full px-8 py-4 text-sm font-bold transition-all hover:scale-105"
                  style={{ border: `1px solid ${borderC}`, background: cardBg, color: 'hsl(var(--ink))' }}
                >
                  Обсудить задачу
                </button>
              </div>
            </div>

            <div className="reveal relative" style={{ transitionDelay: '0.2s' }}>
              {/* Декор-рамка */}
              <div className="absolute -inset-3 rounded-[40px] opacity-40" style={{ background: `linear-gradient(135deg, hsl(var(--accent) / 0.3), hsl(var(--accent2) / 0.15))`, filter: 'blur(20px)' }} />
              <div className="relative overflow-hidden rounded-[32px] border" style={{ borderColor: 'hsl(var(--accent) / 0.2)', background: cardBg }}>
                <img src={PHOTO} alt="Анна Палиивец" className="aspect-[3/4] w-full object-cover opacity-90" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, hsl(var(--bg) / 0.5) 0%, transparent 50%)' }} />
              </div>
              {/* Плашка */}
              <div className="absolute -bottom-4 -right-4 rounded-2xl border px-5 py-3.5 backdrop-blur-xl" style={{ borderColor: 'hsl(var(--accent) / 0.3)', background: 'hsl(var(--bg) / 0.85)' }}>
                <div className="num-accent font-display text-2xl font-black">50+</div>
                <div className="text-xs font-medium" style={{ color: muted }}>проектов</div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section id="about" className="border-y" style={{ borderColor: borderC, background: surface }}>
          <div className="mx-auto grid max-w-6xl gap-0 px-5 py-14 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x" style={{ '--tw-divide-opacity': 1 } as React.CSSProperties}>
            {[
              { num: '4+', label: 'года в дизайне' },
              { num: '50+', label: 'реализованных проектов' },
              { num: '12', label: 'довольных команд' },
            ].map((s, i) => (
              <div key={s.label} className="reveal px-8 py-6 first:pl-0 last:pr-0" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="num-accent font-display text-6xl font-black">{s.num}</div>
                <div className="mt-2 text-base" style={{ color: muted }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="mx-auto max-w-6xl px-5 py-24">
          <div className="reveal mb-14">
            <span className="accent-tag">Услуги</span>
            <h2 className="mt-4 font-display text-3xl font-black tracking-tight sm:text-5xl">Чем могу помочь</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="reveal card-hover rounded-3xl border p-7"
                style={{ transitionDelay: `${i * 0.08}s`, borderColor: borderC, background: cardBg }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: 'hsl(var(--accent) / 0.12)', border: '1px solid hsl(var(--accent) / 0.2)' }}>
                  <Icon name={s.icon} size={22} style={{ color: accent }} />
                </div>
                <h3 className="font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: muted }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CASES */}
        <section id="cases" className="border-t" style={{ borderColor: borderC, background: surface }}>
          <div className="mx-auto max-w-6xl px-5 py-24">
            <div className="reveal mb-14">
              <span className="accent-tag">Портфолио</span>
              <h2 className="mt-4 font-display text-3xl font-black tracking-tight sm:text-5xl">Избранные кейсы</h2>
            </div>
            <div className="space-y-5">
              {cases.map((c, i) => (
                <a
                  key={c.title}
                  href="#"
                  className="reveal group grid overflow-hidden rounded-[32px] border transition-all duration-500 hover:-translate-y-1 md:grid-cols-2"
                  style={{ borderColor: borderC, background: cardBg, transitionDelay: `${i * 0.08}s` }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'hsl(var(--accent) / 0.4)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 60px hsl(var(--accent) / 0.12)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = borderC; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
                >
                  <div className={`relative overflow-hidden ${i % 2 ? 'md:order-2' : ''}`} style={{ background: 'hsl(var(--bg))' }}>
                    <img src={c.img} alt={c.title} className="aspect-[16/10] h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105" />
                    <div className="absolute bottom-4 left-4">
                      <span className="rounded-full px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md" style={{ background: 'hsl(var(--accent) / 0.85)' }}>{c.metric}</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center p-8 sm:p-12">
                    <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: muted }}>{c.tag}</span>
                    <h3 className="mt-3 font-display text-2xl font-black sm:text-3xl">{c.title}</h3>
                    <p className="mt-4 leading-relaxed" style={{ color: muted }}>{c.desc}</p>
                    <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold" style={{ color: accent }}>
                      Открыть кейс
                      <Icon name="ArrowRight" size={16} className="transition-transform duration-300 group-hover:translate-x-2" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE + EDUCATION */}
        <section id="education" className="mx-auto max-w-6xl px-5 py-24">
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="reveal">
              <span className="accent-tag">Опыт</span>
              <h2 className="mb-10 mt-4 font-display text-3xl font-black tracking-tight sm:text-4xl">Где работала</h2>
              {experience.map((e, i) => (
                <div key={e.company} className="group flex items-center justify-between border-b py-6 transition-colors" style={{ borderColor: borderC }}
                  onMouseEnter={el => (el.currentTarget.style.borderColor = 'hsl(var(--accent) / 0.4)')}
                  onMouseLeave={el => (el.currentTarget.style.borderColor = borderC)}
                >
                  <div>
                    <div className="font-display text-xl font-bold transition-colors group-hover:text-[hsl(var(--accent))]">{e.company}</div>
                    <div className="text-sm mt-0.5" style={{ color: muted }}>{e.role}</div>
                  </div>
                  <span className="rounded-full border px-3 py-1 text-xs font-medium" style={{ borderColor: borderC, color: muted }}>{e.period}</span>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ transitionDelay: '0.15s' }}>
              <span className="accent-tag">Образование</span>
              <h2 className="mb-10 mt-4 font-display text-3xl font-black tracking-tight sm:text-4xl">Курсы и обучение</h2>
              {education.map((e) => (
                <div key={e.title} className="group flex items-center justify-between border-b py-6 transition-colors" style={{ borderColor: borderC }}
                  onMouseEnter={el => (el.currentTarget.style.borderColor = 'hsl(var(--accent) / 0.4)')}
                  onMouseLeave={el => (el.currentTarget.style.borderColor = borderC)}
                >
                  <div>
                    <div className="font-display text-xl font-bold transition-colors group-hover:text-[hsl(var(--accent))]">{e.title}</div>
                    <div className="text-sm mt-0.5" style={{ color: muted }}>{e.sub}</div>
                  </div>
                  <span className="rounded-full border px-3 py-1 text-xs font-medium" style={{ borderColor: borderC, color: muted }}>{e.year}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTS */}
        <section id="contacts" className="mx-auto max-w-6xl px-5 pb-24">
          <div className="reveal relative overflow-hidden rounded-[40px] border px-8 py-20 text-center sm:px-16" style={{ borderColor: 'hsl(var(--accent) / 0.25)', background: cardBg }}>
            {/* Декор внутри блока */}
            <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-60 w-60 rounded-full opacity-30" style={{ background: 'radial-gradient(circle, hsl(var(--accent) / 0.5), transparent 70%)', filter: 'blur(40px)' }} />
            <div className="relative">
              <span className="accent-tag">Контакты</span>
              <h2 className="mt-5 font-display font-black tracking-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                Давайте сделаем<br />
                <span style={{ background: 'linear-gradient(135deg, hsl(var(--accent)), hsl(var(--accent2)))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  сильный продукт
                </span>
              </h2>
              <p className="mx-auto mt-5 max-w-md text-lg" style={{ color: muted }}>
                Расскажите о задаче — отвечу в течение дня и предложу решение.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                {[
                  { icon: 'Send', label: 'Telegram', href: 'https://t.me/badbox' },
                  { icon: 'Mail', label: 'Email', href: 'mailto:badbox-x@yandex.ru' },
                  { icon: 'Briefcase', label: 'Behance', href: 'https://www.behance.net/b619f6e9' },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border px-7 py-4 text-sm font-bold transition-all hover:scale-105"
                    style={{ borderColor: 'hsl(var(--accent) / 0.3)', color: accent, background: 'hsl(var(--accent) / 0.08)' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'hsl(var(--accent) / 0.18)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px hsl(var(--accent) / 0.25)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'hsl(var(--accent) / 0.08)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
                  >
                    <Icon name={c.icon} size={18} />
                    {c.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>

      <footer className="relative z-10 border-t py-8 text-center text-sm" style={{ borderColor: borderC, color: muted }}>
        © 2026 Анна Палиивец · UX/UI дизайнер
      </footer>
    </div>
  );
};

export default Index;
