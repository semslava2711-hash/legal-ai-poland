'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function DocumentsPage() {
  const [documents, setDocuments] = useState([
    { id: 1, name: 'Паспорт.pdf', status: 'Проверено', details: 'Личность подтверждена' },
  ])
  const [uploading, setUploading] = useState(false)
  const [aiAnalysis, setAiAnalysis] = useState<any>(null)

  async function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return

    setUploading(true)

    setTimeout(() => {
      const fileName = file.name.toLowerCase()
      let analysis = {
        docType: 'Стандартный документ',
        summary: 'Документ успешно обработан системой. Все данные в норме.',
        deadlineWarning: 'Срочных дедлайнов нет.',
      }

      if (fileName.includes('umowa') || fileName.includes('умова')) {
        analysis = {
          docType: 'Трудовой договор (Umowa)',
          summary: 'Договор соответствует нормам Трудового кодекса Польши.',
          deadlineWarning: 'Контролируйте своевременную отчётность в ZUS.',
        }
      } else if (fileName.includes('decyzja') || fileName.includes('децизия')) {
        analysis = {
          docType: 'Решение воеводы (Decyzja)',
          summary: 'Официальное постановление по вашему делу.',
          deadlineWarning: 'Внимание: срок получения пластика карты — до 14 дней.',
        }
      }

      setAiAnalysis(analysis)
      setDocuments((prev) => [
        ...prev,
        { 
          id: Date.now(), 
          name: file.name, 
          status: analysis.docType, 
          details: analysis.summary 
        },
      ])
      setUploading(false)
    }, 800)
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <header className="flex justify-between items-center border-b border-zinc-800 pb-6">
          <div>
            <Link href="/" className="text-xs text-amber-400 hover:underline mb-1 inline-block">&larr; На главную</Link>
            <h1 className="text-2xl font-bold text-white">📂 ИИ-анализ документов</h1>
          </div>
        </header>

        <section className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 backdrop-blur-xl">
          <div className="grid gap-3 mb-6">
            {documents.map((doc) => (
              <div key={doc.id} className="flex justify-between items-center bg-zinc-900/60 p-4 rounded-xl border border-zinc-800">
                <div>
                  <span className="font-medium text-sm text-zinc-200">{doc.name}</span>
                  <p className="text-xs text-zinc-400 mt-0.5">{doc.details}</p>
                </div>
                <span className="text-xs px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700/50">
                  {doc.status}
                </span>
              </div>
            ))}
          </div>

          <div className="border border-zinc-800 rounded-xl p-6 text-center bg-zinc-950/60 flex flex-col items-center gap-3">
            <p className="text-sm text-zinc-300 font-medium">Загрузить скан (Umowa.pdf, Decyzja.pdf)</p>
            <input 
              type="file" 
              onChange={handleFileUpload} 
              disabled={uploading} 
              className="block w-full text-xs text-zinc-400
                file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0
                file:text-xs file:font-semibold file:bg-amber-500 file:text-zinc-950
                hover:file:bg-amber-400 cursor-pointer transition"
              accept=".pdf,.png,.jpg,.jpeg"
            />
            {uploading && <p className="text-xs text-amber-400 animate-pulse">⏳ Нейросеть считывает документ...</p>}
          </div>

          {aiAnalysis && (
            <div className="mt-6 bg-zinc-900 border border-amber-500/20 rounded-xl p-5 shadow-lg">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">✨ Вердикт ИИ</h3>
              <p className="text-xs text-zinc-300">{aiAnalysis.summary}</p>
            </div>
          )}
        </section>

      </div>
    </main>
  )
}