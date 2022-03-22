
dropdownBtns = document.querySelectorAll(".menu__arrow-img");

dropdownBtns.forEach(tab =>{
	tab.addEventListener( "click", () => {
		tab.classList.toggle('rotate-arrow');
	});
});

$(function(){
	//2. Получить элемент, к которому необходимо добавить маску
	$("#date").mask("99.99.9999", {placeholder: "ДД.ММ.ГГГГ" });
  });
