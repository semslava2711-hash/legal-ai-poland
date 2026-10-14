'use client'

import Link from 'next/link'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-amber-500/30 overflow-x-hidden">
      
      {/* Навигация */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900/80">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight text-white">LegalAI <span className="text-amber-500">Poland</span></span>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link href="/documents" className="text-zinc-400 hover:text-zinc-100 transition">Документы</Link>
            <Link href="/generator" className="text-zinc-400 hover:text-zinc-100 transition">Генератор писем</Link>
            <Link href="/roadmap" className="text-zinc-400 hover:text-zinc-100 transition">Трек легализации</Link>
          </div>
        </div>
      </nav>

      {/* Секция 1: Главный экран (Hero) */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
        {/* Затемненный фоновый элемент с генеративной картинкой */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/90 to-zinc-950 z-10" />
          <img 
            src="image_generation_content/4732890711819552020" 
            alt="Background aesthetic" 
            className="w-full h-full object-cover scale-105 transform transition duration-1000"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium">
            ✨ Твой персональный ИИ-юрист по переезду в Польшу
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Легализация в Польше <br />
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              без стресса и бюрократии
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto">
            Платформа для мигрантов, студентов и специалистов. Сканируйте договоры с помощью ИИ, 
            создавайте официальные запросы в Ужонд за секунды и отслеживайте статус дела.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link href="/documents" className="px-6 py-3 rounded-xl bg-amber-500 text-zinc-950 font-semibold text-sm hover:bg-amber-400 transition shadow-lg shadow-amber-500/10">
              Попробовать ИИ-анализ
            </Link>
            <Link href="/generator" className="px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 font-semibold text-sm hover:bg-zinc-800 transition">
              Создать письмо в Urząd
            </Link>
          </div>
        </div>
      </section>

      {/* Секция 2: Разделы-путеводитель (Карточки) */}
      <section className="relative py-24 px-6 border-t border-zinc-950">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Всё необходимое для адаптации в одном месте</h2>
            <p className="text-sm text-zinc-400">Выберите нужный инструмент для решения вашей задачи</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/documents" className="group relative bg-zinc-900/40 border border-zinc-800/80 hover:border-amber-500/40 p-6 rounded-2xl transition backdrop-blur-xl flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 text-lg mb-4">
                  📂
                </div>
                <h3 className="font-semibold text-zinc-100 group-hover:text-amber-400 transition">ИИ-анализ документов</h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">Загружайте сканы трудовых договоров и решений. ИИ выявит подводные камни и дедлайны.</p>
              </div>
              <span className="relative z-10 text-xs font-medium text-amber-400 mt-6 flex items-center gap-1">Перейти к сканеру &rarr;</span>
            </Link>

            <Link href="/generator" className="group relative bg-zinc-900/40 border border-zinc-800/80 hover:border-amber-500/40 p-6 rounded-2xl transition backdrop-blur-xl flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 text-lg mb-4">
                  ✉️
                </div>
                <h3 className="font-semibold text-zinc-100 group-hover:text-amber-400 transition">Конструктор писем в Urząd</h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">Генерация юридически точных запросов (Ponaglenie, Uzupełnienie) по стандартам KPA.</p>
              </div>
              <span className="relative z-10 text-xs font-medium text-amber-400 mt-6 flex items-center gap-1">Создать письмо &rarr;</span>
            </Link>

            <Link href="/roadmap" className="group relative bg-zinc-900/40 border border-zinc-800/80 hover:border-amber-500/40 p-6 rounded-2xl transition backdrop-blur-xl flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 text-lg mb-4">
                  🗺️
                </div>
                <h3 className="font-semibold text-zinc-100 group-hover:text-amber-400 transition">Трек легализации</h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">Пошаговый путеводитель по этапам получения карты побыта и адаптации в стране.</p>
              </div>
              <span className="relative z-10 text-xs font-medium text-amber-400 mt-6 flex items-center gap-1">Открыть трек &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Секция 3: Частые проблемы и наши решения (с фоновой картинкой конструктора писем) */}
      <section className="relative py-24 px-6 overflow-hidden border-t border-zinc-900/60">
        {/* Фоновое изображение с ручкой и бумагой, затемненное для атмосферы */}
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-zinc-950 z-10" />
          <img 
            src="image_generation_content/14483121214544147557" 
            alt="Workspace paperwork aesthetic" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Решаем главные боли при переезде</h2>
            <p className="text-sm text-zinc-400">С чем сталкивается каждый мигрант и как LegalAI помогает этого избежать</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900/60 border border-zinc-800/80 p-6 rounded-2xl backdrop-blur-md space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">Проблема 01</span>
              <h3 className="text-base font-semibold text-white">Риск отказа из-за ошибок в договоре</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Непроверенная umowa zlecenia или ошибки в расчетах ZUS часто служат поводом для затягивания дела в воеводстве. 
                <strong className="text-zinc-200 block mt-2">Решение:</strong> Наш ИИ проверяет документ за 2 секунды и указывает на слабые места.
              </p>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800/80 p-6 rounded-2xl backdrop-blur-md space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">Проблема 02</span>
              <h3 className="text-base font-semibold text-white">Затягивание сроков со стороны Ужонда</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Месяцы тишины после подачи документов выматывают и оставляют в правовой неопределенности. 
                <strong className="text-zinc-200 block mt-2">Решение:</strong> Юридический конструктор мгновенно формирует готовое *Ponaglenie* по закону KPA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="border-t border-zinc-900 py-8 text-center text-xs text-zinc-500">
        LegalAI Poland MVP &bull; Создано для уверенной жизни и работы в Польше
      </footer>

    </main>
  )
}