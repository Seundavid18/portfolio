window.addEventListener('load', () => {
    let progressBars = document.getElementById('.progress')
    let values = [
        '90%',
        '85%',
        '80%',
        '85%',
        '70%',
        '72%',
        '75%'
    ];
    progressBars.forEach((progress, index) => {
        progress.style.width = values[index]
    })
})

