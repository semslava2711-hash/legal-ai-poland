'use client'

import Link from 'next/link'

export default function RoadmapPage() {
  const tracks = [
    { id: 1, title: 'Подача на карту побыта в Ужонд', status: 'completed', desc: 'Документы собраны и отправлены' },
    { id: 2, title: 'Ожидание децизии (решения)', status: 'in_progress', desc: 'Средний срок рассмотрения: 4-6 месяцев' },
    { id: 3, title: 'Сдача отпечатков пальцев', status: 'pending', desc: 'Ожидает назначения даты' },
  ]

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <header className="flex justify-between items-center border-b border-zinc-800 pb-6">
          <div>
            <Link href="/" className="text-xs text-amber-400 hover:underline mb-1 inline-block">&larr; На главную</Link>
            <h1 className="text-2xl font-bold text-white">🗺️ Трек легализации</h1>
          </div>
        </header>

        <section className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 backdrop-blur-xl">
          <div className="space-y-4">
            {tracks.map((track, index) => (
              <div key={track.id} className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="w-7 h-7 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-semibold text-xs shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-sm text-zinc-200">{track.title}</h3>
                  <p className="text-xs text-zinc-400 mt-0.5">{track.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}