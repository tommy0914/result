function calculate(){
    const a = document.getElementById("assignment").value
    const b = document.getElementById("test").value
     const   c = parseInt(a) + parseInt(b)
    document.getElementById("ca test").value = c;
  const d = document.getElementById("exam").value
    const e = parseInt(c) + parseInt(d)
    document.getElementById("total").value = e ; 
    
    if (e > 50) {
        remarks = 'good';
    }else if (e > 60) {
        remarks = 'very good';
    } else if (e > 70) {
        remarks = 'execellent'
    }
    document.getElementById("remarks")

}


// document.querySelector('body').addEventListener('onload', (e) => {
//     alert('Hello');
// })