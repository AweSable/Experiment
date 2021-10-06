const pictureInnerContainer = document.querySelector('.picture-inner-container');
const paths=[`<img class="gallery-pic" src="assets/img/gallery/galery1.jpg" alt ="gallery1">`,
 `<img class="gallery-pic" src="assets/img/gallery/galery2.jpg" alt ="gallery2">`,
 `<img class="gallery-pic" src="assets/img/gallery/galery3.jpg "alt ="gallery3">`,
 `<img class="gallery-pic" src="assets/img/gallery/galery4.jpg" alt ="gallery4">`,
 `<img class="gallery-pic" src="assets/img/gallery/galery5.jpg" alt ="gallery5">`,
 `<img class="gallery-pic" src="assets/img/gallery/galery6.jpg" alt ="gallery6">`,
 `<img class="gallery-pic" src="assets/img/gallery/galery7.jpg" alt ="gallery7">`,
 `<img class="gallery-pic" src="assets/img/gallery/galery8.jpg" alt ="gallery8">`,
 `<img class="gallery-pic" src="assets/img/gallery/galery9.jpg" alt ="gallery9">`,
 `<img class="gallery-pic" src="assets/img/gallery/galery10.jpg" alt ="gallery10">`,
 `<img class="gallery-pic" src="assets/img/gallery/galery11.jpg" alt ="gallery11">`,
 `<img class="gallery-pic" src="assets/img/gallery/galery12.jpg" alt ="gallery12">`,
 `<img class="gallery-pic" src="assets/img/gallery/galery13.jpg" alt ="gallery13">`,
 `<img class="gallery-pic" src="assets/img/gallery/galery14.jpg" alt ="gallery14">`,
 `<img class="gallery-pic" src="assets/img/gallery/galery15.jpg" alt ="gallery15">`];
shuffle(paths);
function shuffle(array){
	const len=array.length;
	for (let i=0; i<len; i++){
		let j=Math.floor(Math.random()*10);
		[array[i], array[j]] = [array[j], array[i]]
	}
}
const l=paths.length;
for (let i=0; i<l; i++){
	pictureInnerContainer.innerHTML+=paths[i];
}
const progress = document.querySelector('.progress');
  
progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
})

const volume_level = document.querySelector('.volume_level');
  
volume_level.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
})
const mark = `Ваша оценка - 110 баллов
Отзыв по пунктам ТЗ:
Не выполненные/не засчитанные пункты:

Форма покупки билетов
1. форма плавно выдвигается слева при открытии и плавно возвращается назад при закрытии.
feedback: Отсутствует форма покупки билетов.
2. форма открывается при клике по кнопке Buy Now в секции Tickets.
feedback: Отсутствует форма покупки билетов.
3. при вёрстке формы используются следующие элементы: form, input ...
feedback: Отсутствует форма покупки билетов.
4. вёрстка формы соответствует макету
feedback: Отсутствует форма покупки билетов.

Интерактивность, реализуемая через css
5. изменение стиля интерактивных элементов при наведении и клике. Интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты – изменение цвета фона или шрифта, появление подчёркивания и т.д. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили, если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета
feedback: интерактивны только радио кнопки в разделе покупки билетов
6. обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы
feedback: требование выполнено только для радио кнопок в разделе покупки билетов

Интерактивность, реализуемая через js
7. кнопке "Book" в форме покупки билетов добавлен ripple-эффект. Демо: https://50projects50days.com/projects/button-ripple-effect/

Частично выполненные пункты:

1. тринадцать кнопок button (четыре из них в секции Video, пять в секции Tickets, по две - стрелки слайдера и плейлиста)
feedback: Нет большой кнопки Play на макете видеоплеера

Выполненные пункты:

1. Вёрстка валидная. Для проверки валидности вёрстки используйте сервис https://validator.w3.org/. Валидной вёрстке соответствует надпись "Document checking completed. No errors or warnings to show."

Вёрстка семантическая
2. header, main, footer
3. семь элементов section (по количеству секций)
4. только один заголовок h1
5. семь заголовков h2 (по количеству секций)
6. шесть заголовков h3 (по количеству карточек)
7. два элемента nav (основная и вспомогательная панель навигации)
8. три списка ul > li > a (основная и вспомогательная панель навигации, ссылки на соцсети)
9. три тега input type="radio" (в секции Tickets)
10. два тега input type="number"(в секции Tickets)
11. два тега input type="range" (громкось и прогрес-бар видео)
12. для всех элементов img указан обязательный атрибут alt

Соответствие макету
13. блок header
14. секция Welcome
15. секция Visiting
16. секция Explore
17. секция Video
18. секция Gallery
19. секция Tickets
20. секция Contacts
21. блок footer

Требования к css
22. добавлен favicon
23. для построения сетки используются флексы или гриды
24. при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону
25. фоновый цвет каждого блока и секции тянется на всю ширину страницы
26. иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления
27. расстояние между буквами, там, где это требуется по макету, регулируется css-свойством letter-spacing
28. переключаются радиокнопки в блоке Tickets, одновременно может быть выбрана только одна кнопка
29. в блоке Contacts правильно указанны ссылки на почту mailto и на телефон tel
30. в футере добавлены ссылки на соцсети. Круглая граница вокруг иконок соцсетей выполнена при помощи css

Интерактивность, реализуемая через css
31. плавная прокрутка по якорям
32. параллакс
33. при кликам по кнопке Discover the Louvre и карточкам секции Visiting открываются полноэкранные панорамы Google Street View встроенные в страницы вашего сайта при помощи iframe
34. интерактивность при наведении карточек в секции Visiting предусматривает плавное растягивание подчёркивания заголовка карточки на всю ширину карточки
35. интерактивность при наведении иконок социальных сетей в футере предусматривает изменение цвета иконки и круглой границы вокруг иконки на золотистый

Интерактивность, реализуемая через js
36. можно передвигать ползунки громкости и прогресс-бара видео, при этом цвет шкалы до и после ползунка отличается и соответствует макету
37. кликами по кнопкам + и - в секции Tiskets можно менять количество билетов Basic и Senior от 0 до 20
38. при перезагрузке (обновлении) страницы картины в блоке Galery отображаются в рандомном порядке`

console.log(mark)