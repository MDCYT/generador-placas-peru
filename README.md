# PlacaGen PE

Generador visual de placas peruanas en HTML, CSS y Canvas. Es un proyecto educativo/recreativo inspirado en el Sistema Integral de Identificacion Vehicular y en las referencias visuales de placas.pe.

## Que incluye

- Render de placas con bandera, texto PERU, holograma, ranuras y proporciones mas cercanas a placas reales.
- Placas de vehiculos menores con formato mas cuadrado, holograma, QR y codigo de seguridad.
- Tipos ordinarios: particular, taxi, transporte urbano, interprovincial, turismo, carga, remolque, motocicleta y mototaxi.
- Tipos especiales: policia, emergencia, gubernamental, diplomatico, exhibicion, rotativa y temporal.
- La letra inicial `E` de placas especiales se dibuja mas pequena, por ejemplo `EZA-123`.
- Modo `Personalizada` con colores editables para fondo, texto, borde y franja superior.
- Generacion aleatoria, ingreso manual de codigo, descarga PNG y copia al portapapeles.
- Generacion multiple de placas por lote.
- Exportacion JSON (`placagen-pe/v1`) para reutilizar la configuracion en otros programas.

## Uso

Abre `index.html` directamente en el navegador o levanta un servidor local:

```bash
python -m http.server 4177
```

Luego entra a:

```text
http://127.0.0.1:4177
```

## Formatos

```text
Livianos / pesados: ABC-123
Vehiculos menores: AB-1234
Especiales:         EZA-123
```

## Archivos

```text
index.html  - estructura de la app
style.css   - interfaz y layout responsive
plates.js   - catalogo, generacion y render Canvas
```

## Aviso

Las placas generadas son imagenes ficticias. No representan documentos oficiales ni reemplazan placas emitidas por la autoridad correspondiente.
