function actualizarTotalGeneral() {
  const filas = document.querySelectorAll("tbody tr");
  let totalGeneral = 0;

  filas.forEach((fila) => {
    const precioUnitario = parseFloat(
      fila.querySelector(".precio .actual").textContent.replace(/[^\d,]/g, "").replace(",", ".")
    );
    const cantidad = parseInt(fila.querySelector(".cantidad input").value);
    const totalProducto = precioUnitario * cantidad;

    fila.querySelector(".total").textContent = `$${totalProducto.toLocaleString("es-CO", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })}`;

    totalGeneral += totalProducto;
  });

  document.getElementById("totalGeneral").textContent = totalGeneral.toLocaleString("es-CO", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

// Botones + y -
document.querySelectorAll(".btn-mas, .btn-menos").forEach((boton) => {
  boton.addEventListener("click", function () {
    const input = this.parentNode.querySelector("input");
    let valor = parseInt(input.value);

    if (this.classList.contains("btn-mas")) {
      valor++;
    } else if (valor > 1) {
      valor--;
    }

    input.value = valor;
    actualizarTotalGeneral();
  });
});

// Eliminación de producto
document.querySelectorAll(".btn-eliminar").forEach((boton) => {
  boton.addEventListener("click", function () {
    const fila = this.closest("tr");
    fila.remove();
    actualizarTotalGeneral();
  });
});

// Simulación de compra
document.getElementById("finalizarCompra").addEventListener("click", function () {
  alert("¡Gracias por tu compra!");
});
