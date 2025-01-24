import configs from "../configs/env";

export const Services = async (body = "", url, method = "POST") => {
    const requestInit = {
        method: method, 
        headers: { "Content-Type": "application/json" },
    };

    // Agregar `body` solo si el método lo requiere (POST, PUT, DELETE)
    if (method !== "GET") {
        requestInit.body = JSON.stringify(body);
    }

    console.log(`${configs.server.url}${url}`, requestInit);

    try {
        const response = await fetch(`${configs.server.url}${url}`, requestInit);

        // Verifica si la respuesta HTTP es válida
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        // Verifica que la respuesta sea de tipo JSON antes de procesarla
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            const jsonResponse = await response.json();
            return jsonResponse;
        } else {
            throw new Error("La respuesta no es un JSON válido");
        }
    } catch (error) {
        console.error("Error en la solicitud:", error);
        return { status: false, message: error.message || "Error desconocido" };
    }
};