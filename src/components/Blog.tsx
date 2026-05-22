import { useState } from 'react';
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import postsData from '../data/posts.json';

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  content: string;
}

export default function Blog() {
  const posts: BlogPost[] = postsData;
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Trabalhos Escolares': return 'bg-rose-100 text-rose-700';
      case 'Dicas para o Dia a Dia': return 'bg-blue-100 text-blue-700';
      case 'Dentro da Sala de Aula': return 'bg-amber-100 text-amber-700';
      case 'Inovação': return 'bg-purple-100 text-purple-700';
      default: return 'bg-emerald-100 text-emerald-700';
    }
  };

  return (
    <section className="w-full px-5 py-12 md:py-20 max-w-5xl mx-auto">
      <AnimatePresence mode="wait">
        {!selectedPost ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-16">
              <p className="text-xl md:text-2xl text-slate-700 font-serif leading-relaxed max-w-3xl mx-auto">
                Nós somos um grupo de 5 alunos e escrevemos este manifesto para provar que a sustentabilidade não precisa ser cara nem uma ideia distante. 
                <strong> Escolha um dos tópicos abaixo para ler nossa proposta.</strong>
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {posts.map((post) => (
                <article 
                  key={post.id} 
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer p-6 md:p-8"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                    <span className="text-sm text-slate-400 flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-emerald-700 transition-colors font-serif leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-8 leading-relaxed flex-1">
                    {post.summary}
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-end">
                    <span className="text-emerald-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Ler Artigo <ArrowRight className="w-5 h-5" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.article
            key="post"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-6 md:p-12 border border-slate-100 shadow-lg max-w-3xl mx-auto"
          >
            <button 
              onClick={() => setSelectedPost(null)}
              className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 font-medium mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" /> Voltar para os tópicos
            </button>

            <header className="mb-10 text-center">
              <span className={`inline-block text-sm font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6 ${getCategoryColor(selectedPost.category)}`}>
                {selectedPost.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 font-serif leading-tight">
                {selectedPost.title}
              </h1>
            </header>

            <div className="prose prose-lg md:prose-xl prose-emerald max-w-none prose-headings:font-serif prose-p:text-slate-800 prose-p:leading-relaxed prose-strong:text-emerald-900 prose-li:text-slate-800">
              <ReactMarkdown>{selectedPost.content}</ReactMarkdown>
            </div>
            
            <div className="mt-16 pt-8 border-t border-slate-100 flex justify-center">
              <button 
                onClick={() => setSelectedPost(null)}
                className="px-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-full transition-colors flex items-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" /> Ler outros tópicos
              </button>
            </div>
          </motion.article>
        )}
      </AnimatePresence>
    </section>
  );
}
