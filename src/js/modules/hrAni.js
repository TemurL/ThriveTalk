export const nav = document.querySelectorAll('nav li');

export const hrAni = () => {
    nav.forEach((li) => {
        let hr = li.children[1];
        li.addEventListener('click', () => {
            nav.forEach((li) => {
                let hr = li.children[1];
                hr.style.width = '';
            })
            hr.style.width = '120%';
        })
    })
}