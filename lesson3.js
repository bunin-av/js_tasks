const sm = document.getElementById('small')

const newDiv = document.createElement('div')
sm.append(newDiv)

newDiv.style.height = '50px'
newDiv.style.backgroundColor = 'black'
// newDiv.style.display = 'none'


// let elem = document.querySelector('#elem');
// elem.style.cssText = 'color: red; font-size: 40px;';
// newDiv.style.cssText = 'background: red;'


function onClickHandler(e) {
    e.stopPropagation()
    if (e.target.tagName === 'BUTTON'){
        console.log(e.target.name)
    }

}

// function onClickHandler(e) {
//     e.stopPropagation()
//     console.log(e.currentTarget)
// }

sm.onclick = onClickHandler

document.body.onclick = () => alert('yo')

