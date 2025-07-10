import React from "react";

// Mock data
const balance = 1200.50; // USDT
const tokens = [
  {
    id: 1,
    name: "Lionel Messi",
    image: "/personnage/blaise.jpeg",
    quantity: 3,
    value: 450, // USDT
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    image: "/personnage/nouh.jpeg",
    quantity: 2,
    value: 320,
  },
];
const history = [
  { id: 1, type: "Achat", token: "Lionel Messi", amount: 2, price: 300, date: "2024-05-01" },
  { id: 2, type: "Vente", token: "Cristiano Ronaldo", amount: 1, price: 160, date: "2024-05-03" },
  { id: 3, type: "Achat", token: "Cristiano Ronaldo", amount: 2, price: 320, date: "2024-04-28" },
  { id: 4, type: "Achat", token: "Lionel Messi", amount: 1, price: 150, date: "2024-04-20" },
];

export default function WalletPage() {
  return (
    <main className="min-h-screen w-full py-20 px-2 md:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="mx-auto space-y-14">

        {/* Balance */}
        <section
          aria-labelledby="wallet-balance"
          className="bg-white rounded-3xl shadow-xl p-10 flex flex-col md:flex-row items-center gap-10 md:gap-16 border border-blue-100"
        >
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h2 id="wallet-balance" className="text-gray-500 text-base font-medium mb-2">
              Solde disponible
            </h2>
            <div className="flex items-end gap-2">
              <span className="text-5xl md:text-6xl font-extrabold text-blue-700 tabular-nums">
                {balance.toLocaleString()}
              </span>
              <span className="text-2xl font-semibold text-gray-700 mb-1">USDT</span>
            </div>
            <div className="mt-2 text-gray-400 text-sm">
              Gérer vos fonds pour acheter ou vendre des tokens.
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <button
              className="bg-blue-600 hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-400 focus:outline-none text-white px-10 py-3 rounded-xl font-bold text-lg shadow transition"
              aria-label="Déposer des fonds"
            >
              Déposer
            </button>
            <button
              className="bg-white border border-blue-600 text-blue-700 hover:bg-blue-50 focus-visible:ring-2 focus-visible:ring-blue-400 focus:outline-none px-10 py-3 rounded-xl font-bold text-lg shadow transition"
              aria-label="Retirer des fonds"
            >
              Retirer
            </button>
          </div>
        </section>

        {/* Tokens détenus */}
        <section aria-labelledby="wallet-tokens">
          <h2 id="wallet-tokens" className="text-2xl font-extrabold mb-6 text-gray-900">
            Mes tokens
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tokens.map(token => (
              <article
                key={token.id}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center gap-4 border border-gray-100"
                aria-label={`Token ${token.name}`}
              >
                <img
                  src={token.image}
                  alt={`Portrait de ${token.name}`}
                  className="w-24 h-24 object-cover rounded-xl border-2 border-blue-200 shadow"
                  loading="lazy"
                />
                <div className="w-full flex flex-col items-center">
                  <div className="font-bold text-lg text-gray-900">{token.name}</div>
                  <div className="text-gray-500 text-sm mt-1">
                    Quantité :{" "}
                    <span className="font-semibold text-gray-700">{token.quantity}</span>
                  </div>
                  <div className="text-gray-500 text-sm">
                    Valeur estimée :{" "}
                    <span className="font-semibold text-blue-700">{token.value} USDT</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Historique */}
        <section aria-labelledby="wallet-history">
          <h2 id="wallet-history" className="text-2xl font-extrabold mb-6 text-gray-900">
            Historique
          </h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-x-auto border border-gray-100">
            <table className="min-w-full text-base">
              <caption className="sr-only">Historique des transactions</caption>
              <thead>
                <tr className="text-gray-500 border-b">
                  <th scope="col" className="px-6 py-4 text-left font-semibold">Date</th>
                  <th scope="col" className="px-6 py-4 text-left font-semibold">Type</th>
                  <th scope="col" className="px-6 py-4 text-left font-semibold">Token</th>
                  <th scope="col" className="px-6 py-4 text-left font-semibold">Quantité</th>
                  <th scope="col" className="px-6 py-4 text-left font-semibold">Montant (USDT)</th>
                </tr>
              </thead>
              <tbody>
                {history.map(item => (
                  <tr key={item.id} className="border-b last:border-0 hover:bg-blue-50/30 transition">
                    <td className="px-6 py-3 whitespace-nowrap">{item.date}</td>
                    <td
                      className={
                        "px-6 py-3 font-bold " +
                        (item.type === "Achat"
                          ? "text-green-600"
                          : "text-red-500")
                      }
                    >
                      {item.type}
                    </td>
                    <td className="px-6 py-3">{item.token}</td>
                    <td className="px-6 py-3">{item.amount}</td>
                    <td className="px-6 py-3">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
} 