const FinanceCards = () => {
  const cards = [
    {
      title: "Personal Finance",
      icon: "👤",
      bgColor: "bg-blue-700",
      description: "Tailored financing solutions for individuals"
    },
    {
      title: "Real Estate Finance",
      icon: "🏢",
      bgColor: "bg-white",
      textColor: "text-blue-700",
      borderColor: "border-2 border-blue-700",
      description: "Property financing made simple"
    }
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 z-20 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${card.bgColor} ${card.borderColor || ''} rounded-2xl shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300`}
            >
              <div className={`p-8 ${card.textColor || 'text-white'}`}>
                <div className="flex items-center space-x-4">
                  <div className="text-5xl">{card.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{card.title}</h3>
                    <p className={`text-sm ${card.textColor ? 'text-gray-600' : 'text-blue-100'}`}>
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinanceCards;
