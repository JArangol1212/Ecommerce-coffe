export function formatPrice(price: number) {
      const priceFormat = new Intl.NumberFormat("es-PE", {
        style: "currency",
        currency: "PEN",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(price);
    
      // Reemplaza "PEN" por una cadena vacía y limpia los espacios innecesarios
      return priceFormat.replace("PEN", "").trim();
    }
    