import { Calendar, Info, AlertTriangle, Leaf } from 'lucide-react';
import { motion } from 'motion/react';
import avisosData from '../data/avisos.json';

interface Aviso {
  id: number;
  titulo: string;
  data: string;
  categoria: string;
  conteúdo: string;
  urgente: boolean;
}

export default function MuralAvisos() {
  const avisos: Aviso[] = avisosData;

  const getIcon = (categoria: string) => {
    switch (categoria.toLowerCase()) {
      case 'sustentabilidade': return <Leaf className="w-5 h-5 text-emerald-600" />;
      case 'académico': return <Calendar className="w-5 h-5 text-blue-600" />;
      default: return <Info className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <section id="mural-avisos" className="w-full px-4 py-8 max-w-4xl mx-auto">
      <header className="mb-8 border-b border-emerald-100 pb-4">
        <h2 className="text-2xl font-bold text-emerald-900 flex items-center gap-2">
          <Leaf className="text-emerald-500" />
          Mural Digital de Avisos
        </h2>
        <p className="text-emerald-700 mt-1 italic">
          Reduzindo papel, conectando pessoas na Cecy Leite Costa.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-1">
        {avisos.map((aviso) => (
          <motion.article
            key={aviso.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`relative p-6 rounded-2xl bg-white border shadow-sm transition-all hover:shadow-md ${
              aviso.urgente ? 'border-amber-200 bg-amber-50/30' : 'border-slate-100'
            }`}
          >
            {aviso.urgente && (
              <div className="absolute top-4 right-4 flex items-center gap-1 text-amber-600 font-medium text-xs uppercase tracking-wider">
                <AlertTriangle className="w-3 h-3" />
                Urgente
              </div>
            )}
            
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-xl ${
                aviso.urgente ? 'bg-amber-100' : 'bg-emerald-50'
              }`}>
                {getIcon(aviso.categoria)}
              </div>
              
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-bold text-lg text-slate-900 leading-tight">
                    {aviso.titulo}
                  </h3>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-slate-100 text-slate-600">
                    {aviso.categoria}
                  </span>
                </div>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {aviso.conteúdo}
                </p>
                
                <footer className="text-xs text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  Publicado em: {new Date(aviso.data).toLocaleDateString('pt-PT')}
                </footer>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
