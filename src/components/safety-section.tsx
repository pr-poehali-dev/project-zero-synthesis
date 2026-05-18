import Icon from "@/components/ui/icon"

const safetyPoints = [
  {
    icon: "ShieldCheck",
    title: "Одобрено FDA",
    description: "Полное соответствие стандартам FDA класса III для имплантируемых нейроустройств.",
  },
  {
    icon: "Lock",
    title: "Шифрование AES-256",
    description: "Все нейронные данные шифруются прямо на чипе — ни один бит не покидает устройство в открытом виде.",
  },
  {
    icon: "Eye",
    title: "Прозрачность данных",
    description: "Вы владеете своими данными. Никаких сторонних продаж. Полный экспорт и удаление в любой момент.",
  },
  {
    icon: "RotateCcw",
    title: "Полностью обратимо",
    description: "Устройство извлекается без последствий. Нейронная ткань восстанавливается полностью.",
  },
]

export function SafetySection() {
  return (
    <section id="safety" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-orbitron text-red-400 text-sm uppercase tracking-widest mb-4">Безопасность</p>
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Безопасность — это не функция.<br />Это фундамент.
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Мы разработали SynapseAI по стандартам, которые превышают требования регуляторов. Каждый аспект — от материалов до программного обеспечения — прошёл независимую проверку.
            </p>
            <div className="flex items-center gap-4 p-4 border border-red-500/20 rounded-xl bg-red-500/5">
              <Icon name="CheckCircle" size={24} className="text-red-400 flex-shrink-0" />
              <p className="text-gray-300 text-sm">
                <span className="text-white font-semibold">12 лет клинических испытаний</span> — более 3000 участников в 14 странах мира.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {safetyPoints.map((point, index) => (
              <div
                key={index}
                className="p-6 border border-red-500/20 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center mb-4">
                  <Icon name={point.icon} fallback="Shield" size={20} className="text-red-400" />
                </div>
                <h3 className="text-white font-bold mb-2">{point.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
