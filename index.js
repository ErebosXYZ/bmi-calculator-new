// ¡Buena suerte!
/**Queremos implementar una app que calcule el ídnice de masa corporal (IMC). Aunque ya sabemos que por si solo este índice no es un valor significativo y determinante

Introduce la altura en cm
Introduce el peso en kg
Al hacer clic en Compute BMI debe aparecer el IMC
También debería indicar mediante un mensaje de texto si es un peso normal según este baremo
Menos de 18.5 → Bajo peso
18.5 - 24.9 → Peso normal
25 - 29.9 → Sobrepeso
30 o más → Obesidad

BONUS: Redondea a dos decimales el IMC */



// Creem la variable del botó i de weightCondition:
let btn = document.querySelector("#btn");
let weightCondition = document.querySelector("#weight-condition");

// la fórmula para el IMC es el peso en kilogramos dividido por la estatura en metros cuadrados.

btn.addEventListener("click", function () {
    // Creem les variables que guarden els valors de height i weight

    let height = document.querySelector("#height").value;
    let weight = document.querySelector("#weight").value;

    // Apliquem la formula de l'índex de massa corporal a aquests dos valors 
    let bmiValue = weight / (height / 100)**2;
    console.log(bmiValue);

    // Fem que aquest valor s'arrodoneixi a 2 decimals
    bmiValue = bmiValue.toFixed(2);
    // Assignem el resultat al valor de l'input bmi result perquè es mostri en pantalla
    document.querySelector("#bmi-result").value = bmiValue;

    // Creem una estructura condicional que contempli els 4 rangs de pes (Si és menor a 18.5 es mostrarà low weight però si és major a això però menor a 24.9 serà normal weight and so on...)
    if (bmiValue < 18.5) {
        weightCondition.textContent = "Low weight";
    } else if (bmiValue < 24.9) {
        weightCondition.textContent = "Normal weight";
    } else if (bmiValue < 29.9) {
        weightCondition.textContent ="Overweight";
    } else {
        weightCondition.textContent = "Obese";
    }

})
