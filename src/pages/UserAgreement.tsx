import { useState } from "react";

const UserAgreement = () => {
  const [selectedAgreement, setSelectedAgreement] = useState(0);
  const agreements = [
  {
    id: 1,
    title: "Финансовая политика",
    content: "ni",
  },
  {
    id: 2,
    title: "Политика конфиденциальности",
    content: "gg",
  },
  {
    id: 3,
    title: "Политика безопасности",
    content: "eer",
  },
];
  const handleAgreementSelect = (id: number) => {
    setSelectedAgreement(agreements.find((agreement) => agreement.id == id));
  };

  return (
    <div className="flex flex-col h-[100vh] bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col flex-1">
        <header className="bg-white dark:bg-gray-900">
          <div className="container mx-auto py-4 px-6">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
              Пользовательское соглашение
            </h1>
          </div>
        </header>

        <div className="container mx-auto py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="sticky top-16 w-48">
              <nav className="flex flex-col gap-5 rounded-lg p-4 bg-white">
                {agreements.map((agreement) => (
                  <a
                    key={agreement.id}
                    className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-200 duration-300"
                    onClick={() => handleAgreementSelect(agreement.id)}>{agreement.title}
                  </a>
                ))}
              </nav>
            </div>

            <div className="col-span-2">
              {selectedAgreement && (
                <div className="prose dark:prose-invert max-w-none rounded-lg bg-white dark:bg-gray-800 p-4 shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    {selectedAgreement.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    {selectedAgreement.content}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAgreement;
