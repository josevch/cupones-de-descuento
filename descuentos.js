//const precioOriginal = 100;
//const descuento = 15;

const coupons = [
    "ATL",
    "AXM",
    "PTY",
];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;

}

function onClickbtnPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const InputCupon = document.getElementById("InputCupon");
    const couponValue = InputCupon.value;

    let descuento;
    switch (couponValue) {
        case coupons[0]: // "ATL"
            descuento = 15;
            break;
        case coupons[1]: // "AXM"
            descuento = 30;
            break;
        case coupons[2]: // "PTY"
            descuento = 25;
            break;
    }



    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    const resultP = document.getElementById("ResultP")
    resultP.innerText = "El precio con descuento son $" + precioConDescuento
}


console.log(
    {
        precioOriginal,
        descuento,
        porcentajePrecioConDescuento,
        precioConDescuento,
    });