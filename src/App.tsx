/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Blog from './components/Blog';

export default function App() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans antialiased">
      {/* Header institucional */}
      <header className="bg-emerald-800 text-white py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-700 text-emerald-100 text-xs font-bold tracking-widest mb-6 border border-emerald-600 uppercase">
            Projeto Escolar 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 font-serif leading-tight">
            Manifesto Cecy Digital
          </h1>
          <p className="text-emerald-100 md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Nossa proposta para eliminar o desperdício de papel na Escola Estadual Cecy Leite Costa, usando a tecnologia que já está em nossas mãos.
          </p>
          <div className="mt-12 flex items-center justify-center gap-4 text-emerald-200 text-sm font-medium">
             <span>Por: Grupo de 5 Alunos</span>
             <span>•</span>
             <span>Passo Fundo, RS</span>
          </div>
        </div>
      </header>

      {/* Blog Posts */}
      <div className="bg-white">
        <Blog />
      </div>

      {/* Footer minimalista */}
      <footer className="py-10 text-center text-slate-500 text-sm border-t border-slate-200 mt-12 bg-white">
        <p className="font-medium text-slate-600 mb-2">
          &copy; 2026 Portal Cecy Digital &bull; E.E. Cecy Leite Costa, Passo Fundo
        </p>
        <p>Inovação, tecnologia e sustentabilidade construindo o futuro da nossa escola.</p>
      </footer>
    </main>
  );
}

