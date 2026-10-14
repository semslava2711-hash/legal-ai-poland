'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function GeneratorPage() {
  const [caseNumber, setCaseNumber] = useState('')
  const [applicantName, setApplicantName] = useState('')
  const [letterType, setLetterType] = useState('ponaglenie')
  const [generatedLetter, setGeneratedLetter] = useState('')
  const [generatingLetter, setGeneratingLetter] = useState(false)

  function handleGenerateLetter(e: React.FormEvent) {
    e.preventDefault()
    setGeneratingLetter(true)

    setTimeout(() => {
      const currentDate = new Date().toLocaleDateString('pl-PL')
      let text = ''

      if (letterType === 'ponaglenie') {
        text = `Miejscowość: Polska, Dnia ${currentDate}\n\n` +
          `Wnioskodawca:\n${applicantName || '[Имя Фамилия]'}\n` +
          `Sygnatura sprawy: ${caseNumber || '[Номер дела]'}\n\n` +
          `Do:\nWojewoda / Wydział Spraw Obywatelskich i Cudzoziemców\n\n` +
          `WNOSEK O UPOMNIENIE (PONAGLENIE)\n\n` +
          `Działając na podstawie art. 37 § 1 ustawy KPA, niniejszym wnoszę o ponaglenie rozpatrzenia mojej sprawy dotyczącej pobytu czasowego.\n\n` +
          `Z poważaniem,\n${applicantName || '[Подпись]'}`
      } else {
        text = `Miejscowość: Polska, Dnia ${currentDate}\n\n` +
          `Wnioskodawca:\n${applicantName || '[Имя Фамилия]'}\n` +
          `Sygnatura sprawy: ${caseNumber || '[Номер дела]'}\n\n` +
          `Do:\nWydział Spraw Obywatelskich i Cudzoziemców\n\n` +
          `UZUPEŁNIENIE DOKUMENTÓW\n\n` +
          `Przesyłam wymagane dokumenty w toku postępowania.\n\n` +
          `Z poważaniem,\n${applicantName || '[Подпись]'}`
      }

      setGeneratedLetter(text)
      setGeneratingLetter(false)
    }, 600)
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <header className="flex justify-between items-center border-b border-zinc-800 pb-6">
          <div>
            <Link href="/" className="text-xs text-amber-400 hover:underline mb-1 inline-block">&larr; На главную</Link>
            <h1 className="text-2xl font-bold text-white">✉️ Конструктор писем в Urząd</h1>
          </div>
        </header>

        <section className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 backdrop-blur-xl">
          <form onSubmit={handleGenerateLetter} className="space-y-4 mb-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Имя и Фамилия</label>
                <input 
                  type="text" 
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  placeholder="Viacheslav ..."
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-amber-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Sygnatura sprawy (Номер дела)</label>
                <input 
                  type="text" 
                  value={caseNumber}
                  onChange={(e) => setCaseNumber(e.target.value)}
                  placeholder="WSC-I.6181.X.2026"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1">Тип запроса</label>
              <select 
                value={letterType}
                onChange={(e) => setLetterType(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-amber-500"
              >
                <option value="ponaglenie">Ponaglenie (Ускорение рассмотрения дела)</option>
                <option value="uzupelnienie">Uzupełnienie dokumentów (Досылка справок)</option>
              </select>
            </div>

            <button 
              type="submit"
              disabled={generatingLetter}
              className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold rounded-xl text-sm transition cursor-pointer"
            >
              {generatingLetter ? '⏳ Генерация...' : 'Сгенерировать документ'}
            </button>
          </form>

          {generatedLetter && (
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-medium text-amber-400">Готовый текст</span>
                <button 
                  onClick={() => navigator.clipboard.writeText(generatedLetter)}
                  className="text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-200 px-3 py-1 rounded-lg transition"
                >
                  📋 Копировать
                </button>
              </div>
              <pre className="text-xs text-zinc-300 font-mono whitespace-pre-wrap bg-zinc-900 p-4 rounded-lg">
                {generatedLetter}
              </pre>
            </div>
          )}
        </section>

      </div>
    </main>
  )
}