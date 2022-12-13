export default function getSelect(className) {
    const element = document.querySelector(`.${className}`);
    const choices = new Choices(element, {
        loadingText: 'Загрузка...',
        noResultsText: 'Не найден результат',
        noChoicesText: 'Нет выбора',
        itemSelectText: '',
        position: 'bottom',
        placeholder: false
    });

    return choices

}