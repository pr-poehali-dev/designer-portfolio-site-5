import Icon from '@/components/ui/icon';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/d62806fd-b968-4116-8c13-a842d132dc5f/files/1be1eee8-d087-49fc-bdcf-e249966b58af.jpg';

const projects = [
  { title: 'Brand Identity', tag: 'Айдентика', color: 'hsl(var(--lime))', ink: true },
  { title: 'Mobile App UI', tag: 'Интерфейсы', color: 'hsl(var(--cobalt))', ink: false },
  { title: 'Editorial', tag: 'Полиграфия', color: 'hsl(var(--hot))', ink: false },
  { title: '3D Visual', tag: 'Графика', color: 'hsl(var(--tangerine))', ink: true },
];

const stack = ['Figma', 'Photoshop', 'Blender', 'After Effects', 'Illustrator', 'Cinema 4D'];

const Index = () => {
  return (
    <div className="min-h-screen w-full" style={{ background: 'hsl(var(--ink))' }}>
      <div className="mx-auto max-w-6xl px-4 py-6 sm:py-10">
        {/* TOP BAR */}
        <header className="mb-6 flex items-center justify-between animate-bento-in">
          <span className="font-display text-lg font-extrabold tracking-tight text-[hsl(var(--cream))]">
            ✦ NOVA<span className="text-[hsl(var(--lime))]">.</span>
          </span>
          <a
            href="#"
            className="rounded-full bg-[hsl(var(--cream))] px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-wide text-[hsl(var(--ink))] transition-transform hover:scale-105"
          >
            Связаться
          </a>
        </header>

        {/* BENTO GRID */}
        <main className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {/* HERO / BIO */}
          <section
            className="bento-card col-span-2 row-span-2 grain flex flex-col justify-between animate-bento-in"
            style={{ background: 'hsl(var(--cream))', animationDelay: '0.05s' }}
          >
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[hsl(var(--ink))] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[hsl(var(--cream))]">
                <span className="h-2 w-2 rounded-full bg-[hsl(var(--lime))]" />
                Доступен для проектов
              </div>
              <h1 className="font-display text-4xl font-black leading-[0.95] tracking-tight text-[hsl(var(--ink))] sm:text-6xl">
                Привет, я Анна —<br />
                <span className="text-[hsl(var(--tangerine))]">дизайнер</span>
              </h1>
            </div>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[hsl(var(--ink))]/70 sm:text-lg">
              Создаю смелые визуальные системы, айдентику и интерфейсы. 6 лет превращаю
              идеи брендов в запоминающийся дизайн.
            </p>
          </section>

          {/* IMAGE TILE */}
          <section
            className="bento-card col-span-2 row-span-2 animate-bento-in p-0"
            style={{ animationDelay: '0.1s' }}
          >
            <img src={HERO_IMG} alt="Работа" className="h-full w-full object-cover" />
          </section>

          {/* STAT */}
          <section
            className="bento-card animate-bento-in flex flex-col justify-between"
            style={{ background: 'hsl(var(--cobalt))', animationDelay: '0.15s' }}
          >
            <Icon name="Sparkles" size={26} className="text-white" />
            <div>
              <div className="font-display text-4xl font-black text-white sm:text-5xl">120+</div>
              <div className="text-sm text-white/70">проектов</div>
            </div>
          </section>

          {/* SHOWREEL */}
          <section
            className="bento-card group animate-bento-in flex flex-col justify-between"
            style={{ background: 'hsl(var(--lilac))', animationDelay: '0.2s' }}
          >
            <Icon
              name="Play"
              size={26}
              className="text-[hsl(var(--ink))] transition-transform group-hover:scale-125"
            />
            <div>
              <div className="font-display text-xl font-extrabold text-[hsl(var(--ink))]">
                Шоурил 2026
              </div>
              <div className="text-sm text-[hsl(var(--ink))]/60">смотреть видео →</div>
            </div>
          </section>

          {/* BEHANCE */}
          <a
            href="#"
            className="bento-card group col-span-2 animate-bento-in flex items-center justify-between"
            style={{ background: 'hsl(var(--lime))', animationDelay: '0.25s' }}
          >
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--ink))]/60">
                Портфолио
              </div>
              <div className="font-display text-2xl font-black text-[hsl(var(--ink))] sm:text-3xl">
                Behance
              </div>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[hsl(var(--ink))] text-[hsl(var(--cream))] transition-transform group-hover:rotate-12">
              <Icon name="ArrowUpRight" size={28} />
            </div>
          </a>

          {/* PROJECTS */}
          {projects.map((p, i) => (
            <a
              key={p.title}
              href="#"
              className="bento-card group animate-bento-in flex flex-col justify-between"
              style={{ background: p.color, animationDelay: `${0.3 + i * 0.05}s` }}
            >
              <div
                className={`text-xs font-semibold uppercase tracking-wider ${
                  p.ink ? 'text-[hsl(var(--ink))]/60' : 'text-white/60'
                }`}
              >
                {p.tag}
              </div>
              <div
                className={`font-display mt-8 text-xl font-extrabold leading-tight ${
                  p.ink ? 'text-[hsl(var(--ink))]' : 'text-white'
                }`}
              >
                {p.title}
              </div>
              <Icon
                name="ArrowRight"
                size={20}
                className={`mt-3 transition-transform group-hover:translate-x-1 ${
                  p.ink ? 'text-[hsl(var(--ink))]' : 'text-white'
                }`}
              />
            </a>
          ))}

          {/* SOCIAL LINKS */}
          <section
            className="bento-card col-span-2 animate-bento-in flex flex-col justify-between"
            style={{ background: 'hsl(var(--cream))', animationDelay: '0.5s' }}
          >
            <div className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--ink))]/60">
              Соцсети
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {[
                { icon: 'Instagram', label: 'Instagram' },
                { icon: 'Send', label: 'Telegram' },
                { icon: 'Dribbble', label: 'Dribbble' },
                { icon: 'Mail', label: 'Email' },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="flex items-center gap-2 rounded-full bg-[hsl(var(--ink))] px-4 py-2.5 text-sm font-medium text-[hsl(var(--cream))] transition-transform hover:scale-105"
                >
                  <Icon name={s.icon} size={16} />
                  {s.label}
                </a>
              ))}
            </div>
          </section>

          {/* TOOLS */}
          <section
            className="bento-card col-span-2 animate-bento-in flex flex-col justify-between"
            style={{ background: 'hsl(var(--tangerine))', animationDelay: '0.55s' }}
          >
            <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
              Инструменты
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/30 px-3 py-1.5 text-sm font-medium text-white"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>
        </main>

        {/* MARQUEE FOOTER */}
        <footer className="mt-3 overflow-hidden rounded-[28px] bg-[hsl(var(--cobalt))] py-5 sm:mt-4">
          <div className="flex w-max animate-marquee whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, i) => (
              <span
                key={i}
                className="font-display text-2xl font-black uppercase tracking-tight text-white sm:text-3xl"
              >
                Открыта для сотрудничества&nbsp;✦&nbsp;Брендинг&nbsp;✦&nbsp;UI/UX&nbsp;✦&nbsp;3D&nbsp;✦&nbsp;
              </span>
            ))}
          </div>
        </footer>

        <p className="mt-6 text-center text-xs text-[hsl(var(--cream))]/40">
          © 2026 Анна Нова — дизайнер
        </p>
      </div>
    </div>
  );
};

export default Index;
