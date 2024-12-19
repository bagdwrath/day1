var inputs = document.querySelectorAll('.controls input');
// console.log(inputs)

function handleEvents(){
    // console.log(this.value);
    const suffix = this.dataset.sizing || '';
    // console.log(suffix);
    document.documentElement.style.setProperty(`--${this.name}` , this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change' , handleEvents));
inputs.forEach(input => input.addEventListener('mousemove' , handleEvents));