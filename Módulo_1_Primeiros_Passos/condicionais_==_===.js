
// "==" faz uma verificação superficial não levando en consideração o tipo
let idade = "20"; // string

if (idade == 20/*Number*/)  {
    console.log("Você tem 20 anos");
};

// "===" faz um comparação estrita ou seija leva em consideração o tipo
if ( idade === 20 /*Number*/) {
    console.log("Nao vou aparecer");
} else {
    console.log("Vou apraccer por causa do ===")
}