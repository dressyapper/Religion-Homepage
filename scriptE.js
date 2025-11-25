let text = {
    star: "Leonhard euler is a star because he gave such a great legacy to most of the branches of mathematics. This include topology, calculus, geometry, graph theory and number theory. He made a few constants for math which ended up being very important for many mathematical functions. This made him a star throughout the community of mathematicians, making himself one of the most popular and well known mathematicians to live. ",    
    accomplishments: "He was most known for his constant 'e' also known as euler's number which is equal to 2.718... which is similar to pi as it is a transcendental number. This also means that he is the reason that many high level mathematical functions and graphing things exist. Functions that use his number are: natural logarithms, Lambert W function, The exponential function (e^x), and he also made euler's constant which is equal to 0.57721... He also popularized the usage of i for the imaginary unit, the usage of the sum symbol for summation in math, a triangle for finite differences and he popularized using the famous symbol for pi (3.14159265358979...) He also made the equation e^(i*pi) + 1 = 0 which is known as euler's identity (or euler's equation) and created the idea of functions.",
    life: "Leonhard Euler was born on the 15th of April 1707 in Basel, Switzerland and he passed away on the 18th September 1783 at age 76 in saint Petersburg in Russia. He created his most popular invention in 1727 or 1728. He had an IQ of around 190. He attended The University of Basel in 1720. In 1733, he married Katharina Gsell and gave birth to Charlotte Euler, Johann Euler, Christof Euler, Carl Euler, Karl Euler and Helene Euler. His parents were Marguerite Brucker and Paul Euler. He then went blind in 1738, he also lost vision in his left eye in 1766 because of a cataract. He's personality was a generous and kind person. ",
    quotes: '"Nothing takes place in the world whose meaning is not that of some maximum or minimum."\n\n"Mathematicians have tried in vain to this day to discover some order in the sequence of prime numbers, and we have reason to believe that it is a mystery into which the human mind will never penetrate."\n\n"Logic is the foundation of the certainty of all the knowledge we acquire."\n\n"The kind of knowledge which is supported only by observations and is not yet proved must be carefully distinguished from the truth; it is gained by induction, as we usually say. Yet we have seen cases in which mere induction led to error."\n\n',
    facts: "Euler's number is infinite because it includes an infinite sum of numbers.\n\nEuler made over 850 papers and books during his life, and because of this he has left a great legacy of math for society. His work can fill over 70 volumes of work.\n\nHe went to university at the age of 13 and got his bachelor degree in 16.\n\nHe made a lot of the foundations for calculus and was involved in the creation of topology\n\nHe died of a brain hemorrhage after talking about Uranus (which was newly discovered at the time) with Anders Johan Lexell.\n\n",
    euler: "I have chosen Leonhard Euler because his mathematical accomplishments personally interest me. What I've learnt is that Leonhard Euler has made more inventions than just his number (which is equal to 2.718...) he has also been involved in topology, calculus, geometry, graph theory, number theory, science, physics, music, and even more subjects. I have also slightly learnt about Euler's branch of mathematics, especially with sums and products. I've also learnt that he was a poly mathematician born on the 15th of April 1707 in Basel, Switzerland and he passed away on the 18th September 1783 at age 76 in Saint Petersburg in Russia. His kids were Charlotte Euler, Johann Euler, Christof Euler, Carl Euler, Karl Euler, Helene Euler and he had 2 wives, Katharina Gsell and her sister Salome Abigail Gsell. He lived for 76 years while accomplishing many mathematical achievements that contributed massively to numerous branches of mathematics and science. His first major mathematical contribution was the creation of graph theory and topology, specifically the seven bridges of Konigsberg. The seven bridges of Konigsberg is a problem where you have to cross all seven bridges and return to your starting point. Using the eulerian path, Euler declared that it was not possible to achieve this. The solution ended up being the first theorem of graph theory and one of euler's earliest contributions. This marked the beginning of his contributions that spreaded to almost every branch of mathematics."   
}

let titles = {
    star: "Why he is a star",
    accomplishments: "His accomplishments",
    life: "Life",
    quotes: "Euler quotes",
    facts: "Euler facts",
    euler: "Euler",
}
let currenttab = "star"



function tabchange(tab) {
    currenttab = tab
    document.getElementById("title").innerText = titles[tab]
    document.getElementById("description").innerText = text[tab]

}



tabchange("euler")
document.getElementById("tab-star").addEventListener("click", function() {tabchange("star")})
document.getElementById("tab-accomp").addEventListener("click", function() {tabchange("accomplishments")})
document.getElementById("tab-life").addEventListener("click", function() {tabchange("life")})
document.getElementById("tab-quotes").addEventListener("click", function() {tabchange("quotes")})
document.getElementById("tab-facts").addEventListener("click", function() {tabchange("facts")})
document.getElementById("tab-euler").addEventListener("click", function() {tabchange("euler")})


document.getElementById("tab-star").addEventListener("mouseenter", function() {
    document.getElementById("tab-star").style.animationName = "hover"
    document.getElementById("tab-star").style.animationDuration = "500ms"
    document.getElementById("tab-star").style.animationFillMode = "forwards"
})

document.getElementById("tab-star").addEventListener("mouseout", function() {
    document.getElementById("tab-star").style.animationName = "unhover"
    document.getElementById("tab-star").style.animationDuration = "500ms"
    document.getElementById("tab-star").style.animationFillMode = "forwards"
})

document.getElementById("tab-accomp").addEventListener("mouseenter", function() {
    document.getElementById("tab-accomp").style.animationName = "hover"
    document.getElementById("tab-accomp").style.animationDuration = "500ms"
    document.getElementById("tab-accomp").style.animationFillMode = "forwards"
})

document.getElementById("tab-accomp").addEventListener("mouseout", function() {
    document.getElementById("tab-accomp").style.animationName = "unhover"
    document.getElementById("tab-accomp").style.animationDuration = "500ms"
    document.getElementById("tab-accomp").style.animationFillMode = "forwards"
})

document.getElementById("tab-life").addEventListener("mouseenter", function() {
    document.getElementById("tab-life").style.animationName = "hover"
    document.getElementById("tab-life").style.animationDuration = "500ms"
    document.getElementById("tab-life").style.animationFillMode = "forwards"
})

document.getElementById("tab-life").addEventListener("mouseout", function() {
    document.getElementById("tab-life").style.animationName = "unhover"
    document.getElementById("tab-life").style.animationDuration = "500ms"
    document.getElementById("tab-life").style.animationFillMode = "forwards"
})

document.getElementById("tab-quotes").addEventListener("mouseenter", function() {
    document.getElementById("tab-quotes").style.animationName = "hover"
    document.getElementById("tab-quotes").style.animationDuration = "500ms"
    document.getElementById("tab-quotes").style.animationFillMode = "forwards"
})

document.getElementById("tab-quotes").addEventListener("mouseout", function() {
    document.getElementById("tab-quotes").style.animationName = "unhover"
    document.getElementById("tab-quotes").style.animationDuration = "500ms"
    document.getElementById("tab-quotes").style.animationFillMode = "forwards"
})

document.getElementById("tab-facts").addEventListener("mouseenter", function() {
    document.getElementById("tab-facts").style.animationName = "hover"
    document.getElementById("tab-facts").style.animationDuration = "500ms"
    document.getElementById("tab-facts").style.animationFillMode = "forwards"
})

document.getElementById("tab-facts").addEventListener("mouseout", function() {
    document.getElementById("tab-facts").style.animationName = "unhover"
    document.getElementById("tab-facts").style.animationDuration = "500ms"
    document.getElementById("tab-facts").style.animationFillMode = "forwards"
})

document.getElementById("tab-euler").addEventListener("mouseenter", function() {
    document.getElementById("tab-euler").style.animationName = "hover"
    document.getElementById("tab-euler").style.animationDuration = "500ms"
    document.getElementById("tab-euler").style.animationFillMode = "forwards"
})

document.getElementById("tab-euler").addEventListener("mouseout", function() {
    document.getElementById("tab-euler").style.animationName = "unhover"
    document.getElementById("tab-euler").style.animationDuration = "500ms"
    document.getElementById("tab-euler").style.animationFillMode = "forwards"
})