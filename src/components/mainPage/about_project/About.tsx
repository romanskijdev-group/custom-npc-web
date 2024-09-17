export const About = () => {
    return(
        <div className='sm:max-w-screen-xl w-[90%] mx-auto mt-[150px] border dark:border-gray-500 rounded-lg p-4' id='about' data-aos='fade-up'>
            <div className='flex flex-col gap-[8px] dark:text-gray-300 text-gray-700'>
                <h1 className='dark:text-gray-200 text-center text-xl sm:text-3xl'>Что это за проект?</h1>
                <h2 className='dark:text-gray-300 text-gray-700'> Устали от скучных NPC на серверах Minecraft? Создайте свой мир полный приключений!</h2>
                <p className='dark:text-gray-300 text-gray-700'>Добро пожаловать на QuestHolder — платформу для совместного создания увлекательных квестов для CustomNPC в Minecraft!</p>
                <p className='dark:text-gray-300 text-gray-700'>👑 Превращайте бездушных болванчиков в харизматичных героев.
                Добавляте им уникальные диалоги, прописывайте ветвящиеся сюжетные линии и создавайте свой уникальный сюжет.</p>
                <p className='dark:text-gray-300 text-gray-700'>🚀 Воплощайте в жизнь все самые невероятные идеи!
                От запутанных сюжетов до эпических похождений — на QuestHolder имеются все нужные инструменты для создания неповторимого игрового опыта.</p>
                <p className='dark:text-gray-300 text-gray-700'>🤝 Творите вместе с друзьями!
                Приглашайте единомышленников, работайте над квестами совместно с командой и делитесь своими творениями с сообществом!</p>

                <p>QuestHolder предлагает Вам:
                <li>Удобный визуальный редактор для создания диалогов и квестов без необходимости программирования.</li>
                <li>Библиотеку готовых ресурсов: персонажей, предметов, локаций и механик, которые ты можешь использовать в своих проектах.</li>
                <li>Возможность импорта и экспорта квестов для легкого обмена с другими пользователями.</li>
                <li>Активное и дружелюбное сообщество, готовое помочь советом и поделиться опытом.</li></p>
                <p>Превратите свой Minecraft сервер в мир захватывающих дух историй! Зарегистрируйтесь на QuestHolder и начни создавать свои квесты уже сегодня!</p>
            </div>
        </div>

    )
}