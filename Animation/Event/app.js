// function submit() {
//     var submit = document.getElementById('submit')
//     var first_name = document.getElementById('first_name')
//     var last_name = document.getElementById('last_name')
//     var heading = document.getElementById('heading')
//     heading.innerHTML = `${first_name.value} ${last_name.value}`
//     heading.style.fontFamily = 'Arial'
// }



// document.getElementById()

function expandText() {
    var shortText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    var text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit ex totam ipsa optio aspernatur doloribus ullam,voluptates maxime, adipisci eligendi expedita et, facere nulla perspiciatis reiciendis quos distinctio repudiandae ? '
    var para = document.getElementById('para')
    var link = document.getElementById('link')

    if (link.innerHTML === 'See More') {
        para.innerHTML = text
        link.innerHTML = 'See Less'
    } else {
        para.innerHTML = shortText
        link.innerHTML = 'See More'
    }
}