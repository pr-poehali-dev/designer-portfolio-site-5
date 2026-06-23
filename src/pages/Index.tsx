import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const PHOTO =
  'https://cdn.poehali.dev/projects/d62806fd-b968-4116-8c13-a842d132dc5f/files/e10a4c04-197a-4964-9c4d-ba03ca29dad0.jpg';

const cases = [
  {
    img: 'https://cdn.poehali.dev/projects/d62806fd-b968-4116-8c13-a842d132dc5f/files/be6ae6f0-8973-4422-aeab-e01bc3eb6d0e.jpg',
    title: 'B2B SaaS платформа',
    tag: 'Веб-сервис · Дашборд',
    desc: 'Полный редизайн интерфейса аналитики. Сократили время на ключевые сценарии на 40%.',
  },
  {
    img: 'https://cdn.poehali.dev/projects/d62806fd-b968-4116-8c13-a842d132dc5f/files/164f2efb-f4df-4cc9-bf09-9027afb5b339.jpg',
    title: 'Финтех-приложение',
    tag: 'Мобильный продукт',
    desc: 'Дизайн-система и UX для мобильного банка. Конверсия в регистрацию выросла в 1.8 раза.',
  },
  {
    img: 'https://cdn.poehali.dev/projects/d62806fd-b968-4116-8c13-a842d132dc5f/files/b728ae0b-e516-4bf8-8389-b2890421a8c6.jpg',
    title: 'E-commerce магазин',
    tag: 'Интернет-магазин',
    desc: 'Переработали путь покупателя и карточку товара. Средний чек увеличился на 22%.',
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

const reviews = [
  {
    text: 'Анна глубоко погружается в задачу и мыслит как продакт, а не просто рисует экраны. Результат превзошёл ожидания.',
    name: 'Дмитрий К.',
    role: 'CPO, IT-компания',
  },
  {
    text: 'Сделала редизайн в срок, держала связь на каждом этапе. Метрики после релиза заметно выросли.',
    name: 'Елена М.',
    role: 'Маркетолог, B2B',
  },
];

const useReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal');
    if (!els) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
};

const Index = () => {
  const ref = useReveal();
  const ink = 'hsl(var(--ink))';
  const accent = 'hsl(var(--accent))';

  return (
    <div ref={ref} className="min-h-screen" style={{ background: 'hsl(var(--paper))' }}>
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-[hsl(var(--ink))]/10 bg-[hsl(var(--paper))]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <span className="font-display text-base font-extrabold tracking-tight">Анна Палиивец</span>
          <nav className="hidden gap-8 text-sm font-medium text-[hsl(var(--muted-ink))] md:flex">
            <a href="#about" className="link-underline">Обо мне</a>
            <a href="#cases" className="link-underline">Кейсы</a>
            <a href="#education" className="link-underline">Образование</a>
            <a href="#contacts" className="link-underline">Контакты</a>
          </nav>
          <a
            href="#contacts"
            className="rounded-full bg-[hsl(var(--ink))] px-5 py-2.5 text-sm font-semibold text-[hsl(var(--paper))] transition-transform hover:scale-105"
          >
            Написать
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="reveal">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--ink))]/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[hsl(var(--muted-ink))]">
              <span className="h-2 w-2 rounded-full" style={{ background: accent }} />
              Открыта для проектов
            </div>
            <h1 className="font-display text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl">
              UX/UI дизайнер<br />
              с <span style={{ color: accent }}>продуктовым</span><br />
              подходом
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-[hsl(var(--muted-ink))]">
              Работала с IT-консалтингом GlowByte, агентствами Uplab и MAX.
              4+ года делаю сайты и приложения для B2B и B2C.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#cases"
                className="rounded-full bg-[hsl(var(--ink))] px-7 py-3.5 text-sm font-semibold text-[hsl(var(--paper))] transition-transform hover:scale-105"
              >
                Смотреть кейсы
              </a>
              <a
                href="#contacts"
                className="rounded-full border border-[hsl(var(--ink))]/20 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-[hsl(var(--soft))]"
              >
                Обсудить задачу
              </a>
            </div>
          </div>
          <div className="reveal relative" style={{ transitionDelay: '0.15s' }}>
            <div className="overflow-hidden rounded-[32px]" style={{ background: 'hsl(var(--soft))' }}>
              <img src={PHOTO} alt="Анна Палиивец" className="aspect-[4/5] w-full object-cover" />
            </div>
            <div
              className="absolute -bottom-5 -left-5 rounded-2xl px-6 py-4 shadow-xl"
              style={{ background: accent }}
            >
              <div className="font-display text-2xl font-black text-white">50+</div>
              <div className="text-xs font-medium text-white/90">проектов</div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section id="about" className="border-y border-[hsl(var(--ink))]/10 bg-[hsl(var(--soft))]/40">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:grid-cols-3">
          {[
            { num: '4+', label: 'года в дизайне' },
            { num: '50+', label: 'реализованных проектов' },
            { num: '12', label: 'довольных команд' },
          ].map((s, i) => (
            <div key={s.label} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="font-display text-5xl font-black" style={{ color: accent }}>{s.num}</div>
              <div className="mt-2 text-[hsl(var(--muted-ink))]">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="reveal mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: accent }}>Услуги</span>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight sm:text-4xl">Чем могу помочь</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal rounded-3xl border border-[hsl(var(--ink))]/10 bg-white p-7 transition-shadow hover:shadow-lg"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: 'hsl(var(--soft))' }}>
                <Icon name={s.icon} size={22} style={{ color: ink }} />
              </div>
              <h3 className="font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--muted-ink))]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="mx-auto max-w-6xl px-5 py-20">
        <div className="reveal mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: accent }}>Портфолио</span>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight sm:text-4xl">Избранные кейсы</h2>
        </div>
        <div className="space-y-6">
          {cases.map((c, i) => (
            <a
              key={c.title}
              href="#"
              className="reveal group grid gap-6 overflow-hidden rounded-[32px] border border-[hsl(var(--ink))]/10 bg-white transition-shadow hover:shadow-xl md:grid-cols-2"
            >
              <div className="overflow-hidden" style={{ background: 'hsl(var(--soft))' }}>
                <img
                  src={c.img}
                  alt={c.title}
                  className={`aspect-[16/11] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${i % 2 ? 'md:order-2' : ''}`}
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <span className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--muted-ink))]">{c.tag}</span>
                <h3 className="mt-3 font-display text-2xl font-black sm:text-3xl">{c.title}</h3>
                <p className="mt-4 leading-relaxed text-[hsl(var(--muted-ink))]">{c.desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: accent }}>
                  Открыть кейс
                  <Icon name="ArrowRight" size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* EXPERIENCE + EDUCATION */}
      <section id="education" className="border-y border-[hsl(var(--ink))]/10 bg-[hsl(var(--soft))]/40">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 lg:grid-cols-2">
          <div className="reveal">
            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: accent }}>Опыт</span>
            <h2 className="mb-8 mt-3 font-display text-3xl font-black tracking-tight">Где работала</h2>
            <div className="space-y-1">
              {experience.map((e) => (
                <div key={e.company} className="flex items-center justify-between border-b border-[hsl(var(--ink))]/10 py-5">
                  <div>
                    <div className="font-display text-lg font-bold">{e.company}</div>
                    <div className="text-sm text-[hsl(var(--muted-ink))]">{e.role}</div>
                  </div>
                  <span className="text-sm font-medium text-[hsl(var(--muted-ink))]">{e.period}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.15s' }}>
            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: accent }}>Образование</span>
            <h2 className="mb-8 mt-3 font-display text-3xl font-black tracking-tight">Курсы и обучение</h2>
            <div className="space-y-1">
              {education.map((e) => (
                <div key={e.title} className="flex items-center justify-between border-b border-[hsl(var(--ink))]/10 py-5">
                  <div>
                    <div className="font-display text-lg font-bold">{e.title}</div>
                    <div className="text-sm text-[hsl(var(--muted-ink))]">{e.sub}</div>
                  </div>
                  <span className="text-sm font-medium text-[hsl(var(--muted-ink))]">{e.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="reveal mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: accent }}>Отзывы</span>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight sm:text-4xl">Что говорят клиенты</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="reveal rounded-[32px] border border-[hsl(var(--ink))]/10 bg-white p-8 sm:p-10"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <Icon name="Quote" size={32} style={{ color: accent }} />
              <p className="mt-5 text-lg leading-relaxed">{r.text}</p>
              <div className="mt-6">
                <div className="font-display font-bold">{r.name}</div>
                <div className="text-sm text-[hsl(var(--muted-ink))]">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTS / CTA */}
      <section id="contacts" className="mx-auto max-w-6xl px-5 pb-20">
        <div className="reveal overflow-hidden rounded-[40px] px-8 py-16 text-center sm:px-16" style={{ background: ink }}>
          <h2 className="font-display text-3xl font-black tracking-tight text-[hsl(var(--paper))] sm:text-5xl">
            Давайте сделаем<br />
            <span style={{ color: accent }}>сильный продукт</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[hsl(var(--paper))]/70">
            Расскажите о задаче — отвечу в течение дня и предложу решение.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            {[
              { icon: 'Send', label: 'Telegram' },
              { icon: 'Mail', label: 'Email' },
              { icon: 'Briefcase', label: 'Behance' },
            ].map((c) => (
              <a
                key={c.label}
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--paper))] px-6 py-3.5 text-sm font-semibold text-[hsl(var(--ink))] transition-transform hover:scale-105"
              >
                <Icon name={c.icon} size={18} />
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[hsl(var(--ink))]/10 py-8 text-center text-sm text-[hsl(var(--muted-ink))]">
        © 2026 Анна Палиивец · UX/UI дизайнер
      </footer>
    </div>
  );
};

export default Index;
