import Icon from "@/components/ui/icon"

const techStack = [
  {
    icon: "Cpu",
    title: "1024 нейронных канала",
    description: "Одновременная запись и стимуляция более тысячи нейронов с субмиллисекундной точностью.",
  },
  {
    icon: "Wifi",
    title: "Беспроводная передача",
    description: "Зашифрованный канал связи со скоростью до 1 Гбит/с. Никаких проводов, полная свобода движения.",
  },
  {
    icon: "Shield",
    title: "Биосовместимые материалы",
    description: "Покрытие из нанопористого полимера интегрируется с нервной тканью, минимизируя иммунный ответ.",
  },
  {
    icon: "Zap",
    title: "Энергопотребление 5 мВт",
    description: "Ультраэффективная архитектура. Заряд от беспроводной зарядки — один раз в сутки.",
  },
]

export function TechnologySection() {
  return (
    <section id="technology" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-white mb-6">
            Технология, опережающая время
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Под корпусом SynapseAI — десятилетие исследований и инженерных прорывов, сжатых в устройство размером с монету.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {techStack.map((item, index) => (
            <div
              key={index}
              className="flex gap-6 p-8 border border-red-500/20 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                <Icon name={item.icon} fallback="Cpu" size={24} className="text-red-400" />
              </div>
              <div>
                <h3 className="font-orbitron text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative rounded-3xl overflow-hidden border border-red-500/20">
          <img
            src="/futuristic-cyberpunk-laboratory-with-holographic-d.jpg"
            alt="SynapseAI лаборатория"
            className="w-full h-72 md:h-96 object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent flex items-center">
            <div className="px-10 md:px-16 max-w-lg">
              <p className="font-orbitron text-red-400 text-sm uppercase tracking-widest mb-4">Лаборатория</p>
              <h3 className="text-white font-bold text-2xl md:text-3xl mb-4 leading-tight">
                Разработано в&nbsp;среде мирового класса
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Каждый чип проходит 2000+ тестов перед имплантацией. Наши инженеры и нейробиологи работают в&nbsp;одной команде.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
